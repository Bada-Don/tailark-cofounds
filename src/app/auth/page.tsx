'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import React from "react"

export default function AuthIndexPage() {
  const [tab, setTab] = React.useState<'sign-in' | 'sign-up'>('sign-in')

  return (
    <main className="min-h-[calc(100vh-4rem)] py-16">
      <div className="mx-auto w-full max-w-md px-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">{tab === 'sign-in' ? 'Sign in to CoFounds' : 'Create your CoFounds account'}</CardTitle>
            <CardDescription className="text-center">
              {tab === 'sign-in'
                ? 'Access your dashboard and continue your journey.'
                : 'Start applying smarter with community-powered insights.'}
            </CardDescription>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <Button
                variant={tab === 'sign-in' ? 'default' : 'outline'}
                onClick={() => setTab('sign-in')}
              >
                Sign in
              </Button>
              <Button
                variant={tab === 'sign-up' ? 'default' : 'outline'}
                onClick={() => setTab('sign-up')}
              >
                Create account
              </Button>
            </div>
          </CardHeader>

          <CardContent>
            {tab === 'sign-in' ? (
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
                  <a href="#" className="text-sm text-primary underline-offset-4 hover:underline">Forgot password?</a>
                </div>
                <Button type="submit" className="w-full">Sign in</Button>
                <p className="text-muted-foreground mt-2 text-center text-sm">
                  New here?{' '}
                  <button type="button" className="text-primary underline-offset-4 hover:underline" onClick={() => setTab('sign-up')}>
                    Create an account
                  </button>
                </p>
              </form>
            ) : (
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
                <p className="text-muted-foreground mt-2 text-center text-sm">
                  Already have an account?{' '}
                  <button type="button" className="text-primary underline-offset-4 hover:underline" onClick={() => setTab('sign-in')}>
                    Sign in
                  </button>
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
