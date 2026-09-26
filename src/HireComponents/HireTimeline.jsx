const steps = [
    {
        when: "0 days",
        title: "Discovery & requirements",
        body: "The first phase is understanding your business needs. Is this system for multi-tenant, IoT, ERP, or something else? What features are required? We settle that here.",
    },
    {
        when: "1–2 days",
        title: "Architecture & planning",
        body: "I produce a system architecture design, database structure, and project timeline. We review it together until everything lines up.",
    },
    {
        when: "7–10 days",
        title: "Backend development",
        body: "With the architecture approved, I start building the backend in Laravel: database design, API endpoints, and the integrations the system needs.",
    },
    {
        when: "10–20 days",
        title: "Integration & testing",
        body: "Testing, integration with your frontend or other systems, performance work, and verification that everything holds up in production.",
    },
    {
        when: "20 days onward",
        title: "Deployment & maintenance",
        body: "Deployment to production, then post-launch support: maintenance, bug fixes, and new features as the product grows.",
    },
];

export default function HireTimeline() {
    return (
        <section id="process" className="scroll-mt-32 py-8">
            <div className="shell flex flex-col items-start gap-10 lg:flex-row lg:gap-16">
                <div className="flex w-full flex-col lg:sticky lg:top-36 lg:w-1/3">
                    <p className="eyebrow">The timeline</p>
                    <p className="mb-3 mt-3 font-display text-3xl font-semibold leading-snug tracking-[-0.02em] text-ink md:text-4xl">
                        How we build <span className="main-gradient">your backend system.</span>
                    </p>
                    <p className="max-w-[42ch] text-base leading-relaxed text-ink-soft">
                        The process is detailed, so here are the core steps we take
                        when building a backend that has to scale.
                    </p>
                </div>

                <div className="relative w-full lg:w-2/3">
                    <span
                        aria-hidden="true"
                        className="absolute inset-y-2 left-[7px] w-px bg-ember/30"
                    />
                    <ol className="space-y-8">
                        {steps.map((step) => (
                            <li key={step.title} className="relative pl-10">
                                <span
                                    aria-hidden="true"
                                    className="absolute left-[2px] top-1.5 h-3 w-3 rounded-full border-2 border-ember bg-cream"
                                />
                                <p className="tabular text-sm font-medium text-ember">
                                    {step.when}
                                </p>
                                <h3 className="mt-1 font-display text-xl font-semibold text-ink sm:text-2xl">
                                    {step.title}
                                </h3>
                                <p className="mt-2 max-w-[58ch] text-[0.95rem] leading-relaxed text-ink-soft">
                                    {step.body}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
