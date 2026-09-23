import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-[#1E1E1E]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
        {/* Circular Logo */}
        <motion.div
            className="relative w-[120px] h-[120px] flex items-center justify-center mb-8"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                duration: 0.7,
                ease: [0.34, 1.56, 0.64, 1],
            }}
        >
            <svg
                className="absolute inset-0 w-full h-full -rotate-90"
                viewBox="0 0 100 100"
            >
                <motion.circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.2,
                        ease: "easeInOut",
                    }}
                />
            </svg>

            <span className="text-2xl font-semibold text-black tracking-wide">
                AGN
            </span>
        </motion.div>

        <motion.p
            className="text-xs font-light dark:text-white text-black tracking-[0.1rem] uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 0.5,
                delay: 0.4,
                ease: "easeInOut", 
            }}
        >
            Asampong Godswill Nana
        </motion.p>

        {/* Progress bar */}
        {/* <div className="w-40 h-[3px] bg-gray-200 dark:bg-gray-700 rounded-full mt-6 overflow-hidden">
            <motion.div
            className="h-full bg-black rounded-full"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{
                duration: 1.2,
                delay: 0.4,
                // repeat: Infinity,
                ease: "easeInOut",
            }}
            />
        </div> */}
    </motion.div>
  );
};

export default LoadingScreen;