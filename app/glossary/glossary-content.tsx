"use client"

import { NetworkAnimation } from "@/components/network-animation"
import { Search, BookOpen, Lightbulb } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function GlossaryContent() {
  const [searchTerm, setSearchTerm] = useState("")

  const glossaryItems = [
    {
      term: "Blockchain",
      definition: "A digital ledger that records transactions across multiple computers in a way that makes it nearly impossible to change or hack. Think of it as a shared spreadsheet that everyone can see and verify, but no single person controls.",
      category: "Technology",
      example: "Like a public record book that banks use to track money transfers, but distributed across thousands of computers worldwide."
    },
    {
      term: "Decentralization",
      definition: "Instead of having one central authority (like Google or Amazon) control all the data, decentralization spreads control across many independent participants. This makes the system more resilient and democratic.",
      category: "Core Concept",
      example: "Like how the internet works - no single company owns it, but many organizations work together to keep it running."
    },
    {
      term: "Data Mesh",
      definition: "A network of interconnected data storage and processing systems that work together seamlessly. It's like a web of data centers that can share and verify information with each other.",
      category: "Architecture",
      example: "Imagine a network of libraries that can instantly share books and verify that the information is authentic."
    },
    {
      term: "Encryption",
      definition: "A security method that scrambles data so that only authorized parties can read it. It's like putting your data in a secure lockbox that only people with the right key can open.",
      category: "Security",
      example: "Like the lock on your phone - your data is protected even if someone gains access to your device."
    },
    {
      term: "IPFS (InterPlanetary File System)",
      definition: "A peer-to-peer protocol for storing and sharing data across a distributed network. It's designed to make the web faster, more secure, and more open.",
      category: "Technology",
      example: "Like a global filing system where documents are stored across many computers, making them faster to access and harder to lose."
    },
    {
      term: "MinIO",
      definition: "Open-source software that provides high-performance object storage. It's like a specialized filing cabinet that can store massive amounts of data efficiently.",
      category: "Technology",
      example: "Like a super-efficient warehouse management system for digital files."
    },
    {
      term: "Node",
      definition: "A computer or server that participates in the MyceliumLink network. Each node stores a portion of the data and helps verify the integrity of the entire system.",
      category: "Infrastructure",
      example: "Like a branch office in a global company - each location handles some business but is connected to the whole organization."
    },
    {
      term: "Proof-of-Storage",
      definition: "A method to verify that a node is actually storing the data it claims to have, without revealing the data itself. It's like proving you have a book without showing its contents.",
      category: "Blockchain",
      example: "Like a receipt that proves you bought something, but doesn't reveal what you bought."
    },
    {
      term: "Proof-of-Integrity",
      definition: "A system that verifies data hasn't been tampered with or corrupted. It's like a seal on a package that shows it hasn't been opened or damaged.",
      category: "Blockchain",
      example: "Like a tamper-evident seal on medicine bottles that shows the contents are safe and authentic."
    },
    {
      term: "Replication",
      definition: "The process of making multiple copies of data and storing them in different locations. This ensures data is never lost even if some storage systems fail.",
      category: "Data Management",
      example: "Like keeping backup copies of important documents in different locations - if one copy is lost, others remain safe."
    },
    {
      term: "Sharding",
      definition: "Breaking large files into smaller pieces and storing them across multiple nodes. This makes the system faster and more efficient.",
      category: "Data Management",
      example: "Like cutting a large pizza into slices - each slice can be stored and retrieved independently, making the whole process more efficient."
    },
    {
      term: "Staking",
      definition: "The process of locking up tokens or resources as collateral to participate in network operations. It's like putting down a security deposit to prove you're committed to the system.",
      category: "Economics",
      example: "Like a security deposit for renting an apartment - you put money down to show you're serious about following the rules."
    },
    {
      term: "Smart Contract",
      definition: "Self-executing contracts with terms directly written into code. They automatically execute when certain conditions are met, without needing human intervention.",
      category: "Blockchain",
      example: "Like a vending machine - you put in money, and it automatically gives you the product without needing a cashier."
    },
    {
      term: "API (Application Programming Interface)",
      definition: "A set of rules that allows different software applications to communicate with each other. It's like a translator that helps different systems understand each other.",
      category: "Technology",
      example: "Like a waiter in a restaurant - you tell them what you want, and they communicate your order to the kitchen."
    },
    {
      term: "SDK (Software Development Kit)",
      definition: "A collection of tools, libraries, and documentation that helps developers build applications for a specific platform. It's like a toolkit for building with MyceliumLink.",
      category: "Development",
      example: "Like a LEGO set with instructions - everything you need to build something specific, with clear directions included."
    },
    {
      term: "Latency",
      definition: "The time it takes for data to travel from one point to another. Lower latency means faster response times.",
      category: "Performance",
      example: "Like the delay between when you press a button and when something happens - lower delay means better experience."
    },
    {
      term: "Throughput",
      definition: "The amount of data that can be processed or transferred in a given time period. Higher throughput means the system can handle more data faster.",
      category: "Performance",
      example: "Like the capacity of a highway - more lanes mean more cars can travel at the same time."
    },
    {
      term: "Consensus",
      definition: "The process by which nodes in a network agree on the validity of transactions or data. It's how the system ensures everyone has the same version of the truth.",
      category: "Blockchain",
      example: "Like a group decision-making process where everyone must agree before taking action."
    },
    {
      term: "Hash",
      definition: "A unique fingerprint for data that changes completely if even one character is modified. It's used to verify data integrity and detect tampering.",
      category: "Security",
      example: "Like a unique DNA fingerprint for digital data - even tiny changes create a completely different fingerprint."
    },
    {
      term: "Distributed Ledger",
      definition: "A database that is shared and synchronized across multiple sites, institutions, or geographies. It's like a shared accounting book that everyone can see and verify.",
      category: "Technology",
      example: "Like a shared Google Doc that multiple people can view and edit simultaneously, with a complete history of all changes."
    },
    {
      term: "Peer-to-Peer (P2P)",
      definition: "A network architecture where participants communicate directly with each other, without relying on a central server. It's like a direct conversation between friends.",
      category: "Network",
      example: "Like talking directly to a friend on the phone, rather than going through a switchboard operator."
    },
    {
      term: "Load Balancing",
      definition: "The process of distributing network traffic across multiple servers to ensure no single server becomes overwhelmed. It's like having multiple cashiers at a busy store.",
      category: "Infrastructure",
      example: "Like a traffic director at a busy intersection, ensuring traffic flows smoothly without bottlenecks."
    },
    {
      term: "Redundancy",
      definition: "Having backup systems or components that can take over if the primary system fails. It's like having spare tires in your car.",
      category: "Reliability",
      example: "Like having multiple power sources for a hospital - if one fails, others keep the lights on."
    },
    {
      term: "Scalability",
      definition: "The ability of a system to handle increased load by adding more resources. It's about growing the system as demand increases.",
      category: "Performance",
      example: "Like adding more lanes to a highway as traffic increases, or hiring more staff as business grows."
    },
    {
      term: "Fault Tolerance",
      definition: "The ability of a system to continue operating even when some components fail. It's about building systems that don't break down easily.",
      category: "Reliability",
      example: "Like a car that can still drive even if one tire goes flat, or a building that remains standing even if one support beam fails."
    }
  ]

  const filteredItems = glossaryItems.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const categories = [...new Set(glossaryItems.map(item => item.category))]

  return (
    <div className="relative min-h-screen bg-background">
      <NetworkAnimation opacity={0.1} variant="mixed" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12 md:py-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Technical Glossary
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding the technical terms behind MyceliumLink's decentralized data infrastructure, explained in simple terms for investors, partners, and stakeholders.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search terms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card/50 border-border"
            />
          </div>
          {searchTerm && (
            <p className="text-center text-sm text-muted-foreground mt-2">
              Found {filteredItems.length} term{filteredItems.length !== 1 ? 's' : ''} matching "{searchTerm}"
            </p>
          )}
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSearchTerm("")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                searchTerm === "" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              All Terms
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSearchTerm(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  searchTerm === category 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-card border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Glossary Items */}
        <div className="space-y-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-card/70 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-foreground">{item.term}</h3>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {item.category}
                </span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {item.definition}
              </p>
              
              {item.example && (
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-accent">Real-world Example:</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.example}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No terms found</h3>
            <p className="text-muted-foreground">
              Try searching for a different term or browse all terms by clearing the search.
            </p>
          </div>
        )}

        {/* Footer Info */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-2">Need More Clarification?</h3>
            <p className="text-muted-foreground mb-4">
              Our team is here to help explain any technical concepts in more detail.
            </p>
            <a
              href="mailto:hello@myceliumlink.com"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              Contact us for technical questions
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
