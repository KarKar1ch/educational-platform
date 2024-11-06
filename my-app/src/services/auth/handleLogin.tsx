"use client"
import axios from "@/app/api/axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export const saveTokensToCookies = async(accessToken:string,refreshToken:string):Promise<void>=>{
    const accessTokenExpiration = new Date(new Date().getTime() + 15 * 60 * 1000);
    Cookies.set('accessToken',accessToken,{
        expires:accessTokenExpiration,secure:true,sameSite:'strict'
    });
    Cookies.set('refreshToken',refreshToken,{
        expires:28,secure:true,sameSite:'strict'
    });
}

export const handleLogin = async(data:any) => {
        console.log('Email:',data.email);
        console.log('Password:',data.password);
        console.log('Handle login called');
        
        try{
            console.log('test');
            const res = await axios.post('/auth/signin',{
                ...data
            })
            if(res.data.tokens){
                alert('Login Successful!');
                console.log('HandleLogin True!');
                saveTokensToCookies(res.data.tokens.access_token,res.data.tokens.refresh_token);
                console.log('Then is ok');
                
                window.location.href = '/about';
                
            }
        }catch(err){
            console.error('There is an error');
            
        }
}