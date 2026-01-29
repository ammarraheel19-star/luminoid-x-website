"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Play, CheckCircle2, Zap, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  { icon: Zap, text: "Deploy in weeks" },
  { icon: Shield, text: "Enterprise-grade security" },
  { icon: Clock, text: "24/7 Support" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Glow Effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm font-medium text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Now accepting new clients for Q1 2026
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl"
            >
              AI agents and automation systems{" "}
              <span className="text-gradient">built for production.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl lg:max-w-none"
            >
              We design, build, and deploy intelligent voice agents, workflow automation, 
              and custom SaaS products that scale with your business. From concept to production 
              in weeks, not months.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              {features.map((feature, i) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 rounded-full bg-secondary/80 px-4 py-2 text-sm font-medium"
                >
                  <feature.icon className="h-4 w-4 text-primary" />
                  {feature.text}
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-12 px-8 group">
                  Book a Strategy Call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="gap-2 h-12 px-8 bg-transparent group">
                  <Play className="h-4 w-4 transition-transform group-hover:scale-110" />
                  See Services
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden border border-border glow">
              <Image
                src="/images/hero-ai-dashboard.jpg"
                alt="AI Dashboard Interface"
                fill
                className="object-cover"
                priority
              />
              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute bottom-4 left-4 right-4 flex gap-3"
              >
                <div className="flex-1 rounded-xl bg-background/90 backdrop-blur-sm border border-border p-3">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="flex-1 rounded-xl bg-background/90 backdrop-blur-sm border border-border p-3">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-xs text-muted-foreground">Projects Delivered</div>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-2xl bg-primary/20 -z-10 blur-xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-2xl bg-accent/20 -z-10 blur-xl" />
          </motion.div>
        </div>

        {/* Credibility Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20"
        >
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by founders and teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {["TechCorp", "AI Startup", "FinanceHub", "DataFlow", "CloudScale"].map(
              (company, i) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  whileHover={{ scale: 1.05, color: "var(--primary)" }}
                  className="text-xl font-semibold text-muted-foreground/50 cursor-default transition-colors"
                >
                  {company}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
