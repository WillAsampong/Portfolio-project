import pic from '../assets/keyboard-coffee-desk-monitor.jpg'

const About = () => {
  return (
    <section className="h-[600px]" id='about'>
        <div className="w-4/5 mx-auto">
            <div className="flex items-center justify-center gap-x-5 pt-10 mb-10">
                <svg width="20" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="2" fill="#D9D9D9"/>
                </svg>
                <p className="uppercase text-gray-500">About me</p>
            </div>
            <div className="flex">
                <div className="about-img flex-1">
                    <img src={pic} alt="" className='rounded-md'/>
                </div>
                <div className="text flex-1 p-6 items-center">
                    <h4 className="font-bold text-2xl mb-5">About Me</h4>
                    <p className="">I&apos;m currently studying Computer Science and Statistics at the University of Ghana. With over three years of self-study experience, I specialize in web development using modern tools like HTML, CSS, JavaScript, React, and Tailwind. Additionally, I have a growing interest in data science and analytics, leveraging Python and R for insights. Based in Accra, Ghana, I&apos;m eager to collaborate, learn, and contribute to exciting projects.</p>
                    {/* <br/> */}
                    <p className='mt-5'>Outside of coding, I enjoy exploring new technologies and brainstorming creative ideas for impactful solutions.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
