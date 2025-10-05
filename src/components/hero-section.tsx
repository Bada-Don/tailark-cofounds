'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'
import type { Variants } from 'motion/react'
import { Highlighter } from '@/components/ui/highlighter'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(4px)',
            y: 8,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.1,
                duration: 1,
            },
        },
    },
} as const satisfies { item: Variants }

export default function HeroSection() {
    const [showBrokenHighlight, setShowBrokenHighlight] = React.useState(false)

    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32">
                            <Image
                                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                                alt="background"
                                className="hidden size-full dark:block"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup>

                        <div
                            aria-hidden
                            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
                        />

                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <div className="group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md transition-colors duration-300 bg-white/80 border-zinc-200 text-zinc-700 dark:bg-white/80 dark:border-zinc-200 dark:text-zinc-700">
                                        <span className="text-zinc-700 text-sm">Backed by</span>
                                        <span className="block h-4 w-0.5 bg-zinc-300"></span>
                                        <div className="flex items-center gap-3 pr-3">
                                            <Image
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Google_for_Startups_logo.svg/2560px-Google_for_Startups_logo.svg.png"
                                                alt="Google for Startups"
                                                width={140}
                                                height={18}
                                                className="h-4 w-auto"
                                            />
                                            <Image
                                                src="https://i0.wp.com/get.site/wp-content/uploads/2021/10/notion-logo.png?ssl=1"
                                                alt="Notion"
                                                width={28}
                                                height={28}
                                                className="h-5 w-auto"
                                            />
                                        </div>
                                    </div>
                                </AnimatedGroup>

                                <h1 className="mx-auto mt-8 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                                    <TextEffect
                                        per="word"
                                        preset="fade-in-blur"
                                        speedSegment={0.3}
                                        as="span"
                                        className="inline-block"
                                    >
                                        {"Hiring is"}
                                    </TextEffect>{" "}
                                    {!showBrokenHighlight ? (
                                        <TextEffect
                                            per="word"
                                            preset="fade-in-blur"
                                            speedSegment={0.3}
                                            as="span"
                                            className="inline-block"
                                            onAnimationComplete={() => setShowBrokenHighlight(true)}
                                        >
                                            {"Broken"}
                                        </TextEffect>
                                    ) : (
                                        <Highlighter action="highlight" color="#ff00008c">{"Broken"}</Highlighter>
                                    )}
                                    <br />
                                    <TextEffect
                                        per="line"
                                        preset="fade-in-blur"
                                        speedSegment={0.3}
                                        delay={0.5}
                                        as="span"
                                        className="inline-block"
                                    >
                                        {"We are here to fix it!"}
                                    </TextEffect>
                                </h1>
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                                    {`Get hired fast through Proof of Work and Community. No more resumes lost in the void. Let your skills speak louder than your degree.`}
                                </TextEffect>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-row items-center justify-center gap-3">
                                    <Button
                                        key={1}
                                        asChild
                                        size="lg"
                                        className="rounded-lg px-6 text-base"
                                    >
                                        <Link href="/auth">
                                            <span className="whitespace-nowrap">Get started</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="rounded-lg px-6"
                                    >
                                        <Link href="/auth">
                                            <span className="whitespace-nowrap">Onboard Your Company</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="mask-b-from-55% relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                    <iframe
                                        className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border w-full"
                                        src="https://www.youtube.com/embed/aSte18D2_YE?autoplay=1&mute=1&controls=0&loop=1&playlist=aSte18D2_YE&modestbranding=1&rel=0&playsinline=1"
                                        title="Hero video"
                                        allow="autoplay; encrypted-media; picture-in-picture"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
                <section className="bg-background pb-16 pt-16 md:pb-32">
                    <div className="relative m-auto max-w-5xl px-6">
                        <div className="text-center">
                            <span className="text-zinc-600 text-sm">Backed by</span>
                            <div className="mt-6 flex items-center justify-center gap-10">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Google_for_Startups_logo.svg/2560px-Google_for_Startups_logo.svg.png"
                                    alt="Google for Startups"
                                    width={200}
                                    height={24}
                                    className="h-6 w-auto"
                                />
                                <Image
                                    src="https://i0.wp.com/get.site/wp-content/uploads/2021/10/notion-logo.png?ssl=1"
                                    alt="Notion"
                                    width={36}
                                    height={36}
                                    className="h-7 w-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
