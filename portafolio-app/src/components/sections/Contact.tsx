import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {

    const [state, handleSubmit] = useForm("xqarvkpb");

    return (
        <div className="relative isolate px-6 lg:px-8 mx-auto py-24">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                {/* IZQUIERDA*/}
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Let's build something <span className="text-5xl text-indigo-500">great</span> together.
                    </h2>

                    <p className="mt-4 text-lg leading-8 text-gray-400">
                        I'm open to discuss new projects, creative ideas, or oportunities to be part of your visions.
                        I am mainly interested in Remote or Hybrid roles, but I am open to other options as well.
                    </p>

                    <p className="mt-4 text-lg leading-8 text-gray-400">
                        Feel free to reach out through the form or directly via email. I'll get back to you as soon as possible!
                    </p>

                    <div className="mt-8 space-y-4">
                        {/* Email Directo */}
                        <div className="flex gap-4 items-center text-gray-300">
                            <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                                <EnvelopeIcon className="h-6 w-6 text-indigo-400" />
                            </div>
                            <a href="mailto:contact@mariocasas.dev" className="hover:text-white transition-colors">
                                contact@mariocasas.dev
                            </a>
                        </div>

                        {/* Ubicación */}
                        <div className="flex gap-4 items-center text-gray-300">
                            <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                                <MapPinIcon className="h-6 w-6 text-indigo-400" />
                            </div>
                            <span>Monterrey, México</span>
                        </div>
                    </div>

                    {/* Redes Sociales Pequeñas (links) */}
                    <div className="mt-10 flex gap-6">
                        <a href="https://github.com/MaCaDo1136" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                            <span className="sr-only">GitHub</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                        </a>
                        <a href="https://linkedin.com/in/mario-casas-donjuan/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                        </a>
                    </div>
                </div>

                {/* DERECHA:Formspree */}
                <div className="rounded-2xl bg-slate-900/50 p-8 border border-white/10 shadow-2xl">

                    {/* Si ya se envió, mostramos mensaje de éxito */}
                    {state.succeeded ? (
                        <div className="h-full flex flex-col items-center justify-center text-center py-12">
                            <div className="rounded-full bg-green-500/10 p-4 mb-4">
                                <EnvelopeIcon className="h-12 w-12 text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                            <p className="text-gray-400">Thanks for reaching out, Mario. <br /> I'll get back to you shortly at your email.</p>
                        </div>
                    ) : (
                        /* Si no, mostramos el formulario */
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

                            {/* Nombre */}
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-white">
                                    Name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="given-name"
                                        required
                                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                    />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-1" />
                                </div>
                            </div>

                            {/* Mensaje */}
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                                    Message
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        required
                                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                    />
                                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm mt-1" />
                                </div>
                            </div>

                            {/* Botón de Enviar */}
                            <div className="mt-8 sm:col-span-2">
                                <button
                                    type="submit"
                                    disabled={state.submitting}
                                    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    {state.submitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    )}

                </div>
            </div>
        </div>
    )
}