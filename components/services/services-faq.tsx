"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects are completed in 4-12 weeks depending on complexity. Voice AI agents and workflow automations typically take 4-8 weeks, while full SaaS platforms may take 8-12 weeks for an MVP. We'll provide a detailed timeline during our discovery phase.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern, production-proven technologies including TypeScript, React, Next.js, Node.js, Python for AI/ML, and cloud platforms like AWS, GCP, and Vercel. For voice AI, we work with leading providers like OpenAI, Anthropic, and specialized telephony platforms.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes, we offer flexible support packages including monitoring, maintenance, bug fixes, and feature enhancements. We can also provide training for your team to manage day-to-day operations independently.",
  },
  {
    question: "How do you handle data security and privacy?",
    answer:
      "Security is built into every project. We follow industry best practices including encryption at rest and in transit, secure authentication, regular security audits, and compliance with regulations like GDPR and HIPAA when applicable.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "Absolutely. We specialize in building solutions that integrate seamlessly with your existing tech stack, whether that's CRMs, ERPs, databases, or custom APIs. We've integrated with hundreds of different systems.",
  },
  {
    question: "What's your pricing model?",
    answer:
      "We offer fixed-price projects for well-defined scopes and time-and-materials for more exploratory work. Every engagement starts with a discovery phase to ensure we understand your needs and can provide accurate estimates.",
  },
]

export function ServicesFAQ() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about working with us.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  )
}
