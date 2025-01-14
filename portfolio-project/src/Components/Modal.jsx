import PropTypes from 'prop-types'
import CloseSVG from './SVGs/CloseSVG';
import { motion } from 'motion/react';

const Modal = ({ isOpen, onClose, children }) => {
    if(!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-20">
        {/* modal */}
        <motion.div
         className="bg-white dark:bg-slate-600 rounded-xl p-8 shadow-lg max-w-sm w-full relative"
         initial={{ opacity: 1, scale: 0.7 }}
         animate={{ opacity: 1, scale: 1.0 }}
         exit={{ opacity: 0, scale: 0 }}
         >
            <button
             onClick={onClose} 
             className="absolute right-2 top-2 rounded transition-all p-1 text-gray-600 dark:text-white hover:text-gray-900 hover:bg-gray-200">
                <CloseSVG />
            </button>
            {children}  
        </motion.div>
    </div>
  )
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.node
}

export default Modal
