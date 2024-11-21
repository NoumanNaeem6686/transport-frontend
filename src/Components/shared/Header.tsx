/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
    const pathname = usePathname();
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(false);

    const navData = [
        { name: "Get Offer", path: "/get-offer", isButton: true, color: "white" },
        { name: "Book Vehicle", path: "/book-vehicle", isButton: true, color: "black" },
    ];

    const getOppositeColor = (color: any) => (color === "white" ? "black" : "white");

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
        <div className="flex w-full items-center justify-center">
            <nav
                className={`w-full fixed h-20 flex flex-row items-center justify-between px-6 md:px-12 lg:px-10 top-0 z-50
                ${visible
                        ? "bg-[#949696]/85 backdrop:filter backdrop-blur-lg shadow-xl text-black z-40"
                        : "bg-transparent text-black"
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

                <div className="flex flex-row gap-x-6">
                    <Link href={"/get-offer"}>
                        <div
                            className={`bg-white hover:bg-black hover:text-white py-2 px-5 min-w-[120px] rounded-lg cursor-pointer flex items-center justify-center text-base hover:border-black transition-colors`}
                        >
                            Get Offer
                        </div>
                    </Link>
                    <Link href={"/book-vehicle"}>
                        <div
                            className={`bg-black text-white hover:bg-white hover:text-black py-2 px-5 min-w-[120px] rounded-lg cursor-pointer flex items-center justify-center text-base hover:border-white transition-colors`}

                        >
                            Book Vehicle
                        </div>
                    </Link>
                </div>

            </nav>
        </div>
    );
};

export default Header;
