import { motion } from 'framer-motion'
import React from 'react'


function Marquee() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full h-[65vh] bg-[#004D43] rounded-tl-2xl rounded-tr-2xl pt-28'>
            <div className='border-[1px] pb-5 border-zinc-400 text-white font-["oswald"] whitespace-nowrap overflow-hidden'>
                <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ease: "linear", duration: 5, repeat: Infinity}} className='text-[20vw] leading-[17vw] tracking-tighter font-semibold pr-10 inline-block'>WE ARE OCHI</motion.h1>
                <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ease: "linear", duration: 5, repeat: Infinity}} className='text-[20vw] leading-[17vw] tracking-tighter font-semibold pr-10 inline-block'>WE ARE OCHI</motion.h1>
                
            </div>
        </div>
    )
}

export default Marquee