'use client'
import React from 'react'
import Image from 'next/image'
import Bell from './IMG/Bell.png'
import { motion } from "framer-motion"
import Link from 'next/link'
import { BsArrowRight, BsGithub } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'

function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
      <div className='flex items-center justify-center'>
        <motion.div 
        initial={{y : -100,  opacity: 0}}
        animate={{y : 0 ,  opacity: 1}}
        transition = {{ type:"tween",
        duration: 0.2,
        delay: 0.1}}
        className='relative'>
          <Image src={Bell}
           alt = "Bulin porfolio" 
           width = "192" 
           height = "192" 
           quality = "95" 
           priority = {true}
           className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl'/>
        </motion.div>
      </div>
      <motion.h1 className='mb-10 mt-4 px-4  text-2xl font-medium !leading-[1.5] sm:text-4xl'
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      >
        <span className='font-bold'>Hello, I am Bulin.
        </span> I'm a {" "}
        <span className = 'font-bold'> Frontend Deverloper / Ux-Ui Design</span> and {" "}
        <span className='font-bold'> 1.5 years </span> of Graphic design and Editor. I need to
        change my job for new experience. I enjoy building <span className='italic'>UI Website & Apps</span>
        My focus is {" "} <span className='font-bold underline'> Frontend Deverloper</span>
      </motion.h1>

      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg'
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{
        delay:0.1,
      }}
      >
        <Link href="#contact" className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2
        rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>Contact Me hear <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/></Link>
        
        <a href="/Bulin_TanomwongtanaCV.pdf" download={true} className='bg-white px-7 py-3 flex items-center gap-2
        rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition'>Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/></a>
        
        <a href="" className='bg-white px-7 py-3 flex items-center gap-2
        rounded-full text-[1.35rem] outline-none focus:scale-110 hover:scale-110 active:scale-105 transition'><FaGithubSquare/></a>
      </motion.div>
    </section>
  )
}

export default Intro