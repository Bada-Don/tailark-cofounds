import { Activity, DraftingCompass, Mail, Zap } from 'lucide-react'
import Image from 'next/image'

export default function FeaturesSection() {
    return (
        <section id="why" className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">Why CoFounds Delivers Results — Not Just Listings.</h2>
                            <p className="mt-6">A smarter, community-driven way to get hired. Built for speed, proof, and clarity.</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <Zap className="size-5" />
                                Apply Smarter, Not Harder — curated roles and precise application tools.
                            </li>
                            <li>
                                <Activity className="size-5" />
                                Always in Sync — track saved jobs, status updates, and notes across devices.
                            </li>
                            <li>
                                <DraftingCompass className="size-5" />
                                Personalized Job Discovery — smart suggestions aligned with your goals.
                            </li>
                            <li>
                                <Mail className="size-5" />
                                Built for Job Seekers — more than a job board, focused on your journey.
                            </li>
                            <li>
                                <Image src="/window.svg" alt="users" width={16} height={16} className="dark:invert" />
                                Community-Driven Advantage — referrals, shared opportunities, and insights.
                            </li>
                            <li>
                                <Image src="/file.svg" alt="shield" width={16} height={16} className="dark:invert" />
                                Privacy-First by Design — we don’t resell your data or spam you.
                            </li>
                        </ul>
                    </div>
                    <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src="https://images.unsplash.com/photo-1551281044-8b5790c66d3a?auto=format&fit=crop&w=1207&q=80" className="hidden rounded-[15px] dark:block" alt="illustration dark" width={1207} height={929} />
                            <Image src="https://images.unsplash.com/photo-1611162618071-b39a2ec8f6b1?auto=format&fit=crop&w=1207&q=80" className="rounded-[15px] shadow dark:hidden" alt="illustration light" width={1207} height={929} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
