import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Question from './Question.json';
import { FaEnvelope, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="p-5 pt-20 sm:pt-5 sm:p-12 bg-green-200 outline">
            <h3 className="mb-5 sm:ml-10 p-2 w-1/4 sm:h-12 sm:w-36 bg-green-500 text-white rounded-full text-center items-center text-lg sm:text-2xl">
                FAQ's
            </h3>

            <h2 className="text-orange-400 text-4xl sm:text-[100px] font-semibold">Got Any Questions?</h2>
            <p className="ml-1 sm:ml-4 text-basic sm:text-xl">Find answers to the most asked questions about GDSC WOW Pune event</p>

            <div className="flex flex-col md:flex-col items-center justify-center mt-5 w-full">
                <ul className="w-[90%] max-w-[1200px] mx-auto">
                    {Question["FAQ"].map((Item, index) => (
                        <motion.div 
                            key={index} 
                            className="mb-3"
                            initial={false}
                        >
                            {/* Question Box with conditional border radius */}
                            <motion.div 
                                className={`flex bg-white p-4 sm:p-5 w-full outline justify-between cursor-pointer text-sm sm:text-xl font-semibold ${
                                    openIndex === index ? 'rounded-t-xl' : 'rounded-xl'
                                }`}
                                onClick={() => toggleDropdown(index)}
                                whileHover={{ backgroundColor: "#f8f8f8" }}
                                whileTap={{ scale: 0.995 }}
                            >
                                <h4 className="px-5">{Item["Question"]}</h4>
                                <motion.img
                                    src="/Doddles/arrows.svg"
                                    className="mr-5 w-6 h-6 rotate-90 flex items-center justify-center mt-2 sm:mt-1"
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    />

                            </motion.div>

                            {/* Answer Box */}
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div 
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="bg-gray-200 rounded-b-xl w-full outline outline-t-0 overflow-hidden"
                                    >
                                        <motion.div 
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="p-5 ml-5 text-sm"
                                        >
                                            <p>{Item["Answer"]}</p>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </ul>
            </div>

            <div className='flex flex-col gap-2 justify-center items-center mt-10 justify-'>
                <p className=' text-basic sm:text-lg'>Have more Question?</p>
                <a href="mailto:yashdivekar19@gmail.com" className='text-lg sm:text-xl bg-green-500 text-white py-3 px-7 rounded-full font-semibold'>Contact Us</a>

                <div className='w-[80%] bg-slate-200 h-64 mt-10 rounded-3xl outline p-6 custom-shape'>
                    <h3 className='text-basic sm:text-4xl font-semibold'>Keep in touch with GDGoC Pune for latest annoucements</h3>
                    <spam className="text-sm sm:text-xl" >Stake out #WOWPune for the latest updates and news.</spam> 
                    <div className='flex flex-col sm:flex-row gap-5 justify-center sm:justify-end items-center mt-5'>
                        <div className="flex gap-7 sm:ml-auto sm:mr-15 text-black sm:justify-baseline">
                                            <a href="mailto:contact@gdgocpune.com" target="_blank" rel="noopener noreferrer">
                                            <FaEnvelope className=" text-2xl hover:text-gray-600 transition duration-300 hover:scale-[1.5]" />
                                            </a>
                                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin className=" text-2xl hover:text-gray-600 transition duration-300 hover:scale-[1.5]" />
                                            </a>
                                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                            <FaInstagram className=" text-2xl hover:text-gray-600 transition duration-300 hover:scale-[1.5]" />
                                            </a>
                                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                            <FaTwitter className=" text-2xl hover:text-gray-600 transition duration-300 hover:scale-[1.5]" />
                                            </a>
                                        </div>
                                        <img src="/Logo/Main_wow_logo.svg" alt=""  className='sm:w-[20%] w-2/3'/>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default FAQ;