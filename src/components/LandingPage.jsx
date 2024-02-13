import { motion } from 'framer-motion';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";


function LandingPage() {
  
  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full'>
      <div className="textstructure mt-40 px-12">
        {["we create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div key={index} className="masker flex gap-2 items-center">
              {index === 1 && (
                <motion.div initial={{width: "0%"}} animate={{width: "9vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1}}  className="line w-[9vw] h-[6.5vw] bg-black mt-2 rounded-lg overflow-hidden">
                  <img className='object-cover h-full w-full' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                </motion.div>)
              }
              <h1 className="uppercase text-[7.5vw] font-['oswald'] font-semibold leading-[7vw] tracking-tighter text-[#212121]">{item}</h1>
            </div>
          )
        })}
      </div>

      <div>
        <div className="mt-24 mb-24 py-3 px-12 bottom flex justify-between items-center border-zinc-400 border-t-[1px] font-regular tracking-tight font-['Neue_Montreal']">
          <p>For public and private companies</p>
          <p>From the first pitch to IPO</p>
          <div className='flex gap-1 items-center'>
            <button className='py-1 px-3 border-[1px] font-medium text-[14px] text-zinc-800 border-zinc-800 rounded-full uppercase'>Start the project</button>
            <div className='p-2 border-[1px] border-zinc-800 rounded-full'>
              <MdArrowOutward size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage