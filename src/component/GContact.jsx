import React from 'react'
import Location from './Location'

function GContact() {
    const people = [
        {
            name: 'Jane Cooper',
            title: 'Regional Paradigm Technician',
            role: 'Admin',
            email: 'janecooper@example.com',
            telephone: '+1-202-555-0170',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        },
        // More people...
    ]

    return (
        <div>
            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div>

            <div className=" md:w- sm:w-2/1 mt-10 sm:mt-0  ">
                <div className="md:grid sm:grid-cols-2  grid-cols-1 md:gap-1  justify-between">
                    <div className="md:col-span-1 h-1/2" >
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Contact</h3>
                            <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                            <Location />

                        </div>



                    </div>



                    <iframe className=' sm:w-3/4  w-full  h-screen'
                        src="https://docs.google.com/forms/d/e/1FAIpQLSf7ZhEiDC-yeOBjFBeScTjyqY_MLqGa1tsFJEGvXlunlnLeBg/viewform"
                    >Loading…</iframe>

                </div>
            </div>



        </div >
    )
}

export default GContact