import {
    BriefcaseIcon,
    VideoCameraIcon,
    CodeBracketIcon,
    ViewfinderCircleIcon,
    AcademicCapIcon,
    ServerIcon,
} from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Live Instructor Led Classes.',
        description: 'Attend LIVE lectures by the instructors thrice the week.',
        icon: VideoCameraIcon,
    },
    {
        name: 'Course Completion Certificate',
        description: 'Get yourself certified after completition of the course.',
        icon: AcademicCapIcon,
    },
    {
        name: '2 Months Internship Certificate',
        description: 'We can also provide 2 Months internship certificate from our side if you wish to.',
        icon: BriefcaseIcon,
    },
    {
        name: 'Class Recordings.',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
        icon: ViewfinderCircleIcon,
    },
    {
        name: 'Access to Udemy Courses',
        description: 'If you enroll for the course you will get access to all of the Satyajit Pattnaik Udemy Courses for FREE!!!',
        icon: CodeBracketIcon,
    },
    {
        name: 'Project Based Learning with Intense Knowledge',
        description: 'Learn the skills by developing different projects throughout the sessions. ',
        icon: ServerIcon,
    },
]

export default function Feature() {
    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-semibold leading-8 tracking-tight text-indigo-400">Features of the course</h2>

                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        India's No.1 Data Analytics Course which has many features for you so you can excel and get job ready for various roles.
                    </p>
                </div>
            </div>

            <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                            <dt className="inline font-semibold text-white">
                                <feature.icon className="absolute top-1 left-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                                {feature.name}
                            </dt>{' '}
                            <dd className="inline">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
