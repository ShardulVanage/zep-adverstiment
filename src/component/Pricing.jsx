/* This example requires Tailwind CSS v3.0+ */
import { CheckIcon } from '@heroicons/react/24/outline'

const tiers = [
    {
        id: 'tier-hobby',
        name: 'For Indian student',
        href: 'https://pages.razorpay.com/ZepDAM',
        priceMonthly: "₹4999",
        ndprice: "₹9999",

        features: [
            'Self Paced', 'Intense Syllabus', '24/7 WhatsApp Support', 'Interview Prep Kit', 'Course & Internship Certificate', 'Resume Preparation',
        ],
    },
    {
        id: 'tier-team',
        name: 'For International student',
        href: 'https://pages.razorpay.com/ZepDAMINT',
        priceMonthly: "$70",
        ndprice: "$140",

        features: [
            'Self Paced', 'Intense Syllabus', '24/7 WhatsApp Support', 'Interview Prep Kit', 'Course & Internship Certificate', 'Resume Preparation',
        ],
    },
]

export default function Example() {
    return (
        <div className="bg-gray-900">
            <div className="relative overflow-hidden pt-32 pb-96 lg:pt-40">
                <div>
                    <img
                        className="absolute bottom-0 left-1/2 w-[1440px] max-w-none -translate-x-1/2"
                        src="https://tailwindui.com/img/component-images/grid-blur-purple-on-black.jpg"
                        alt=""
                    />
                </div>
                <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                        <h2 className="text-3xl font-semibold leading-8 text-indigo-400">Pricing</h2>
                        <p className="mt-2 text-4xl font-bold tracking-tight text-white">
                            The right price for you, <br className="hidden sm:inline lg:hidden" />
                            whoever you are
                        </p>
                        <p className="mt-6 text-lg leading-8 text-white/60">
                            Unlock your learning potential with affordable prices that fit every budget!
                        </p>
                    </div>
                </div>
            </div>
            <div className="flow-root bg-white pb-32 lg:pb-40">
                <div className="relative -mt-80">
                    <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-8">
                            {tiers.map((tier) => (
                                <div key={tier.name} className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10">
                                    <div className="p-8 sm:px-10 sm:pt-9">
                                        <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600" id={tier.id}>
                                            {tier.name}
                                        </h3>
                                        <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
                                            {tier.priceMonthly}

                                            <span className='pl-2 text-3xl text-indigo-600'><del >{tier.ndprice}</del><span className='text-xl text-black pl-2'>50%</span><span className=' pl-1 text-lg text-black '>Off</span> </span>
                                        </div>

                                    </div>
                                    <div className="flex flex-1 flex-col p-2 pt-0">
                                        <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
                                            <ul role="list" className="space-y-6">
                                                {tier.features.map((feature) => (
                                                    <li key={feature} className="flex items-start">
                                                        <div className="flex-shrink-0">
                                                            <CheckIcon className="h-6 w-6 text-indigo-500" aria-hidden="true" />
                                                        </div>
                                                        <p className="ml-3 text-sm leading-6 text-gray-600">{feature}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="mt-8">
                                                <a
                                                    href={tier.href}
                                                    className="inline-block w-full rounded-lg bg-indigo-500 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-indigo-700"
                                                    aria-describedby={tier.id}
                                                >
                                                    Buy Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}





// import { CheckCircleIcon } from '@heroicons/react/20/solid'

// const includedFeatures = [
//     'Self Paced', 'Intense Syllabus', '24/7 WhatsApp Support', 'Interview Prep Kit', 'Course & Internship Certificate', 'Resume Preparation',
// ]

// export default function Pricing() {
//     return (
//         <div name='pricing' className="bg-gray-100">
//             <div className="pt-12 sm:pt-16 lg:pt-20">
//                 <div className="mx-auto max-w-7xl px-6 lg:px-8">
//                     <div className="text-center">
//                         <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
//                             Pricing
//                         </h2>
//                         <p className="mt-4 text-xl text-gray-600">

//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
//                 <div className="relative">
//                     <div className="absolute inset-0 h-1/2 bg-gray-100" />
//                     <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
//                         <div className="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
//                             <div className="flex-1 bg-white px-6 py-8 lg:p-12">
//                                 <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Lifetime Course</h3>
//                                 <p className="mt-6 text-base text-gray-500">

//                                 </p>
//                                 <div className="mt-8">
//                                     <div className="flex items-center">
//                                         <h4 className="flex-shrink-0 bg-white pr-4 text-base font-semibold text-indigo-600">
//                                             What's included
//                                         </h4>
//                                         <div className="flex-1 border-t-2 border-gray-200" />
//                                     </div>
//                                     <ul role="list" className="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0">
//                                         {includedFeatures.map((feature) => (
//                                             <li key={feature} className="flex items-start lg:col-span-1">
//                                                 <div className="flex-shrink-0">
//                                                     <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
//                                                 </div>
//                                                 <p className="ml-3 text-sm text-gray-700">{feature}</p>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
//                                 <p className="text-lg font-medium leading-6 text-gray-900">Pay once, own it forever</p>
//                                 <div className="mt-4 flex flex-col items-center justify-center text-5xl font-bold tracking-tight text-gray-900">
//                                     <span className='pl-20 text-4xl text-indigo-400'><del >₹9999</del><span className='text-xl text-black pl-2'>50%</span><span className=' pl-1 text-lg text-black '>Off</span> </span>
//                                     <span>₹4999  </span>
//                                     <span className="ml-3 text-xl font-medium tracking-normal text-gray-500"></span>
//                                 </div>
//                                 <p className="mt-4 text-sm">
//                                     <a className="font-medium text-gray-500 underline cursor-pointer">
//                                         <hr />
//                                     </a>
//                                 </p>
//                                 <div className="mt-6">
//                                     <div className="rounded-md shadow">
//                                         <a
//                                             href="https://rzp.io/l/ZepDAM"
//                                             className="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900"
//                                         >
//                                             Get Access
//                                         </a>
//                                     </div>
//                                 </div>
//                                 <div className="mt-6">
//                                     <div className="rounded-md shadow flex flex-col items-center justify-center border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900">
//                                         <a
//                                             href="https://rzp.io/l/ZepDAM"
//                                             className=""
//                                         >
//                                             Get Access
//                                         </a>

//                                         <p className='text-xs'>(for international student</p>
//                                     </div>
//                                 </div>
//                                 <div className="mt-4 text-sm">

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
