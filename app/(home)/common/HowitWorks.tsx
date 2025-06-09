import ImageWithFallback from "@/components/ImageWithFallback";
import { HowitworksList } from "@/lib/data";

export default function HowItWorks() {
    return (
        <div className="container p-4 py-9 lg:p-12 lg:px-12">
            <section className="flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-15 " id='howitworks'>
                <div className="w-full lg:w-[348.97px] h-full order-last lg:order-first">
                    <ImageWithFallback
                        alt=""
                        src="/images/how-it-works.png"
                        fill
                        // objectFit="fill"
                        objectFit="contain"
                        // classNameImage="w-full h-full"
                        className="w-full h-[722px]"
                    />
                </div>
                <div className="flex flex-col gap-9.5 pt-4 xl:ml-8">
                    <div className="flex flex-col gap-4 lg:w-[600px]">
                        <h2 className="text-3xl md:text-5xl font-agrandir font-bold text-primary2">Using Breedjr is super simple and easy</h2>
                        <p
                            className="text-primary3 font-graphik text-xl font-normal"
                        >We handle the heavy lifting so you can relax. We help you conveniently convert crypto to your local currency and have it land exactly where you need it—your bank account.</p>

                    </div>
                    <div className="flex flex-col gap-9 w-full md:w-[600px]">
                        {HowitworksList.map((item, index) =>
                            <div className="flex gap-9 items-start w-full" key={index}>

                                <p className="text-5xl font-agrandir text-primary4 font-bold">
                                    {index + 1}
                                </p>


                                <div className="flex flex-col w-full">
                                    <h3 className="text-2xl text-primary2 font-agrandir font-bold">
                                        {item?.title}
                                    </h3>
                                    <p className="text-primary3 text-lg font-normal font-graphik">
                                        {item?.subTitle}
                                    </p>
                                </div>

                            </div>
                        )}
                    </div>
                    {/* <div className="flex gap-8 items-center">
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
                    </div> */}
                </div>
            </section>
        </div>
    )
}