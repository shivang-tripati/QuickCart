"use client"

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Category } from "@/type";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface MainNavProps {
    data : Category[]
}

const MainNav : React.FC<MainNavProps> = ({
    data
}) => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const routes = data.map((route) => ({
        href : `/category/${route.id}`,
        label : route.name, 
        active : pathname === `/category/${route.id}`
    }))

    return (
        <>
            {/* Desktop View */}
            <nav className="hidden lg:flex items-center space-x-6">
                {routes.map((route) => (
                    <Link 
                        href={route.href} 
                        key={route.href} 
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-black", 
                            route.active ? "text-black" : "text-neutral-500"
                        )}
                    >
                        {route.label}
                    </Link>
                ))}
            </nav>

            {/* Mobile Trigger */}
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Drawer */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white border-b shadow-xl z-50 lg:hidden animate-in slide-in-from-top-5">
                    <nav className="flex flex-col p-4 space-y-4">
                        {routes.map((route) => (
                            <Link 
                                href={route.href} 
                                key={route.href} 
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "text-lg font-medium transition-colors", 
                                    route.active ? "text-black" : "text-neutral-500"
                                )}
                            >
                                {route.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </>
    )
}

export default MainNav