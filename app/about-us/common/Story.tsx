import React from 'react'

const Story = () => {
    return (
        <section className='p-4 md:p-20 flex flex-col gap-8 lg:flex-row justify-between items-start'>
            <h2 className='font-bold text-4xl font-graphik'>
                Our Story
            </h2>
            <div className='max-w-[720px] flex flex-col gap-8'>
                <p className=' text-xl font-medium font-graphik'>
                    We believe that digital currencies should be more than just investments — they should be usable. That’s why we’ve built a secure, easy-to-use platform that helps people across Africa (and beyond) instantly convert their crypto into local currency, 24/7.
                </p>
                <p className='text-xl font-medium font-graphik'>
                    Whether you’re a freelancer getting paid in USDT, a trader managing crypto profits, or a small business accepting Bitcoin, Brredjr empowers you to unlock real-world value from your digital assets — in seconds.
                </p>
            </div>
        </section>
    )
}

export default Story