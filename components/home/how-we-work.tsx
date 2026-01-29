"use client"

import { motion } from "framer-motion"
import { MessageSquare, Lightbulb, Code, Rocket } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery Call",
    description:
      "We start with a deep dive into your business, understanding your challenges, goals, and existing tech stack.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Strategy & Scope",
    description:
      "Our team designs a tailored solution architecture with clear milestones, deliverables, and timeline.",
  },
  {
    icon: Code,
    step: "03",
    title: "Build & Iterate",
    description:
      "Agile development with weekly demos, continuous feedback loops, and transparent progress tracking.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Deploy & Scale",
    description:
      "Production deployment with monitoring, documentation, training, and ongoing support as you scale.",
  },
]

export function HowWeWork() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          How we work
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          A proven process that delivers results consistently.
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden lg:block lg:left-1/2 lg:-translate-x-px" />

        <div className="space-y-12 lg:space-y-0">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col lg:flex-row lg:items-center ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div className={`flex-1 ${i % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                <div className="ml-20 lg:ml-0">
                  <span className="text-sm font-semibold text-primary">Step {item.step}</span>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Icon */}
              <div className="absolute left-0 lg:relative lg:left-auto flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border bg-card shadow-lg lg:mx-0">
                <item.icon className="h-7 w-7 text-primary" />
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden lg:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
