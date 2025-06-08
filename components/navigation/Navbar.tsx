"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavItem from "./NavItem"
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";

// import logo from "../../../public/images/logo.png";
// import Image from "next/image";

const Navbar = () => {
    const path = usePathname()
    const [isOpen, setIsOpen] = useState(false);
    console.log(path);
    return (
        <header className={cn("container px-4 lg:px-12",

        )}
        >
            <nav
                className="flex items-center py-4"
            // className="container mx-auto flex items-center justify-between lg:justify-start  gap-2.5 w-full"
            >
                {/* Logo */}
                <Link
                    // href="https://www.xante.app" 
                    href='/'
                    className="flex items-center gap-2">

                    <Image
                        src="/images/logo.png"
                        alt=''
                        width={155}
                        height={30}
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-6 items-center ml-auto">
                    <NavItem to="about-us" >
                        About us
                    </NavItem>
                    <NavItem to="/#howitworks" >
                        How it works
                    </NavItem>
                    <NavItem to="!#" >
                        Features
                    </NavItem>
                    <NavItem to="/#faq" >
                        FAQ
                    </NavItem>

                    <Button className="rounded-[14px] bg-black font-bold text-lg text-white hover:bg-black cursor-pointer h-12.5 px-5 py-3"
                    >
                        Download Now
                    </Button>

                </div>

                {/* Mobile Menu Button */}
                <Button
                    // variant="secondary"
                    variant='ghost'
                    className="lg:hidden ml-auto p-0 hover:bg-transparent"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="menu-botton"
                >
                    {isOpen ? <X className="w-9 h-9" /> : <Menu className="w-9 h-9" />}
                </Button>
            </nav>

            {/* Mobile Menu */}
            {/* bg-white dark:bg-gray-900 */}
            {isOpen && (
                <div className="xl:hidden  px-1 w-full ml-auto z-30 bg-transparent">
                    <div className="container flex flex-col gap-2">
                        <NavItem to="about-us" >
                            About us
                        </NavItem>
                        <NavItem to="/#howitworks" >
                            How it works
                        </NavItem>
                        <NavItem to="!#" >
                            Features
                        </NavItem>
                        <NavItem to="/#faq" >
                            FAQ
                        </NavItem>

                        <Button className="rounded-[14px] bg-black font-bold text-lg text-white hover:bg-black cursor-pointer h-12.5 px-5 py-3"
                        >
                            Download Now
                        </Button>


                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
