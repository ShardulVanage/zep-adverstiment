import simg from "../Img/SatyajitPattnaik.png"
import { AiFillYoutube } from 'react-icons/ai'
const people = [
    {

        name: 'Satyajit Pattnaik',
        role: 'Lead Data Consultant',
        imageUrl: simg,
        twitterUrl: 'https://youtube.com/@SatyajitPattnaik',
        linkedinUrl: 'https://www.linkedin.com/in/satyajitpattnaik/',
    },


    // More people...
]

export default function Instructor() {
    return (
        <div className="bg-gray-900">
            <div className="mx-auto max-w-7xl py-12 px-6 lg:px-4 lg:py-24">
                <div className="space-y-12">
                    <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet your Instructor</h2>
                        <p className="text-xl text-gray-300">

                        </p>
                    </div>
                    <ul role="list" className="space-y-4 lg:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0  lg:gap-8">
                        {people.map((person) => (
                            <li key={person.name} className="rounded-lg bg-gray-800 py-10 px-6 text-center xl:px-10 xl:text-left lg:h-2/3">
                                <div className="space-y-6 xl:space-y-10">
                                    <img className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56" src={person.imageUrl} alt="" />
                                    <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                                        <div className="space-y-1 text-lg font-medium leading-6">
                                            <h3 className="text-white">{person.name}</h3>
                                            <p className="text-indigo-400">{person.role}</p>
                                        </div>

                                        <ul role="list" className="flex justify-center space-x-5">
                                            <li>
                                                <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-300">
                                                    <span className="sr-only">Twitter</span>
                                                    <AiFillYoutube className="h-7 w-8" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-300">
                                                    <span className="sr-only">LinkedIn</span>
                                                    <svg className="h-6 w-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))}
                        <div className="text-slate-300 text-lg pt-4  sm:ml-16  text-left ">


                            <p className="[&>span]:text-white">Certified Data Scientist & Tensorflow Certified Developer <br />
                                Number of students trained so far: <span>10000+</span> <br />
                                Average Trainer Score: <span>9+</span> <br />
                                <br />


                                <span>12+ years experience working in Data Analytics and Data Sciences </span>across different industry verticals including telecom, cyber security, insurance, e-commerce etc.
                                <br />
                                <br />
                                <span> Expertised on BI tech stack including Power BI & Tableau.</span>
                                <br />
                                Analytic experience includes ETL, descriptive and predictive data analysis, data visualization​, Machine Learning & Deep Learning
                                <br />
                                <br />
                                Conducted various training sessions on Data Science, Analytics, ML & AI, as well as attended various International conferences as keynote speaker & guest on Data Science, ML & AI in various universities across APAC Region.
                                <br />
                                <br />
                                <span>Over 8+ years of training & teaching experience into Data Science & Analytics</span>
                                <br />
                                <br />
                                <span> Owner of more than 20+ data communities over the globe, and runs a small YouTube channel on my name having 38,000+ subscribers</span></p>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
