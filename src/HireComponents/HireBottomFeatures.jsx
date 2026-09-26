import { FaMobileAlt, FaCode, FaPeopleArrows } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { IoAnalytics } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";

const features = [
    {
        title: "Multi-tenant architecture",
        content: "Row-level tenancy that isolates data per tenant inside one codebase.",
        icon: <CgWebsite />,
    },
    {
        title: "IoT & real-time systems",
        content: "MQTT, WebSocket, and Laravel Reverb for streaming telemetry as it happens.",
        icon: <FaMobileAlt />,
    },
    {
        title: "Modular ERP",
        content: "Modules that cover the whole operation — from quality control to payroll.",
        icon: <FaPeopleArrows />,
    },
    {
        title: "Clean architecture",
        content: "MVC, OOP, and disciplined boundaries so the codebase stays changeable.",
        icon: <FaCode />,
    },
    {
        title: "Database design",
        content: "Schemas sized for the load — MySQL for transactions, time-series for IoT.",
        icon: <IoAnalytics />,
    },
    {
        title: "CI/CD pipeline",
        content: "Automated deploys with Linux server setup and Docker containerization.",
        icon: <FaGitAlt />,
    },
];

export default function HireBottomFeatures() {
    return (
        <section className="relative overflow-hidden background-pattern-square">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 z-0 h-[30rem] w-full"
                viewBox="0 0 800 450"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feGaussianBlur stdDeviation="103" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur" />
                    </filter>
                </defs>
                <g filter="url(#bbblurry-filter)">
                    <ellipse rx="75" ry="55.5" cx="398" cy="194" fill="hsla(24, 62%, 45%, 0.85)" />
                    <ellipse rx="75" ry="55.5" cx="525" cy="234" fill="hsla(14, 55%, 55%, 0.75)" />
                    <ellipse rx="75" ry="55.5" cx="259" cy="227" fill="hsla(35, 35%, 55%, 0.7)" />
                    <ellipse rx="75" ry="55.5" cx="402" cy="184" fill="hsla(20, 70%, 38%, 0.9)" />
                </g>
            </svg>

            <div className="shell relative z-10 py-20">
                <div className="flex flex-col items-center gap-y-3">
                    <h2 className="six-title text-center font-display font-semibold text-ink">
                        Still not <span className="main-gradient">convinced?</span>
                    </h2>
                    <p className="text-center text-lg text-ink-soft">
                        A few of the things you get when we work together.
                    </p>
                </div>

                <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <li
                            key={feature.title}
                            className="flex flex-col gap-4 rounded-2xl border border-line bg-paper/95 p-6 shadow-lift transition duration-200 hover:-translate-y-0.5 hover:border-ember/50"
                        >
                            <div className="flex items-center gap-4">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ember-wash text-ember">
                                    {feature.icon}
                                </span>
                                <h3 className="font-display text-xl font-semibold text-ink">
                                    {feature.title}
                                </h3>
                            </div>
                            <p className="text-[0.95rem] leading-relaxed text-ink-soft">
                                {feature.content}
                            </p>
                        </li>
                    ))}
                </ul>

                <div className="mt-16 flex flex-col items-center gap-5 rounded-2xl bg-espresso px-6 py-14 text-center text-paper shadow-lift sm:px-12">
                    <p className="eyebrow-dark">Free consultation</p>
                    <p className="max-w-[22ch] font-display text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
                        Talk through the system <span className="text-ember-light">before you spend anything.</span>
                    </p>
                    <p className="max-w-[52ch] text-base leading-relaxed text-paper/70">
                        No commitment and no upfront cost. I&apos;ll help you work out what
                        the system needs to do and what it will take to build it.
                    </p>
                    <a
                        href="https://linkedin.com/in/sinduadityajanadi"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex items-center gap-2 rounded-lg bg-ember px-5 py-3 text-base font-medium text-paper transition duration-200 hover:bg-ember-dark active:scale-[0.98]"
                    >
                        Start the conversation
                    </a>
                </div>
            </div>
        </section>
    );
}
