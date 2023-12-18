import { XMarkIcon } from '@heroicons/react/20/solid';

import React, { useState, useEffect } from 'react';
export default function Banner() {

    const [disabled, setDisabled] = useState(false);
const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000); // Updates every second, change as needed

    return () => clearInterval(interval);
  }, []);



    const handleClick = () => {
        setDisabled(true);
    };

    if (disabled) {
        return null; // If disabled, don't render the banner
    }

    return (
        <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50/80 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
            {/* Banner content */}
            <div>
                <div
                    className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5]/80 to-[#9089fc]/80 opacity-30"
                    aria-hidden="true"
                >
                    {/* Background shape */}
                </div>
                <div
                    className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5]/80 to-[#9089fc]/80 opacity-30"
                    aria-hidden="true"
                >
                    {/* Background shape */}
                </div>
                <div className="flex sm:flex-wrap items-center gap-x-4 gap-y-2 justify-between flex-row">
                    <p className=" sm:leading-6 text-gray-900 text-sm flex sm:flex-row flex-col">
                        <strong className="font-semibold  ">Data Analytics Masters {currentYear}.</strong>
                        <hr />
                        <svg viewBox="0 0 2 2" className="mx-2  h-0.5 w-0.5 fill-current hidden sm:inline " aria-hidden="true">
                            <circle cx={1} cy={1} r={1} />
                        </svg>
                        Zep Analytics. Join our community!!
                    </p>

                    <a
                        href="https://t.me/+cHd6h0_F3ZA0ZmRl"
                        className="ml-12 sm:ml-0 flex-none rounded-full bg-gray-900 px-3.5 py-1 sm:text-sm text-xs font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                    >
                        Join Us <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>

            </div>
            {/* Dismiss button */}
            <div className="flex flex-1 justify-end">
                <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]" onClick={handleClick}>

                    <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
                </button>
            </div>
        </div>
    );
}















// <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50/80 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
// <div
//     className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl "
//     aria-hidden="true"
// >
//     <div
//         className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5]/80 to-[#9089fc]/80 opacity-30"
//         style={{
//             clipPath:
//                 'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
//         }}
//     />
// </div>
// <div
//     className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
//     aria-hidden="true"
// >
//     <div
//         className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5]/80 to-[#9089fc]/80 opacity-30"
//         style={{
//             clipPath:
//                 'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
//         }}
//     />
// </div>
// <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
//     <p className="text-sm leading-6 text-gray-900">
//         <strong className="font-semibold">GeneriCon 2023</strong>
//         <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
//             <circle cx={1} cy={1} r={1} />
//         </svg>
//         Data Analytics Masters 2023 . Zep Analytics . Join us before {nextMonthDateString} 1 to avail 50% discount
//     </p>
//     <a
//         href="#"
//         className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
//     >
//         Register now <span aria-hidden="true">&rarr;</span>
//     </a>
// </div>
// <div className="flex flex-1 justify-end">
//     <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
//         <span className="sr-only">Dismiss</span>
//         <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
//     </button>
// </div>
// </div>