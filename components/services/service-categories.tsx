"use client"

import { motion } from "framer-motion"
import { Mic, Workflow, Code2, Brain, Cpu, Check, Globe, Smartphone } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"

const services = [
  {
    id: "voice-agents",
    icon: Mic,
    title: "Voice AI Agents",
    description:
      "Deploy intelligent voice agents that handle inbound and outbound calls with natural, human-like conversations. Perfect for customer support, lead qualification, appointment scheduling, and more.",
    features: [
      "Natural language understanding and generation",
      "Multi-turn conversation handling",
      "CRM and calendar integrations",
      "Real-time call analytics dashboard",
      "Custom voice and personality training",
      "Seamless handoff to human agents",
    ],
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Eliminate manual processes with intelligent automation that connects your tools, processes data, and orchestrates complex business workflows without human intervention.",
    features: [
      "Multi-system integrations (APIs, databases, SaaS)",
      "Intelligent document processing",
      "Automated data entry and validation",
      "Event-driven workflow triggers",
      "Error handling and retry logic",
      "Monitoring and alerting systems",
    ],
  },
  {
    id: "saas",
    icon: Code2,
    title: "SaaS Development",
    description:
      "Custom web applications and platforms built with modern technology stacks. From MVPs to enterprise-scale products, we deliver production-ready software that grows with your business.",
    features: [
      "Full-stack TypeScript/React development",
      "Scalable cloud architecture",
      "Real-time features and collaboration",
      "User authentication and authorization",
      "Payment and subscription integration",
      "Analytics and admin dashboards",
    ],
  },
  {
    id: "web-development",
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with cutting-edge technologies. From corporate sites to complex web platforms, we deliver fast, accessible, and SEO-optimized solutions.",
    features: [
      "Responsive design for all devices",
      "Next.js and React development",
      "E-commerce and marketplace solutions",
      "Content management systems (CMS)",
      "Performance optimization and SEO",
      "Progressive Web Apps (PWAs)",
    ],
  },
  {
    id: "app-development",
    icon: Smartphone,
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences. We build apps for iOS and Android that scale with your business needs.",
    features: [
      "iOS and Android native development",
      "React Native cross-platform apps",
      "UI/UX design and prototyping",
      "App Store optimization",
      "Push notifications and real-time features",
      "Backend API development",
    ],
  },
  {
    id: "strategy",
    icon: Brain,
    title: "AI Strategy Consulting",
    description:
      "Not sure where to start? Our AI strategy consulting helps you identify high-impact opportunities, build your roadmap, and make informed technology decisions.",
    features: [
      "AI opportunity assessment",
      "Technology stack recommendations",
      "Build vs. buy analysis",
      "Implementation roadmap",
      "Team training and enablement",
      "Vendor evaluation support",
    ],
  },
  {
    id: "custom-llms",
    icon: Cpu,
    title: "Custom LLM Solutions",
    description:
      "Fine-tuned language models trained on your domain data for specialized accuracy. Get AI that truly understands your industry, terminology, and use cases.",
    features: [
      "Domain-specific model fine-tuning",
      "RAG (Retrieval Augmented Generation)",
      "Custom knowledge base integration",
      "Evaluation and testing frameworks",
      "Model deployment and hosting",
      "Continuous improvement pipelines",
    ],
  },
]

export function ServiceCategories() {
  return (
    <SectionWrapper>
      <div className="space-y-16">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="scroll-mt-24"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Content */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                  <service.icon className="h-7 w-7" />
                </div>
                <h2 className="text-2xl font-bold sm:text-3xl">{service.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features Card */}
              <div className={`rounded-2xl border border-border bg-card p-6 lg:p-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="font-semibold text-lg mb-4">What you get</h3>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {i < services.length - 1 && (
              <div className="mt-16 border-b border-border" />
            )}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
