
import '@/containers/header.css';
import { MoonStarIcon, Sun } from "lucide-react";
import React from "react";


const Header = () => {
    return(
        <header>
            <nav className="z-10 p-2 flex relative h-[100px] w-full">
                <a href="/home" className="flex text-[32px] font-nav-logo ml-[100px] my-auto relative w-auto">Educational Platform</a>
                <img src="/img/leaf.png" alt="" className="flex relative my-auto w-[50px] h-[50px]" />
                <div className="flex relative my-auto text-[20px]">
                    <ul className="flex relative ml-[100px] w-auto">
                        <li className="mx-[20px]">
                            <button className="flex relative">
                                <img src="/icons/category.png" className="w-[16px] h-[16px] mr-1 my-auto" alt="" />
                                Catalog
                                <img src="/icons/down-arrow.png" className="w-[18px] h-[18px] my-auto" alt="" />
                            </button>
                        </li>
                        <li className="mx-[20px]">
                            <button className="flex relative ">
                                About
                            </button>
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
                        <button className="flex realtive w-[70px] justify-center text-white bg-[#3415D0] p-1 rounded-lg ml-[20px]">Log In</button>
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