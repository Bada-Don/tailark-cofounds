import Link from 'next/link'

const links = [
    { title: 'Why Cofounds', href: '#why' },
    { title: 'FAQs', href: '#faqs' },
    { title: 'Join Community', href: 'https://chat.whatsapp.com/FUo2MVMuvSKKsbJwoIldW3' },
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' },
]

export default function FooterSection() {
    return (
        <footer className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <Link
                    href="/"
                    aria-label="go home"
                    className="mx-auto block size-fit">
                    <span className="font-semibold text-lg">CoFounds</span>
                </Link>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    <Link
                        href="https://chat.whatsapp.com/FUo2MVMuvSKKsbJwoIldW3"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp Community"
                        className="text-muted-foreground hover:text-primary block">
                        <svg
                            className="size-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path fill="currentColor" d="M20.52 3.48A11.81 11.81 0 0 0 12.02 0A11.94 11.94 0 0 0 .07 11.87a11.8 11.8 0 0 0 1.63 6.03L0 24l6.26-1.64a11.9 11.9 0 0 0 5.77 1.47h.01a11.93 11.93 0 0 0 11.86-11.94a11.86 11.86 0 0 0-3.38-8.41M12.04 22a9.86 9.86 0 0 1-5.02-1.38l-.36-.21l-3.72.98l.99-3.63l-.24-.37A9.89 9.89 0 0 1 2.14 12A9.86 9.86 0 0 1 12 2.14a9.86 9.86 0 0 1 9.86 9.86A9.86 9.86 0 0 1 12.04 22m5.45-7.33c-.3-.15-1.76-.86-2.03-.96c-.27-.1-.46-.15-.65.15c-.19.3-.74.96-.9 1.16c-.16.2-.34.22-.63.08c-.3-.15-1.26-.46-2.4-1.47c-.89-.79-1.49-1.76-1.67-2.06c-.17-.3-.02-.47.13-.62c.13-.13.3-.34.44-.51c.15-.17.19-.3.3-.5c.1-.2.05-.38-.02-.53c-.08-.15-.65-1.58-.89-2.16c-.24-.58-.48-.5-.65-.51h-.56c-.2 0-.52.08-.79.38c-.27.3-1.04 1.02-1.04 2.5c0 1.48 1.06 2.9 1.21 3.1c.15.2 2.08 3.18 5.03 4.46c.7.3 1.25.48 1.68.61c.71.23 1.36.2 1.87.12c.57-.09 1.76-.72 2.01-1.42c.25-.7.25-1.3.17-1.42c-.08-.12-.28-.2-.58-.35" />
                        </svg>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/company/cofounds"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-muted-foreground hover:text-primary block">
                        <svg
                            className="size-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                        </svg>
                    </Link>
                </div>
                <span className="text-muted-foreground block text-center text-sm"> © 2025 Cofounds. All Rights Reserved.</span>
            </div>
        </footer>
    )
}
