import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-scroll'
import { fadeAnimation, slideAnimation } from './Motion'

import { motion } from 'framer-motion'
import "./CSS/btn.css"


export default function Hero() {

    const [isHovered, setIsHovered] = useState(false);
    const [displayText, setDisplayText] = useState('₹4999');

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplayText(isHovered ? '₹4999' : <del className=''>₹9999</del>);
        }, 700); // Delay in milliseconds

        return () => clearTimeout(timer);
    }, [isHovered]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div>


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
                                        The most intense course with detailed teaching.

                                    </div>
                                </div>
                                <motion.div {...slideAnimation("left")} >
                                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                        Data Analytics Masters - 2023 Edition
                                    </h1>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">
                                        India's No.1 Data Analytics Course having multiple features to excel and make you job ready for various roles.
                                    </p>
                                </motion.div>
                                <motion.div {...fadeAnimation} className="mt-10 flex items-center gap-x-6">
                                    <a href="https://rzp.io/l/ZepDAM">
                                        <button class={`btn ${isHovered ? '' : ''}`} onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}>
                                            <span class="btn-text-one ">Buy Now</span>
                                            <span className={`btn-text-two transform translate-x-4`} > {displayText}</span>
                                        </button>
                                    </a>
                                    <a href="https://zep.thinkific.com/enroll/2355150?et=free_trial" className="text-base font-semibold leading-7 text-gray-900">
                                        Free preview <span aria-hidden="true">→</span>
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}
