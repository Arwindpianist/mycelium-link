import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FundingPageContent } from "./funding-content"

export const metadata: Metadata = {
  title: "Support MyceliumLink - Seed Round Funding",
  description: "Join the decentralized data revolution. Help fund the MyceliumLink MVP and empower the next generation of sustainable data infrastructure.",
}

export default function FundingPage() {
  return (
    <>
      <Header />
      <FundingPageContent />
      <Footer />
    </>
  )
}