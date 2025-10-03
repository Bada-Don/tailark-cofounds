import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function SignInPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] py-16">
      <div className="mx-auto w-full max-w-md px-6">
        <Card>
          <CardHeader>
            <CardTitle>Sign in to CoFounds</CardTitle>
            <CardDescription>Access your dashboard and continue your journey.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
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
              <div className="flex items-center justify-between">
                <Link href="#" className="text-sm text-primary underline-offset-4 hover:underline">Forgot password?</Link>
              </div>
              <Button type="submit" className="w-full">Sign in</Button>
            </form>
            <p className="text-muted-foreground mt-4 text-center text-sm">
              Don&apos;t have an account? <Link href="/auth/sign-up" className="text-primary underline-offset-4 hover:underline">Create one</Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
