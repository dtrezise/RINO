import Foundation

@MainActor
final class ContentStore: ObservableObject {
    @Published private(set) var content: PublicContent?
    @Published private(set) var loadError: String?
    @Published var savedIDs: Set<String> = [] {
        didSet { UserDefaults.standard.set(Array(savedIDs), forKey: "savedEvidenceIDs") }
    }

    init() {
        savedIDs = Set(UserDefaults.standard.stringArray(forKey: "savedEvidenceIDs") ?? [])
        load()
    }

    func load() {
        guard let url = Bundle.main.url(forResource: "rino-public-export", withExtension: "json") else {
            loadError = "The shared public export is missing from this build."
            return
        }

        do {
            let data = try Data(contentsOf: url)
            content = try JSONDecoder().decode(PublicContent.self, from: data)
            loadError = nil
        } catch {
            loadError = "The shared public export could not be read."
        }
    }

    func toggleSaved(_ ebox: EvidenceBox) {
        if savedIDs.contains(ebox.id) { savedIDs.remove(ebox.id) }
        else { savedIDs.insert(ebox.id) }
    }
}
