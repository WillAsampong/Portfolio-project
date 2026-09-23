import pic from '../assets/profile-pic.jpg'
// import GithubSVG from "./SVGs/GithubSVG";
// import LinkedInSVG from "./SVGs/LinkedInSVG";
// import TwitterSVG from "./SVGs/TwitterSVG";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="text-black dark:text-white ">
      <div className="w-full flex md:flex md:flex-row flex-col-reverse min-h-screen md:h-screen items-center md:w-3/4 mx-auto md:justify-between md:gap-x-8 gap-y-10">
        {/* Text Section */}
        <div className="hero flex-1 px-4 md:px-0 gap-y-4 flex flex-col justify-center items-center md:items-start">
          <motion.span 
          className="text-gray-600 dark:text-gray-400 text-xs md:flex items-center gap-x-5 uppercase tracking-[0.25em] hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, }}
          transition={{
            delay: 0.5,
            duration: 0.3
          }}
          >
            <svg
              width="20"
              height="2"
              viewBox="0 0 16 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="16" height="2" fill="#D9D9D9" />
            </svg>
            My name is
          </motion.span>

          {/* Animated Heading */}
          <motion.div
            initial={{ x: "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 2,
              type: "spring",
              stiffness: 60,
            }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mt-5 text-center md:text-left">Asampong <span className='text-[#7E74F1]'>Godswill N.</span></h1>
            <p className="text-sm text-gray-900 text-center md:text-left dark:text-white mt-3 italic">
              Software Engineer & Data Analyst/Scientist
            </p>
          </motion.div>

          {/* Animated Description */}
          <motion.div className="mt-5">
            <motion.p
            className="mt-1 md:mt-5 text-gray-600 text-center md:text-left dark:text-white tracking-wider leading-[2rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            >
              Welcome to my portfolio! I’m Asampong Godswill Nana, a frontend engineer passionate about web and mobile development, as well as data analytics. I enjoy building responsive, user-focused websites and mobile applications while exploring data to uncover meaningful insights. Take a look at my projects, and feel free to connect!
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex items-center gap-x-4 mt-8 flex-col md:flex-row md:gap-x-4 gap-y-4 md:gap-y-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1, ease: "easeOut" }}
          >
            <a
              href="/Asampong_Godswill_Nana_Resume.pdf"
              download="Asampong_Godswill_Nana_Resume.pdf"
              rel="noopener noreferrer"
              className="flex items-center gap-x-2 bg-[#7E74F1] text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-[#6a60e0] transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-full font-medium text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social Links */}
          {/* <motion.div
            className="social-links md:flex gap-x-6 mt-10 justify-center md:justify-start hidden"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                    delay: 0.5,
                  staggerChildren: 0.3,
                },
              },
            }}
          >
            <motion.a
              href="https://github.com/WillAsampong"
              target="blank"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <GithubSVG />
            </motion.a>
            <motion.a
              href="https://x.com/WillAsampong19"
              target="blank"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <TwitterSVG />
            </motion.a>
            <motion.a
              href=""
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <LinkedInSVG />
            </motion.a>
          </motion.div> */}
          
        </div>

        {/* Hero Image */}
        <div className="flex-1 w-auto flex justify-center items-center mt-20 md:mt-0">
          <motion.div
            className="hero-img aspect-square rounded-full w-[220px] md:w-[350px] relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 1,
              duration: 1,
              ease: "easeOut",
            }}
          >

            {/* Background Animation */}
            <motion.div
              className="img-background rounded-full w-full h-full bg-[#7E74F1] absolute -top-2 left-3 -z-0"
              style={{ transformOrigin: "top center" }}
              initial={{ rotate: -60, scale: 0.9, opacity: 1 }}
              animate={{ rotate: [0, 20, -10, 0], scale: 1, opacity: 1 }}
              transition={{
                delay: 0.5, // Animates before the hero image
                duration: 1.5,
                ease: "easeInOut",
              }}
            ></motion.div>

            {/* Hero Image */}
            <motion.img
              src={pic}
              alt=""
              className="rounded-full w-full h-full object-cover absolute z-10"
              initial={{ scale: 0.8, opacity: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 1,
                duration: 1,
                ease: "easeOut",
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;