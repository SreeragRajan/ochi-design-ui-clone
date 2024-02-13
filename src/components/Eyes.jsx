import React, { useEffect, useState } from 'react'

function Eyes() {

    const [video, setVideo] = useState(false)

    const [rotate, setRotate] = useState(0)

    var x, y;

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            x = e.clientX
            y = e.clientY

            let deltaX = x - window.innerWidth / 2
            let deltaY = y - window.innerHeight / 2

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        })
    })

    // var [top, setTop] = useState(20)
    // var [left, setLeft] = useState(30)

    return (

        <div onClick={() => { setVideo(!video) }} className='relative w-full h-screen'>
            <div data-scroll className=' w-full h-full absolute top-0 left-0 z-20'>
                {/* <div className={`cursor px-2 py-1 rounded-full bg-black text-white absolute top-${top} left-${left} ${video ? 'block' : 'hidden'} `}>
                    Pause
                    {console.log(top, left)}
                </div> */}
                <video autoPlay muted loop className={`w-full h-full object-cover ${video ? 'block' : 'hidden'}`} src="https://ochi.design/wp-content/uploads/2022/05/Main-HQ-1.mp4"></video>
            </div>
            <div className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
                <div className='w-[380px] h-[170px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-8'>
                    <div className='w-1/2 h-full rounded-full bg-[#F4F4F4] flex justify-center items-center'>
                        <div className='w-2/3 h-2/3 rounded-full bg-[#212121] flex justify-center items-center'>
                            <h2 className='text-white text-2xl absolute'>PLAY</h2>
                            <div style={{ transform: `rotate(${rotate}deg)` }} className='line w-full h-5'>
                                <div className='h-full w-5 bg-[#F4F4F4] rounded-full'></div>
                            </div>
                        </div>

                    </div>
                    <div className='w-1/2 h-full rounded-full bg-[#F4F4F4] flex justify-center items-center'>
                        <div className='w-2/3 h-2/3 rounded-full bg-[#212121] flex justify-center items-center'>
                            <h2 className='text-white text-2xl absolute'>PLAY</h2>
                            <div style={{ transform: `rotate(${rotate}deg)` }} className='line w-full h-5'>
                                <div className='h-full w-5 bg-[#F4F4F4] rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes