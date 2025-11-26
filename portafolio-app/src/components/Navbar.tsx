import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import ResumePDF from '../assets/Resume_MarioCasasDonjuan.pdf'

const navigation = [
    { name: 'Home', href: '#home', current: false },
    { name: 'About Me', href: '#about-me', current: false },
    { name: 'Skills', href: '#skills', current: false },
    { name: 'Projects', href: '#projects', current: false },
    { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="fixed top-0 left-0 w-full bg-gray-900 z-50 shadow-md">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">

                    {/* Botón de Menú Móvil (Hamburguesa) */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>

                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        {/* LOGO / NOMBRE */}
                        <div className="flex shrink-0 items-center">
                            <CodeBracketIcon className="h-8 w-8 text-indigo-500 mr-2" />
                            <span className="text-white font-bold text-xl">Mario.dev</span>
                        </div>

                        {/* Links de Escritorio (Desktop) */}
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Seccion de la derecha */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                        <Menu as="div" className="relative ml-3">
                            <div>
                                <MenuButton className="group relative flex items-center gap-x-2 rounded-full bg-gray-800 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:bg-gray-700 transition-colors">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <span className="font-medium hidden sm:block text-blue-50">
                                        Social Links
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-400 group-hover:text-white">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-4.18a.75.75 0 111.08 1.04l-4.25 4.78a.75.75 0 01-1.08 0l-4.25-4.78a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </MenuButton>
                            </div>
                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-leave:duration-75 data-enter:ease-out data-leave:ease-in"
                            >
                                <MenuItem>
                                    <a href="https://github.com/MaCaDo1136" target="_blank" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-none">
                                        GitHub
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="https://linkedin.com/in/mario-casas-donjuan/" target="_blank" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-none">
                                        LinkedIn
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="mailto:contact@mariocd.dev" target="_blank" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-none">
                                        Contact me by mail
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a href={ResumePDF} className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-none">
                                        Download Resume
                                    </a>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>

            {/* Menú Móvil (Se despliega al dar click en hamburguesa) */}
            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}