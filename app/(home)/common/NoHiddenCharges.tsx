import ImageWithFallback from "@/components/ImageWithFallback";

export default function NoHiddenCharges() {
    return (
        <section className="grid px-20">
            <div className="flex flex-col gap-4 w-[697px] mx-auto">
                <h2 className="text-5xl text-foreground text-center">
                    Move your money where it matters without any hidden fees
                </h2>
            </div>
            <div
                className="
flex flex-col lg:flex-row
pt-12
gap-8
"
            >
                <div
                    className="rounded-[20px] p-8 pb-0 w-full
aos-init aos-animate  bg-gradient-to-br from-[#DCF3FF] to-[#FFF6DB] gap-6 flex flex-col"
                    data-aos="fade-up"
                >
                    <div className="flex flex-col gap-3.5 w-[474px]">
                        <h3
                            className="text-[24px] lg:text-[32px] font-bold text-foreground
                            aos-animate
                            "
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            Send money to friends and family across Africa
                        </h3>

                        <p
                            className="text-[16px] lg:text-[20px] font-[400] leading-[24px] lg:leading-[36px] mt-[5px] md:mt-[0] aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            Send money across African countries in seconds. Transparent rates,
                            no hidden fees, and real-time exchange previews.
                        </p>
                    </div>
                    <ImageWithFallback
                        src="/images/send-money.png"
                        alt=""
                        fill
                        objectFit="contain"
                        className="w-full h-[250px] mt-auto"
                    />
                    {/* <div className="w-full  lg:h-[240px]">

                    </div> */}
                </div>
                <div
                    className="flex flex-col justify-between rounded-[20px] p-8
                    lg:max-w-[511px] 
                    bg-gradient-to-tr from-[#E6DCFF] to-[#F8FFDB]
                                aos-init aos-animate"
                    data-aos="fade-up"
                >
                    <div>
                        <h3
                            className="text-[24px] lg:text-[32px] font-bold aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            Spend like a local, globally
                        </h3>
                        <p
                            className="text-[16px] lg:text-xl aos-init aos-animate text-foreground"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            Convert one currency to another instantly within your wallet. Lock
                            in rates, preview conversions, and avoid surprises.
                        </p>
                    </div>

                    <ImageWithFallback
                        src="/images/spend.png"
                        alt=""
                        fill
                        objectFit="contain"
                        className="w-full h-[250px]"
                    />
                </div>
            </div>
            <div
                className="
flex flex-col lg:flex-row
pt-12
gap-8
"
            >
                <div
                    className="flex flex-col justify-between rounded-[20px] p-8
                    lg:max-w-[511px] 
                    bg-gradient-to-tr from-[#DCE2FF] to-[#DBFFED]
                                aos-init aos-animate"
                    data-aos="fade-up"
                >
                    <div>
                        <h3
                            className="text-[24px] lg:text-[32px] font-bold aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            Free Transfers with P2P
                        </h3>
                        <p
                            className="text-[16px] lg:text-xl aos-init aos-animate text-foreground"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            Save transfer fees and enjoy instant payment deliveries when you send money home or abroad via Startag.
                        </p>
                    </div>

                    <ImageWithFallback
                        src="/images/spend.png"
                        alt=""
                        fill
                        objectFit="contain"
                        className="w-full h-[250px]"
                    />
                </div>
                <div
                    className="rounded-[20px] p-8 pb-0 w-full
aos-init aos-animate  bg-gradient-to-bl from-[#B9FFFC] to-[#FFFCDB]  gap-6 flex flex-col"
                    data-aos="fade-up"
                >
                    <div className="flex flex-col gap-3.5 w-[474px]">
                        <h3
                            className="text-[24px] lg:text-[32px] font-bold text-foreground
                            aos-animate
                            "
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            Convert at the best rates
                        </h3>

                        <p
                            className="text-base lg:text-lg mt-[5px] md:mt-[0] aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            Hold and manage funds in NGN, GHS, ZAR, KES, and more—all in one wallet, built for African currencies.
                        </p>
                    </div>
                    <ImageWithFallback
                        src="/images/convert.png"
                        alt=""
                        fill
                        objectFit="contain"
                        className="w-full h-[250px] mt-auto"
                    />
                </div>
            </div>
        </section>
    );
}
