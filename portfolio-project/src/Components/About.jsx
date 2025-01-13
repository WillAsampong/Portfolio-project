import pic from '../assets/keyboard-coffee-desk-monitor.jpg'
import { motion } from 'motion/react'

const About = () => {
  return (
    <section className="md:h-screen" id='about'>
        <div className="md:w-4/5 mx-auto px-4 md:px-0">
            <motion.div 
            className="flex items-center justify-center gap-x-5 pt-10 mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            viewport={{ once: true }}
            >
                <svg width="20" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="2" fill="#D9D9D9"/>
                </svg>
                <p className="uppercase text-gray-500 tracking-[2.5px]">About me</p>
            </motion.div>
            <div className="flex items-center md:flex-row flex-col">
                <motion.div 
                className="about-img flex-1"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                viewport={{ once: true }}
                >
                    <img src={pic} alt="" className='rounded-md'/>
                </motion.div>
                <div className="text flex-1 p-2 md:p-6 items-center">
                    <motion.h4 
                    className="font-bold text-2xl my-5 md:mt-0"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    viewport={{ once: true }}
                    >About Me</motion.h4>
                    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    viewport={{ once: true }}
                    >
                        <p className="">I&apos;m currently studying Computer Science and Statistics at the University of Ghana. With over three years of self-study experience, I specialize in web development using modern tools like HTML, CSS, JavaScript, React, and Tailwind. Additionally, I have a growing interest in data science and analytics, leveraging Python and R for insights. Based in Accra, Ghana, I&apos;m eager to collaborate, learn, and contribute to exciting projects.</p>
                        {/* <br/> */}
                        <p className='mt-5'>Outside of coding, I enjoy exploring emerging technologies, particularly in machine learning and AI, and brainstorming creative ideas to develop innovative and impactful solutions that address real-world challenges</p>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
