'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Logo from '@/app/assests/Logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='bg-black relative rounded-[10px] mx-4 mt-5 md:mx-24'>
            {/* Hamburger Menu for Small and Medium Screens */}
            <div className='flex justify-between  items-center px-4 py-2 lg:hidden'>
                <Link href={'/'} className='text-[11px] font-black text-black'>
                    <div>
                        <Image src={Logo} width={120} height={120} alt="Logo" />
                    </div>
                </Link>
                <button onClick={toggleMenu} className='focus:outline-none text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Links Larger Screens */}
            <div className='hidden lg:py-[20px] lg:mt-10 lg:bg-black  lg:rounded-[20px] lg:flex justify-between mt-2'>
                <div className='flex lg:order-2 lg:text-white lg:text-[17px] lg:pt-3 space-x-10'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/'}>About Us</Link>
                    <Link href={'/'}>Contact Us</Link>
                </div>

                <div className='flex justify-center lg:order-1 lg:pt-3 '>
                    <Link href={'/'} className='text-[26px] font-black lg:ml-9 text-black z-10'>
                        <Image
                            src={Logo}
                            width={134}
                            height={28}
                            alt='text'
                        />
                    </Link>
                </div>

                <div className='flex justify-center lg:order-3 '>
                    <div className="bg-gradient-two text-white lg:py-2 lg:px-4 lg:mr-9 lg:text-[18px] lg:rounded-[15px]">
                        <Link href={'/'}>Contact Me</Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='lg:hidden bg-white rounded shadow-md z-20 mt-2 absolute left-0 right-0'>
                    <div className='flex flex-col items-center space-y-2 py-4'>
                        <Link href={'/'} onClick={toggleMenu}>Home</Link>
                        <Link href={'/'} onClick={toggleMenu}>About Us</Link>
                        <Link href={'/'} onClick={toggleMenu}>Contact Us</Link>
                        <Link href={'/'} onClick={toggleMenu} className='bg-gradient-two text-white py-2 px-4 rounded'>
                           Contact Me
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
