import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function SignUpPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] py-16">
      <div className="mx-auto w-full max-w-md px-6">
        <Card>
          <CardHeader>
            <CardTitle>Create your CoFounds account</CardTitle>
            <CardDescription>Start applying smarter with community-powered insights.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Full name</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Alex Doe"
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none transition focus:ring-[3px] focus:ring-ring/50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none transition focus:ring-[3px] focus:ring-ring/50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <input
                  id="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none transition focus:ring-[3px] focus:ring-ring/50"
                />
              </div>
              <Button type="submit" className="w-full">Create account</Button>
            </form>
            <p className="text-muted-foreground mt-4 text-center text-sm">
              Already have an account? <Link href="/auth/sign-in" className="text-primary underline-offset-4 hover:underline">Sign in</Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
