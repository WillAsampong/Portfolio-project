import pic from '../assets/profile-pic.jpg'
import GithubSVG from "./SVGs/GithubSVG";
import LinkedInSVG from "./SVGs/LinkedInSVG";
import TwitterSVG from "./SVGs/TwitterSVG";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="text-black dark:text-white bg-white dark:bg-[#1E1E1E]">
      <div className="w-full md:-mt-10 flex md:flex md:flex-row flex-col-reverse h-screen items-center md:w-4/5 mx-auto md:justify-between gap-x-8 mt-20">
        {/* Text Section */}
        <div className="hero flex-1 px-4 md:px-0">
          <motion.span 
          className="text-gray-600 text-xs md:flex items-center gap-x-5 uppercase tracking-[0.25em] hidden"
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
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 2,
              type: "spring",
              stiffness: 80,
            }}
          >
            <h1 className="text-2xl md:text-4xl font-bold mt-5">Asampong <span className='text-[#7E74F1]'>Godswill N.</span></h1>
            <p className="text-sm text-gray-900 dark:text-white">
              Aspiring Software Engineer & Data Analyst/Scientist
            </p>
          </motion.div>

          {/* Animated Description */}
          <motion.div className="">
            <motion.p 
            className="text-wrap italic text-sm "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeIn" }}
            >
            <br/>
              {"'Crafting modern web experiences and analyzing data to uncover insights..'"}
            </motion.p>
            <motion.p
            className="mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 1, ease: "easeOut" }}
            >
              Welcome to my portfolio! I’m Asampong Godswill Nana, a second-year
              Computer Science and Statistics student at the University of Ghana.
              I’m passionate about web development and data analytics, with experience
              in building responsive websites and exploring data to uncover insights.
              Take a look at my projects and feel free to connect!
            </motion.p>
          </motion.div>

          {/* Social Links */}
          <motion.div
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
          </motion.div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 w-auto flex justify-center items-center">
        <motion.div
          className="hero-img aspect-square rounded-full w-[200px] md:w-[280px] relative"
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
            style={{ transformOrigin: "top center" }} // Sets the pivot point to top-center
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
