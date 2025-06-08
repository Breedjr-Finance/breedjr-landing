"use client"

import { privacyPolicy } from '@/lib/data'
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
        <div className="flex flex-col md:flex-row container-2 px-4 py-10 lg:gap-[105px]">
            {/* Sidebar */}
            <aside className="hidden lg:block w-[280px]">
                <div className="sticky top-5 space-y-2.5 text-sm font-medium bg-[#F5F4F6] rounded-[8px]">
                    {privacyPolicy.map((section) => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            className={cn(
                                'block transition-colors w-fit py-3 px-6',
                                activeId === section.id
                                    ? 'text-[#553700] border-l-[3px] border-[#553700] font-semibold'
                                    : 'text-[#667085]'
                            )}
                        >
                            {section.title}
                        </a>
                    ))}
                </div>
            </aside>

            {/* Main Content */}
            <div className="lg:max-w-[784px] space-y-16">
                <h1 className="text-5xl font-graphik font-semibold text-privacy-text ">

                    Privacy Policy
                </h1>
                <div className="space-y-12">

                    {privacyPolicy.map((section, index) => (
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
                                                        section.type !== undefined ? 'list-decimal' : "list-disc"
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


                            {section.subContent1 && (
                                <div className="mt-2 pl-6">
                                    <ul className={cn("list-outside",
                                        section.type === "ordered-list" ? 'list-decimal' : 'list-disc'
                                    )}>
                                        {section.subContent1.map((item, i) => (
                                            <li key={i} className="text-lg text-[#434A5B] gap-4 font-graphik font-normal mb-6">
                                                {item}
                                            </li>
                                        ))
                                        }
                                    </ul>
                                </div>
                            )}

                            {section.subContent2 && (
                                <div className="mt-8">
                                    {section.subContent2.map((item, i) => (
                                        <p key={i} className="text-[#434A5B] text-lg font-graphik font-normal mb-6">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </section>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Content
