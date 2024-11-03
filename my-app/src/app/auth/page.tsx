
"use client"
import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import ImgAuth from "@/components/img/ImgAuth";
import { AuthForm } from "@/types/auth/form";
import Button from "@/components/Button";
import Google from "@/components/icon/Google";
import Instagram from "@/components/icon/Insta";
import { yupResolver } from "@hookform/resolvers/yup";
import authView from "@/zustand/authView";

import { handleLogin } from "@/services/auth/handleLogin";
import { loginScheme, signupScheme, signupScheme2 } from "@/services/auth/auth-validation-scheme";
import LeftArrow from "@/components/icon/Left-arrow";


const AuthPage = ()=>{
    const [isEmail,setIsEmail] = useState('')
    const getView = authView((state)=>state.getView);
    const updateView = authView((state)=>state.updateView);
    
    /* const [isView,setIsView] = useState('signin'); */
    const scheme = ():yup.ObjectSchema<any> =>{
        if(getView() === 'signin'){
            return loginScheme
        }else if(getView() === 'signup-2'){
            return signupScheme
        }
        else{
            return signupScheme2
        }
    }
    const {register,reset,clearErrors, handleSubmit,formState:{errors}} = useForm<AuthForm>({
        defaultValues:{
            email:'',
            password:'',
            username:getView() === 'signup-2' ? '' : undefined
        },
        resolver:yupResolver(scheme())
    })
    const getRequest = async(data:any,view:string)=>{
        console.log(`Here is the user's data: ${data}`);
        
        switch(view){
            case 'signin':
                await handleLogin({email:data.email,password:data.password},'signin');
                break;
            case 'signup-1':
                await setIsEmail(`${data.email}`);
                await updateView('signup-2');
                break;
            case 'signup-2':
                await handleLogin({email:isEmail,password:data.password,username:data.username},'signup')
                break;
        }
    }
    useEffect(()=>{
        reset();
        clearErrors();
    },[getView()])
    return(
    <div  className="flex bg-blueTriangle justify-center items-center h-[calc(100vh_-_100px)]">
            <div className="w-[800px] h-[500px] flex bg-white shadow-auth rounded-lg overflow-hidden">
            <div className="w-[50%] px-7 pb-7 flex flex-col">
                <div className="flex relative w-full h-[28px] mt-3 items-center">
                    <a href="/about"><LeftArrow/></a>
                </div>
                <form className="flex flex-col w-full h-full" onSubmit={handleSubmit(async(data)=>{await getRequest(data,getView())})}>
                    <div>
                        <h1 className="font-bold text text-2xl text-center">Log In</h1>
                        <div className=" ">
                            <Button className="my-[10px]"><Google/>Sign In with Instagram</Button>
                            <Button><Instagram/>Sign In with Google</Button>
                        </div>
                    </div>
                    <div className="flex my-[10px] h-[24px] items-center">
                        <div className="w-[50%] h-[2px] bg-[#3E63F5] flex"></div>
                        <span className="flex w-auto mx-2 h-auto">or</span>
                        <div className="w-[50%] h-[2px] bg-[#3E63F5] flex"></div>
                    </div>
                    <div className="flex">
                        {(getView() === 'signin' || getView() === 'signup-1' || getView() === 'signup-2') && (
                        <div className="flex flex-col w-full">
                            {(getView() === 'signin' || getView() === 'signup-1') && (
                                <>
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
                                
                                </>
                            )}
                            {(getView() === 'signup-2') && (
                            <>
                                <div className={`flex h-[48px] ${errors.username? '' : 'mb-4'}`}> 
                                    <input  
                                        className={`w-full h-full p-[10px] outline-none border border-[#3E63F5] rounded-xl`}
                                        placeholder="username"
                                        type="text"
                                        {...register('username')}
                                    />
                                </div>
                                {errors.username && (
                                    <div className="text-erorrs">{errors.username.message}</div>
                                )}
                            </>
                            )}
                            {(getView() === 'signin' || getView() === 'signup-2') && (
                            <>
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
                            </>
                            )}
                        </div>
                        )}
                    </div>
                    <button onClick={()=>{updateView('signup-1')}} className = "inline-flex relative my-2 border-b-2 border-[#3E63F5] w-[44%]">New to our Platform?</button>
                    <div className="flex mt-auto justify-center h-[38px] w-full"><Button className="h-full w-[75%] text-[17px] font-medium" type="submit">{getView() === 'signin'? 'Log In': 'Continue'}</Button></div>
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