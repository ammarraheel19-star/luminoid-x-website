import React from "react"
import Link from "next/link"
import { Sparkles } from "lucide-react"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-primary/5">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
        </div>
        <div className="relative flex flex-col justify-between p-12 w-full">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold">Luminoid X</span>
          </Link>

          <div className="max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight">
              AI agents and automation systems built for production.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Join forward-thinking companies leveraging AI to transform their operations.
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Luminoid X. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right Panel - Auth Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8 flex justify-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">Luminoid X</span>
            </Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
