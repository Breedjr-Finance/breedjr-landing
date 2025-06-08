import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CustomButton = ({ link, icon, supTitle, title }: {
    icon: string
    supTitle: string
    title: string
    link: string
}) => {
    return (
        <Link
            href={link}
            className='flex items-center justify-center md:justify-start rounded-[13.29px] py-8 px-5 gap-2.5 bg-[#000701] h-[62.01px] w-full md:w-[191.23px]'
        >

            <Image src={icon}
                alt=''
                width={27.56}
                height={27.56}
            />


            <div className='flex flex-col '>

                <span className='text-sm text-white'>{supTitle}</span>
                <span className='text-xl font-bold text-white'>{title}</span>
            </div>

        </Link>
    )
}

export default CustomButton