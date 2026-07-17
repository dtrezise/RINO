import Foundation

struct PublicContent: Codable {
    let schemaVersion: String
    let generatedAt: String
    let project: ProjectIdentity
    let principles: [Principle]
    let platform: Platform
    let eboxes: [EvidenceBox]
    let updates: [Update]
}

struct ProjectIdentity: Codable {
    let name: String
    let expandedName: String
    let status: String
    let statusSummary: String
    let tagline: String
}

struct Principle: Codable, Identifiable {
    let id: String
    let number: String
    let title: String
    let summary: String
}

struct Platform: Codable {
    let status: String
    let summary: String
    let issueLabs: [IssueLab]
}

struct IssueLab: Codable, Identifiable {
    let id: String
    let title: String
    let question: String
    let stage: String
}

struct EvidenceBox: Codable, Identifiable {
    let id: String
    let slug: String
    let title: String
    let category: String
    let tags: [String]
    let relevantDate: String
    let claimStatus: String
    let factualSummary: String
    let whyItMatters: String
    let sources: [EvidenceSource]
}

struct EvidenceSource: Codable, Identifiable {
    let id: String
    let publisher: String
    let title: String
    let url: URL
    let retrievalDate: String
    let authorityTier: String
    let locator: String
    let excerpt: String
}

struct Update: Codable, Identifiable {
    let id: String
    let date: String
    let type: String
    let title: String
    let summary: String
}
