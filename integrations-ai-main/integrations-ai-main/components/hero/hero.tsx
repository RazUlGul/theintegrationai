'use client'

import Image from "next/image";
import './hero.css'
import {  FaChevronDown, FaChevronRight } from "react-icons/fa6";
import { useState } from "react";
import { BookFormComponent } from "../form/book";
import { NovaSections } from "./nova";

export default function HeroComponent() {
    const [booking, setBooking] = useState(false)
    
    return (
        <article className="max-w-7xl w-full mx-auto px-4 relative hero">
            <div className=" flex flex-col lg:flex-row gap-4">
                <div className="relative lg:w-1/2 card">
                    {/* <Image src="/hero_bg.png" className="rounded-2xl" alt="Hero Background" width={1456} height={816} /> */}
                    <Image src="/phone.png" className="absolute top-[calc(50%-95px)] left-[calc(50%-113px)] w-[226px] h-[190px] lg:top-[calc(50%-190px)] lg:left-[calc(50%-226px)] lg:w-[452px] lg:h-[380px]" alt="Hero Background" width={904} height={760} />
                    <p className="text-white text-xl lg:text-2xl absolute top-4 left-4">
                        Talk to <span className="font-black">Nova.</span> Cut costs.<br />
                        Save hours. <span className="font-black">Scale faster.</span>
                    </p>
                    <div className="absolute bottom-4 right-4">
                        <p className="text-white text-xl lg:text-2xl text-right">
                            Work <span className="font-black">less.</span> Grow more.
                        </p>
                        <p className="text-white text-xl lg:text-2xl text-right pr-8">
                            Let AI <span className="font-black">handle</span> it.
                        </p>
                        <div className="bg-white rounded-lg p-1 absolute bottom-2 right-0">
                            <FaChevronDown className="text-black lg:hidden" />
                            <FaChevronRight className="text-black hidden lg:block" />
                        </div>
                    </div>
                </div>
                <div className="relative lg:w-1/2 card">
                    <NovaSections />
                </div>
            </div>
            {/* <div className="absolute bottom-[-16px] left-0 bg-white rounded-full p-2 lg:p-4">
                <div className="bg-black rounded-full cursor-pointer group hover:bg-white duration-500 transition-all border-[3px] border-black h-[60px] w-[60px] lg:h-[80px] lg:w-[80px] flex items-center justify-center">
                    <Image src="/robot1.png" className="group-hover:hidden duration-500 transition-all h-[27px] w-[36px] lg:h-[30px] lg:w-[40px]" alt="Integration.ai Icon" width={40} height={30} />
                    <Image src="/robot2.png" className="hidden group-hover:block duration-500 transition-all h-[27px] w-[36px] lg:h-[30px] lg:w-[40px]" alt="Integration.ai Icon" width={40} height={30} />
                </div>
            </div> */}
            {/* <div className="absolute bottom-[-8px] lg:bottom-[-16px] right-2 bg-white rounded-xl p-2 lg:p-4">
                <button className="text-lg lg:text-3xl duration-500 transition-all">
                    Book a Call
                </button>
            </div> */}
            <div className="px-4 py-12 lg:py-16 flex items-center justify-center">
                <button onClick={() => setBooking(true)} className="border-3 border-black text-lg lg:text-3xl duration-500 transition-all bg-black text-white hover:text-black hover:bg-white duration-500 transition-all cursor-pointer py-2 px-4 rounded-lg">
                    Book a Call
                </button>
            </div>
            {booking && <BookFormComponent close={() => setBooking(false)} />}
        </article>
    );
}
