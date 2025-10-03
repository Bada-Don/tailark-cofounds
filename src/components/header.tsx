'use client'
import Link from 'next/link'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Why Cofounds', href: '#why' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
    { name: 'Join Community', href: 'https://chat.whatsapp.com/FUo2MVMuvSKKsbJwoIldW3' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [theme, setTheme] = React.useState<'light' | 'dark'>(() => {
        if (typeof window === 'undefined') return 'light'
        return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    })

    React.useEffect(() => {
        if (typeof window === 'undefined') return
        const stored = localStorage.getItem('theme')
        let next: 'light' | 'dark' = 'light'
        if (stored === 'dark' || stored === 'light') {
            next = stored
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            next = 'dark'
        }
        setTheme(next)
        document.documentElement.classList.toggle('dark', next === 'dark')

        if (!stored && window.matchMedia) {
            const mq = window.matchMedia('(prefers-color-scheme: dark)')
            const handler = (e: MediaQueryListEvent) => {
                const t: 'light' | 'dark' = e.matches ? 'dark' : 'light'
                setTheme(t)
                document.documentElement.classList.toggle('dark', t === 'dark')
            }
            if (typeof mq.addEventListener === 'function') mq.addEventListener('change', handler)
            else mq.addListener(handler)
            return () => {
                if (typeof mq.removeEventListener === 'function') mq.removeEventListener('change', handler)
                else mq.removeListener(handler)
            }
        }
    }, [])

    const toggleTheme = () => {
        const next = theme === 'dark' ? 'light' : 'dark'
        setTheme(next)
        if (typeof document !== 'undefined') {
            document.documentElement.classList.toggle('dark', next === 'dark')
            try { localStorage.setItem('theme', next) } catch {}
        }
    }

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <span className="font-semibold text-lg">CoFounds</span>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex items-center gap-6 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150"
                                            target={item.href.startsWith('http') ? '_blank' : undefined}
                                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        >
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150"
                                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            >
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={toggleTheme}
                                    aria-label="Toggle theme"
                                    className={cn(isScrolled && 'lg:hidden')}
                                >
                                    {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <Link href="https://chat.whatsapp.com/FUo2MVMuvSKKsbJwoIldW3" target="_blank" rel="noopener noreferrer">
                                        <span>Join Community</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
