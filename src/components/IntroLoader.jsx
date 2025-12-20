import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const IntroLoader = ({ onComplete }) => {
  const [showText, setShowText] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setShowText(true), 1500)
    const timer2 = setTimeout(() => setFadeOut(true), 3500)
    const timer3 = setTimeout(() => onComplete(), 4000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-charcoal flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-burgundy border-4 border-white flex items-center justify-center shadow-2xl shadow-burgundy/50">
              <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-white rounded-full"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mb-6"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg bg-gradient-to-br from-burgundy/20 to-burgundy/40 border-2 border-burgundy/50 flex items-center justify-center shadow-2xl shadow-burgundy/30">
              <div className="text-white text-4xl md:text-5xl font-serif font-bold">MUN</div>
            </div>
          </motion.div>

          <AnimatePresence>
            {showText && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-white text-3xl md:text-5xl font-serif font-bold tracking-wider"
                >
                  CMRCET MUN
                </motion.h1>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default IntroLoader

