
"use client"
import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';

import ImgAuth from "@/components/img/ImgAuth";
import { AuthForm } from "@/types/auth/form";
import Button from "@/components/Button";
import Google from "@/components/icon/Google";
import Instagram from "@/components/icon/Insta";
import { yupResolver } from "@hookform/resolvers/yup";
import authView from "@/zustand/authView";

import { handleLogin } from "@/services/auth/handleLogin";
import { loginScheme, signupScheme } from "@/services/auth/auth-validation-scheme";
import LeftArrow from "@/components/icon/Left-arrow";


const AuthPage = ()=>{
    const getView = authView((state)=>state.getView);
    const updateView = authView((state)=>state.updateView);
    
    /* const [isView,setIsView] = useState('signin'); */

    const scheme = getView() === 'signup-2' ? signupScheme : loginScheme
    const {register, handleSubmit,formState:{errors}} = useForm<AuthForm>({
        defaultValues:{
            email:'',
            password:'',
            userName:getView() === 'signup-2' ? '' : undefined
        },
        resolver:yupResolver(scheme)
    })
    return(
    <div  className="flex bg-blueTriangle justify-center items-center h-screen">
        {getView() === 'signin' && (
            <div className="w-[800px] h-[500px] flex bg-white shadow-auth rounded-lg overflow-hidden">
            <div className="w-[50%] px-7 pb-7 flex flex-col">
                <div className="flex relative w-full h-[28px] mt-3 items-center">
                    <a href="/about"><LeftArrow/></a>
                </div>
                <form className="flex flex-col w-full" onSubmit={handleSubmit(async (data)=>await handleLogin({email:data.email,password:data.password}))}>
                    <div>
                        <h1 className="font-bold text text-2xl ml-4 mt-1">Log In</h1>
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
                            <div className={`flex h-[48px] ${errors.email? '' : 'mb-4'}`}> 
                                <input 
                                    className={`w-full p-[10px] outline-none h-full border border-[#3E63F5] rounded-xl`}
                                    placeholder="email"
                                    type="text"
                                    {...register('email')}
                                />
                            </div>
                            {errors.email && (
                                <div className="text-erorrs">{errors.email.message}</div>
                            )}
                            <div className="flex h-[48px]">
                                <input  
                                    className={`w-full h-full p-[10px] outline-none border border-[#3E63F5] rounded-xl mb-[10px]`}
                                    placeholder="password"
                                    type="text"
                                    {...register('password')}
                                />
                            </div>
                            {errors.password && (
                                <div className="text-erorrs">{errors.password.message}</div>
                            )}
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
        )
    }
    </div>
    
    )
}
export default AuthPage;