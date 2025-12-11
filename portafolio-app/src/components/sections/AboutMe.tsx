export default function AboutMe() {
    return (
        <div className="relative isolate px-6 lg:px-8">
            <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Izquierda */}
                <div>
                    <h2>About Me</h2>

                    <h3>
                        Engineer by training, Developer at heart.
                    </h3>

                    <p>
                        I’m currently pursuing my degree at Tecnológico de Monterrey,
                        blending the rigor of physics and calculus with the creativity
                        of software development. My background in robotics (FRC Voltec #6647)
                        taught me how to work under pressure, but my curiosity led me
                        deep into the world of Data Science and Backend Engineering.
                    </p>
                    <p>
                        It’s not enough for code to just work; I obsess over efficiency and control.
                        That’s why I drive <strong>Arch Linux</strong> daily and spend my weekends optimizing my
                        personal Homelab, <em>'The Matrix'</em>, with Raspberry Pis and custom VPNs.
                    </p>
                </div>

                {/*Derecha*/}
                <div className="bg-gray-100 rounded-2xl p-8 ring-1 ring-gray-900/5">

                    {/* INTERESTS */}
                    <h3 className="text-gray-900 mt-0 flex items-center gap-2">
                        Interests
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none pl-0">
                        {['Homelabs & Self-hosting', 'Linux & Open Source', 'Data Science', 'Robotics & IoT'].map((item) => (
                            <li key={item} className="bg-white px-4 py-2 rounded-lg shadow-sm text-sm font-medium text-gray-700 border border-gray-100">
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* TECH STACK */}
                    <h3 className="flex items-center gap-2 mt-4">
                        Main Tech Stack
                    </h3>

                    <div className="space-y-4">
                        <div>
                            <span className="text-sm font-bold text-gray-900 uppercase tracking-wide">Languages</span>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <span className="bg-blue-100 text-blue-700 ">Python (Native)</span>
                                <span className="bg-yellow-100 text-yellow-800 ">Java (Adv)</span>
                                <span className="bg-purple-100 text-purple-700 ">C++ (Adv)</span>
                                <span className="bg-gray-200 text-gray-700 ">C (Int)</span>
                            </div>
                        </div>

                        <div>
                            <span className="text-sm font-bold text-gray-900 uppercase tracking-wide">Operating Systems</span>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <span className="bg-indigo-100 text-indigo-700 ">Arch Linux</span>
                                <span className="bg-orange-100 text-orange-700 ">Ubuntu Server</span>
                                <span className="bg-gray-200 text-gray-700 ">Proxmox</span>
                            </div>
                        </div>

                        <div>
                            <span className="text-sm font-bold text-gray-900 uppercase tracking-wide">Tools</span>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <span className="bg-green-100 text-green-700 ">NeoVim</span>
                                <span className="bg-red-100 text-red-700 ">Git</span>
                                <span className="bg-blue-100 text-blue-700 ">Docker</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}