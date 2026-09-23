import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink, Shield, Zap, MessageCircle } from "lucide-react";
import propTypes from "prop-types";
import lyseonghImage from "../assets/Mockups/lyseongh.png";

const projects = [
  {
    title: "LYSEON",
    description:
      "A business website for an electrical and technical services company, showcasing CCTV, DSTV, and electrical wiring installations with service booking and client testimonials.",
    tags: ["Next.js", "React.js", "Business Website", "Tailwind CSS"],
    url: "https://lyseongh-frontend-2e7r.vercel.app/",
    features: [
      {
        icon: <Shield className="w-4 h-4" />,
        text: "Service showcase for CCTV & security installs",
      },
      {
        icon: <Zap className="w-4 h-4" />,
        text: "Electrical wiring & installation services",
      },
      {
        icon: <MessageCircle className="w-4 h-4" />,
        text: "WhatsApp & appointment booking integration",
      },
    ],
    colors: ["#0f172a", "#1e293b", "#f59e0b"],
    image: lyseonghImage,
  },
];

ProjectShowcase.propTypes = {
  project: propTypes.shape({
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    tags: propTypes.arrayOf(propTypes.string).isRequired,
    url: propTypes.string.isRequired,
    features: propTypes.arrayOf(
      propTypes.shape({
        icon: propTypes.element.isRequired,
        text: propTypes.string.isRequired,
      })
    ).isRequired,
    colors: propTypes.arrayOf(propTypes.string).isRequired,
    image: propTypes.string.isRequired,
  }).isRequired,
};

function ProjectShowcase({ project }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className={`${isHovered ? "scale-105" : ""} transition-transform duration-300 group`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 relative">
          <div className="aspect-[16/9] relative overflow-hidden">
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 ease-out"
                />
              </a>
            </motion.div>
          </div>
        </div>

        <div className="md:col-span-5 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-medium dark:text-white">{project.title}</h3>
            <p className="text-neutral-700 dark:text-neutral-300 mt-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="inline-block px-3 py-1 text-xs bg-neutral-200 dark:bg-neutral-800 dark:text-gray-400 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              <h4 className="text-sm font-medium dark:text-white">Key Features</h4>
              <div className="space-y-2">
                {project.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    className="flex items-center text-sm text-neutral-600 dark:text-neutral-400"
                    initial={{ opacity: 0, x: -10 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                    }
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + featureIndex * 0.1,
                    }}
                  >
                    <div className="mr-2 text-black dark:text-white">
                      {feature.icon}
                    </div>
                    {feature.text}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center font-normal text-black dark:text-white hover:underline"
              >
                View Project
                <ExternalLink className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

const FeaturedProjects = () => {
  return (
    <section className="min-h-screen md:py-40" id="projects">
      <div className="w-4/5 mx-auto mb-12">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-x-5 pt-10">
            <svg width="20" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="16" height="2" fill="#D9D9D9" />
            </svg>
            <p className="uppercase text-gray-500 tracking-[0.25em]">My works</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mt-6 dark:text-white text-center">
            Featured <span className="text-[#7E74F1]">Projects</span>
          </h2>
        </div>

        <div className="flex flex-col gap-y-24 mt-20">
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectShowcase key={project.title} project={project} />
            ))
          ) : (
            <p className="font-bold text-3xl md:text-5xl text-center mt-20 dark:text-white">
              New projects coming soon...
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

// ProjectShowcase.propTypes = {
//   project: propTypes.shape({
//     title: propTypes.string.isRequired,
//     description: propTypes.string.isRequired,
//     tags: propTypes.arrayOf(propTypes.string).isRequired,
//     url: propTypes.string.isRequired,
//     features: propTypes.arrayOf(
//       propTypes.shape({
//         icon: propTypes.element.isRequired,
//         text: propTypes.string.isRequired,
//       })
//     ).isRequired,
//     colors: propTypes.arrayOf(propTypes.string).isRequired,
//     image: propTypes.string.isRequired,
//   }).isRequired,
// };

export default FeaturedProjects;