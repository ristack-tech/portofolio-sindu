const entries = [
    {
        title: "Suite Aplikasi Bisnis Modular",
        description:
            "Laravel-based modular ERP for PT Lims Yanwo Indonesia manufacturing production lines with 4 core modules: Quality Control, Raw Material Intake, Attendance, and Payroll.",
        meta: "Laravel, MySQL, Livewire",
        linkLabel: "GitHub",
        href: "https://github.com/Sinduaditya",
    },
    {
        title: "Web E-Voting Blockchain",
        description:
            "Decentralized e-voting system based on Ethereum. Won 3rd Place at DINACOM 2024 and 3rd Place at HITECH 2025 with NFT implementation as vote verification token.",
        meta: "Ethereum, Solidity, NFT",
        linkLabel: "GitHub",
        href: "https://github.com/Sinduaditya",
    },
    {
        title: "Pengalaman lainnya",
        description:
            "More experience at Bengkel Koding, RISTACK, HIMTI UDINUS, and others. My LinkedIn profile has the full detail.",
        meta: "Full-time, freelance, organizations",
        linkLabel: "LinkedIn",
        href: "https://linkedin.com/in/sinduadityajanadi",
    },
];

export default function ExtraProjectBottom() {
    return (
        <section className="mt-24 border-y border-line bg-paper py-20 sm:mt-32 sm:py-24">
            <div className="shell">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="eyebrow">More work</p>
                        <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
                            Other side projects
                        </h2>
                    </div>
                    <p className="max-w-[38ch] text-[0.95rem] leading-relaxed text-ink-soft">
                        Everything else lives on{" "}
                        <a
                            href="https://github.com/Sinduaditya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-ember underline underline-offset-4 hover:text-ember-dark"
                        >
                            my GitHub
                        </a>
                        .
                    </p>
                </div>

                <ul className="mt-10 border-t border-line">
                    {entries.map((entry, index) => (
                        <li key={entry.title} className="border-b border-line">
                            <div className="group grid gap-3 py-7 transition-colors duration-200 hover:bg-cream/70 md:grid-cols-12 md:items-baseline md:gap-6 md:px-2">
                                <span className="tabular eyebrow md:col-span-1">
                                    0{index + 5}
                                </span>
                                <div className="md:col-span-4">
                                    <h3 className="font-display text-xl font-semibold text-ink transition-colors duration-200 group-hover:text-ember sm:text-2xl">
                                        {entry.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-ink-faint">{entry.meta}</p>
                                </div>
                                <p className="max-w-[60ch] text-[0.95rem] leading-relaxed text-ink-soft md:col-span-6">
                                    {entry.description}
                                </p>
                                <a
                                    href={entry.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-max items-center gap-2 text-sm font-medium text-ink transition-colors duration-200 hover:text-ember md:col-span-1 md:justify-end"
                                >
                                    {entry.linkLabel}
                                    <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
