"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import CustomButton from '../CustomButton'
import ImageWithFallback from '../ImageWithFallback'

const Footer = () => {
    const path = usePathname()
    return (
        <footer
            className={cn('container grid px-4 lg:px-20 pt-15 gap-9',

                path !== '/' ? "mt-0" : "-mt-32"
            )}
        // px-4 md:px-20
        >
            <div className='grid lg:grid-cols-2 lg:gap-12 bg-gradient-to-r from-primary to-primary7 rounded-[25.28px] px-6 md:px-17 pt-17'>
                <div className='pb-6 lg:pb-17 grid gap-4'>
                    <h4 className='font-agrandir font-bold text-4xl md:text-[45px] text-primary8'>Ready to move from crypto to cash in minutes?</h4>
                    <div className="flex flex-col md:flex-row gap-2.5 items-center">
                        <CustomButton
                            supTitle='Get it on'
                            title='Google Play'
                            icon='/images/play-store.png'
                            link='#'
                        />
                        <CustomButton
                            supTitle='Download on'
                            title='Apple Store'
                            icon='/images/apple-store.png'
                            link='#'
                        />
                    </div>
                </div>
                <div className='h-[334px]'>
                    <ImageWithFallback
                        src='/images/footer-img.png'
                        alt='footer image'
                        fill
                        objectFit='fill'
                        // objectFit='contain'
                        className='h-full w-full'
                    />

                </div>

            </div>
            <div className='flex flex-col md:flex-row justify-between px-8 py-12 md:items-center gap-6'>
                <div className='flex gap-8'>
                    <Link href='privacy-policy' className='text-base md:text-xl underline font-graphik font-medium text-gray-500'>Privacy Policy</Link>
                    <Link href='terms-of-service' className='text-base md:text-xl underline font-graphik font-medium text-gray-500'>Terms of service</Link>
                </div>
                <div className='flex items-center gap-6'>
                    <Link href='#' className='w-12 h-12 rounded-full bg-primary flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M11.6667 7.75V10.1667H13.8333C14 10.1667 14.0833 10.3333 14.0833 10.5L13.75 12.0833C13.75 12.1667 13.5833 12.25 13.5 12.25H11.6667V18.3333H9.16667V12.3333H7.75C7.58333 12.3333 7.5 12.25 7.5 12.0833V10.5C7.5 10.3333 7.58333 10.25 7.75 10.25H9.16667V7.5C9.16667 6.08333 10.25 5 11.6667 5H13.9167C14.0833 5 14.1667 5.08333 14.1667 5.25V7.25C14.1667 7.41667 14.0833 7.5 13.9167 7.5H11.9167C11.75 7.5 11.6667 7.58333 11.6667 7.75Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                            <path d="M12.4993 18.3332H7.49935C3.33268 18.3332 1.66602 16.6665 1.66602 12.4998V7.49984C1.66602 3.33317 3.33268 1.6665 7.49935 1.6665H12.4993C16.666 1.6665 18.3327 3.33317 18.3327 7.49984V12.4998C18.3327 16.6665 16.666 18.3332 12.4993 18.3332Z" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                    <Link href='#' className='w-12 h-12 rounded-full bg-primary flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.24667 2.5H13.7542C15.8225 2.5 17.5 4.17667 17.5 6.24667V13.7542C17.5 15.8225 15.8233 17.5 13.7533 17.5H6.24667C4.1775 17.5 2.5 15.8233 2.5 13.7533V6.24667C2.5 4.1775 4.17667 2.5 6.24667 2.5V2.5Z" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.1233 5.5944C13.9683 5.59523 13.8424 5.72107 13.8424 5.87607C13.8424 6.03107 13.9691 6.1569 14.1241 6.1569C14.2791 6.1569 14.4049 6.03107 14.4049 5.87607C14.4058 5.72023 14.2791 5.5944 14.1233 5.5944" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.1213 7.87868C13.2929 9.05026 13.2929 10.9497 12.1213 12.1213C10.9497 13.2929 9.05026 13.2929 7.87868 12.1213C6.70711 10.9497 6.70711 9.05026 7.87868 7.87868C9.05026 6.70711 10.9497 6.70711 12.1213 7.87868" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                    <Link href='#' className='w-12 h-12 rounded-full bg-primary flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clipPath="url(#clip0_1384_9654)">
                                <path d="M12.5944 0H15.0361L9.70281 6.79111L16 16H11.0522L7.19679 10.4178L2.76305 16H0.321285L6.04016 8.74667L0 0H5.07631L8.57831 5.12L12.5944 0ZM11.7269 14.3644H13.0763L4.33735 1.52889H2.85944L11.7269 14.3644Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1384_9654">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                    <Link href='#' className='w-12 h-12 rounded-full bg-primary flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.25 2.5H13.7533C15.8225 2.5 17.5 4.1775 17.5 6.24667V13.7542C17.5 15.8225 15.8225 17.5 13.7533 17.5H6.24667C4.1775 17.5 2.5 15.8225 2.5 13.7533V6.25C2.5 4.17917 4.17917 2.5 6.25 2.5V2.5Z" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.76628 9.25V13.75" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.76562 13.75V11.125C9.76562 10.0892 10.6048 9.25 11.6406 9.25V9.25C12.6765 9.25 13.5156 10.0892 13.5156 11.125V13.75" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.76545 6.5319C6.66211 6.5319 6.57795 6.61607 6.57878 6.7194C6.57878 6.82273 6.66295 6.9069 6.76628 6.9069C6.86961 6.9069 6.95378 6.82273 6.95378 6.7194C6.95378 6.61523 6.86961 6.5319 6.76545 6.5319" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </div>

        </footer>
    )
}

export default Footer