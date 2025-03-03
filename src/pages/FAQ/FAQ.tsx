import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Question from './Question.json';
import { FaEnvelope, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

interface FAQItem {
    Question: string;
    Answer: string;
}

function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleDropdown = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-10 px-4 md:py-16 md:px-8 lg:px-12 bg-green-200">
            {/* Header section */}
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-start">
                    <h3 className="mb-4 py-2 px-4 bg-green-500 text-white rounded-full text-center text-base sm:text-lg md:text-xl lg:text-2xl w-auto">
                        FAQ's
                    </h3>

                    <h2 className="text-orange-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight">
                        Got Any Questions?
                    </h2>
                    
                    <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl">
                        Find answers to the most asked questions about GDSC WOW Pune event
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="mt-8 md:mt-12 w-full">
                    <ul className="w-full max-w-4xl mx-auto">
                        {(Question.FAQ as FAQItem[]).map((Item, index) => (
                            <motion.div key={index} className="mb-3" initial={false}>
                                <motion.div 
                                    className={`flex items-center bg-white p-3 sm:p-4 md:p-5 w-full outline justify-between cursor-pointer text-xs sm:text-sm md:text-base lg:text-lg font-semibold ${openIndex === index ? 'rounded-t-xl' : 'rounded-xl'}`}
                                    onClick={() => toggleDropdown(index)}
                                    whileHover={{ backgroundColor: "#f8f8f8" }}
                                    whileTap={{ scale: 0.995 }}
                                >
                                    <h4 className="px-2 sm:px-3 md:px-5">{Item.Question}</h4>
                                    <motion.img
                                        src="/Doddles/arrows.svg"
                                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0"
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>

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
                                                className="p-3 sm:p-4 md:p-5 text-xs sm:text-sm md:text-base"
                                            >
                                                <p>{Item.Answer}</p>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </ul>
                </div>

                {/* Contact section */}
                <div className='flex flex-col gap-2 justify-center items-center mt-10 md:mt-16'>
                    <p className='text-sm sm:text-base md:text-lg'>Have more Questions?</p>
                    <a href="mailto:yashdivekar19@gmail.com" className='text-sm sm:text-base md:text-lg bg-green-500 text-white py-2 px-5 sm:py-3 sm:px-7 rounded-full font-semibold hover:bg-green-600 transition-colors'>
                        Contact Us
                    </a>

                    {/* Keep in touch section */}
                    <div className='w-full sm:w-[90%] md:w-[85%] lg:w-[80%] bg-slate-200 rounded-3xl outline p-4 sm:p-5 md:p-6 mt-8 md:mt-12'>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="md:w-3/5">
                                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight'>
                                    Keep in touch with GDGoC Pune for latest announcements
                                </h3>
                                <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-2">
                                    Stake out #WOWPune for the latest updates and news.
                                </p>
                            </div>
                            
                            <div className='flex flex-col gap-5 items-center mt-6 md:mt-0'>
                                <div className="flex gap-5 sm:gap-7 justify-center">
                                    <a href="mailto:contact@gdgocpune.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                                        <FaEnvelope className="text-xl sm:text-2xl hover:text-gray-600 transition duration-300 hover:scale-125" />
                                    </a>
                                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                        <FaLinkedin className="text-xl sm:text-2xl hover:text-gray-600 transition duration-300 hover:scale-125" />
                                    </a>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                        <FaInstagram className="text-xl sm:text-2xl hover:text-gray-600 transition duration-300 hover:scale-125" />
                                    </a>
                                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                        <FaTwitter className="text-xl sm:text-2xl hover:text-gray-600 transition duration-300 hover:scale-125" />
                                    </a>
                                </div>
                                <img src="/Logo/Main_wow_logo.svg" alt="WOW Pune Logo" className='w-32 sm:w-36 md:w-40 mt-3 md:mt-4' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;