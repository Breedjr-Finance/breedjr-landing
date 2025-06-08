import React from 'react'

const Values = () => {
    return (
        <section className='grid lg:grid-cols-2 px-4 md:px-20 gap-6.5'>
            <div className=' bg-[#C7C7C715] md:h-[253px] p-9 flex flex-col gap-8 max-[535px] rounded-2xl'>
                <h5 className='text-4xl text-black font-graphik font-bold'>Why We Exist</h5>
                <p className='text-lg font-graphik font-normal text-black'>
                    Access to cash from crypto shouldn’t be complicated. But for many, it still is — with slow transactions, high fees, and unreliable platforms. We created Breedjr to change that.
                </p>
            </div>
            <div className=' bg-[#C7C7C715] md:h-[253px] p-9 flex flex-col gap-8 max-[535px] rounded-2xl'>
                <h5 className='text-4xl text-black font-graphik font-bold'>Our Vision</h5>
                <p className='text-lg font-graphik font-normal text-black'>
                    To bridge the gap between crypto and everyday life — starting with seamless cash conversion.
                </p>
            </div>

        </section>
    )
}

export default Values