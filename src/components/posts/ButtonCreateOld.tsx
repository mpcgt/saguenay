"use client"

import { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import CreatePost from './CreatePost';

// Définition des types pour les props du Modal
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center z-50"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="bg-black rounded-lg p-4 w-1/3 shadow-lg">
        <CreatePost />
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-200">
          Close
        </button>
      </div>
    </motion.div>
  );
};

export default function CreateButton() {
  const buttonRef = useRef<HTMLDivElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (buttonRef.current) {
        const { clientX, clientY } = event
        const { left, top, width, height } = buttonRef.current.getBoundingClientRect()
        const centerX = left + width / 2
        const centerY = top + height / 2
        
        // Calculate distance from cursor to button center
        const distanceX = clientX - centerX
        const distanceY = clientY - centerY
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
        
        // Convert 5cm to pixels (assuming 96 DPI)
        const threshold = 5 * 37.7952755906

        if (distance < threshold) {
          mouseX.set(distanceX)
          mouseY.set(distanceY)
        } else {
          mouseX.set(0)
          mouseY.set(0)
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseX, mouseY])

  return (
    <>
      {/* Div pour le bouton fixé */}
      <div className="fixed bottom-5 right-5">
        <motion.div
          ref={buttonRef}
          className="relative w-48 h-48 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 cursor-pointer border-2 border-indigo-500"
          style={{
            x: x,
            y: y,
          }}
          onClick={() => setIsModalOpen(true)} // Ouvre le modal au clic
        >
          <motion.svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <defs>
              <path
                id="circle"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text fontSize="7.5">
              <textPath href="#circle" className="fill-indigo-500">
              WHAT DO YOU HAVE IN MIND?&nbsp;&nbsp;&nbsp;WHAT DO YOU HAVE IN MIND?
              </textPath>
            </text>
          </motion.svg>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            whileHover={{ scale: 1.2 }}
          >
            <svg
              className="w-8 h-8 text-indigo-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
