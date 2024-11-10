"use client"
import '@/containers/header.css';
import { MoonStarIcon, Sun } from "lucide-react";
import React from "react";
import Link from 'next/link';
import Catalog from '@/components/interface/Catalog';
import useModal from '@/zustand/modal';
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {

    const{ open, isOpen } = useModal();

    return(
        <header className='z-0'>
            <nav className="z-10 shadow-navbar p-2 flex relative h-[100px] w-full">
                <a href="/home" className="flex text-[32px] font-aclonica ml-[100px] my-auto relative w-auto">Educational Platform</a>
                <img src="/img/leaf.png" alt="" className="flex relative my-auto w-[50px] h-[50px]" />
                <div className="flex relative my-auto text-[20px]">
                    <ul className="flex relative ml-[100px] w-auto">
                        <li className="mx-[20px]">
                            <button className={`flex relative ${isOpen ? 'bg-[#3E63F5] text-white rounded-lg w-[120px] z-[10]' : ''}`} onClick={open}>
                                <img src="/icons/category.png" className="w-[16px] h-[16px] mr-1 my-auto" alt=""  />
                                Catalog
                                {isOpen ? (
                                    <IoIosArrowDown className="ml-1 transition-transform duration-200 transform rotate-0" />
                                ) : (
                                    <IoIosArrowDown className="ml-1 transition-transform duration-200 transform rotate-180" />
                                )}
                            </button>
                            <Catalog/>
                        </li>
                        <li className="mx-[20px]">
                            <a href='/about' className="flex relative ">
                                About
                            </a>
                        </li>
                        <li className="mx-[20px]">
                            <button className="flex relative ">
                                Support
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="flex relative ml-auto my-auto">
                    <div className="flex relative items-center">
                        <img src="/icons/loop.png" className="w-[20px] h-[20px]" alt="" />
                    </div>
                    <div className='flex items-center'>
                        <Link className="flex realtive w-[70px] justify-center text-white bg-[#3415D0] p-1 rounded-lg ml-[20px]" href='/auth'>Log In</Link>
                        <Link href='/login'>
                            <button className="flex realtive w-[70px] justify-center text-white bg-[#3415D0] p-1 rounded-lg ml-[20px]">Sign In</button>
                        </Link>
                    </div>
                    <span className="flex items-center relative w-[2px] h-[30px] mx-[20px] bg-[#3415D0]"></span>
                    <div className={"flex relative themes items-center"}data-icon={'sun'}>
                        <button><Sun/></button>
                    </div>
                    <div className="flex items-center realtive mx-[20px]">
                        <img src="/icons/earth-grid.png" className="w-[20px] h-[20px] my-auto" alt="" />
                        <button>Eng</button>
                        <img src="/icons/down-arrow.png" className="w-[16px] h-[16px] my-auto" alt="" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header