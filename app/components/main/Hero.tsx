import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <div className='relative flex flex-col h-full w-full'>
        <motion.div
        initial='hidden'
        animate='visible'
        className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
        >
            <div></div>
        </motion.div>
    </div>
  )
}

export default Hero