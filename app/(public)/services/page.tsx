import type { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServiceCategories } from "@/components/services/service-categories"
import { PricingTeaser } from "@/components/services/pricing-teaser"
import { ServicesFAQ } from "@/components/services/services-faq"

export const metadata: Metadata = {
  title: "Services",
  description: "Voice AI agents, workflow automation, SaaS development, AI strategy, and custom LLMs built for production.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceCategories />
      <PricingTeaser />
      <ServicesFAQ />
    </>
  )
}
