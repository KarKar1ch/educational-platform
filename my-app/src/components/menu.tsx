'use client'

import menuStorage from "@/zustand/menu";
import { useState } from "react";


const Menu = ()=>{
    const {updateIsShow,getIsShow} = menuStorage();
    const handleUpdateShow = ()=>{
        updateIsShow(!getIsShow());
    }
    console.log('This is getIsSHow = ',getIsShow());
    
    return(
        <div className="flex relative min-w-[300px]">
            {getIsShow() && (
                <div className="flex flex-col px-4 relative w-[250px] bg-white h-[calc(100vh_-_100px)]">
                    <a href="/home" className="flex px-4 mt-5 py-1 relative w-full h-[50px] items-center hover:bg-[#E6E6E6] transition-ease-in-out rounded-lg"><img src="/icons/home.png" className="w-[20px] h-[20px] mr-3"/>
                        <span className="text-[16px] text-black">
                            Home
                        </span>
                    </a>
                </div>
            )}
                <div className={`flex relative w-[50px]`}>
                    <button onClick={handleUpdateShow} className={`flex relative ${getIsShow()?'mx-auto':'ml-5'} my-3 w-[25px] h-[25px]`}>
                        <img src="/icons/menu-white.png" alt="" className={`flex relative w-[100%] h-[100%]`}/>
                    </button>
                </div>
        </div>
    )
}

export default Menu;