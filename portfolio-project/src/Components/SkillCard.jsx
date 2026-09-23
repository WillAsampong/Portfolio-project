import { motion } from 'motion/react'
import propTypes from 'prop-types'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeIn" } }
}

const SkillCard = ({ icon, title, description, tools }) => {
  return (
    <motion.div
      className="skill-card h-full flex flex-col items-center gap-y-4 py-10 px-5 rounded-md bg-[#f4f4ff] dark:bg-[#1E1E1E] hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
      variants={itemVariants}
      viewport={{ amount: "0px" }}
    >
      <div className="web-icon bg-[#F5F3FE] p-4 rounded-lg">
        {icon}
      </div>

      <h6 className="text-lg dark:text-white text-center">{title}</h6>

      <p className="flex-1 text-wrap text-sm text-center text-gray-600 dark:text-gray-300 tracking-wider leading-[1.5rem]">
        {description}
      </p>

      <div className="tools flex gap-x-2 gap-y-2 flex-wrap justify-center mt-auto">
        {tools.map((tool) => (
          <span
            key={tool}
            className="bg-[#7E74F1] rounded py-1 px-2 shadow-sm text-white text-xs"
          >
            {tool}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

SkillCard.propTypes = {
  icon: propTypes.node.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  tools: propTypes.arrayOf(propTypes.string).isRequired,
}

export default SkillCard