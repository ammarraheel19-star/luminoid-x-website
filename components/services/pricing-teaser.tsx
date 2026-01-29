"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const tiers = [
  {
    name: "Starter",
    description: "For businesses testing AI capabilities",
    price: "Custom",
    features: [
      "Single voice agent or workflow",
      "Basic integrations",
      "Email support",
      "30-day deployment",
    ],
    cta: "Request Quote",
    highlighted: false,
  },
  {
    name: "Growth",
    description: "For scaling operations with AI",
    price: "Custom",
    features: [
      "Multiple agents or workflows",
      "Advanced integrations",
      "Priority support",
      "Analytics dashboard",
      "Dedicated project manager",
    ],
    cta: "Request Quote",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For complex, mission-critical systems",
    price: "Custom",
    features: [
      "Unlimited scope",
      "Custom LLM development",
      "24/7 premium support",
      "SLA guarantees",
      "On-premise deployment option",
      "Dedicated engineering team",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export function PricingTeaser() {
  return (
    <SectionWrapper className="bg-secondary/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Flexible engagement models
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Every project is unique. We tailor our approach and pricing to match your specific needs and goals.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative rounded-2xl border p-8 ${
              tier.highlighted
                ? "border-primary bg-card shadow-lg glow"
                : "border-border bg-card"
            }`}
          >
            {tier.highlighted && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                Most Popular
              </Badge>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-semibold">{tier.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-bold">{tier.price}</span>
            </div>

            <ul className="mb-8 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact">
              <Button
                className={`w-full ${
                  tier.highlighted
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : ""
                }`}
                variant={tier.highlighted ? "default" : "outline"}
              >
                {tier.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-muted-foreground">
        All projects include discovery, design, development, testing, deployment, and documentation.
      </p>
    </SectionWrapper>
  )
}
