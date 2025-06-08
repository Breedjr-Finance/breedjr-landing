'use client'
import Link from "next/link";
import { cn } from "@/lib/utils"; // ShadCN utility for merging classes
import { LucideIcon } from "lucide-react"; // Importing Lucide icons for consistency
import { ReactNode } from "react";
import { IconType } from "react-icons";
import { usePathname } from "next/navigation";

interface NavItemProps {
    icon?: LucideIcon | IconType | undefined;
    children: ReactNode;
    to: string;
    onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, children, to, onClick, }) => {
    const path = usePathname()
    return (
        <Link
            href={to}
            onClick={onClick}
            className={cn(
                "flex items-center gap-1 text-lg font-semibold font-graphik transition-colors text-foreground"
                // path === to ? 'text-foreground' : 
                // "text-foreground",
                // "hover:text-primary",

            )}
        // as="li"
        >
            {Icon && <Icon className="size-3.5" />} {children}
        </Link>
    );
};

export default NavItem;
