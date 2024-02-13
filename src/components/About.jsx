import React from 'react'

function About() {
    return (
        <div data-scroll-section data-scroll data-scroll-speed="-.2" className='font-["Neue_Montreal"] w-full min-h-screen bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl'>

            <div className='pt-20 pl-10 pb-16 pr-32 border-b-[1px] border-zinc-500'>
                <h1 className='text-[4vw] leading-none tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to <span className='border-b-[3px] border-black'>raise funds</span>, <span className='border-b-[3px] border-black'>sell products</span>, <span className='border-b-[3px] border-black'>explain complex ideas</span>, and <span className='border-b-[3px] border-black'>hire great people.</span></h1>
            </div>

            <div className='w-full flex px-10 pt-5 pb-20 border-b-[1px] border-zinc-500'>
                <div className='w-1/2 h-full'>
                    <p>What you can expect:</p>
                </div>
                <div className='w-2/3 h-full flex gap-24'>
                    <div className='w-1/2'>
                        <p className='mb-10 w-[80%]'>
                            We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
                        </p>
                        <p className=' w-[80%]'>
                            We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                        </p>
                    </div>
                    <div className='w-1/3 flex flex-col justify-end'>
                        <p>S:</p>
                        <a className='underline'>Instagram</a>
                        <a className='underline'>Behance</a>
                        <a className='underline'>Facebook</a>
                        <a className='underline'>Linkedin</a>
                    </div>
                </div>
            </div>


            <div className='w-full h-[80vh] flex px-10'>
                <div className='w-1/2 h-full'>
                    <h1 className='text-[4vw] text-[#212121] mb-3'>Our approach:</h1>
                    <button className='bg-[#212121] uppercase py-4 px-5 text-white rounded-full text-sm flex items-center gap-10'>read more <div className='w-2 h-2 bg-white rounded-full'></div></button>
                </div>
                <div className='w-1/2 h-full pb-10'>
                    <div className='h-full w-full pt-4'>
                        <img className='w-full h-full object-cover rounded-lg' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About