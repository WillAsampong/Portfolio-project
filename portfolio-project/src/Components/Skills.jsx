import AnalyticsSVG from "./SVGs/AnalyticsSVG";
import GitSVG1 from "./SVGs/GitSVG1";
import GlobeSVG from "./SVGs/GlobeSVG";
import SkillCard from "./SkillCard";
import { motion } from 'motion/react'

const skills = [
  {
    icon: <GlobeSVG />,
    title: "Frontend Development",
    description: "Building dynamic, responsive, and accessible websites and mobile apps using modern technologies.",
    tools: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "TypeScript", "React Native"],
  },
  {
    icon: <AnalyticsSVG />,
    title: "Data Analytics",
    description: "Analyzing complex datasets to provide informed insights for decision-making.",
    tools: ["Python", "R", "Excel"],
  },
  {
    icon: <GitSVG1 />,
    title: "Version Control",
    description: "Managing codebases and collaborating efficiently using Git and GitHub.",
    tools: ["Git", "GitHub"],
  },
]

const Skills = () => {
  const cardVariants  = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7,
        delay: 0.5,
      }
    }
  }

  return (
    <section className="py-32" id="skills">
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
      <div className=" mx-auto flex flex-col items-center">
        <motion.h2 
          className="font-bold text-3xl md:text-5xl mt-5 mb-20 text-center dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          viewport={{ once: true }}
        >Specialized <span className="text-[#7E74F1]">In</span></motion.h2>
        <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 mx-2 md:mb-0 md:w-4/5 items-stretch"
        variants={cardVariants}
        initial='hidden'
        whileInView='visible'
        transition={{ delay: 0.5, duration: 0.7 }}
        viewport={{ once: true, margin: "20px" }}
        >
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              tools={skill.tools}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;