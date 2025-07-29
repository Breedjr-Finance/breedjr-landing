import React from "react";
import Navbar from "../../../components/navigation/Navbar";
import ImageWithFallback from "../../../components/ImageWithFallback";

const Header = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-gradient-to-r from-primary to-primary1 ">

            <div className="container relative flex justify-end  h-full">
                <div
                    className="w-full md:w-[799px] h-[1178px] md:h-[948px] lg:h-[760px] xl:h-[747px]"

                >

                    <ImageWithFallback
                        src="/images/header-bg.png"
                        alt="Header Background"
                        objectFit="fill"
                        fill
                        className="w-full h-full"
                    />
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between items-center ">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Header;
