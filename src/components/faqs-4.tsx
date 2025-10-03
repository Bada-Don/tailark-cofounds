'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQsFour() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'What is Cofounds?',
            answer: "Cofounds is a modern job search companion for tracking, discovering, and applying to jobs — powered by a community and proof of work.",
        },
        {
            id: 'item-2',
            question: 'Is Cofounds free to use?',
            answer: 'Yes. There is a free tier with core features, and premium plans are available for advanced options.',
        },
        {
            id: 'item-3',
            question: 'How is Cofounds different from LinkedIn or job boards?',
            answer: 'Cofounds focuses on your entire job search journey with community insights, application tracking, and skill-based matching — not just listings.',
        },
        {
            id: 'item-4',
            question: 'Do I need to create an account?',
            answer: 'Yes. An account enables a personalized experience, lets you save preferences, and syncs your progress across devices.',
        },
        {
            id: 'item-5',
            question: 'Is my data safe with Cofounds?',
            answer: 'We do not sell user data. We use enterprise-grade security and do not send recruiter spam.',
        },
    ]

    return (
        <section id="faqs" className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Your Questions, Our Answers</h2>
                    <p className="text-muted-foreground mt-4 text-balance">Quick, clear answers about Cofounds and how it helps you get hired faster.</p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1">
                        {faqItems.map((item) => (
                            <div
                                className="group"
                                key={item.id}>
                                <AccordionItem
                                    value={item.id}
                                    className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm">
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base">{item.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
                            </div>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6 px-8">
                        Want to talk to us? Join our{' '}
                        <Link
                            href="https://chat.whatsapp.com/FUo2MVMuvSKKsbJwoIldW3"
                            className="text-primary font-medium hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WhatsApp community
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
