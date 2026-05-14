"use client"

import * as React from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = [
  { href: "#main", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
]

export function NavBar() {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      {/* Floating pill nav — desktop */}
      <div className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
        <nav
          className="pointer-events-auto flex items-center gap-1 rounded-full border border-border/50 bg-background/70 backdrop-blur-md px-2 py-1.5 shadow-lg"
          aria-label="Primary"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile — floating hamburger */}
      <div className="md:hidden fixed top-4 right-4 z-40">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur shadow-md"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile dropdown panel */}
      {open && (
        <div className="md:hidden fixed top-16 right-4 z-40 rounded-xl border border-border/50 bg-background/95 backdrop-blur shadow-lg p-2 w-48">
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
