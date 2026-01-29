import type { Metadata } from "next"
import { ContactContent } from "@/components/contact/contact-content"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Luminoid X to discuss your AI and automation needs.",
}

export default function ContactPage() {
  return <ContactContent />
}
