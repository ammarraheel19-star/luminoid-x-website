"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const filters = ["All", "Voice Agents", "Automation", "SaaS"]

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Customer Support Revolution",
    client: "FinServe Inc.",
    category: "Voice Agents",
    tags: ["Voice AI", "Customer Support", "NLP"],
    image: "/images/case-study-finserve.jpg",
    problem:
      "FinServe was struggling with 200+ daily support calls, leading to long wait times and frustrated customers. Their support team was overwhelmed handling repetitive queries.",
    solution:
      "We deployed an intelligent voice AI agent that handles tier-1 support calls, qualifies issues, and either resolves them automatically or routes to the right specialist with full context.",
    stack: ["OpenAI GPT-4", "Twilio", "Salesforce CRM", "Next.js Dashboard"],
    outcomes: [
      { metric: "85%", label: "Call Resolution Rate" },
      { metric: "60%", label: "Reduced Wait Time" },
      { metric: "$200K", label: "Annual Savings" },
    ],
  },
  {
    id: 2,
    title: "E-commerce Order Processing Automation",
    client: "RetailMax Chain",
    category: "Automation",
    tags: ["Workflow Automation", "E-commerce", "Integration"],
    image: "/images/case-study-retail.jpg",
    problem:
      "Manual order processing across 5 different systems was causing delays, errors, and requiring a team of 8 people working full-time on data entry.",
    solution:
      "End-to-end automation connecting their e-commerce platform, inventory system, warehouse management, shipping providers, and accounting software.",
    stack: ["Node.js", "PostgreSQL", "AWS Lambda", "Zapier", "Custom APIs"],
    outcomes: [
      { metric: "12x", label: "Faster Processing" },
      { metric: "99.9%", label: "Accuracy Rate" },
      { metric: "6 FTEs", label: "Reallocated" },
    ],
  },
  {
    id: 3,
    title: "Healthcare Analytics Platform",
    client: "MedTech Solutions",
    category: "SaaS",
    tags: ["SaaS", "Healthcare", "Analytics"],
    image: "/images/case-study-healthcare.jpg",
    problem:
      "MedTech needed a HIPAA-compliant platform to aggregate patient data from multiple sources and provide actionable insights for healthcare providers.",
    solution:
      "Custom SaaS platform with real-time data ingestion, advanced analytics dashboards, and AI-powered recommendations for patient care optimization.",
    stack: ["React", "TypeScript", "Python", "AWS", "Snowflake"],
    outcomes: [
      { metric: "40%", label: "Cost Reduction" },
      { metric: "5M+", label: "Records Processed" },
      { metric: "100+", label: "Healthcare Providers" },
    ],
  },
  {
    id: 4,
    title: "Lead Qualification Voice Agent",
    client: "GrowthBase B2B",
    category: "Voice Agents",
    tags: ["Voice AI", "Sales", "CRM"],
    problem:
      "Sales team was spending 70% of their time on initial lead qualification calls, leaving little time for closing deals with qualified prospects.",
    solution:
      "AI voice agent that conducts initial qualification calls 24/7, scores leads based on custom criteria, and automatically schedules demos for qualified prospects.",
    stack: ["Anthropic Claude", "Twilio", "HubSpot", "Cal.com"],
    outcomes: [
      { metric: "3x", label: "Qualified Leads" },
      { metric: "24/7", label: "Availability" },
      { metric: "45%", label: "Sales Increase" },
    ],
  },
  {
    id: 5,
    title: "Document Processing Pipeline",
    client: "LegalEase Law Firm",
    category: "Automation",
    tags: ["Document AI", "Legal", "Automation"],
    problem:
      "Paralegals spent hours daily reviewing contracts and extracting key information manually, a tedious and error-prone process.",
    solution:
      "Intelligent document processing system that automatically extracts, classifies, and validates information from legal documents.",
    stack: ["GPT-4 Vision", "Python", "Azure", "Document AI"],
    outcomes: [
      { metric: "90%", label: "Time Saved" },
      { metric: "50K+", label: "Documents Processed" },
      { metric: "98%", label: "Extraction Accuracy" },
    ],
  },
  {
    id: 6,
    title: "Multi-tenant Project Management SaaS",
    client: "AgencyFlow",
    category: "SaaS",
    tags: ["SaaS", "Project Management", "Collaboration"],
    problem:
      "AgencyFlow needed a custom project management platform with unique workflow features that existing tools couldn't provide.",
    solution:
      "Full-featured multi-tenant SaaS with custom workflows, time tracking, client portals, invoicing, and white-label capabilities.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Vercel"],
    outcomes: [
      { metric: "500+", label: "Active Teams" },
      { metric: "$50K", label: "MRR Achieved" },
      { metric: "4.8", label: "Customer Rating" },
    ],
  },
]

export function CaseStudiesContent() {
  const [activeFilter, setActiveFilter] = React.useState("All")
  const [selectedStudy, setSelectedStudy] = React.useState<typeof caseStudies[0] | null>(null)

  const filteredStudies = caseStudies.filter(
    (study) => activeFilter === "All" || study.category === activeFilter
  )

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-semibold text-primary mb-4"
            >
              Our Work
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance"
            >
              Real results for{" "}
              <span className="text-gradient">real businesses</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground leading-relaxed"
            >
              See how we have helped companies transform their operations, reduce costs, 
              and deliver exceptional experiences with AI and automation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters and Grid */}
      <SectionWrapper className="pt-0">
        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study) => (
              <motion.div
                key={study.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedStudy(study)}
                className="group cursor-pointer rounded-2xl border border-border bg-card overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg"
              >
                {/* Case Study Image */}
                <div className="relative h-48 bg-secondary overflow-hidden">
                  {study.image ? (
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30">
                      <span className="text-5xl font-bold">{study.client[0]}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {study.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-background/80 backdrop-blur-sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{study.client}</p>
                  
                  {/* Outcomes Preview */}
                  <div className="mt-4 pt-4 border-t border-border grid grid-cols-3 gap-2">
                    {study.outcomes.map((outcome) => (
                      <div key={outcome.label} className="text-center">
                        <div className="text-lg font-bold text-primary">{outcome.metric}</div>
                        <div className="text-xs text-muted-foreground">{outcome.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </SectionWrapper>

      {/* Detail Modal/Drawer */}
      <AnimatePresence>
        {selectedStudy && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStudy(null)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed inset-x-4 bottom-4 top-20 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl z-50 overflow-hidden rounded-2xl border border-border bg-card shadow-xl"
            >
              <div className="h-full overflow-y-auto p-6 lg:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex flex-wrap gap-2">
                    {selectedStudy.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedStudy(null)}
                    className="-mt-2 -mr-2"
                    aria-label="Close modal"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <h2 className="text-2xl font-bold">{selectedStudy.title}</h2>
                <p className="mt-1 text-muted-foreground">{selectedStudy.client}</p>

                {/* Outcomes */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {selectedStudy.outcomes.map((outcome) => (
                    <div
                      key={outcome.label}
                      className="rounded-xl border border-border bg-secondary/50 p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-primary">{outcome.metric}</div>
                      <div className="text-xs text-muted-foreground mt-1">{outcome.label}</div>
                    </div>
                  ))}
                </div>

                {/* Problem */}
                <div className="mt-8">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    The Challenge
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{selectedStudy.problem}</p>
                </div>

                {/* Solution */}
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    Our Solution
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{selectedStudy.solution}</p>
                </div>

                {/* Tech Stack */}
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    Tech Stack
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedStudy.stack.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
