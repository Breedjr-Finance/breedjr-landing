"use client";

import CustomButton from "@/components/CustomButton";
import ImageWithFallback from "@/components/ImageWithFallback";


export default function Hero() {
    // max-w-7xl
    return (
        // <div
        //     className="grid grid-cols-1 md:grid-cols-2  px-4 sm:px-12 w-full justify-end items-end h-full bg-cyan-300"
        // //  grid grid-cols-1 md:grid-cols-2  px-4 sm:px-12 w-full h-full
        // >
        <div className="grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-12 w-full h-full items-end justify-between lg:gap-12">
            {/* <div className="flex flex-col lg:flex-row px-4 sm:px-12 w-full h-full items-end justify-between gap-12"> */}
            <div className="flex flex-col gap-8 pt-10 lg:pt-18 h-full xl:h-[583px]">
                <div className="flex flex-col gap-[5px] w-full xl:w-[555px]">
                    <h1 className="text-6xl md:text-[64px] lg:text-[80px] font-agrandir font-bold text-foreground text-center md:text-left">
                        Move from crypto to cash in minutes
                    </h1>
                    <p className="text-black text-2xl font-graphik font-normal text-center md:text-left">
                        Convert Bitcoin, Ethereum, USDT and other cryptocurrencies to cash effortlessly—get paid instantly in local currency.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-2.5 w-full items-center">
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
            <div className="  w-full h-[583px] flex items-end justify-center">
                <ImageWithFallback
                    src="/images/heroImg.png"
                    alt="Hero Image"
                    // objectFit="cover"
                    objectFit="fill"
                    fill
                    className="w-full h-full object-fill xl:object-cover"
                // flex items-end justify-end
                // className="w-full h-[649px]"
                />
            </div>
        </div>

    );
}