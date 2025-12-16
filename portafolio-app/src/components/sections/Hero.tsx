import '../../index.css';
import ProfilePic from '../../assets/Mario_Profile.jpeg'

function Hero() {
    return (
        <div className="relative isolate px-6 pt-20 pb-16 lg:px-8">
            <div className="mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Izquierda */}
                <div className="text-left, w-xl">
                    <div className="hidden sm:mb-4 sm:flex">
                        <span className="relative rounded-full px-3 py-1 text-base leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 transition-transform duration-300 hover:scale-105 cursor-pointer">
                            Available for new Projects
                        </span>
                    </div>

                    <h1>
                        Mario Casas Donjuan
                    </h1>

                    <h2>
                        Robotics Engineer | Data Scientist | Software Engineer
                    </h2>

                    <p>
                        Developer focused on data science, ML, and system efficiency.<br />
                        I like to build, control, and document systems effectively.
                    </p>

                    {/* Socieal media */}
                    <div className="mt-10 flex items-center gap-x-4">
                        <a
                            href="https://github.com/MaCaDo1136"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                        >
                            <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/mario-casas-donjuan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-md bg-[#0077b5] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#005582] transition-colors"
                        >
                            <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                            </svg>
                            LinkedIn
                        </a>

                        <a href="mailto:contact@mariocasas.dev">
                            Mail Me <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>

                {/* Derecha (foto) */}
                <div className="flex justify-center md:justify-end">
                    <div className="relative">
                        <div className="absolute inset-0 bg-indigo-600 blur-3xl opacity-20 rounded-full scale-90"></div>

                        <img
                            src={ProfilePic}
                            alt="Mario Profile"
                            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-2xl"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero