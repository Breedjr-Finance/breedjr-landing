import React from "react";
import Navbar from "../../../components/navigation/Navbar";
import ImageWithFallback from "../../../components/ImageWithFallback";

const Header = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-gradient-to-r from-primary to-primary1 relative flex justify-end  h-full">
            <div
                className="w-full h-[1278px] md:w-[799px]  md:h-[1278px] lg:h-[760px]"

            >

                <ImageWithFallback
                    src="/images/header-bg.png"
                    alt="Header Background"
                    // objectFit="contain"
                    fill
                    className="w-full h-full"
                />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between items-center lg:px-8">
                <Navbar />
                {children}
            </div>
        </div>
    );
};

export default Header;
