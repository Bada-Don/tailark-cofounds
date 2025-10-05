export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Tailark Cofounds",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: October 2, 2025</p>
      </div>

      <div className="rounded-md border bg-card text-card-foreground">
        <div className="p-6 md:p-8 space-y-8">
          <section>
            <h2 className="mb-3 text-xl font-semibold">1. Acceptance of Terms</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              By accessing and using CoFounds, you accept and agree to be bound by the terms and provision of this agreement.
              CoFounds is a beta hiring platform that connects talent with opportunities through proof of work and community-driven matching.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">2. Beta Service Notice</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              CoFounds is currently in beta development. We are constantly rolling out updates and fixes to improve your experience.
              During this phase, you may encounter bugs, temporary outages, or changes to features. We appreciate your patience and feedback.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">3. User Accounts</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Users can create candidate profiles and build portfolios on our platform. You are responsible for maintaining the confidentiality
              of your account information and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">4. Acceptable Use</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              You agree to use CoFounds only for lawful purposes and in accordance with these Terms. You may not use our service to post false
              information, engage in harassment, or violate any applicable laws or regulations.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">5. Content and Intellectual Property</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              You retain ownership of content you submit to CoFounds. By posting content, you grant us a license to use, display, and distribute
              your content on our platform for the purpose of providing our services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">6. Privacy</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">7. Limitation of Liability</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              CoFounds shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the
              service, especially during our beta phase.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">8. Modifications</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We reserve the right to modify these terms at any time. We will notify users of significant changes. Continued use of the service
              after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">9. Contact Information</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us through our platform or community channels.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
