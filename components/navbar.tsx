import Link from "next/link"
import MainNav from "./main-nav"
import Container from "./ui/container"
import getCategories from "@/actions/get-categories"
import NavbarActions from "./navbar-actions"

export const revalidate = 0;

const Navbar = async () => {
    const categories = await getCategories();
    const uniqueCategories = Array.from(
  new Map(categories.map(category => [category.name, category])).values()
);

    return (
        <div className="border-b relative">
            <Container>
                {/* Use justify-between to push Logo left and Actions right */}
                <div className="px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                    
                    {/* Left: Logo */}
                    <Link href='/' className="flex items-center gap-x-2">
                        <p className="font-bold text-xl">QuickCart</p>
                    </Link> 
                    
                    {/* Center: Navigation (Handles its own mobile/desktop switching) */}
                    <MainNav data={uniqueCategories}/>
                    
                    {/* Right: Actions (Cart, User, etc.) */}
                    <div className="flex items-center gap-x-4">
                         <NavbarActions/>
                    </div>

                </div>
             </Container>
        </div>
    )
}

export default Navbar