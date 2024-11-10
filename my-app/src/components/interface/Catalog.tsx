"use client"
import React, { useState } from "react";
import useModal from "@/zustand/modal";
import { IoCodeSlash } from "react-icons/io5";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Catalog = () => {

    const {isOpen, close} = useModal()
    const [menu, setMenu] = useState([
        {
            id:1,
            link: '/link',
            icon: <IoCodeSlash />,
            name: 'programming'
        },
        {
            id:2,
            link: '/link1',
            icon: <IoCodeSlash />,
            name: 'programming'
        },
    ]) 

    if(!isOpen) return null;

    const handleBackdropClick = (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
            close();
        }
    };

    return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={handleBackdropClick}>
        <div className="bg-white p-4 rounded-3xl shadow-lg w-[1150px] h-[405px]">
            <div>
                <input
                className="w-full h-[45px] rounded-[18px] border-[2px] border-[#C9C9C9] focus:outline-none"
                type="text"
                placeholder="Enter the skill you want to acquire"
                />
            </div>
            <div className="inline-block w-[50%]">
                {menu.map( menu => 
                    <div key = {menu.id} className="mb-[20px]">
                        <Link href={menu.link}>
                            <div className="inline-block text-[#3E63F5]">
                                {menu.icon}
                            </div>
                            <div className="inline-block">
                                {menu.name}
                            </div>
                        </Link>
                    </div>
                )}
            </div>
            <div className="inline-block w-[50%]">
                <div className=" flex justify-between">
                    <div className="inline-block"><h1>Популярные</h1></div>
                    <div className="inline-block">
                        <button className="w-[42px] h-[42px] rounded-full bg-[#E7E7E7]"><IoIosArrowBack className=""/></button>
                        <button className="w-[42px] h-[42px] rounded-full bg-[#E7E7E7]"><IoIosArrowForward className=""/></button>
                    </div>
                </div>
                <div>
                    {/* TODO: популярные педагоги, нужен бэк */}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Catalog