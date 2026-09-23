// import pic from '../assets/keyboard-coffee-desk-monitor.jpg'
import { motion } from 'motion/react'
import DotSVG from './SVGs/DotSVG'

const About = () => {
  return (
    <section className=" py-32" id='about'>
        <div className="md:w-4/5 mx-auto px-4 md:px-0">
            {/* <motion.div 
            className="flex items-center gap-x-5 pt-10 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            viewport={{ once: true }}
            >
                <svg width="20" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="2" fill="#D9D9D9"/>
                </svg>
                <p className="uppercase text-gray-500 tracking-[2.5px]">About me</p>
            </motion.div> */}
            <motion.h4 
            className="font-bold text-4xl my-4 md:my-8 text-center md:mt-0 dark:text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            viewport={{ once: true }}
            >
                About Me
            </motion.h4>
            <div className="">
                <div className="flex-1 p-2 md:p-6 flex md:flex-row flex-col md:gap-x-8">
                    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    viewport={{ once: true }}
                    className='flex md:w-2/3 w-full'
                    >
                        <div className='relative p-6 md:p-8'>
                            {/* Corner frame - top left */}
                            <span className='absolute -top-2 -left-4 w-10 h-[2px] bg-gray-600 dark:bg-white'></span>
                            <span className='absolute -top-2 -left-4 w-[2px] h-10 bg-gray-600 dark:bg-white'></span>

                            {/* Corner frame - bottom right */}
                            <span className='absolute -bottom-2 -right-4 w-10 h-[2px] bg-gray-600 dark:bg-white'></span>
                            <span className='absolute -bottom-2 -right-4 w-[2px] h-10 bg-gray-600 dark:bg-white'></span>

                            <p className="dark:text-white text-gray-600 text-lg">I&apos;m a frontend-focused software engineer with over 4 years of experience building clean, functional web and mobile applications. My approach combines solid code architecture with intuitive interfaces, aiming for products that feel effortless to use.</p>
                            <p className='mt-5 dark:text-white text-gray-600 text-lg'>Having worked with growing teams and fast-paced products, I bring a versatile skill set and an adaptable mindset to every project. I&apos;m particularly drawn to minimal design that emphasizes content and functionality, believing that simplicity often leads to the most powerful user experiences.</p>
                            <p className='mt-5 dark:text-white text-gray-600 text-lg'>I work primarily with HTML, CSS, JavaScript, React, and Tailwind for the web, and React Native with Expo for building cross-platform mobile apps. I&apos;m also increasingly drawn to data science and analytics, using Python and R to turn data into insight. Based in Accra, Ghana, I&apos;m always eager to collaborate, learn, and contribute to projects that solve real problems.</p>
                            <p className='mt-5 dark:text-white text-gray-600 text-lg'>Outside of coding, I enjoy exploring emerging technologies, particularly machine learning and AI, and brainstorming ideas that lead to meaningful, well-designed solutions.</p>
                        </div>
                    </motion.div>
                    <div className='flex flex-col md:w-1/3 w-full md:mt-0 mt-8'>
                        <div className='flex flex-col mb-6'>
                            <motion.div 
                            className="flex items-center gap-x-2 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                            viewport={{ once: true }}
                            >
                                <svg width="20" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="16" height="2" fill="#D9D9D9"/>
                                </svg>
                                <p className="uppercase text-gray-600 tracking-[0.5px]">Experience</p>
                            </motion.div>
                            <div className='flex items-start gap-x-8'>
                                <div className='flex gap-x-4'>
                                    <div className='mt-1 flex flex-col items-center justify-center'>
                                        <DotSVG/>
                                        <div className='divider h-full w-[1px] bg-gray-400 ml-[3px] mt-1'></div>
                                    </div>
                                    <motion.div
                                        className=''
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6, duration: 0.3, ease: "easeIn" }}
                                        viewport={{ once: true }}
                                    >
                                        <p className='text-md font-light text-gray-400'>January 2026 - Present</p>
                                        <p className='text-xl font-semibold dark:text-white'>Frontend Engineer Lead</p>
                                        <p className='text-md font-light text-gray-500'>Voima, Ghana</p>
                                        <p className='dark:text-gray-300 text-gray-600'>Led the frontend development team in building and maintaining the Voima mobile app using React Native/Expo. Collaborated with backend developers to ensure seamless integration and optimal performance.</p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <motion.div 
                            className="flex items-center gap-x-2 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                            viewport={{ once: true }}
                            >
                                <svg width="20" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="16" height="2" fill="#D9D9D9"/>
                                </svg>
                                <p className="uppercase text-gray-600 tracking-[0.5px]">Education</p>
                            </motion.div>
                            <div className='flex items-start gap-x-8'>
                                <div className='flex gap-x-4'>
                                    <div className='mt-1 flex flex-col items-center justify-center'>
                                        <DotSVG/>
                                        <div className='divider h-full w-[1px] bg-gray-400 ml-[3px] mt-1'></div>
                                    </div>
                                    <motion.div
                                        className=''
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6, duration: 0.3, ease: "easeIn" }}
                                        viewport={{ once: true }}
                                    >
                                        <p className='text-md font-light text-gray-400'>January 2024 - Present</p>
                                        <p className='text-xl font-semibold dark:text-white'>BSc Computer Science and Statistics</p>
                                        <p className='text-md font-light text-gray-500'>University of Ghana</p>
                                        <p className='dark:text-gray-300 text-gray-600'>Pursuing coursework in software engineering, data structures and algorithms, and applied statistics, building the technical and analytical foundation behind my work.</p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About