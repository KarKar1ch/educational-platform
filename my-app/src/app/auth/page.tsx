"use client"
import React from "react";
import { useForm } from 'react-hook-form';
import ImgAuth from "@/components/img/ImgAuth";
import { AuthForm } from "@/types/auth/form";
import Button from "@/components/Button";
import Google from "@/components/icon/Google";
import Instagram from "@/components/icon/Insta";

const AuthPage = ()=>{

    const {register, handleSubmit} = useForm<AuthForm>()

    const onSubmit = () => {
        
    }

    return(
    <div  className="flex justify-center items-center h-screen">
        <div className="w-[695px] h-[415px]">
            <div className="w-[50%] p-[20px] inline-block ">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h1 className="font-bold text text-2xl text-center">Log In</h1>
                        <div className=" ">
                            <Button className="my-[10px]"><Google/>Sign In with Instagram</Button>
                            <Button><Instagram/>Sign In with Google</Button>
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
                    <div className="flex justify-center"><Button className="mt-[15px]" type="submit">Log IN</Button></div>
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