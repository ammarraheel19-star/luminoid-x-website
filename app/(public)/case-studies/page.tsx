import type { Metadata } from "next"
import { CaseStudiesContent } from "@/components/case-studies/case-studies-content"

export const metadata: Metadata = {
  title: "Case Studies",
  description: "See how we've helped businesses transform their operations with AI agents, automation, and custom software.",
}

export default function CaseStudiesPage() {
  return <CaseStudiesContent />
}
