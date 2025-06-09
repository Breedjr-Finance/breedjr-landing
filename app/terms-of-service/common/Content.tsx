"use client"

import { termsofservice } from '@/lib/data'
import { cn } from '@/lib/utils'
import React, { useEffect, useRef, useState } from 'react'

const Content = () => {
    const [activeId, setActiveId] = useState<string | null>(null)
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

                if (visible.length > 0) {
                    setActiveId(visible[0].target.id)
                }
            },
            {
                rootMargin: '-40% 0% -50% 0%',
                threshold: Array.from({ length: 101 }, (_, i) => i / 100), // granular
            }
        )

        // Defer observer setup after DOM refs are assigned
        const timeout = setTimeout(() => {
            Object.values(sectionRefs.current).forEach((section) => {
                if (section) observer.observe(section)
            })
        }, 0)

        return () => {
            clearTimeout(timeout)
            observer.disconnect()
        }
    }, [])

    return (
        <div className="flex flex-col md:flex-row py-10 lg:gap-[105px] ">
            {/* Sidebar */}
            <aside className="hidden lg:block w-[315px]">
                <div className="sticky top-5 space-y-2.5  bg-[#F5F4F6] rounded-[8px]">
                    {termsofservice.map((section) => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            className={cn(
                                'block transition-colors w-fit py-3 px-6 text-base',
                                activeId === section.id
                                    ? 'text-[#553700] border-l-[3px] border-[#553700] font-semibold'
                                    : 'text-[#667085] font-medium'
                            )}
                        >
                            {section.title}
                        </a>
                    ))}
                </div>
            </aside>

            {/* Main Content */}
            <div className="lg:max-w-[784px] space-y-16">
                <div>
                    <div className='grid gap-8 mb-6'>
                        <h1 className="text-5xl font-graphik font-semibold text-privacy-text ">
                            Terms of use
                        </h1>
                        <p className='text-lg font-normal font-graphik text-[#475467]'>
                            Published: 8th,Apr, 2024
                        </p>

                    </div>
                    <p className="text-[#434A5B] text-lg font-graphik font-normal mb-6">
                        Please read these Terms of Service (“Terms”) carefully as they contain important information about
                        your legal rights, remedies, and obligations as guaranteed by Breedjr.Africa Limited (“Breedjr”,
                        “we”, “us” or “our”). By accessing or using this website, our website application, and any of our
                        services (altogether, “Breedjr” or the “Platform”), you agree to the terms and conditions below
                        (“Terms of Use” or “Terms”).
                    </p>

                    <p className="text-[#434A5B] text-lg font-graphik font-normal mb-6">
                        You understand that your use of any of our services is also subject to Breedjr’s privacy notice, cookies
                        policy, and acceptable use policy (collectively, the “Related Agreements). You are advised not to use
                        any of the services if you have any objections to any of these terms.
                    </p>
                    <p className="text-[#434A5B] text-lg font-graphik font-normal mb-6">
                        We reserve the right to change these Terms from time to time without notice by posting an updated
                        copy of these Terms to the website. You acknowledge and agree that it is your responsibility to
                        review these Terms periodically to familiarise yourself with any modifications. Your continued use
                        of this website after such modifications will constitute acknowledgment and agreement with the
                        modified Terms.
                    </p>
                </div>
                <div className="space-y-12">

                    {termsofservice.map((section, index) => (
                        <section
                            key={section.id + index}
                            id={section.id}
                            ref={(el) => {
                                sectionRefs.current[section.id] = el
                            }}
                            className="scroll-mt-[120px] min-h-fit" // ensures enough height
                        // className="scroll-mt-[120px] min-h-[60vh]" // ensures enough height
                        >
                            <div className="text-2xl text-black font-semibold mb-6 flex items-center gap-4">
                                <span>
                                    {index + 1}.
                                </span>
                                {section.title}
                            </div>

                            {section?.content?.map((text, i) => (
                                <>
                                    {

                                        <p key={i} className={cn("mb-6 text-lg  gap-4 font-graphik font-normal",
                                            (section.title === 'Contact' ||
                                                (section.title === 'General Information' && i === 1)
                                            ) ? 'text-[#553700]' :
                                                'text-[#434A5B]'

                                        )}>
                                            {text}
                                        </p>}
                                </>
                            ))}

                            {section.subContent &&
                                Object.entries(section.subContent).map(([key, values]) => (
                                    <div key={key} className="mb-6">
                                        <h5 className="text-lg font-semibold mb-3 font-graphik">{key}</h5>
                                        {values.map((item: any, index: number) => {
                                            if (typeof item === 'string') {
                                                return (
                                                    <p key={index} className="mb-4 text-lg text-[#434A5B] font-graphik font-normal">
                                                        {item}
                                                    </p>
                                                );
                                            }

                                            if (Array.isArray(item)) {
                                                return (
                                                    <ul key={index} className={cn(" pl-6 mb-4 text-lg text-[#434A5B] gap-4 font-graphik font-normal",
                                                        // section?.type !== undefined ? 'list-decimal' : "list-disc"
                                                    )}>
                                                        {item.map((li, liIndex) => (
                                                            <li key={liIndex} className='mb-4'>{li}</li>
                                                        ))}
                                                    </ul>
                                                );
                                            }

                                            return null;
                                        })}
                                    </div>
                                ))}


                        </section>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Content
