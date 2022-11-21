import { motion, AnimatePresence } from "framer-motion"

export const Slideshow = ({ image }) => (
  <AnimatePresence>
    <motion.img
      key={image.imageUrl}
      src={image.imageUrl}
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  </AnimatePresence>
)