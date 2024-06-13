"use client"

import Button from "@/components/ui/Button"
import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const NavbarActions = () => {

    const cart = useCart()
    const router = useRouter()
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!isMounted) return null
    return(
        <div className="ml-auto flex items-center gap-x-4">
            <Button
            disabled={cart.items.length === 0}
            onClick={() => router.push('/cart')}
            className="flex items-center rounded-full bg-black px-3 py-3">
                <ShoppingBag
                    size={20}
                    color="white"
                />
                <span className="ml-2 text-sm font-medium text-white">
                    {cart.items.length}
                </span>

            </Button>
        </div>
    )
}

export default NavbarActions