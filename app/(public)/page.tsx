import { Hero } from "@/components/home/hero"
import { OutcomesGrid } from "@/components/home/outcomes-grid"
import { ServicesPreview } from "@/components/home/services-preview"
import { CaseStudiesPreview } from "@/components/home/case-studies-preview"
import { HowWeWork } from "@/components/home/how-we-work"
import { Testimonials } from "@/components/home/testimonials"
import { FinalCTA } from "@/components/home/final-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <OutcomesGrid />
      <ServicesPreview />
      <CaseStudiesPreview />
      <HowWeWork />
      <Testimonials />
      <FinalCTA />
    </>
  )
}
