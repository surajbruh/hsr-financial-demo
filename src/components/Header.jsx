import { useState } from "react";
import { Menu, X, MapPin, Phone, Mail } from "lucide-react";
import config from "../config/index.json";
import { Link } from "react-router-dom";

const Header = () => {
    const [selected, setSelected] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 z-10 w-full">
            {/* ---------------- MAIN NAVIGATION BAR ---------------- */}
            <div className="w-[80vw] mx-auto flex items-center justify-between py-4 relative">

                {/* LOGO */}
                <div className="w-[125px]">
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
                                <Link
                                    className={`${selected === navItem.name
                                        ? "text-(--accent-color) border-b-2 border-(--accent-color)"
                                        : "text-gray-800 hover:text-(--accent-color)"
                                        }`}
                                    onClick={() => {
                                        setSelected(navItem.name);
                                        setMenuOpen(false);
                                    }}
                                >
                                    {navItem.name}
                                </Link>
                            </li>
                        ))}

                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;