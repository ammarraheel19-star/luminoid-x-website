"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    content:
      "Luminoid X transformed our customer support operations. The voice AI handles 80% of our calls now, and customers can't tell the difference. Our team can finally focus on complex issues.",
    author: "Sarah Chen",
    role: "CTO",
    company: "FinServe Inc.",
    rating: 5,
  },
  {
    id: 2,
    content:
      "From our first call to deployment, the team was exceptional. They understood our complex requirements and delivered a solution that exceeded expectations. Highly recommend.",
    author: "Michael Torres",
    role: "Founder",
    company: "DataFlow Systems",
    rating: 5,
  },
  {
    id: 3,
    content:
      "The automation workflows they built saved us 40+ hours per week. The ROI was visible within the first month. Their technical expertise is unmatched.",
    author: "Emily Rodriguez",
    role: "Operations Director",
    company: "ScaleUp Labs",
    rating: 5,
  },
  {
    id: 4,
    content:
      "We needed a custom SaaS platform fast. Luminoid X delivered a production-ready product in 6 weeks that would have taken us 6 months internally. Incredible execution.",
    author: "David Kim",
    role: "CEO",
    company: "TechVentures",
    rating: 5,
  },
]

export function Testimonials() {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = React.useState(0)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const newIndex =
        direction === "left"
          ? Math.max(0, activeIndex - 1)
          : Math.min(testimonials.length - 1, activeIndex + 1)
      setActiveIndex(newIndex)
      const cardWidth = scrollRef.current.offsetWidth
      scrollRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: "smooth",
      })
    }
  }

  return (
    <SectionWrapper className="bg-secondary/30">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What clients say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Don&apos;t just take our word for it.
          </p>
        </div>
        <div className="mt-6 lg:mt-0 flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            disabled={activeIndex === 0}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            disabled={activeIndex === testimonials.length - 1}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="w-full flex-shrink-0 snap-center px-2"
          >
            <div className="relative rounded-2xl border border-border bg-card p-8 lg:p-10">
              <Quote className="absolute top-8 right-8 h-12 w-12 text-primary/10" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-5 w-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg lg:text-xl leading-relaxed">
                &quot;{testimonial.content}&quot;
              </blockquote>

              {/* Author */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                  {testimonial.author[0]}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveIndex(i)
              if (scrollRef.current) {
                scrollRef.current.scrollTo({
                  left: i * scrollRef.current.offsetWidth,
                  behavior: "smooth",
                })
              }
            }}
            className={`h-2 w-2 rounded-full transition-all ${
              i === activeIndex ? "w-8 bg-primary" : "bg-border"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
