import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { fadeAnimation, slideAnimation } from './Motion'
import logo from '../Img/logo.png'
import { motion } from 'framer-motion'
import "./CSS/btn.css"

import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

export default function Hero() {
const [open, setOpen] = React.useState(false);
 
    const handleClickToOpen = () => {
        setOpen(true);
    };
 
    const handleToClose = () => {
        setOpen(false);
    };


    const [nextMonthDate, setNextMonthDate] = useState(new Date());
    const [isHovered, setIsHovered] = useState(false);
    const [displayText, setDisplayText] = useState('₹4999');
    useEffect(() => {
        const nextMonth = new Date();
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        setNextMonthDate(nextMonth);
    }, []);

    const options = { month: 'short' };
    const nextMonthDateString = nextMonthDate.toLocaleDateString('en-US', options);
const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000); // Updates every second, change as needed

    return () => clearInterval(interval);
  }, []);
    useEffect(() => {
       
       
        const timer = setTimeout(() => {
            setDisplayText(isHovered ? '₹4999' : <del className=''>₹9999</del>);
        }, 700); // Delay in milliseconds

        return () => clearTimeout(timer);
    }, [isHovered]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    return (
        <div>



            <div className="relative bg-white">
                <div className="mx-auto max-w-7xl   ">
                    <div className="relative z-10 lg:w-full lg:max-w-2xl">
                        <svg
                            className="absolute inset-y-0 right-7 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <polygon points="0,0 90,0 50,100 0,100" />
                        </svg>



                        <div className="relative py-24 px-8 sm:py-40 lg:pb-56 lg:px-2 lg:pr-0">
                            <div className='flex  items-center mb-14 sm:text-lg text-sm '>
                                {/* bg-gradient-to-tr from-indigo-900 via-indigo-700 to-indigo-900 */}
                                <a href="https://zepanalytics.com/">

                                    <div className=' shadow-2xl flex flex-row items-center border-2 border-indigo-400 rounded-full  text-blue-600 p-2 pl-2 '> <img src={logo} alt="" className="border-2 sm:w-10 w-8 border-white p-0 rounded-full bg-white   " />
                                        <h1 className='pl-2 font-medium'>Zep Analytics</h1></div>
                                </a>


                            </div>
                            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                                <div className="hidden sm:mb-10 sm:flex">
                                    <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                        The most intense course with detailed teaching.

                                    </div>
                                </div>
                                <motion.div {...slideAnimation("left")} >
                                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                        Data Analytics Masters - {currentYear} Edition
                                    </h1>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">
                                        India's No.1 Data Analytics Course having multiple features to excel and make you job ready for various roles.
                                    </p>
                                </motion.div>
                                <motion.div {...fadeAnimation} className="mt-10 flex items-center gap-x-6">
                                    {/* <a href="https://rzp.io/l/ZepDAM">
                                        <button class={`btn ${isHovered ? '' : ''}`} onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}>
                                            <span class="btn-text-one ">Buy Now</span>
                                            <span className={`btn-text-two transform translate-x-4`} > {displayText}</span>
                                        </button>
                                    </a> */}
                                    <Link to='pricing' smooth>
                                        <a >
                                            <button class={`btn ${isHovered ? '' : ''}`} onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}>
                                                <span class="btn-text-one ">Buy Now</span>
                                                <span className={`btn-text-two transform translate-x-4`} > {displayText}</span>
                                            </button>
                                        </a>
                                    </Link>
                                    <a href="https://zep.thinkific.com/enroll/2355150?et=free_trial" className="text-base font-semibold leading-7 text-gray-900">
                                        Free preview <span aria-hidden="true">→</span>
                                    </a>
                                </motion.div>
                            </div>
                            <p className=' mt-12 text-lg font-semibold sm:mr-72 mr-18'>Join us before {nextMonthDateString} 1 to avail 50% Discount</p>
                            <button onClick={handleClickToOpen} className='sm:mr-72 mr-18 mt-8 sm:w-2/4 overflow-hidden w-full py-6 text-white drop-shadow-md rounded-2xl  text-lg flex items-center justify-center h-4 ' style={{background: "linear-gradient(  to top, #6e61ab, #4b3987, #6e61ab)"}} >
                                contact us
                            </button>
                            
                                
                            <Dialog fullWidth={"sm"} open={open} onClose={handleToClose}>
                                <DialogTitle > <h1 className='text-2xl font-semibold'>Get in touch </h1></DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                       <form class="w-full">
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
         <input type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
         <input type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="number" name="floating_number" id="floating_number" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">whatsapp number</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
       <input type="number" name="floating_phno" id="floating_phno" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone.no</label>
  </div>

  <div class="relative z-0 w-full mb-5 group">
       <label for="underline_select" class="sr-only">profession</label>
<select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
    <option disabled selected>Profession</option>
    <option value="Working">Working</option>
    <option value="Student">Student</option>
    
</select>
       
       {/* <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
  */}
  </div>
  <div class="relative z-0 w-full mb-5 group">
       <input type="text" name="floating_phno" id="floating_phno" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label for="floating_msg" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mesaage</label>
  </div>
 
  
  <button type="submit" class=" w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-purple-800 dark:hover:bg-purple-900 dark:focus:ring-purple-900">Submit</button>
</form>
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleToClose}
                                        color="primary" autoFocus>
                                        Close
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </div>
                </div>
                <div className="bg-white lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}
