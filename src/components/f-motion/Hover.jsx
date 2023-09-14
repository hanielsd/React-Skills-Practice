import { motion } from 'framer-motion'

export default function WhileHoverEffect() {
  return (
    <div className="bg-gray-300 p-20 flex space-x-2 justify-center">
      <motion.div
        whileHover={{ scale: 1.2, boxShadow: '2px 6px 6px #66aa66' }}
        transition={{ duration: 0.2 }}
        className="bg-white text-green-600 py-2 px-6 uppercase rounded cursor-pointer"
      >
        hover me
      </motion.div>
    </div>
  )
}
