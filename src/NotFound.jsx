import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const links = [
  { label: "Selected work", to: "/#work" },
  { label: "About", to: "/#about" },
  { label: "Skills", to: "/#tools" },
  { label: "Contact", to: "/#contact" },
];

export default function NotFound() {
  return (
    <main id="main" className="shell flex min-h-[70dvh] flex-col justify-center py-24">
      <Helmet>
        <title>Page not found — Sindu Aditya</title>
        <meta name="description" content="That page doesn't exist. Here are the parts of the site that do." />
      </Helmet>

      <p className="eyebrow">404</p>
      <h1 className="mt-4 max-w-[16ch] font-display text-5xl font-semibold tracking-[-0.02em] text-ink sm:text-6xl">
        That page isn&apos;t here.
      </h1>
      <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-ink-soft">
        The link may be old, or the address was mistyped. Everything worth
        reading is one click away.
      </p>

      <ul className="mt-10 flex flex-wrap gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-paper px-4 py-2.5 text-sm font-medium text-ink transition duration-200 hover:border-ember hover:text-ember active:scale-[0.98]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        to="/"
        className="mt-10 w-max text-sm font-medium text-ember underline underline-offset-4 transition-colors duration-200 hover:text-ember-dark"
      >
        &larr; Back to the homepage
      </Link>
    </main>
  );
}
