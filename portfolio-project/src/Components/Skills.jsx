import AnalyticsSVG from "./SVGs/AnalyticsSVG";
import GitSVG1 from "./SVGs/GitSVG1";
import GlobeSVG from "./SVGs/GlobeSVG";
import {  motion } from 'motion/react'

const Skills = () => {
  const cardVariants  = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="md:h-[600px] bg-[#FBFBFB]" id="skills">
      <motion.div 
        className="flex items-center justify-center gap-x-5 pt-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <svg width="20" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="16" height="2" fill="#D9D9D9" />
        </svg>
        <p className="uppercase text-gray-500 tracking-[0.25em]">Skills</p>
      </motion.div>
      <div className="w-4/5 mx-auto flex flex-col items-center">
        <motion.h2 
          className="font-bold text-4xl mt-5 mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: true }}
        >Specialized In</motion.h2>
        <motion.div 
        className="flex items-center justify-center md:gap-x-6 gap-y-4 flex-wrap mb-10 md:mb-0"
        variants={cardVariants}
        initial='hidden'
        whileInView='visible'
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
        >
          <motion.div className="skill-card md:flex-1 flex flex-col items-center gap-y-4 py-10 px-5 rounded-md bg-white shadow-md"
          variants={itemVariants}
          >
            <div className="web-icon bg-[#F5F3FE] p-4 rounded-lg">
              <GlobeSVG />
            </div>
            <div className="title">
              <h6 className="text-lg">Web Development</h6>
            </div>
            <div className="desc">
              <p className="text-wrap text-sm text-center">Building dynamic, responsive, and accessible websites using modern technologies.</p>
            </div>
            <div className="tools flex gap-x-2 gap-y-2 flex-wrap">
              <span className="bg-[#7E74F1] rounded py-1 px-2 shadow-sm text-white text-xs">HTML</span>
              <span className="bg-[#7E74F1] rounded py-1 px-2 shadow-sm text-white text-xs">CSS</span>
              <span className="bg-[#7E74F1] rounded py-1 px-2 shadow-sm text-white text-xs">JS</span>
              <span className="bg-[#7E74F1] rounded py-1 px-2 shadow-sm text-white text-xs">React</span>
              <span className="bg-[#7E74F1] rounded py-1 px-2 shadow-sm text-white text-xs">Tailwind</span>
              {/* <span className="bg-[#7E74F1] rounded py-1 px-2 shadow-sm text-white text-xs">TypeScript</span> */}
            </div>
          </motion.div>
          <motion.div className="skill-card md:flex-1 flex flex-col items-center gap-y-4 py-10 px-5 rounded-md bg-white shadow-md
          "
          variants={itemVariants}
          >
            <div className="web-icon bg-[#F5F3FE] p-4 rounded-lg">
              <AnalyticsSVG />
            </div>
            <div className="title">
              <h6 className="text-lg">Data Analytics</h6>
            </div>
            <div className="desc">
              <p className="text-wrap text-sm text-center">Analyzing complex datasets to provide informed insights for decision-making.</p>
            </div>
            <div className="tools flex gap-x-2 flex-wrap">
              <span className="bg-[#7E74F1] rounded py-1 px-2 shadow-sm text-white text-xs">Python</span>
              <span className="bg-[#7E74F1] rounded py-1 px-2 shadow-sm text-white text-xs">R</span>
            </div>
          </motion.div>
          <motion.div className="skill-card md:flex-1 flex flex-col items-center gap-y-4 py-10 px-5 rounded-md bg-white shadow-md"
          variants={itemVariants}
          >
            <div className="web-icon bg-[#F5F3FE] p-4 rounded-lg">
              <GitSVG1 />
            </div>
            <div className="title">
              <h6 className="text-lg">Version Control</h6>
            </div>
            <div className="desc">
              <p className="text-wrap text-sm text-center">Managing codebases and collaborating efficiently using Git and GitHub.</p>
            </div>
            <div className="tools flex gap-x-2">
              <span className="bg-[#7E74F1] rounded py-1 px-2 shadow-sm text-white text-xs">Git</span>
              <span className="bg-[#7E74F1] rounded py-1 px-2 shadow-sm text-white text-xs">Github</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
