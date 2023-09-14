import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const cardVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: { duration: 0.4 },
  },
  exit: {
    scale: 0,
  },
}

// This way you can make your code clean

export default function EnterLeaveWithVariants() {
  const [showCard, setShowCard] = useState(true)
  const toggleCard = () => setShowCard((prevValue) => !prevValue)
  return (
    <div className="space-y-2">
      <div className="flex space-x-2 items-center">
        <div
          className="bg-green-500 text-white py-1 px-4 rounded cursor-pointer hover:opacity-80"
          onClick={toggleCard}
        >
          show/hide
        </div>
      </div>
      <AnimatePresence>
        {showCard && (
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-1/3 p-10 bg-slate-400 rounded"
          >
            enter leave practice with animate presence in framer motion
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
