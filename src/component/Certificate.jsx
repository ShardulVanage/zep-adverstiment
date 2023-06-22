import { useState } from 'react'

import certifidcate from '../Img/google-data-analyst.jpeg'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default function Certificate() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="isolate bg-white">
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">

                <defs>
                    <linearGradient
                        id="9b2541ea-d39d-499b-bd42-aeea3e93f5ff"
                        x1="1155.49"
                        x2="-78.208"
                        y1=".177"
                        y2="474.645"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#9089FC" />
                        <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                </defs>

            </div>
            <div className="px-6 pt-6 lg:px-8">

            </div>
            <main>
                <div className="relative py-24 sm:py-32 lg:pb-40">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl text-center">
                            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Become a Certified Data/Business/BI Analyst
                            </h1>
                            <p className="mt-6 text-xl leading-8 text-gray-600">
                                Boost Your Career with In-Demand Data and Business Analysis Skills: Get Certified Today!
                            </p>

                        </div>
                        <div className="mt-16 flow-root sm:mt-24">
                            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                                <img
                                    src={certifidcate}
                                    alt="App screenshot"
                                    width={2000}
                                    height={600}
                                    className="rounded-md shadow-2xl ring-1 ring-gray-900/10 "
                                />
                            </div>
                        </div>
                        <div className='mt-12 p-4 '>

                            <button href="https://zep.thinkific.com/order?ct=7e7f1a00-7ae4-4d33-b79e-8e5f3f00fa92"
                                type="button" class="shadow-2xl text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">
                                Get Certified Now!</button>
                        </div>
                    </div>
                    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                        <svg
                            className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                            viewBox="0 0 1155 678"
                        >
                            <path
                                fill="url(#b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1)"
                                fillOpacity=".3"
                                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                            />
                            <defs>
                                <linearGradient
                                    id="b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1"
                                    x1="1155.49"
                                    x2="-78.208"
                                    y1=".177"
                                    y2="474.645"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9089FC" />
                                    <stop offset={1} stopColor="#FF80B5" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </main>
        </div>
    )
}
