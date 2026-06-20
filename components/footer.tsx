import Link from "next/link"
import getCategories from "@/actions/get-categories"

const Footer = async () => {
    // Fetch categories just like in the Navbar
    const categories = await getCategories();

    return (
        <footer className="bg-white border-t">
            <div className="mx-auto py-10 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* 1. Brand & Copyright Section */}
                    <div>
                        <Link href="/" className="font-bold text-xl mb-4 block">
                            QuickCart
                        </Link>
                        <p className="text-sm text-neutral-500 dark:text-gray-400">
                            &copy; {new Date().getFullYear()} EcommerceStore, Inc. <br />
                            All rights reserved.
                        </p>
                    </div>

                    {/* 2. Shop Categories (Dynamic) */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Shop</h3>
                        <ul className="space-y-2">
                            {categories.map((category) => (
                                <li key={category.id}>
                                    <Link 
                                        href={`/category/${category.id}`} 
                                        className="text-sm text-neutral-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                                    >
                                        {category.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Utility Links (Static) */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-sm text-neutral-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-sm text-neutral-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-neutral-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
                
                {/* Optional: Bottom Border/Divider if needed */}
                <div className="mt-10 pt-6 border-t border-neutral-200 dark:border-neutral-700">
                    <p className="text-xs text-center text-neutral-400">
                        Designed with ❤️ for UrbanThreads
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer