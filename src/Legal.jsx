/* eslint-disable react/prop-types -- this project does not use PropTypes; props are validated by callers. */
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function LegalPage({ title, updated, intro, children }) {
  return (
    <main id="main" className="shell max-w-3xl py-24">
      <Helmet>
        <title>{title} — Sindu Aditya</title>
        <meta name="description" content={intro} />
      </Helmet>

      <p className="eyebrow">Legal</p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.02em] text-ink sm:text-5xl">
        {title}
      </h1>
      <p className="mt-3 text-sm text-ink-faint">Last updated {updated}</p>

      <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink-soft">
        <p>{intro}</p>
        {children}
      </div>

      <Link
        to="/"
        className="mt-12 inline-block text-sm font-medium text-ember underline underline-offset-4 transition-colors duration-200 hover:text-ember-dark"
      >
        &larr; Back to the homepage
      </Link>
    </main>
  );
}

export function Privacy() {
  return (
    <LegalPage
      title="Privacy policy"
      updated="25 September 2026"
      intro="This is a personal portfolio site. It collects as little information as it can."
    >
      <h2 className="pt-4 font-display text-2xl font-semibold text-ink">
        What is collected
      </h2>
      <p>
        There is no contact form on this site. When you follow the email or
        WhatsApp links, your message goes straight to me through your own mail
        or messaging app — this site never sees or stores what you write.
      </p>
      <p>
        The site runs Vercel Analytics, which records aggregate page views and
        referrers. It does not use advertising cookies and does not build a
        profile of you.
      </p>

      <h2 className="pt-4 font-display text-2xl font-semibold text-ink">
        What is not collected
      </h2>
      <p>
        No advertising trackers, no data brokers, no account system. There is
        nowhere to log in and nothing to delete on your side.
      </p>

      <h2 className="pt-4 font-display text-2xl font-semibold text-ink">
        Third-party links
      </h2>
      <p>
        Links to GitHub, LinkedIn, Buy Me a Coffee, and similar sites take you
        to those platforms, which have their own policies.
      </p>

      <h2 className="pt-4 font-display text-2xl font-semibold text-ink">Questions</h2>
      <p>
        Email{" "}
        <a
          href="mailto:nduujanadi51@gmail.com"
          className="font-medium text-ember underline underline-offset-4"
        >
          nduujanadi51@gmail.com
        </a>{" "}
        and I will answer directly.
      </p>
    </LegalPage>
  );
}

export function Terms() {
  return (
    <LegalPage
      title="Terms of use"
      updated="25 September 2026"
      intro="By using this site you agree to the plain-language terms below."
    >
      <h2 className="pt-4 font-display text-2xl font-semibold text-ink">
        Content and ownership
      </h2>
      <p>
        The writing, project descriptions, and screenshots on this site are
        mine unless credited otherwise. You are welcome to quote short
        excerpts with a link back; do not republish whole pages or pass the
        work off as your own.
      </p>

      <h2 className="pt-4 font-display text-2xl font-semibold text-ink">
        Accuracy
      </h2>
      <p>
        Project details describe systems as they were built and shipped. I try
        to keep them current, but this site is not a contract, warranty, or
        guarantee of future availability.
      </p>

      <h2 className="pt-4 font-display text-2xl font-semibold text-ink">
        External services
      </h2>
      <p>
        Some pages embed or link to third-party services. Their availability
        and terms are outside my control.
      </p>

      <h2 className="pt-4 font-display text-2xl font-semibold text-ink">Contact</h2>
      <p>
        Anything unclear, write to{" "}
        <a
          href="mailto:nduujanadi51@gmail.com"
          className="font-medium text-ember underline underline-offset-4"
        >
          nduujanadi51@gmail.com
        </a>
        .
      </p>
    </LegalPage>
  );
}
