import { Helmet } from 'react-helmet';
import HeaderStatic from './Components/HeaderStatic';

const TallyFormEmbed = () => {
  return (
    <div id="top">
      <Helmet>
        <html lang="en" />
        <title>Project intake form — Sindu Aditya</title>
        <meta
          name="description"
          content="Describe the system you need built. I read every submission and reply within 24 hours."
        />
      </Helmet>

      <HeaderStatic />

      <main id="main" className="shell py-16">
        <p className="eyebrow">Project intake</p>
        <h1 className="mt-3 max-w-[18ch] font-display text-4xl font-semibold tracking-[-0.02em] text-ink sm:text-5xl">
          Tell me what you need built.
        </h1>
        <p className="mt-4 max-w-[52ch] text-[1.05rem] leading-relaxed text-ink-soft">
          The more detail you give on scope, users, and timeline, the more useful
          my first reply will be. Expect an answer within 24 hours.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-paper shadow-lift">
          <iframe
            data-tally-src="https://tally.so/embed/wLpGWy?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="520"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Web project intake questionnaire"
          />
        </div>

        <a
          href="/"
          className="mt-10 inline-block text-sm font-medium text-ember underline underline-offset-4 transition-colors duration-200 hover:text-ember-dark"
        >
          &larr; Back to the homepage
        </a>
      </main>
    </div>
  );
};

export default TallyFormEmbed;
