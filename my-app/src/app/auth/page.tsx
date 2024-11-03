
"use client"
import React from "react";
import { useForm } from 'react-hook-form';
import ImgAuth from "@/components/img/ImgAuth";
import { AuthForm } from "@/types/auth/form";
import Button from "@/components/Button";
import Google from "@/components/icon/Google";
import Instagram from "@/components/icon/Insta";

const AuthPage = () => {

    const {register, handleSubmit} = useForm<AuthForm>()

    const onSubmit = () => {
        
    }

    return(
    <div  className="flex bg-blueTriangle justify-center items-center h-screen">
        <div className="w-[800px] h-[500px] flex bg-white shadow-auth rounded-lg overflow-hidden">
            <div className="w-[50%] p-7 flex">
                <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h1 className="font-bold text text-2xl ml-4 mt-4">Log In</h1>
                        <div className="flex flex-col mt-6 text-[17px] font-medium">
                            <Button className="mb-[10px] pr-[23px] h-[36px] text-rose-50 flex items-center justify-center"><Google/>Sign In with Google</Button>
                            <Button className="flex items-center  h-[36px] justify-center text-rose-50"><Instagram/>Sign In with Instagram</Button>
                        </div>
                    </div>
                    <div className="flex my-[10px] h-[24px] items-center">
                        <div className="w-[50%] h-[2px] bg-[#3E63F5] flex"></div>
                        <span className="flex w-auto mx-2 h-auto">or</span>
                        <div className="w-[50%] h-[2px] bg-[#3E63F5] flex"></div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col w-full">
                            <div className="flex h-[48px] mb-4"> 
                                <input 
                                    className="w-full p-[10px] outline-none h-full border border-[#3E63F5] rounded-xl mb-[10px]"
                                    placeholder="email"
                                    type="text"
                                    {...register('email')}
                                />
                            </div>
                            <div className="flex h-[48px]">
                                <input  
                                    className="w-full h-full p-[10px] outline-none border border-[#3E63F5] rounded-xl mb-[10px]"
                                    placeholder="password"
                                    type="password"
                                    {...register('password')}
                                />
                            </div>
                        </div>
                    </div>
                    <a className = "inline-flex relative my-2 border-b-2 border-[#3E63F5] w-[44%]">New to our Platform?</a>
                    <div className="flex justify-center mt-auto"><Button className="h-[38px] w-[85%] text-[17px] font-medium" type="submit">Log In</Button></div>
                </form>
            </div>
            <div className="w-[50%] flex">
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