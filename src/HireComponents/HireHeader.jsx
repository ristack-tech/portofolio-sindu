import { TypeAnimation } from 'react-type-animation';

export default function HireHeader() {
  const handleNavigationClick = (event, href) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative isolate overflow-hidden px-6 pt-14 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(192,86,33,0.20)_0%,rgba(192,86,33,0)_68%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-16rem] left-[-8%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(150,67,26,0.14)_0%,rgba(150,67,26,0)_70%)] blur-2xl"
      />

      <div className="mx-auto max-w-5xl pb-28 pt-10 text-center sm:pb-40 lg:pb-48 lg:pt-16">
        <p className="flex items-center justify-center gap-3 text-sm font-medium tracking-wide text-ink-soft">
          <span className="h-2 w-2 shrink-0 bg-ember" aria-hidden="true" />
          Freelance &amp; contract
        </p>

        <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-[-0.02em] text-ink sm:text-7xl">
          Let&apos;s build
        </h1>

        <div className="my-8 font-display text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
          <TypeAnimation
            sequence={[
              'Scalable backend systems',
              1500,
              'IoT fleet management',
              1500,
              'Multi-tenant platforms',
              1500,
              'Real-time WebSockets',
              1500,
              'Modular ERP systems',
              1500,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="main-gradient"
          />
        </div>

        <p className="mx-auto mt-6 max-w-[46ch] text-lg leading-relaxed text-ink-soft sm:text-xl">
          Tell me what the system has to do and who depends on it. I&apos;ll come
          back with an architecture, a timeline, and a price.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
          <a
            href="#features"
            onClick={(event) => handleNavigationClick(event, '#features')}
            className="rounded-lg bg-ember px-6 py-3 text-base font-medium text-paper shadow-press transition duration-200 hover:bg-ember-dark active:scale-[0.98]"
          >
            How it works
          </a>
          <a
            href="https://tally.so/r/wLpGWy"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-base font-medium text-ink transition duration-200 hover:text-ember"
          >
            Book a call
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
