"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Target, Users, Zap, Award, Linkedin, Twitter } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"

const values = [
  {
    icon: Target,
    title: "Outcome-Focused",
    description:
      "We don't build technology for technology's sake. Every project is measured by the real-world impact it creates for your business.",
  },
  {
    icon: Zap,
    title: "Speed Without Compromise",
    description:
      "Rapid deployment doesn't mean cutting corners. We deliver production-ready systems that are built to scale from day one.",
  },
  {
    icon: Users,
    title: "Partnership Mindset",
    description:
      "We become an extension of your team. Your success is our success, and we're committed to your long-term growth.",
  },
  {
    icon: Award,
    title: "Excellence in Execution",
    description:
      "Every line of code, every interaction, every deliverable reflects our commitment to the highest standards.",
  },
]

const team = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "Former AI lead at a Fortune 500 tech company. 10+ years building production ML systems.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Jordan Rivera",
    role: "Head of Engineering",
    bio: "Ex-Google engineer. Expert in scalable systems architecture and cloud infrastructure.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sam Taylor",
    role: "Head of AI",
    bio: "PhD in NLP from Stanford. Published researcher in conversational AI and voice systems.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Morgan Lee",
    role: "Head of Product",
    bio: "Former product director at two successful AI startups. Expert in AI product strategy.",
    linkedin: "#",
    twitter: "#",
  },
]

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Team Members" },
  { value: "4", label: "Years in Business" },
]

export function AboutContent() {
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
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance"
            >
              Building the future of{" "}
              <span className="text-gradient">intelligent automation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground leading-relaxed"
            >
              Luminoid X is a team of engineers, designers, and AI specialists dedicated to 
              helping businesses harness the power of artificial intelligence. We turn complex 
              AI capabilities into practical, production-ready solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <SectionWrapper className="pt-0">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="rounded-2xl border border-border bg-card p-6 text-center cursor-default transition-shadow hover:shadow-lg hover:border-primary/50"
            >
              <motion.div 
                className="text-3xl font-bold text-primary lg:text-4xl"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Mission */}
      <SectionWrapper className="bg-secondary/30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Mission</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We believe AI should be accessible to every business, not just tech giants. 
              Our mission is to democratize AI by building practical, production-ready solutions 
              that deliver real business value.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Too many AI projects fail to make it past the proof-of-concept stage. We're 
              changing that by focusing relentlessly on deployment, scalability, and 
              measurable outcomes. When you work with Luminoid X, you get solutions that 
              actually work in the real world.
            </p>
          </div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square rounded-2xl border border-border overflow-hidden glow">
              <Image
                src="/images/team-collaboration.jpg"
                alt="Our team collaborating"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-primary/20 -z-10 blur-xl" />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Values</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper className="bg-secondary/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet the Team</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced engineers and AI specialists who have built at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              {/* Avatar Placeholder */}
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                {member.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-primary">{member.role}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              <div className="mt-4 flex items-center justify-center gap-3">
                <a
                  href={member.linkedin}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={member.twitter}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={`${member.name} Twitter`}
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  )
}
