import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import config from "../config/index.json";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    const navBarRef = useRef(null)
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false); // Add this state
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <header
            ref={navBarRef}
            className={`sticky md:fixed top-0 z-100 w-full transition-all duration-300 ${isScrolled ? 'bg-gray-50 shadow-md' : 'bg-transparent'
                }`}>
            {/* Rest of your code stays the same */}
            <div className="w-[80vw] mx-auto flex items-center justify-between py-4 relative">

                {/* LOGO */}
                <div
                    onClick={() => navigate("/")}
                    className="w-[125px]">
                    <img
                        className="w-full h-full object-cover object-center"
                        src="/logo.svg"
                        alt="brand-logo"
                    />
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    className="md:hidden focus:outline-none text-gray-800"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
                </button>

                {/* NAVIGATION */}
                <nav
                    className={`
                        absolute md:static top-16 left-0 w-full md:w-auto 
                        bg-white md:bg-transparent shadow-md md:shadow-none 
                        transition-all duration-300 z-20
                        ${menuOpen ? "block" : "hidden md:block"}
                    `}
                >
                    <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 p-4 md:p-0">

                        {config.navigation.map((navItem) => (
                            <li
                                key={navItem.name}
                                className="uppercase font-semibold px-4 py-2 cursor-pointer"
                            >
                                <NavLink
                                    to={navItem.href}
                                    className={({ isActive }) => isActive
                                        ? "text-(--accent-color) border-b-2 border-(--accent-color)"
                                        : "text-gray-800 hover:text-(--accent-color)"}
                                    onClick={() => {
                                        setMenuOpen(false);
                                    }}
                                >
                                    {navItem.name}
                                </NavLink>
                            </li>
                        ))}

                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;