interface Role {
    org: string;
    title: string;
    period: string;
    description: string;
    tags: string[];
}

export default function Experience() {
    const roles: Role[] = [
        {
            org: "SAP",
            title: "Software Intern — Talent Lab Program",
            period: "Jun 2026 — Jul 2026",
            description: "Automated a manual international call scheduling workflow for an internal support team, and documented it so they could maintain and extend it after handoff.",
            tags: ["Power Automate", "SharePoint", "Microsoft 365"]
        },
        {
            org: "Monterrey Rocket Lab",
            title: "Avionics Engineer",
            period: "Sep 2025 — Present",
            description: "Electronic systems, control logic, and telemetry for real-time data acquisition during flight.",
            tags: ["Embedded", "C++", "Telemetry"]
        },
        {
            org: "Team Voltec 6647 — FIRST Robotics",
            title: "Programming Mentor",
            period: "Jun 2025 — Present",
            description: "Supervise software architecture and mentor junior developers on OOP principles and best practices.",
            tags: ["Java", "Mentoring"]
        }
    ];

    return (
        <section className="p-8 text-white">
            <h2 className="text-3xl font-bold mb-8 tracking-tighter">Experience</h2>

            <div className="flex flex-col gap-4">
                {roles.map((r) => (
                    <div key={r.org}
                        className="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6">

                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <h3 className="text-xl font-bold">{r.org}</h3>
                            <span className="text-xs uppercase tracking-widest text-neutral-500">
                                {r.period}
                            </span>
                        </div>

                        <p className="mt-1 text-sm text-blue-400">{r.title}</p>
                        <p className="mt-3 text-sm text-neutral-300">{r.description}</p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {r.tags.map(tag => (
                                <span key={tag}
                                    className="text-[10px] uppercase tracking-widest border border-white/20 bg-black/50 px-2 py-1 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}