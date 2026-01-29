"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Shield, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const trustItems = [
  { icon: Shield, text: "Enterprise-grade security" },
  { icon: Clock, text: "Rapid deployment" },
  { icon: Users, text: "Dedicated support team" },
]

export function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-primary/15 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 lg:p-16 text-center glow"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
              Ready to transform your business with AI?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Join forward-thinking companies that are leveraging AI agents and automation 
              to scale operations, reduce costs, and deliver exceptional customer experiences.
            </p>

            {/* Trust Items */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {trustItems.map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <item.icon className="h-4 w-4 text-primary" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-14 px-10 text-base">
                  Book a Strategy Call
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                Free 30-minute consultation. No commitment required.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
