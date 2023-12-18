/* This example requires Tailwind CSS v3.0+ */
import { Disclosure, } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon, } from '@heroicons/react/24/outline'


export default function Sylabus() {
    const faqs = [
        {
            question: "Introduction to Data Analytics",
            answer: [

                <a className=' font-light underline ' href='https://zep.thinkific.com/enroll/2355150?et=free_trial'>What is Data Analytics <span className='bg-black text-white py-1 px-2 rounded-lg text-xs ml-2'>Free Preview  </span></a>,

                "Importance of Data Analytics",
                <a className=' font-light underline ' href='https://zep.thinkific.com/enroll/2355150?et=free_trial'>Types of Data <span className='bg-black text-white py-1 px-2 rounded-lg text-xs ml-2'>Free Preview  </span></a>,


                "Types of Statistical Analysis",
                "Steps to obtain a Data Analytics solution",
                " Business Understanding",
                " Data Understanding",
                " Data Collection",
                " Data Preparation",
                " Data Modelling",
                " Deployment",
                "Use Case",
            ],
        },


        {
            question: "Python for Data Analytics",
            answer: [
                "Course Contents",
                <a className=' font-light underline ' href='https://zep.thinkific.com/enroll/2355150?et=free_trial'>Python Introduction <span className='bg-black text-white py-1 px-2 rounded-lg text-xs ml-2'>Free Preview  </span></a>,


                "Variables & Keywords",
                "Datatypes & Operators",
                "Data Structures - Lists",
                "Data Structures - Tuples",
                "Data Structures - Sets",
                "Data Structures - Dictionary",
                "Loops & Iteration",
                "Functions in Python",
                'File Handling',
                "Map Reduce Filter",
                " OOPS Concepts",
                "Control Structures in Python",

                "NumPy",
                "Pandas",
                "Data Visualization",
                "Matplotlib",
                "Seaborn",
                <b>Python Quiz </b>,
            ],
        },
        {
            question: "Exploratory Data Analysis",
            answer: [
                "Course Contents",
                "  Agenda",
                <a className=' font-light underline ' href='https://zep.thinkific.com/enroll/2355150?et=free_trial'>Data Analytics/Science Process <span className='bg-black text-white py-1 px-2 rounded-lg text-xs ml-2'>Free Preview  </span></a>,


                "  What is EDA",
                " Visualization",
                "Steps involved in EDA (Data Sourcing)",
                " Steps involved in EDA (Data Cleaning)",
                "Handle Missing Values (Theory)",
                "   Handle Missing Values (Code)",
                " Feature Scaling",
                "Feature Scaling (Standardization)",
                "Feature Scaling (Normalization)",
                "Feature Scaling (Code)",
                "Outlier Treatment (Theory)",
                " Outlier Treatment (Code)",
                "Invalid Data",
                "  Types of Data",
                "Types of Analysis",
                "Univariate Analysis",
                "Bivariate Analysis",
                "Multivariate Analysis",
                " Numerical Analysis",
                "Analysis (Code)",
                " Derived Metrics",
                "Feature Binning (Theory)",
                "Feature Binning (Theory)",
                " Feature Binning (Code)",
                "Feature Encoding",
                "Feature Encoding Detailed",
                "Feature Encoding (Code)",
                "Case Study",
                "Data Exploration (Case Study)",
                "Data Cleaning (Case Study)",
                "  Univariate Analysis (Case Study)",
                " Bivariate Analysis (Case Study)",
                "Bivariate Analysis (Case Study)",
                "EDA Report (Case Study)",
                <b>EDA Quiz</b>,
            ],
        },
        {
            question: "Business Statistics",
            answer: [
                " Course Contents",

                "Intro to Stats",

                "Chapter 1 - Agenda",

                "Descriptive Stats",

                "Inferential Stats",

                " Qualitative Data",

                "Quantitative Data",

                "Chapter 2 - Agenda",

                " Population vs Sample",

                "Why sampling is important?",

                "Types of sampling"
                ,
                "Probability Sampling"
                ,
                "Cluster Random Sampling",

                " Non probability sampling"
                ,
                "Chapter 3 - Agenda"
                ,
                "Measures of Central Tendency"
                ,
                " Mean"
                ,
                " Median"
                ,
                "Mode",

                "Measures of Dispersion",

                "   Range",

                "   IQR"
                ,
                "Mean Deviation"
                ,
                " Variance & Standard Deviation",

                " Why n-1 and not n",

                "Chapter 4 - Agenda",

                "Probability",

                "Addition Rule",

                "Independent Events",

                "Cumulative Probability"
                ,
                "Conditional Probability",

                " Bayes Theorem Part 1",

                "Bayes Theorem Part 2",

                "Chapter 5 - Agenda",

                " Uniform Distribution",

                "                Binomial Distribution",
                "    Poisson Distribution",

                "Normal Distribution Part 1",

                "      Normal Distribution Part 2",

                "Skewness",

                "Kurtosis",
                "Calculating Probability with Z-Score",

                "Z-Score Calculation Table",

                'Example',

                "Chapter 6 Agenda",

                "Correlation vs Covariance",

                " Covariance",

                "Correlation",

                "Chapter 7 - Agenda"
                ,
                " Hypothesis Testing",

                "Tailed Tests",

                " What is p-value?"
                ,
                "Types of Tests"
                ,
                "   T Test"
                ,
                "  Z Test",

                " ANOVA",

                "Chi Square",

                " Correlation",

                <b>Statistcs Quiz</b>,
            ],
        },
        {
            question: "SQL for Data Analysis",
            answer: [
                "Course Contents",
                "Data Architecture - File server vs Client server",
                "Installation of MySQL Workbench",
                "Introduction to SQL",
                "Constraints in SQL",
                "Table Basics - DDLs",
                "Table Basics - DQLs",
                "Table Basics - DMLs",
                "Joins in SQL",
                "Data Import & Export",
                "Aggregation Functions",
                "String Functions",
                "Date Time Functions",
                "Regular Expressions",
                "Nested Queries",
                "Views",
                "Stored Procedures",
                "Windows Function",
                "SQL-Python connectivity",
                <b>SQL Quiz</b>,
            ],
        },
        {
            question: "Microsoft Excel",
            answer: [
                "Course Contents",
                "Pre-defined Functions",
                "Datetime Functions",
                "String Functions",
                "Mathematical Functions",
                "Lookup (Hlookup,Vlookup)",
                "Logical & Error Functions",
                "Statistical Functions",
                "Images in Excel",
                "Excel Formatting",
                "Custom Formatting",
                "Conditional Formatting",
                "Charts in Excel",
                "Data Analysis using Excel",
                "Pivot Tables",
                "Dashboarding in Excel",
                "Others",
                <b>Excel Quiz</b>,
            ],
        },

        {
            question: "Power BI",
            answer: [
                "Course Contents",
                "Introduction",
                "Introduction to Power BI",
                "Life Hack to get Power BI Pro [2022]",
                "Power BI Desktop",
                "Power BI Services",
                "Power Query Editor",
                "Data Profiling",
                "PBI Group by",
                "PBI Applied Steps",
                "Append vs Merge",
                "PBI Visuals",
                "Power BI Charts",
                "Introduction to DAX",
                "Implicit Measures",
                "DAX Formula",
                "Basic DAX Functions",
                "Date Functions",
                "CALENDAR Functions",
                "Contexts Row vs Filter",
                "CALCULATE & FILTER Functions",
                "IF ELSE Conditions",
                "Time Intelligence Functions",
                "X vs Non X Functions",
                "Tool tips , Drill Throughs",
                "Relationships",
                "KPIs",
                "Administration in Power BI",
                "Security in Power BI",
                "PBI Best Practices",
                "Formatting",
                "EDA",
                <b>Power BI Quiz</b>,
            ],
        },
        {
            question: "Tableau",
            answer: [
                "Course Contents",
                "What is Data Visualization",
                "BI Process",
                "About Tableau - What is Tableau?",
                "About Tableau - how to use Tableau?",
                "About Tableau - Features of Tableau",
                "Tableau Architecture",
                "Tableau vs Power BI",
                "Tableau Desktop",
                "Relationships, Joins & Unions",
                "Sets in Tableau",
                "Groups in Tableau",
                "Hierarchies in Tableau",
                "Filters in Tableau",
                "Highlighting",
                "Device Deisgner",
                "Parameters",
                "Data Blending & Mark Size",
                "Transparency",
                "Date Aggregation",
                "Generated Fields",
                "Discrete vs Continuous",
                "Charts in Tableau",
                "Pivot Tables in Tableau",
                "LOD Expressions",
                "Calculated Fields",
                "Formatting",
                "Forecasting in Tableau",
                "Analytics in Tableau",
                "Dashboarding",
                <b>Tableau Quiz</b>,
            ],
        },
        {
            question: "Predictive Analytics",
            answer: [
                "Course Contents",
                "Introduction to PA",
                "Predictive Analytics Process",
                "How does the Model Work?",
                "Why Predictive Modelling?",
                "Applications of Predictive Modelling",
                "What is Machine Learning",
                "Types of Machine Learning",
                "Classification",
                "k-nearest neighbors (Theory)",
                "k-NN Example (Excel)",
                "Classification Practicals Part 1",
                <a className=' font-light underline ' href='https://zep.thinkific.com/enroll/2355150?et=free_trial'>k-nearest neighbors (Code) <span className='bg-black text-white py-1 px-2 rounded-lg text-xs ml-2'>Free Preview  </span></a>,



                "Decision Trees (Theory)",
                "Decision Tree (Code)",
                "Random Forests",
                "Random Forests (Code)",
                "Boosting Algorithms",
                "Boosting (Code)",
                "Regression (Theory)",
                "Regression(Code)",
                "Clustering (Theory)",
                "Clustering (Code)",
                "Time Series Forecasting (Theory)",
                "Time Series Forecasting (Code)",
                <b>Predictive Analytics Quiz</b>,
            ],
        },
        {
            question: "ETL & Data Warehousing",
            answer: [
                "Course Contents",
                "Introduction to ETL & Data Warehouse",
                "What is ETL?",
                <a className=' font-light underline ' href='https://zep.thinkific.com/enroll/2355150?et=free_trial'>ETL Tools & Azure Data Factory Architecture<span className='bg-black text-white py-1 px-2 rounded-lg text-xs ml-2'>Free Preview  </span></a>,

                "What is Data Warehouse?",
                "Benefits of Data Warehousing",
                "Data Warehouse Structure",
                "Why do we need Staging environment?",
                "What are Data Marts?",
                "Data Lakes",
                "Data Lake vs Data Warehouse",
                "Elements of Data Lake",
                <b>ETL & Data Warehousing Quiz</b>,
            ],
        },
        {
            question: "Interview  Guides",
            answer: [
                "Python", "Statistics", "Power BI", "Tableau", "SQL"
            ],
        },
        {
            question: "Capstone Project",
            answer: [
                "Power BI - Live Project",
                "Tableau - Live Project",
                "Financial Dashboard",
" ⁠Sales Analytics",
"⁠Cyber Security Breaches",
" ⁠Telecom Analytics",
" ⁠HR Analytics",
            ],
        },
        {
            question: "Final Assignment",
            answer: [
                "This is a graded assignment, a score of 70% and above guarantees you a course completion certificate, and a score of   80% and above guarantees an internship opportunity from Zep or their partner companies"

            ],
        },
        // Add more FAQs here...
    ];
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
                <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                    <h2 className="text-5xl font-bold leading-10 tracking-tight text-gray-900">Course curriculum</h2>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        {faqs.map((faq, index) => (
                            <Disclosure as="div" key={index} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                <span className="text-base font-semibold leading-7">{faq.question}</span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    {open ? (
                                                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    ) : (
                                                        <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    )}
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="flex w-full items-start justify-between text-left text-gray-900 my-2 mx-4">
                                            <div className=''>

                                                <p className="text-base leading-7 text-gray-600 " >{faq.answer.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                                </p>
                                            </div>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}

                    </dl>


                </div>
                <p className='mt-16'><b>Note:</b> The internships are not guaranteed to be paid, but it helps a lot to gain industry level knowledge.</p>
            </div>
        </div>
    )
}
