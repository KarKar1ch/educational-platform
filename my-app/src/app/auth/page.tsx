"use client"
import React from "react";
import { useForm } from 'react-hook-form';

import ImgAuth from "@/components/img/ImgAuth";

const AuthPage = ()=>{

    const {register, handleSubmit} = useForm()

    const onSubmit = (data:any) => {
        
    }

    return(
    <div  className="flex justify-center items-center h-screen">
        <div className="w-[695px] h-[415px]">
            <div className="w-[50%] p-[20px] inline-block ">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h1 className="font-bold text text-2xl text-center">Log In</h1>
                        <div className=" ">
                            <button className="w-full bg-[#3E63F5] text-white rounded-3xl mb-[10px]">Sign In with Instagram</button>
                            <button className="w-full bg-[#3E63F5] text-white rounded-3xl ">Sign In with Google</button>
                        </div>
                    </div>
                    <div className="my-[10px]">
                        <div className="w-[46%] h-[1px] bg-[#3E63F5] inline-block"></div>
                        <p className="inline-block">or</p>
                        <div className="w-[46%]  h-[1px] bg-[#3E63F5] inline-block"></div>
                    </div>
                    <div>
                        <div className="">
                            <input 
                                className="w-full h-[40px] border border-[#3E63F5] rounded-xl mb-[10px]"
                                placeholder="email"
                                type="text"
                                {...register('email')}
                            />
                            <input  
                                className="w-full h-[40px] border border-[#3E63F5] rounded-xl mb-[10px]"
                                placeholder="password"
                                type="password"
                                {...register('password')}
                            />
                        </div>
                        <button className = "">New to our Platform?</button>
                    </div>
                    <div className="flex justify-center"><button className="w-[50%] bg-[#3E63F5] text-white rounded-3xl mt-[25px]" type="submit">Log In</button></div>
                </form>
            </div>
            <div className="w-[50%] inline-block">
                <div>
                    <ImgAuth/>
                    <h2>Welcome to Educational Platform</h2>
                    <p>By continuing,you agree to our User Agreement and acknowledge tha you understand the Privacy Policy</p>
                </div>
                <div>
                </div>
            </div>
        </div>
    </div>
    
    )
}
export default AuthPage;