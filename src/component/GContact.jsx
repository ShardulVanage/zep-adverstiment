import React from 'react'

function GContact() {
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
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                            <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                        </div>
                    </div>



                    <iframe className=' w-3/4  h-screen'
                        src="https://docs.google.com/forms/d/e/1FAIpQLSeHeWD9MVKdtxbc6wyaC0c8dqJIYN5-1JeENBLiAaDFOqFukQ/viewform?embedded=true"
                    >Loading…</iframe>

                </div>
            </div>



        </div >
    )
}

export default GContact