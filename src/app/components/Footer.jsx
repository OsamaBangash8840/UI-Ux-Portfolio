import React from 'react'
import Image from 'next/image'
import FooterBg from '@/app/assests/Footer.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="relative w-full h-full py-7 flex flex-col items-center justify-center text-center">
            <Image
                src={FooterBg}
                alt="Footer Background"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="z-0"
            />
            <div className="relative z-10 flex flex-row justify-center text-[21px] md:text-[40px] md:gap-10 gap-4 text-gradient-three">
                <FaInstagram />
                <FaFacebook />
                <FaLinkedin />
                <FaTwitter />
            </div>
            <div className="relative z-10 mt-5 text-black">
                <p className=" text-[9px] md:text-[18px]">Copyright 2024. All rights reserved.</p>
            </div>
        </div>
    );
}
