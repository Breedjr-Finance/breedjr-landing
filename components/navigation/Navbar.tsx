"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavItem from "./NavItem";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useScrolled } from "@/hooks/useScrolled";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const scrolled = useScrolled(10);

    return (
        <header
            className={cn(
                "fixed top-0 z-50 transition-all duration-300 w-full",
                // Mobile: glassy + blur
                isOpen &&
                "bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60",
                // Desktop: make background transparent
                scrolled
                    ? "bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60"
                    : "lg:bg-transparent md:shadow-none"
                // "lg:bg-transparent lg:backdrop-blur-none lg:supports-[backdrop-filter]:bg-transparent"
            )}
        >
            <nav className="container px-4 lg:px-12 flex items-center py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/images/logo.png"
                        alt="Xante Logo"
                        width={155}
                        height={30}
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-6 items-center ml-auto">
                    <NavItem to="about-us">About us</NavItem>
                    <NavItem to="/#howitworks">How it works</NavItem>
                    <NavItem to="/#features">Features</NavItem>
                    <NavItem to="/#faq">FAQ</NavItem>

                    <Button className="rounded-[14px] bg-black font-bold text-lg text-white hover:bg-black cursor-pointer h-12.5 px-5 py-3">
                        Download Now
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <Button
                    variant="ghost"
                    className="lg:hidden ml-auto p-0 hover:bg-transparent"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="menu-button"
                >
                    {isOpen ? <X className="w-9 h-9" /> : <Menu className="w-9 h-9" />}
                </Button>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="lg:hidden fixed inset-x-0 top-[72px] z-50 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 shadow-md transition-all duration-300">
                    <div className="flex flex-col gap-2 px-4 pb-4">
                        <NavItem to="about-us" onClick={() => setIsOpen(false)}>
                            About us
                        </NavItem>
                        <NavItem to="/#howitworks" onClick={() => setIsOpen(false)}>
                            How it works
                        </NavItem>
                        <NavItem to="/#features" onClick={() => setIsOpen(false)}>
                            Features
                        </NavItem>
                        <NavItem to="/#faq" onClick={() => setIsOpen(false)}>
                            FAQ
                        </NavItem>

                        <Button className="rounded-[14px] bg-black font-bold text-lg text-white hover:bg-black cursor-pointer h-12.5 px-5 py-3">
                            Download Now
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;

// <header
//     className={cn(
//         "fixed top-0 z-50 w-full px-4 lg:px-12 transition-all duration-300",
//         // Mobile styles
//         "backdrop-blur-md bg-white/80 supports-[backdrop-filter]:bg-white/60 shadow-md",
//         // Override on desktop
//         "md:backdrop-blur-none md:bg-transparent md:shadow-none"
//     )}
// >
//     <nav

//         className="flex items-center py-4"
//     >
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2">
//             <Image
//                 src="/images/logo.png"
//                 alt="Xante Logo"
//                 width={155}
//                 height={30}
//                 priority
//             />
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex gap-6 items-center ml-auto">
//             <NavItem to="about-us">About us</NavItem>
//             <NavItem to="/#howitworks">How it works</NavItem>
//             <NavItem to="/#features">Features</NavItem>
//             <NavItem to="/#faq">FAQ</NavItem>

//             <Button className="rounded-[14px] bg-black font-bold text-lg text-white hover:bg-black cursor-pointer h-12.5 px-5 py-3">
//                 Download Now
//             </Button>
//         </div>

//         {/* Mobile Menu Button */}
//         <Button
//             variant="ghost"
//             className="lg:hidden ml-auto p-0 hover:bg-transparent"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="menu-button"
//         >
//             {isOpen ? <X className="w-9 h-9" /> : <Menu className="w-9 h-9" />}
//         </Button>
//     </nav>

//     {/* Mobile Menu */}
//     {isOpen && (
//         <div className="lg:hidden fixed inset-x-0 top-[72px] z-40 backdrop-blur-md bg-white/80 dark:bg-black/30 supports-[backdrop-filter]:bg-white/60 shadow-md transition-all duration-300">
//             {/* <div className="lg:hidden absolute left-0 right-0 top-full bg-white dark:bg-background px-4 pb-4 shadow-md z-[998]"> */}
//             <div className="flex flex-col gap-2">
//                 <NavItem to="about-us">About us</NavItem>
//                 <NavItem to="/#howitworks">How it works</NavItem>
//                 <NavItem to="/#features">Features</NavItem>
//                 <NavItem to="/#faq">FAQ</NavItem>

//                 <Button className="rounded-[14px] bg-black font-bold text-lg text-white hover:bg-black cursor-pointer h-12.5 px-5 py-3">
//                     Download Now
//                 </Button>
//             </div>
//         </div>
//     )}
// </header>

// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import NavItem from "./NavItem"
// import { cn } from "@/lib/utils";
// import { usePathname } from "next/navigation";
// import Image from "next/image";

// // import logo from "../../../public/images/logo.png";
// // import Image from "next/image";

// const Navbar = () => {
//     const path = usePathname()
//     const [isOpen, setIsOpen] = useState(false);
//     console.log(path);
//     return (
//         <header className={cn("container px-4 lg:px-12",

//         )}
//         >
//             <nav
//                 className="flex items-center py-4"
//             // className="container mx-auto flex items-center justify-between lg:justify-start  gap-2.5 w-full"
//             >
//                 {/* Logo */}
//                 <Link
//                     // href="https://www.xante.app"
//                     href='/'
//                     className="flex items-center gap-2">

//                     <Image
//                         src="/images/logo.png"
//                         alt=''
//                         width={155}
//                         height={30}
//                     />
//                 </Link>

//                 {/* Desktop Menu */}
//                 <div className="hidden lg:flex gap-6 items-center ml-auto">
//                     <NavItem to="about-us" >
//                         About us
//                     </NavItem>
//                     <NavItem to="/#howitworks" >
//                         How it works
//                     </NavItem>
//                     <NavItem to="/#features" >
//                         Features
//                     </NavItem>
//                     <NavItem to="/#faq" >
//                         FAQ
//                     </NavItem>

//                     <Button className="rounded-[14px] bg-black font-bold text-lg text-white hover:bg-black cursor-pointer h-12.5 px-5 py-3"
//                     >
//                         Download Now
//                     </Button>

//                 </div>

//                 {/* Mobile Menu Button */}
//                 <Button
//                     // variant="secondary"
//                     variant='ghost'
//                     className="lg:hidden ml-auto p-0 hover:bg-transparent"
//                     onClick={() => setIsOpen(!isOpen)}
//                     aria-label="menu-botton"
//                 >
//                     {isOpen ? <X className="w-9 h-9" /> : <Menu className="w-9 h-9" />}
//                 </Button>
//             </nav>

//             {/* Mobile Menu */}
//             {/* bg-white dark:bg-gray-900 */}
//             {isOpen && (
//                 <div className="xl:hidden  px-1 w-full ml-auto z-30 bg-transparent">
//                     <div className="container flex flex-col gap-2">
//                         <NavItem to="about-us" >
//                             About us
//                         </NavItem>
//                         <NavItem to="/#howitworks" >
//                             How it works
//                         </NavItem>
//                         <NavItem to="/#features" >
//                             Features
//                         </NavItem>
//                         <NavItem to="/#faq" >
//                             FAQ
//                         </NavItem>

//                         <Button className="rounded-[14px] bg-black font-bold text-lg text-white hover:bg-black cursor-pointer h-12.5 px-5 py-3"
//                         >
//                             Download Now
//                         </Button>

//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// };

// export default Navbar;
