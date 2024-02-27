"use client"
import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'

function AboutMe() {
  return (
    <motion.section  className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.175}}
    >
      <SectionHeading>About Me</SectionHeading>
      <p>
        Hello, <span className='font-medium'>My name is Bulin</span>, formerly a Graphic Designer / Editor, 
        I want to change career to Frontend Developer to find a challenge. 
        And what I like I graduated from <span className='font-medium'>Thai-Nichi Institute of Technology</span>, <span className='italic'>Faculty of IT</span>, Department of Multimedia Tecnology. I hope to gain good experience working in this field. and want to learn even more.
      </p>
    </motion.section>
  )
}

export default AboutMe