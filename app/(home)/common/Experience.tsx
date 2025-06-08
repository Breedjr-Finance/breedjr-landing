
import CustomButton from "@/components/CustomButton";
import ImageWithFallback from "@/components/ImageWithFallback";
import { experienceList } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Experience() {
    return (
        <section className="bg-primary5 px-4 lg:px-[202px] py-12 lg:py-24">
            <div className="max-w-[1036px] mx-auto grid gap-16">

                <div className="flex flex-col gap-6 max-w-[872px] mx-auto text-center items-center">
                    <h2 className="text-3xl lg:text-5xl font-agrandir text-primary2 font-bold">Skip the middleman, Convert your crypto earnings to local currency</h2>
                    <p
                        className=" text-xl font-graphik text-primary3 font-normal"
                    >Making money is already difficult, receiving money doesn’t have to be difficult either. Breedjr makes cashing out your crypto a breeze - it's as effortless as sending a text.</p>
                    <div className="flex flex-col gap-2.5 md:flex-row ">
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


                <div className="grid grid-cols-1 gap-9">
                    {
                        experienceList?.map((item, index) => (
                            <div className="grid md:grid-cols-2 gap-2.5 md:gap-6 bg-primary6 items-center p-6 md:p-8 md:px-14 rounded-[36px]" key={index}>
                                <div className="grid gap-2.5 h-fit">
                                    <h4 className="text-3xl font-agrandir text-black font-bold">
                                        {item?.title}
                                    </h4>
                                    <p className="text-lg font-graphik text-black font-normal">{item?.subTitle}</p>
                                </div>
                                <div className={cn("h-[232.4px] md:h-[350px] flex ",
                                    // [1, 2].includes(index) && 'h-[120px]
                                    // ' w-[200px]'
                                )}>
                                    <ImageWithFallback
                                        src={`/images/${item.img}`}
                                        alt=""
                                        fill
                                        // objectFit="cover"
                                        objectFit='contain'
                                        // className="w-full h-[120px]"
                                        className="w-full "
                                    />
                                </div>
                            </div>
                        ))
                    }
                    <div></div>

                </div>
            </div>
        </section>
    )
}