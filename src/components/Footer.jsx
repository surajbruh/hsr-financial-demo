import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import config from "../config/index.json";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black text-white  pt-10 pb-6">
            <div className="w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* ----------- LOGO + ABOUT ----------- */}
                <div>
                    <div className="w-[125px] mb-4">
                        <img
                            className="w-full h-full object-cover"
                            src="/logo.svg"
                            alt="brand logo"
                        />
                    </div>
                    <p className="text-sm leading-relaxed text-gray-300 md:w-[80%]">
                        {config.footer.about.description}
                    </p>
                </div>

                {/* ----------- QUICK LINKS ----------- */}
                <div>
                    <h3 className="uppercase text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        {config.navigation.map((item) => (
                            <li
                                className="uppercase"
                                key={item.name}>
                                <Link
                                    className="text-gray-300 hover:text-(--accent-color) transition"
                                    to={item.href || "#"}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ----------- CONTACT DETAILS ----------- */}
                <div>
                    <h3 className="uppercase text-lg font-semibold mb-4">Contact Us</h3>
                    <div className="flex flex-col gap-3">
                        {/* Email */}
                        <div className="flex items-center gap-2">
                            <Mail size={20} strokeWidth={1.5} />
                            <a
                                href={`mailto:${config.contact.email}`}
                                className="text-gray-300 hover:text-(--accent-color) transition"
                            >
                                {config.contact.email}
                            </a>
                        </div>
                        {/* Phone */}
                        <div className="flex items-center gap-2">
                            <Phone size={20} strokeWidth={1.5} />
                            <a
                                href={`tel:${config.contact.phone}`}
                                className="text-gray-300 hover:text-(--accent-color) transition"
                            >
                                {config.contact.phone}
                            </a>
                        </div>
                    </div>
                </div>

                {/* ----------- SOCIAL MEDIA ----------- */}
                <div>
                    <h3 className="uppercase text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex items-center gap-4">
                        {config.social.facebook && (
                            <a
                                href={config.social.facebook}
                                target="_blank"
                                className="hover:text-(--accent-color) transition"
                            >
                                <Facebook size={20} strokeWidth={1.5} />
                            </a>
                        )}
                        {config.social.instagram && (
                            <a
                                href={config.social.instagram}
                                target="_blank"
                                className="hover:text-(--accent-color) transition"
                            >
                                <Instagram size={20} strokeWidth={1.5} />
                            </a>
                        )}
                        {config.social.linkedin && (
                            <a
                                href={config.social.linkedin}
                                target="_blank"
                                className="hover:text-(--accent-color) transition"
                            >
                                <Linkedin size={20} strokeWidth={1.5} />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* ----------- COPYRIGHT BAR ----------- */}
            <div className="w-full text-center text-gray-400 text-sm mt-10 pt-4 border-t border-gray-700">
                © {new Date().getFullYear()} {config.company.brandName}. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;