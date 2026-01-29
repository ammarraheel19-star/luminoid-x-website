"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Customer Support",
    client: "FinTech Startup",
    tags: ["Voice Agents", "Automation"],
    metric: "85% call resolution",
    description: "Deployed voice AI agents handling 10,000+ calls monthly with natural conversations.",
    image: "/placeholder-case-1.jpg",
  },
  {
    id: 2,
    title: "E-commerce Order Processing",
    client: "Retail Chain",
    tags: ["Automation", "Integration"],
    metric: "12x faster processing",
    description: "Automated end-to-end order fulfillment connecting 5 different systems.",
    image: "/placeholder-case-2.jpg",
  },
  {
    id: 3,
    title: "Custom Analytics Platform",
    client: "Healthcare Provider",
    tags: ["SaaS", "Dashboard"],
    metric: "40% cost reduction",
    description: "Built real-time analytics dashboard for patient data insights.",
    image: "/placeholder-case-3.jpg",
  },
  {
    id: 4,
    title: "Lead Qualification Bot",
    client: "B2B SaaS Company",
    tags: ["Voice Agents", "CRM"],
    metric: "3x qualified leads",
    description: "AI voice agent qualifying and routing leads 24/7 to sales teams.",
    image: "/placeholder-case-4.jpg",
  },
]

export function CaseStudiesPreview() {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = React.useState(false)
  const [canScrollRight, setCanScrollRight] = React.useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = 380
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  React.useEffect(() => {
    const ref = scrollRef.current
    if (ref) {
      ref.addEventListener("scroll", checkScroll)
      checkScroll()
      return () => ref.removeEventListener("scroll", checkScroll)
    }
  }, [])

  return (
    <SectionWrapper className="bg-secondary/30">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Recent work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            See how we have helped businesses transform their operations with AI.
          </p>
        </div>
        <div className="mt-6 lg:mt-0 flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <Link href="/case-studies">
            <Button variant="outline" className="gap-2 bg-transparent">
              View all work
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {caseStudies.map((study, i) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative flex-shrink-0 w-[340px] sm:w-[380px] snap-start"
          >
            <Link href={`/case-studies/${study.id}`}>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg">
                {/* Image */}
                <div className="relative h-48 w-full bg-secondary overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30">
                    <span className="text-4xl font-bold">{study.client[0]}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{study.client}</p>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                    {study.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-2xl font-bold text-primary">{study.metric}</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
