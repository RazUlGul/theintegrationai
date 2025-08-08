'use client'

import Link from "next/link";
import Image from "next/image";
import { FaBars, FaPhoneVolume, FaX } from "react-icons/fa6";
import './nav.css'
import { useState } from "react";
import { BookFormComponent } from "../form/book";

export default function NavComponent() {
    const [popup, setPopup] = useState(false)
    const [booking, setBooking] = useState(false)

    const Book = () => {
      setBooking(true)
      setPopup(false)
    }

    const navlinks = [
        {
            title: 'home',
            href: '/'
        },
        {
            title: 'chat',
            href: '/'
        },
        // {
        //     title: 'support',
        //     href: '/'
        // },
    ]
    
    return (
        <nav className="w-full py-4 lg:py-12 relative">
            <div className="flex max-w-7xl w-full px-8 items-end justify-center mx-auto gap-4">
                <div className="flex items-center gap-2">
                    <button className="transition-all duration-500 group">
                        <Image src="/INTEGRATIONS.png" className="group-hover:hidden duration-500 transition-all" alt="Integration.ai Icon" width={40} height={30} />
                        <Image src="/INTEGRATIONS2.png" className="hidden group-hover:block duration-500 transition-all" alt="Integration.ai Icon" width={40} height={30} />
                    </button>
                    <button className="transition-all duration-500 lg:hidden" onClick={() => Book()}>
                        <FaPhoneVolume className="text-3xl" />
                    </button>
                </div>
                {/* <button className="transition-all duration-500 hidden lg:block">
                    <FaPhoneVolume className="text-3xl" />
                </button> */}
                {/* <button className="transition-all duration-500 lg:hidden" onClick={() => setPopup(!popup)}>
                    <FaBars className="text-3xl" />
                </button> */}
            </div>
            {/* <div className="max-w-7xl w-full px-8 items-end justify-evenly mx-auto hidden lg:flex">
                {navlinks.map((navlink, navlinkkey) => {
                    return (
                        <Link className="capitalize navlink transition-all duration-500 hidden lg:block" href={navlink.href} key={`Nav-NavLink-${navlinkkey}`}>
                            {navlink.title}
                        </Link>
                    )
                })}
            </div> */}
            {popup && <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-50">
                <button className="transition-all duration-500 absolute top-4 right-4" onClick={() => setPopup(!popup)}>
                    <FaX className="text-3xl" />
                </button>
                <div className=" flex flex-col pt-12 gap-4">
                    {navlinks.map((navlink, navlinkkey) => {
                        return (
                            <Link className="capitalize navlink transition-all duration-500 text-xl" href={navlink.href} key={`Nav-NavLink-${navlinkkey}`}>
                                {navlink.title}
                            </Link>
                        )
                    })}
                </div>
            </div>}
            {booking && <BookFormComponent close={() => setBooking(false)} />}
        </nav>
    );
}
