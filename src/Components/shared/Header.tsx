"use client"

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(false);



    const navData = [
        { name: "How It Works", path: "/how-works" },
        { name: "Shipping Rates", path: "/shipping-rates" },
        { name: "About", path: "/about" },
        { name: "Contact Us", path: "/contact-us" },
        { name: "Get Offer", path: "/get-offer", isButton: true },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        toggleMenu();
    };

    useEffect(() => {
        let navbar = true;
        const handleScroll = () => {
            if (navbar) {
                const currentScrollPos = window.scrollY;
                setVisible(currentScrollPos > 20);
                setPrevScrollPos(currentScrollPos);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            navbar = false;
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    return (
        <div className={"flex w-full items-center justify-center"}>
            <nav
                className={`w-full fixed h-20 flex flex-row items-center justify-between px-6 md:px-12 lg:px-10 xl:px-24 top-0 z-50
            ${visible
                        ? "bg-[#edf6f9]/85 backdrop:filter backdrop-blur-lg shadow-xl text-black z-40"
                        : " bg-transparent text-black"
                    } transform transition-transform duration-300`}
            >
                <Link href="/">
                    <h1
                        className={`${visible ? "text-black" : "text-white"
                            } text-3xl font-semibold cursor-pointer`}
                    >
                        Transport
                    </h1>
                </Link>

                <div className="flex justify-end lg:hidden" onClick={toggleMenu}>
                    <Menu
                        className={` ${visible ? "text-black" : "wtext-hite"}  md:h-10 h-7 w-auto`}
                    />
                </div>

                <div className={`hidden lg:flex flex-row gap-x-6`}>
                    {navData.map((item, index) => (
                        <Link key={index} href={item.path}>
                            <div
                                className={`py-1.5 ${visible || item.isButton ? "text-black" : "text-white"
                                    }   text-base cursor-pointer hover:opacity-80
                    ${item.isButton
                                        ? "bg-white text-black border rounded-lg border-white px-5 py-1 hover:bg-black hover:text-white hover:border-black hover:opacity-100 transition-colors "
                                        : ""
                                    }
                    ${pathname === item.path && !item.isButton
                                        ? "opacity-75"
                                        : ""
                                    }`}
                                onClick={handleLinkClick}
                            >
                                {item.name}
                            </div>
                        </Link>
                    ))}

                </div>

                <div
                    className={`fixed top-0 min-h-screen left-0 w-full bg-white py-4 shadow z-50 transform border-2 border-pink 
                    transition-transform ease-in-out duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                        } lg:hidden`}
                >
                    <div className="flex flex-col space-y-6 bg-white">
                        <div className="flex justify-end pr-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                onClick={toggleMenu}
                                className="w-6 h-6 text-black cursor-pointer"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>
                        {navData.map((item, index) => (
                            <Link key={index} href={item.path}>
                                <div
                                    className={`px-3 py-1.5 text-xl mx-4 text-black cursor-pointer
                      ${item.isButton
                                            ? "bg-black text-white border rounded-lg border-white py-2.5 w-fit px-6"
                                            : ""
                                        }
                      ${pathname.startsWith(item.path)
                                            ? "font-medium text-black"
                                            : ""
                                        }`}
                                    onClick={handleLinkClick}
                                >
                                    {item.name}
                                </div>
                            </Link>
                        ))}

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
