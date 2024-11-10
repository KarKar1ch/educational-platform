'use client'

import menuStorage from "@/zustand/menu";
import {useRef} from "react";
import Catalog from '@/components/interface/Catalog';
import useModal from '@/zustand/modal';
import Link from "next/link";

const Menu = ()=>{

    const {open} = useModal();

    const divMenuRef = useRef<HTMLDivElement>(null);
    const {updateIsShow,getIsShow} = menuStorage();
    const handleUpdateShow = ()=>{
        const isCurrentlyShown = getIsShow();
        if (divMenuRef.current) {
            if (isCurrentlyShown) {
                // Добавляем класс закрытия
                divMenuRef.current.classList.add('animate-close-menu');
                updateIsShow(!getIsShow());
                // Ждем завершения анимации, потом удаляем класс
                setTimeout(() => {
                    divMenuRef.current?.classList.remove('flex');
                    divMenuRef.current?.classList.add('hidden');
                    divMenuRef.current && divMenuRef.current.classList.remove('animate-close-menu');
                }, 400); 
            } else {
                // Добавляем класс открытия
                divMenuRef.current.classList.remove('hidden');
                divMenuRef.current.classList.add('animate-open-menu');
    
                // Ждем завершения анимации, потом удаляем класс
                setTimeout(() => {
                    divMenuRef.current?.classList.add('flex');
                    divMenuRef.current && divMenuRef.current.classList.remove('animate-open-menu');
                    updateIsShow(!getIsShow());
                }, 400); 
            }
        }
    }

    console.log('This is getIsSHow = ',getIsShow());
    
    return(
        <div className="flex  relative min-w-[300px]">
            <div ref={divMenuRef} className={`hidden flex-col px-4 relative w-[250px] bg-white h-[calc(100vh_-_100px)]`}>
                <Link href="/home" className="flex px-4 mt-5 py-1 relative w-full h-[50px] items-center hover:bg-[#E6E6E6] transition-bg-in-out duration-300 ease-in-out rounded-lg"><img src="/icons/home.png" className="w-[20px] h-[20px] mr-3"/>
                    <span className="text-[16px] text-black">
                        Home
                    </span>
                </Link>
                <button onClick={open} className="flex px-4 py-1 relative w-full h-[50px] items-center hover:bg-[#E6E6E6] transition-bg-in-out duration-300 ease-in-out rounded-lg"><img src="/icons/category.png" className="w-[20px] h-[20px] mr-3"/>
                    <span className="text-[16px] text-black">
                        Catalog
                    </span>
                </button>
                <Catalog/>
            </div>
            <div className={`flex relative w-[50px]`}>
                <button onClick={handleUpdateShow} className={`flex relative mx-auto my-3 w-[25px] h-[25px]`}>
                    <img src="/icons/menu-white.png" alt="" className={`flex relative w-[100%] h-[100%]`}/>
                </button>
            </div>
        </div>
    )
}

export default Menu;