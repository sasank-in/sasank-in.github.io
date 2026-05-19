import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-sm font-medium text-primary mb-2">404</p>
        <h1 className="text-3xl font-bold text-foreground mb-3">Page not found</h1>
        <p className="text-muted-foreground mb-6">
          That link doesn’t go anywhere on this site. Head back to the portfolio.
        </p>
        <Button asChild>
          <Link href="/">Back to portfolio</Link>
        </Button>
      </div>
    </main>
  )
}
