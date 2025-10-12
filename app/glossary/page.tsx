import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GlossaryContent } from "./glossary-content"

export const metadata: Metadata = {
  title: "Glossary - MyceliumLink",
  description: "Comprehensive glossary of technical terms used in MyceliumLink's decentralized data infrastructure platform. Explained in simple terms for investors, partners, and non-technical stakeholders.",
}

export default function Glossary() {
  return (
    <>
      <Header />
      <GlossaryContent />
      <Footer />
    </>
  )
}