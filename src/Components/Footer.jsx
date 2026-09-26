const explore = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Awards", href: "/#awards" },
  { label: "About", href: "/#about" },
  { label: "Stack", href: "/#tools" },
  { label: "Contact", href: "/#contact" },
];

const social = [
  { label: "GitHub", href: "https://github.com/Sinduaditya" },
  { label: "LinkedIn", href: "https://linkedin.com/in/sinduadityajanadi" },
  { label: "Email", href: "mailto:nduujanadi51@gmail.com" },
  { label: "WhatsApp", href: "https://wa.me/62895629558923" },
];

function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="shell py-10 sm:py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-xl font-semibold text-ink">
              Sindu<span className="text-ember">.</span>
            </p>
            <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-ink-soft">
              Fullstack developer and technical project lead based in Semarang,
              Indonesia.
            </p>
            <a
              href="https://buymeacoffee.com/sinduaditya"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-ink"
            >
              <span className="bg-[linear-gradient(#0a0a0a,#0a0a0a)] bg-[length:0_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-200 group-hover:bg-[length:100%_1px]">
                Buy me a coffee
              </span>
              <span
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          </div>

          <nav aria-label="Explore">
            <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft">
              Explore
            </h3>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1">
              {explore.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group inline-flex min-h-11 items-center text-sm text-ink"
                  >
                    <span className="bg-[linear-gradient(#0a0a0a,#0a0a0a)] bg-[length:0_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-200 group-hover:bg-[length:100%_1px]">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Social links">
            <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft">
              Elsewhere
            </h3>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1">
              {social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group inline-flex min-h-11 items-center gap-1.5 text-sm text-ink"
                  >
                    <span className="bg-[linear-gradient(#0a0a0a,#0a0a0a)] bg-[length:0_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-200 group-hover:bg-[length:100%_1px]">
                      {item.label}
                    </span>
                    <span
                      className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-9 flex flex-col gap-4 border-t border-line pt-6 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Sindu Aditya Janadi. Built with React
            and Tailwind CSS.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <a
              href="/privacy"
              className="group inline-flex min-h-11 items-center text-ink-soft transition-colors duration-200 hover:text-ink"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="group inline-flex min-h-11 items-center text-ink-soft transition-colors duration-200 hover:text-ink"
            >
              Terms
            </a>
            <a
              href="#top"
              className="group inline-flex min-h-11 items-center gap-1.5 text-ink-soft transition-colors duration-200 hover:text-ink"
            >
              Back to top
              <span
                className="transition-transform duration-200 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                ↑
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
