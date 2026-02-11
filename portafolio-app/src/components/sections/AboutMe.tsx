export default function AboutMe() {
    return (
        <div className="relative isolate px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Izquierda */}
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">About Me</h2>

                    <h3 className="text-xl font-semibold text-indigo-400 mb-4">
                        Engineer by training, Developer at heart.
                    </h3>

                    <p className="text-gray-300 leading-relaxed mb-4">
                        I'm currently pursuing a degree in Robotics and Digital Systems at Tecnológico de Monterrey,
                        where I've sharpened my skills in software development, data science, and embedded systems.
                        I have strong foundation in OOP, Control algorithms, and system architecture. I've proven my teamwork and leadership skills
                        in competitive robotics, leading technical and practical strategy.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        My passion for technology goes beyond academics. I obsess over code efficiency and control,
                        which is why I drive <strong className="text-indigo-200">Arch Linux</strong> daily and spend my weekends optimizing my
                        personal Homelab, <em className="text-indigo-200">'The Matrix'</em>, with Raspberry Pis and custom VPNs.
                    </p>
                </div>

                {/* Derecha */}
                <div className="rounded-2xl bg-slate-900/40 border border-white/10 p-6 hover:border-indigo-500/30 transition-all duration-300 group">

                    {/* INTERESTS */}
                    <h3 className="text-white mt-0 mb-4 flex items-center gap-2 font-semibold text-lg">
                        Interests
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none pl-0">
                        {['Homelabs & Self-hosting', 'Linux & Open Source', 'Data Science', 'Robotics & IoT'].map((item) => (
                            <li key={item} className="bg-white/5 px-4 py-2 rounded-lg shadow-sm text-sm font-medium text-gray-200 border border-white/10 text-center">
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* TECH STACK */}
                    <h3 className="flex items-center gap-2 mt-8 mb-4 font-semibold text-lg text-white">
                        Main Tech Stack
                    </h3>

                    <div className="space-y-4">
                        <div>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Languages</span>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs">Python (Native)</span>
                                <span className="px-2 py-1 rounded bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 text-xs">Java (Adv)</span>
                                <span className="px-2 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs">C++ (Adv)</span>
                                <span className="px-2 py-1 rounded bg-gray-500/10 text-gray-300 border border-gray-500/20 text-xs">C (Int)</span>
                            </div>
                        </div>

                        <div>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Operating Systems</span>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <span className="px-2 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs">Arch Linux</span>
                                <span className="px-2 py-1 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs">Ubuntu Server</span>
                                <span className="px-2 py-1 rounded bg-gray-500/10 text-gray-300 border border-gray-500/20 text-xs">Proxmox</span>
                                <span className="px-2 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs">MacOS</span>
                                <span className="px-2 py-1 rounded bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 text-xs">Windows</span>
                            </div>
                        </div>

                        <div>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Tools</span>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 border border-green-500/20 text-xs">NeoVim</span>
                                <span className="px-2 py-1 rounded bg-red-500/10 text-red-400 border border-red-500/20 text-xs">Git</span>
                                <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs">Docker</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}