"use client"

import { motion } from "framer-motion"
import { Clock, Headphones, Rocket, LayoutDashboard } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"

const outcomes = [
  {
    icon: Clock,
    metric: "90%",
    label: "Operations Saved",
    description: "Automate repetitive workflows and free your team to focus on high-value work.",
  },
  {
    icon: Headphones,
    metric: "24/7",
    label: "AI Support",
    description: "Voice agents and chatbots that never sleep, handling inquiries around the clock.",
  },
  {
    icon: Rocket,
    metric: "4-8 weeks",
    label: "Market Entry",
    description: "From concept to production deployment in weeks, not months or years.",
  },
  {
    icon: LayoutDashboard,
    metric: "Real-time",
    label: "Dashboards",
    description: "Custom analytics and monitoring dashboards to track your AI system performance.",
  },
]

export function OutcomesGrid() {
  return (
    <SectionWrapper className="bg-secondary/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Outcomes that matter
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          We deliver measurable results that impact your bottom line.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {outcomes.map((outcome, i) => (
          <motion.div
            key={outcome.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <outcome.icon className="h-6 w-6" />
            </div>
            <div className="mt-4">
              <span className="text-3xl font-bold text-primary">{outcome.metric}</span>
              <h3 className="mt-1 text-lg font-semibold">{outcome.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {outcome.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
