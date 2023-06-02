import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import "./CSS/btn.css"


export default function Hero() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="relative bg-white">
            <div className="mx-auto max-w-7xl   ">
                <div className="relative z-10 lg:w-full lg:max-w-2xl">
                    <svg
                        className="absolute inset-y-0 right-7 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="0,0 90,0 50,100 0,100" />
                    </svg>



                    <div className="relative py-32 px-8 sm:py-40 lg:py-56 lg:px-2 lg:pr-0">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                            <div className="hidden sm:mb-10 sm:flex">
                                <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                    The most intense course with detailed teaching.{' '}
                                    <a href="#" className="whitespace-nowrap font-semibold text-indigo-600">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        Read more <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                Data Analytics Masters - 2023 Edition
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                India's No.1 Data Analytics Course which has many features for you so you can excel and get job ready for various roles.
                            </p>
                            <div className="mt-10 flex items-center gap-x-6">
                                <button class="btn">
                                    <span class="btn-text-one">Buy Now</span>
                                    <span class="btn-text-two">₹4999</span>
                                </button>
                                <a href="#" className="text-base font-semibold leading-7 text-gray-900">
                                    Free preview <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
                    alt=""
                />
            </div>
        </div>
    )
}
