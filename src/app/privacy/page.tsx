export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Tailark Cofounds",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: October 2, 2025</p>
      </div>

      <div className="rounded-md border bg-card text-card-foreground">
        <div className="p-6 md:p-8 space-y-8">
          <section>
            <h2 className="mb-3 text-xl font-semibold">1. Information We Collect</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              At CoFounds, we collect information you provide when creating your candidate profile and portfolio. 
              This includes personal information such as your name, email address, professional experience, skills, 
              and any work samples you choose to share.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">2. How We Use Your Information</h2>
            <p className="mb-3 text-sm leading-relaxed text-muted-foreground">We use your information to:</p>
            <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
              <li>Provide and improve our hiring platform services</li>
              <li>Match you with relevant job opportunities</li>
              <li>Communicate with you about platform updates and opportunities</li>
              <li>Enhance your portfolio and profile visibility to potential employers</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">3. Information Sharing</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We may share your profile information with potential employers and recruiters on our platform, 
              but only with your consent. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">4. Data Security</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, as we are in beta, 
              we continuously improve our security measures.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">5. Beta Platform Notice</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              As CoFounds is currently in beta, we are actively developing and testing new features. During this phase, 
              we may collect additional usage data to improve the platform. We will always notify you of any significant 
              changes to our data collection practices.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">6. Your Rights</h2>
            <p className="mb-3 text-sm leading-relaxed text-muted-foreground">You have the right to:</p>
            <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
              <li>Access and update your personal information</li>
              <li>Delete your account and associated data</li>
              <li>Control who can view your profile</li>
              <li>Opt out of certain communications</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">7. Cookies and Tracking</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We use cookies and similar technologies to enhance your experience, analyze platform usage, and improve 
              our services. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">8. Updates to This Policy</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We may update this Privacy Policy as we develop new features and improve our platform. We will notify you 
              of any material changes and update the "Last updated" date above.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">9. Contact Us</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              If you have any questions about this Privacy Policy or how we handle your data, please contact us through 
              our platform or community channels.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}