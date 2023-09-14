import { motion } from 'framer-motion'

export default function RepeatAnimation() {
  return (
    <div className="bg-gray-400 flex justify-center p-20">
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1.2 }}
        transition={{ repeat: Infinity }}
        className="w-[200px] h-[200px] bg-white rounded"
      ></motion.div>
    </div>
  )
}
