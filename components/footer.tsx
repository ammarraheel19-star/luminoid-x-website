import Link from "next/link"
import { Sparkles, Twitter, Linkedin, Github, Mail, MapPin } from "lucide-react"

const footerLinks = {
  services: [
    { href: "/services#voice-agents", label: "Voice AI Agents" },
    { href: "/services#automation", label: "Workflow Automation" },
    { href: "/services#saas", label: "SaaS Development" },
    { href: "/services#strategy", label: "AI Strategy" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
    { href: "#", label: "Careers" },
  ],
  resources: [
    { href: "#", label: "Blog" },
    { href: "#", label: "Documentation" },
    { href: "#", label: "API Reference" },
    { href: "#", label: "Support" },
  ],
}

const socialLinks = [
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com", icon: Github, label: "GitHub" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
            {/* Brand Column */}
            <div className="col-span-2 lg:col-span-2">
              <Link href="/" className="flex items-center gap-2">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                  <Sparkles className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold tracking-tight">Luminoid <span className="text-primary">X</span></span>
              </Link>
              <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
                Building production-ready AI agents and automation systems for forward-thinking businesses.
              </p>
              <div className="mt-6 flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-sm font-semibold text-foreground">Services</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-sm font-semibold text-foreground">Company</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-sm font-semibold text-foreground">Contact</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 shrink-0" />
                  <a href="mailto:hello@luminoidx.com" className="hover:text-foreground transition-colors">
                    hello@luminoidx.com
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>San Francisco, CA<br />United States</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Luminoid X. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
