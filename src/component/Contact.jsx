
import { useFormik } from "formik";
import * as Yup from "yup";


export default function Contact() {


    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const formik = useFormik({

        initialValues: {
            name: "",
            email: "",
            country: "India",
            lastname: "",
            number: "",
            textArea: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(20, "Name must be 20 characters or less.")
                .required("Name is required"),

            lastname: Yup.string()
                .max(20, "Surname must be 20 characters or less.")
                .required("Name is required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            number: Yup.string()
                .matches(/^[6-9]\d{9}$/, { message: "Please enter valid number.", excludeEmptyString: false })



        }),
        onSubmit: (values, { resetForm }) => {
            // Call your function to send form data to Google Sheets API here
            sendFormData(values);

            // Reset the form after submission
            resetForm();
        },

    });
    const sendFormData = async (formData) => {
        try {
            // Make an API request to send form data to Google Sheets using the fetch() method or any other library like Axios
            const response = await fetch('https://v1.nocodeapi.com/svs/google_sheets/sVHcbmuNatWcikSf?tabId=Sheet1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify([formData]),
            });
            await response.json()

            if (response.ok) {
                console.log('Form data sent successfully!');
            } else {
                console.error('Failed to send form data.');
            }
        } catch (error) {
            console.error('Error sending form data:', error);
        }
    };
    console.log(formik.values)
    return (
        <>


            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div>

            <div className=" md:w- sm:w-3/2 mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                            <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                        </div>
                    </div>
                    <div className=" mx-2 sm:mx-2 md:mx-24 mt-5 md:col-span-2 md:mt-0">
                        <form action="#" method="POST" onSubmit={formik.handleSubmit}>
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-slate-50 px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="name" className={`block font-latoBold text-sm pb-2 ${formik.touched.name && formik.errors.name
                                                ? "text-red-400"
                                                : ""
                                                } `}>
                                                {formik.touched.name && formik.errors.name
                                                    ? formik.errors.name
                                                    : "Name"}
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                autoComplete="off"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                value={formik.values.name}
                                                onChange={formik.handleChange}
                                                placeholder="Enter your name"
                                                onBlur={formik.handleBlur}
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="lastname" className={`block font-latoBold text-sm pb-2 ${formik.touched.lastname && formik.errors.lastname
                                                ? "text-red-400"
                                                : ""
                                                } `} >
                                                {formik.touched.lastname && formik.errors.lastname
                                                    ? formik.errors.lastname
                                                    : "lastName"}
                                            </label>
                                            <input
                                                type="text"
                                                name="lastname"
                                                id="lastname"
                                                autoComplete="family-name"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                value={formik.values.lastname}
                                                onChange={formik.handleChange}
                                                placeholder="Enter your surname"
                                                onBlur={formik.handleBlur}
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="email" className={`block font-latoBold text-sm pb-2 ${formik.touched.email && formik.errors.email
                                                ? "text-red-400"
                                                : ""
                                                } `}>
                                                {formik.touched.email && formik.errors.email
                                                    ? formik.errors.email
                                                    : "Email"}
                                            </label>
                                            <input
                                                type="text"
                                                name="email"
                                                id="email"
                                                autoComplete="off"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                placeholder="Enter your email"
                                                onBlur={formik.handleBlur}
                                            />

                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="number" className={`block font-latoBold text-sm pb-2 ${formik.touched.number && formik.errors.number
                                                ? "text-red-400"
                                                : ""
                                                } `}>

                                                {formik.touched.number && formik.errors.number
                                                    ? formik.errors.number
                                                    : "Number"}
                                            </label>
                                            <input
                                                type="number"
                                                name="number"
                                                id="number"
                                                autoComplete="family-name"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                value={formik.values.number}
                                                onChange={formik.handleChange}
                                                placeholder="Enter your number"
                                                onBlur={formik.handleBlur}
                                            />
                                        </div>
                                        <br></br>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                Country
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                value={formik.values.country}
                                                onChange={formik.handleChange}
                                                placeholder="Enter your country"
                                            >

                                                <option>India</option>
                                            </select>
                                        </div>

                                    </div>
                                    <label for="message" class="block mb-2 text-sm font-medium text-gray-700 pt-4">What is your query? (Explain in detail)</label>
                                    <textarea
                                        name="textArea"
                                        id="textArea"
                                        rows="4"
                                        className="block p-2.5 w-full text-sm   bg-gray-50 rounded-lg border border-gray-300"
                                        placeholder="Write your thoughts here..."
                                        value={formik.values.textArea}
                                        onChange={formik.handleChange}
                                    >
                                    </textarea>

                                </div>
                                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div>


        </>
    )
}
