
import clsx from 'clsx'

import { Container } from './Container'
import { Expandable } from './Expandable'



const testimonials = [
    [
        {
            content: "I had an excellent learning experience with Zep Analytics. The course structure was comprehensive and covered relevant topics. Satyajit Sir explained data analytics concepts clearly, using real-life examples. Joining this course opened up exciting future prospects.",
            author: {
                name: 'Chethan LC',
                role: 'BI Analyst 3',
                image: "https://zepanalytics.com/images/testimonial/Chethan-modified.png",
            },
        },
        {
            content:
                'Grateful to Zep Analytics and Satyajit Sir for guiding me in learning data science. Real-time live classes, well-structured syllabus, and doubt-solving sessions provided great value. Highly recommend this course for data science transition. Thanks to the Zep Analytics team.',
            author: {
                name: 'Satyajit Mohanty',
                role: 'Data Analyst',
                image: "https://zepanalytics.com/images/testimonial/Satyajit-modified.png",

            },
        },
        {
            content:
                'Comprehensive program on Data Analytics. Informative and well-structured sessions. Supportive instructors. Valuable industry-level use cases and real-world projects. Thanks to Mr. Satyajit Pattnaik for exceptional AI, Data Science, and Analytics program.',
            author: {
                name: "Meena Rajendran",
                role: "GIS Analyst",
                image: "https://zepanalytics.com/images/testimonial/Meena-modified.png"
            }
        },
    ],
    [
        {
            content: "Amazing experience with Zep. Grateful to Satyajit! Highly recommend for real-time exposure, theoretical knowledge, online-live demonstrations, and coding practice. Thanks to the entire team :)",
            author: {
                name: "Debi Prasad Mishra",
                role: "Senior Business Intelligence Engineer",
                image: "https://zepanalytics.com/images/testimonial/Debi-modified.png",
            },
        },
        {
            content: "Took Satyajit's course after watching his YouTube videos on Data Science. Effective mentoring and comprehensive curriculum helped secure a Data Engineering role in an MNC. Covers basics and advanced topics, understanding student needs.",
            author: {
                name: "Shyam Sundhar",
                role: "Data Engineer",
                image: "https://zepanalytics.com/images/testimonial/Shyam-modified.png"
            }
        },
        {
            content: "Zep Analytics provided top-notch training in data analytics. The instructors were knowledgeable, and the course materials were comprehensive. I gained valuable skills that have boosted my career prospects.",
            author: {
                name: 'Rahul Kapoor',
                role: 'Business Analyst',
                image: "https://images.unsplash.com/photo-1648183185045-7a5592e66e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2042&q=80",
            },
        },
    ],
    [
        {
            content: "Thanks to Zep Analytics, I mastered data science techniques that are in high demand. The course was well-structured, and the trainers were experts in their field. I highly recommend Zep Analytics for anyone aspiring to become a data scientist",
            author: {
                name: 'Priya Sharma',
                role: 'Data Scientist',
                image: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            },
        },
        {
            content: "Zep Analytics' data visualization course was a game-changer for me. I learned practical tips and industry best practices that enhanced my data presentation skills. Zep Analytics is the go-to platform for anyone seeking to create impactful visualizations.",
            author: {
                name: 'Ravi Desai',
                role: 'Data Analyst',
                image: "https://images.unsplash.com/photo-1533636721434-0e2d61030955?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            },
        },
        {
            content: "Enrolling in Zep Analytics' Big Data Engineering program was a smart decision. The course covered Hadoop, Spark, and other essential big data technologies. The experienced instructors and hands-on projects prepared me for a successful career in big data engineering.",
            author: {
                name: "Neha Patel",
                role: "Big Data Engineer",
                image: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            },
        },
    ],
]

function Testimonial({ author, children }) {
    return (
        <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
            <blockquote>
                <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
                    {children}
                </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center">
                <div className="overflow-hidden rounded-full bg-slate-50">
                    <img
                        className="h-12 w-12 object-cover"
                        src={author.image}
                        alt=""
                        width={48}
                        height={48}
                    />
                </div>
                <div className="ml-4">
                    <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
                        {author.name}
                    </div>
                    <div className="mt-1 text-sm text-slate-600">{author.role}</div>
                </div>
            </figcaption>
        </figure>
    )
}

export function Testimonials() {
    return (
        <section className="py-8 sm:py-10 lg:py-16">
            <Container className="text-center">
                <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
                    Some kind words from early customers...
                </h2>
                <p className="mt-4 text-lg tracking-tight text-slate-600">
                    I worked with a small group of early access customers to make sure all
                    of the content in the book was exactly what they needed. Hears what
                    they had to say about the finished product.
                </p>
            </Container>
            <Expandable>
                {({ isExpanded }) => (
                    <>
                        <ul
                            role="list"
                            className=" mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
                        >
                            {testimonials
                                .map((column) => column[0])
                                .map((testimonial, testimonialIndex) => (
                                    <li key={testimonialIndex} className="lg:hidden">
                                        <Testimonial author={testimonial.author}>
                                            {testimonial.content}
                                        </Testimonial>
                                    </li>
                                ))}
                            {testimonials.map((column, columnIndex) => (
                                <li
                                    key={columnIndex}
                                    className={isExpanded ? undefined : 'hidden lg:list-item'}
                                >
                                    <ul role="list">
                                        {column
                                            .slice(0, isExpanded ? undefined : 2)
                                            .map((testimonial, testimonialIndex) => (
                                                <li
                                                    key={testimonialIndex}
                                                    className={clsx(
                                                        testimonialIndex === 0 && 'hidden lg:list-item',
                                                        testimonialIndex === 1 && 'lg:mt-8',
                                                        testimonialIndex > 1 && 'mt-8'
                                                    )}
                                                >
                                                    <Testimonial author={testimonial.author}>
                                                        <div className='text-base'>
                                                            {testimonial.content}
                                                        </div>
                                                    </Testimonial>
                                                </li>
                                            ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                        <Expandable.Button>Read more testimonials</Expandable.Button>
                    </>
                )}
            </Expandable>
        </section>
    )
}
