import './App.css'
import { useState } from 'react';
import Homepage from './Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hire from './Hire';
import TallyFormEmbed from './TallyForm';
import { Analytics } from '@vercel/analytics/react';
import { MdClose } from "react-icons/md";
import Learn from './Components/Learn';
import NotFound from './NotFound';
import { Privacy, Terms } from './Legal';

function App() {

  const [showAgency, setShowAgency] = useState(true)

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-ember focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-paper"
      >
        Skip to content
      </a>

      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<Homepage />}
          />

          <Route
            path="/hire"
            element={<Hire />}
          />

          <Route
            path="/form"
            element={<TallyFormEmbed />}
          />

          <Route
            path="/learn"
            element={<Learn />}
          />

          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics />

      {showAgency && (
        <div
          role="complementary"
          aria-label="Availability"
          className="z-50 hidden max-w-[22rem] rounded-2xl border border-line bg-paper p-5 pr-8 font-sans shadow-lift slide-in-right lg:fixed lg:bottom-5 lg:right-5 lg:block"
        >
          <button
            type="button"
            aria-label="Dismiss availability notice"
            onClick={() => setShowAgency(false)}
            className="absolute right-3 top-3 rounded-md p-1 text-ink-faint transition duration-200 hover:bg-ember-wash hover:text-ember focus-visible:ring-ember"
          >
            <MdClose className="h-4 w-4" />
          </button>

          <p className="eyebrow">Available</p>
          <h2 className="mt-2 font-display text-lg font-semibold leading-snug text-ink">
            Open to fullstack and lead roles
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Looking for a fullstack developer, technical project lead, or system
            designer?{" "}
            <a
              href="https://linkedin.com/in/sinduadityajanadi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ember underline underline-offset-4 hover:text-ember-dark"
            >
              Message me on LinkedIn
            </a>{" "}
            and describe the system you need.
          </p>
        </div>
      )}

    </>
  )
}

export default App
