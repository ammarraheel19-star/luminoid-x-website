"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Mic, Workflow, Code2, Brain, Cpu, ArrowRight, Globe, Smartphone } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { Button } from "@/components/ui/button"

const mainServices = [
  {
    icon: Mic,
    title: "Voice AI Agents",
    description:
      "Conversational AI that handles customer calls, qualifies leads, and schedules appointments with human-like natural language understanding.",
    href: "/services#voice-agents",
    image: "/images/voice-ai-agent.jpg",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "End-to-end process automation connecting your tools, eliminating manual data entry, and orchestrating complex business workflows.",
    href: "/services#automation",
    image: "/images/workflow-automation.jpg",
  },
  {
    icon: Code2,
    title: "SaaS Development",
    description:
      "Custom web applications and platforms built with modern stacks, designed for scale, and ready for production from day one.",
    href: "/services#saas",
    image: "/images/saas-platform.jpg",
  },
]

const miniServices = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built for performance and scale.",
    href: "/services#web-development",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    href: "/services#app-development",
  },
  {
    icon: Brain,
    title: "AI Strategy",
    description: "Strategic consulting to identify AI opportunities and build your roadmap.",
    href: "/services#strategy",
  },
  {
    icon: Cpu,
    title: "Custom LLMs",
    description: "Fine-tuned models trained on your data for domain-specific accuracy.",
    href: "/services#custom-llms",
  },
]

export function ServicesPreview() {
  return (
    <SectionWrapper>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What we build
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            From intelligent voice agents to full-scale SaaS platforms, we deliver production-ready AI systems.
          </p>
        </div>
        <Link href="/services" className="mt-6 lg:mt-0">
          <Button variant="outline" className="gap-2 bg-transparent">
            View all services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      {/* Main Services Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {mainServices.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-xl"
          >
            {/* Service Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/90 text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                  <service.icon className="h-6 w-6" />
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline group/link"
              >
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mini Services */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {miniServices.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex flex-col items-center text-center rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg cursor-pointer"
          >
            <motion.div 
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <service.icon className="h-6 w-6" />
            </motion.div>
            <h3 className="mt-4 font-semibold group-hover:text-primary transition-colors">{service.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
            <Link 
              href={service.href} 
              className="mt-4 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1"
            >
              Explore <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
