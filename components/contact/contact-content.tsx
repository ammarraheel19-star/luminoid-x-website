"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Clock, Calendar, Send, CheckCircle } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@luminoidx.com",
    href: "mailto:hello@luminoidx.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
]

const offices = [
  {
    city: "San Francisco",
    country: "United States",
    address: "123 AI Boulevard, Suite 500",
    timezone: "PST (UTC-8)",
  },
  {
    city: "London",
    country: "United Kingdom",
    address: "45 Tech Lane, Floor 3",
    timezone: "GMT (UTC+0)",
  },
]

export function ContactContent() {
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
  }

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
              Contact Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance"
            >
              Let&apos;s build something{" "}
              <span className="text-gradient">amazing together</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground leading-relaxed"
            >
              Ready to transform your business with AI? Book a free strategy call or 
              send us a message. We&apos;ll get back to you within 24 hours.
            </motion.p>
          </div>
        </div>
      </section>

      <SectionWrapper className="pt-0">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">Message Sent!</h3>
                  <p className="mt-2 text-muted-foreground">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <Button className="mt-6" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="John Smith" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="john@company.com" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Acme Inc." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="country">Country / City</Label>
                      <Input id="country" placeholder="United States / San Francisco" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interest">Interest</Label>
                      <Select>
                        <SelectTrigger id="interest">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="voice-agents">Voice AI Agents</SelectItem>
                          <SelectItem value="automation">Workflow Automation</SelectItem>
                          <SelectItem value="saas">SaaS Development</SelectItem>
                          <SelectItem value="strategy">AI Strategy</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project and goals..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Book a Call Card */}
            <div className="rounded-2xl border border-primary/50 bg-card p-6 glow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Book a Strategy Call</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Schedule a free 30-minute call to discuss your project and see how we can help.
              </p>
              <Button className="mt-4 w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Schedule Call
              </Button>
            </div>

            {/* Contact Info */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Offices */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold mb-4">Our Offices</h3>
              <div className="space-y-4">
                {offices.map((office) => (
                  <div key={office.city} className="pb-4 last:pb-0 border-b border-border last:border-0">
                    <p className="font-medium">{office.city}</p>
                    <p className="text-sm text-muted-foreground">{office.country}</p>
                    <p className="text-sm text-muted-foreground mt-1">{office.address}</p>
                    <p className="text-xs text-muted-foreground mt-1">{office.timezone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
