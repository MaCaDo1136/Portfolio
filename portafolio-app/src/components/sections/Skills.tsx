import {
    ChartBarIcon,
    CommandLineIcon,
    ServerIcon,
    CheckCircleIcon
} from '@heroicons/react/24/outline'

export default function Skills() {
    return (
        <div className="relative isolate px-6 lg:px-8 max-w-7xl mx-auto">

            {/* Intro */}
            <div className="mb-12">
                <h2>Technical Expertise</h2>
                <p className="max-w-3xl">
                    I don't just write code; I engineer solutions. My skill set spans the full
                    lifecycle of data-driven applications: from system configuration
                    to predictive modeling.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* DATA SCIENCE & ML */}
                <div className="h-full rounded-2xl bg-slate-900/40 border border-white/5 p-6 transition-all duration-300 hover:border-teal-500/50 hover:bg-slate-900/60 hover:-translate-y-2 hover:shadow-xl hover:shadow-teal-500/10 group">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-teal-500/10 rounded-lg group-hover:bg-teal-500/20 transition-colors">
                            <ChartBarIcon className="h-6 w-6 text-teal-400" />
                        </div>
                        <h3 className="!m-0 text-xl text-teal-50">Data Science & ML</h3>
                    </div>

                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <CheckCircleIcon className="h-6 w-6 text-teal-500/50 flex-shrink-0 mt-0.5" />
                            <div>
                                <strong className="text-gray-200 block text-sm">Data Wrangling</strong>
                                <span className="text-xs text-gray-500">Cleaning and structuring complex datasets using <span className="text-teal-300">Pandas</span> and <span className="text-teal-300">NumPy</span>.</span>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircleIcon className="h-6 w-6 text-teal-500/50 flex-shrink-0 mt-0.5" />
                            <div>
                                <strong className="text-gray-200 block text-sm">Visualization</strong>
                                <span className="text-xs text-gray-500">Visual narratives with <span className="text-teal-300">Matplotlib</span> & <span className="text-teal-300">Seaborn</span>.</span>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircleIcon className="h-6 w-6 text-teal-500/50 flex-shrink-0 mt-0.5" />
                            <div>
                                <strong className="text-gray-200 block text-sm">Predictive Modeling</strong>
                                <span className="text-xs text-gray-500">Regression, Classification, and Clustering algorithms.</span>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircleIcon className="h-6 w-6 text-teal-500/50 flex-shrink-0 mt-0.5" />
                            <div>
                                <strong className="text-gray-200 block text-sm">Model Evaluation</strong>
                                <span className="text-xs text-gray-500">Precision, Recall, F1-Score, and ROC analysis testing.</span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* SOFTWARE & SYSTEMS */}
                <div className="h-full rounded-2xl bg-slate-900/40 border border-white/5 p-6 transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-900/60 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10 group">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
                            <CommandLineIcon className="h-6 w-6 text-indigo-400" />
                        </div>
                        <h3 className="!m-0 text-xl text-indigo-50">Software & Systems</h3>
                    </div>

                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <CheckCircleIcon className="h-6 w-6 text-indigo-500/50 flex-shrink-0 mt-0.5" />
                            <div>
                                <strong className="text-gray-200 block text-sm">FullStack Developer</strong>
                                <span className="text-xs text-gray-500">
                                    Solid knowledge of Data Structures.<span className="text-indigo-300"> Python/Go/C++/Java</span> Backend experience,<span className="text-indigo-300"> SQL-based</span> Database management, and<span className="text-indigo-300"> React/HTML</span> based Frontend experience.
                                </span>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircleIcon className="h-6 w-6 text-indigo-500/50 flex-shrink-0 mt-0.5" />
                            <div>
                                <strong className="text-gray-200 block text-sm">Advanced Linux User</strong>
                                <span className="text-xs text-gray-500">Daily driver: <span className="text-indigo-300">Arch Linux</span> with <span className="text-indigo-300">Hyprland</span>. Experience with server administration.</span>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircleIcon className="h-6 w-6 text-indigo-500/50 flex-shrink-0 mt-0.5" />
                            <div>
                                <strong className="text-gray-200 block text-sm">Modern Workflows</strong>
                                <span className="text-xs text-gray-500"><span className="text-indigo-300">Git/GitHub</span> collaboration, <span className="text-indigo-300">CI/CD</span> basics, and <span className="text-indigo-300">Bash</span> scripting automation.</span>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircleIcon className="h-6 w-6 text-indigo-500/50 flex-shrink-0 mt-0.5" />
                            <div>
                                <strong className="text-gray-200 block text-sm">Containerization</strong>
                                <span className="text-xs text-gray-500">Deployment and isolation using <span className="text-indigo-300">Docker</span> & docker-compose.</span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* HOMELAB & OPS */}
                <div className="h-full rounded-2xl bg-slate-900/40 border border-white/5 p-6 transition-all duration-300 hover:border-orange-500/50 hover:bg-slate-900/60 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10 group">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                            <ServerIcon className="h-6 w-6 text-orange-400" />
                        </div>
                        <h3 className="!m-0 text-xl text-orange-50">Homelab & Ops</h3>
                    </div>

                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <CheckCircleIcon className="h-6 w-6 text-orange-500/50 flex-shrink-0 mt-0.5" />
                            <div>
                                <strong className="text-gray-200 block text-sm">Hardware & IoT</strong>
                                <span className="text-xs text-gray-500">Self-hosting on <span className="text-orange-300">Raspberry Pi</span> clusters & NAS config.</span>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircleIcon className="h-6 w-6 text-orange-500/50 flex-shrink-0 mt-0.5" />
                            <div>
                                <strong className="text-gray-200 block text-sm">Networking</strong>
                                <span className="text-xs text-gray-500">VPNs (Wireguard), <span className="text-orange-300">DNS</span>, <span className="text-orange-300">Ports</span> & <span className="text-orange-300">SSH</span> tunneling.</span>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircleIcon className="h-6 w-6 text-orange-500/50 flex-shrink-0 mt-0.5" />
                            <div>
                                <strong className="text-gray-200 block text-sm">DevOps Basics</strong>
                                <span className="text-xs text-gray-500">System monitoring, Log analysis, and security hardening.</span>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircleIcon className="h-6 w-6 text-orange-500/50 flex-shrink-0 mt-0.5" />
                            <div>
                                <strong className="text-gray-200 block text-sm">Virtualization</strong>
                                <span className="text-xs text-gray-500"><span className="text-orange-300">Proxmox</span> and container orchestration.</span>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}