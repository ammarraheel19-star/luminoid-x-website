import type { Metadata } from "next"
import { AboutContent } from "@/components/about/about-content"

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Luminoid X - the team building production-ready AI agents and automation systems.",
}

export default function AboutPage() {
  return <AboutContent />
}
