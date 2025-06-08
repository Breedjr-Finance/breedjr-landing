import ImageWithFallback from "@/components/ImageWithFallback";
import { sendList } from "@/lib/data";
import { Check } from "lucide-react";

export default function SendReceive() {
    return (
        <div className="container px-20 ">
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div
                // className="w-full h-[450px]"
                >
                    <ImageWithFallback
                        alt=""
                        src="/images/send.png"
                        fill
                        objectFit='contain'
                        // objectFit='fill'
                        // classNameImage="w-full h-full"
                        className="lg:w-[436px] xl:w-[536px] h-[450px] lg:h-full xl:h-[450px]"
                    />
                </div>
                <div className="flex flex-col gap-6 ">
                    {/* lg:pr-20 */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-5xl text-foreground">Send even more with great rates on Starpay</h2>
                        <p
                            className="text-black font-medium text-xl"
                        >Quick, reliable and trusted app to send and receive money anywhere in the world. Send money to Nigeria, Ghana, Ethiopia, Cameroon.</p>

                    </div>
                    <div className="flex flex-col gap-4">
                        {sendList.map((item, index) =>
                            <div className="flex gap-3 items-center" key={index}>
                                <div className="w-9.5 h-9.5 flex justify-center items-center bg-primary rounded-full">
                                    <Check />
                                </div>
                                <p className="text-black  text-lg font-medium">

                                    {item}

                                </p>

                            </div>
                        )}
                    </div>

                </div>
            </section>
        </div>
    )

}