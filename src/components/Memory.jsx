import React from 'react'

const Memory = ({ memory: { title, subtitle, text, img, experience } }) => {
    /* console.log(memory);*/
    return (
        <>
            {/* wrapper div */}
            <div className='relative my-16 md:mb-7'>
                {/* container div */}
                <div className='travigo-container flex items-center justify-between gap-16 xl:gap-9 lg:flex-col-reverse'>

                    {/* image content */}
                    <div className='flex items-center justify-start lg:justify-center w-full max-w-md'>
                        <img src={img} alt='memory/img' className='w-auto h-[55vh] object-fill' />
                    </div>

                    {/* text content */}
                    <div className='grid items-center w-full max-w-2xl lg:text-center'>
                        <h1 className='text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filtr drop-shadow-lg'>{title}</h1>
                        <h1 className='text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filtr drop-shadow-lg'>{subtitle}</h1>
                        <p className='text-base my-5 sm:text-sm'>{text}</p>
                        {/* experience div */}
                        <div className='grid items-center grid-cols-3 gap-7 xl:gap-3 '>
                            {experience?.map((val, i) => (
                                <div key={i} className='bg-gradient-to-b from-emerald-400 to-green-400 shadow-lg shadow-emerald-200 flex items-center flex-col py-7 px-5 xl:p-5 rounded-lg text-slate-900 filter cursor-pointer hover:scale-105 transition-all duration-400' >
                                    <h1 className='text-3xl xl:text-2xl sm:text-xl font-bold drop-shadow-lg ' >{val.number}</h1>
                                    <p className=' w-auto text-base md:text-base lg:text-base xl:text-sm sm:text-sm xsm:text-xs font-semibold'>{val.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Memory
