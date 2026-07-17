import SwiftUI

private let ink = Color(red: 16/255, green: 21/255, blue: 28/255)
private let paper = Color(red: 245/255, green: 240/255, blue: 231/255)
private let civicRed = Color(red: 181/255, green: 43/255, blue: 36/255)
private let navy = Color(red: 25/255, green: 49/255, blue: 72/255)
private let gold = Color(red: 188/255, green: 141/255, blue: 63/255)

struct RootView: View {
    @EnvironmentObject private var store: ContentStore

    var body: some View {
        Group {
            if let content = store.content {
                TabView {
                    NavigationStack { HomeView(content: content) }
                        .tabItem { Label("Home", systemImage: "house") }
                    NavigationStack { PrinciplesView(principles: content.principles) }
                        .tabItem { Label("Principles", systemImage: "text.book.closed") }
                    NavigationStack { PlatformView(platform: content.platform) }
                        .tabItem { Label("Platform", systemImage: "questionmark.bubble") }
                    NavigationStack { EvidenceListView(eboxes: content.eboxes) }
                        .tabItem { Label("Evidence", systemImage: "archivebox") }
                    NavigationStack { SavedView(eboxes: content.eboxes) }
                        .tabItem { Label("Saved", systemImage: "bookmark") }
                }
                .tint(civicRed)
            } else if let error = store.loadError {
                ContentUnavailableView("Content unavailable", systemImage: "exclamationmark.triangle", description: Text(error))
            } else {
                ProgressView("Loading RINO")
            }
        }
        .preferredColorScheme(.light)
    }
}

struct HomeView: View {
    let content: PublicContent

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 24) {
                Text("PRIVATE WORKING PREVIEW")
                    .font(.caption2.bold()).tracking(1.4)
                    .padding(.horizontal, 10).padding(.vertical, 6)
                    .background(gold)
                Text("RINO").font(.system(size: 58, weight: .black, design: .serif)).tracking(5)
                Text(content.project.tagline)
                    .font(.system(.largeTitle, design: .serif)).foregroundStyle(civicRed)
                Text(content.project.statusSummary).foregroundStyle(.secondary)
                Divider().overlay(ink)
                Text("Working principles").font(.headline).textCase(.uppercase).tracking(1)
                ForEach(content.principles.prefix(3)) { principle in
                    VStack(alignment: .leading, spacing: 6) {
                        Text("\(principle.number) / \(principle.title)").font(.headline)
                        Text(principle.summary).foregroundStyle(.secondary)
                    }
                    .padding(.vertical, 8)
                }
                if let update = content.updates.first {
                    VStack(alignment: .leading, spacing: 8) {
                        Text(update.type).font(.caption.bold()).tracking(1).foregroundStyle(gold)
                        Text(update.title).font(.title2.bold())
                        Text(update.summary).foregroundStyle(.white.opacity(0.8))
                    }
                    .padding(20).background(navy).foregroundStyle(.white)
                }
            }
            .padding(20)
        }
        .background(paper)
        .navigationTitle("Home")
    }
}

struct PrinciplesView: View {
    let principles: [Principle]

    var body: some View {
        List(principles) { principle in
            VStack(alignment: .leading, spacing: 8) {
                Text(principle.number).font(.caption.bold()).foregroundStyle(civicRed)
                Text(principle.title).font(.system(.title2, design: .serif).bold())
                Text(principle.summary).foregroundStyle(.secondary)
            }
            .padding(.vertical, 10)
            .listRowBackground(paper)
        }
        .scrollContentBackground(.hidden).background(paper)
        .navigationTitle("Principles")
    }
}

struct PlatformView: View {
    let platform: Platform

    var body: some View {
        List {
            Section {
                Text(platform.summary).foregroundStyle(.secondary)
            } header: {
                Text(platform.status).foregroundStyle(civicRed)
            }
            ForEach(platform.issueLabs) { lab in
                VStack(alignment: .leading, spacing: 8) {
                    Text(lab.stage).font(.caption.bold()).tracking(1).foregroundStyle(civicRed)
                    Text(lab.title).font(.system(.title2, design: .serif).bold())
                    Text(lab.question)
                    Text("No position adopted").font(.caption).foregroundStyle(.secondary)
                }
                .padding(.vertical, 10)
                .listRowBackground(paper)
            }
        }
        .scrollContentBackground(.hidden).background(paper)
        .navigationTitle("Platform lab")
    }
}

struct EvidenceListView: View {
    let eboxes: [EvidenceBox]
    @State private var search = ""
    @State private var category = "All"

    private var categories: [String] { ["All"] + Array(Set(eboxes.map(\.category))).sorted() }
    private var filtered: [EvidenceBox] {
        eboxes.filter { ebox in
            (category == "All" || ebox.category == category) &&
            (search.isEmpty || ebox.title.localizedCaseInsensitiveContains(search) || ebox.tags.joined(separator: " ").localizedCaseInsensitiveContains(search))
        }
    }

    var body: some View {
        List {
            Picker("Category", selection: $category) {
                ForEach(categories, id: \.self) { Text($0).tag($0) }
            }
            ForEach(filtered) { ebox in
                NavigationLink(value: ebox.id) { EvidenceRow(ebox: ebox) }
                    .listRowBackground(paper)
            }
        }
        .searchable(text: $search, prompt: "Search records and tags")
        .navigationDestination(for: String.self) { id in
            if let ebox = eboxes.first(where: { $0.id == id }) { EvidenceDetailView(ebox: ebox) }
        }
        .scrollContentBackground(.hidden).background(paper)
        .navigationTitle("Evidence")
    }
}

struct EvidenceRow: View {
    let ebox: EvidenceBox

    var body: some View {
        VStack(alignment: .leading, spacing: 7) {
            Text(ebox.claimStatus).font(.caption2.bold()).tracking(1).foregroundStyle(civicRed)
            Text(ebox.title).font(.system(.headline, design: .serif))
            Text(ebox.factualSummary).font(.subheadline).foregroundStyle(.secondary).lineLimit(3)
            Text("\(ebox.id) · \(ebox.relevantDate)").font(.caption2).foregroundStyle(.secondary)
        }
        .padding(.vertical, 8)
    }
}

struct EvidenceDetailView: View {
    @EnvironmentObject private var store: ContentStore
    let ebox: EvidenceBox

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 22) {
                Text(ebox.claimStatus).font(.caption.bold()).tracking(1).foregroundStyle(civicRed)
                Text(ebox.title).font(.system(.largeTitle, design: .serif).bold())
                Text(ebox.factualSummary).font(.title3)
                VStack(alignment: .leading, spacing: 8) {
                    Text("WHY IT MATTERS").font(.caption.bold()).tracking(1).foregroundStyle(gold)
                    Text(ebox.whyItMatters)
                }
                .padding(18).background(navy).foregroundStyle(.white)
                Text("Evidence").font(.title2.bold())
                ForEach(ebox.sources) { source in
                    Link(destination: source.url) {
                        VStack(alignment: .leading, spacing: 6) {
                            Text(source.authorityTier.uppercased()).font(.caption2.bold()).foregroundStyle(civicRed)
                            Text(source.title).font(.headline)
                            Text("\(source.publisher) · \(source.locator)").font(.caption).foregroundStyle(.secondary)
                        }
                    }
                    Divider()
                }
            }
            .padding(20)
        }
        .background(paper)
        .navigationTitle(ebox.id)
        .toolbar {
            ToolbarItemGroup(placement: .topBarTrailing) {
                Button { store.toggleSaved(ebox) } label: {
                    Image(systemName: store.savedIDs.contains(ebox.id) ? "bookmark.fill" : "bookmark")
                }
                .accessibilityLabel(store.savedIDs.contains(ebox.id) ? "Remove from saved" : "Save evidence")
                ShareLink(item: "\(ebox.title) — \(ebox.claimStatus)\n/evidence/\(ebox.slug)/")
            }
        }
    }
}

struct SavedView: View {
    @EnvironmentObject private var store: ContentStore
    let eboxes: [EvidenceBox]

    private var saved: [EvidenceBox] { eboxes.filter { store.savedIDs.contains($0.id) } }

    var body: some View {
        Group {
            if saved.isEmpty {
                ContentUnavailableView("No saved evidence", systemImage: "bookmark", description: Text("Save an eBox to keep it on this device."))
            } else {
                List(saved) { ebox in
                    NavigationLink { EvidenceDetailView(ebox: ebox) } label: { EvidenceRow(ebox: ebox) }
                        .listRowBackground(paper)
                }
                .scrollContentBackground(.hidden).background(paper)
            }
        }
        .navigationTitle("Saved")
    }
}
