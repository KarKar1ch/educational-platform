import React from "react";
import Image from "next/image";

const AuthPage = ()=>{


    return(
    <div>
        <div></div>
        <div className="w-[695px]">
            <div className="w-[50%] p-[20px] inline-block">
                <form className="">
                    <div>
                        <h1 className="font-bold text text-2xl text-center">Log In</h1>
                        <div className=" ">
                            <button className="w-full bg-[#3E63F5] text-white rounded-3xl mb-[10px]"><Image src={''} alt=""/>Sign In with Instagram</button>
                            <button className="w-full bg-[#3E63F5] text-white rounded-3xl "><Image src={''} alt=""/>Sign In with Google</button>
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
                            />
                            <input  
                                className="w-full h-[40px] border border-[#3E63F5] rounded-xl mb-[10px]"
                                placeholder="password"
                                type="password" 
                            />
                        </div>
                        <button className = "">New to our Platform?</button>
                    </div>
                    <div><button className="w-full bg-[#3E63F5] text-white rounded-3xl mb-[10px]">Log In</button></div>
                </form>
            </div>
            <div className="w-[50%] inline-block">
                <div>
                    <h2>Welcome to Educational Platform</h2>
                    <p>By continuing,you agree to our User Agreement and acknowledge tha you understand the Privacy Policy</p>
                </div>
                <div>
                    <Image src={''} alt=""/>
                    <Image src={''} alt=""/>
                </div>
            </div>
        </div>
    </div>
    
    )
}
export default AuthPage;