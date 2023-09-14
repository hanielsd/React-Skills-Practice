import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export default function EnterLeave() {
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
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            exit={{ scale: 0 }}
            className="w-1/3 p-10 bg-slate-400 rounded"
          >
            enter leave practice with animate presence in framer motion
          </motion.div>
        )}
      </AnimatePresence>

      {!showCard && (
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5 }}
          className="w-1/4 p-20 bg-green-400 rounded text-white"
        >
          the card is hidden
        </motion.div>
      )}
    </div>
  )
}
