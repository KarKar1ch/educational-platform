
import * as jwt_decode from "jwt-decode"
import axios from "@/app/api/axios";
import Cookies from "js-cookie";

const refreshTokens = async(refreshToken:string)=>{
    console.log('It`s refresh time!');
    
    try{
        const {data} = await axios.patch('auth/refreshTokens',null,{
            headers:{
                'Authorization':`Bearer ${refreshToken}`
            }
        })
        Cookies.set('accessToken',data.access_token,{expires:Date.now() + 15 *60*1000});
        Cookies.set('refreshToken',data.refresh_token,{expires:28});
        console.log("It's refreshToken: ",data.refresh_token);
        console.log("It's accessToken: ",data.access_token);
        return {
            refreshToken:data.refresh_token,
            accessToken:data.access_token
        }
    }catch(err){
        console.error("Error!Tried to refresh tokens!")
    }
}



export const setupTokenRefresh = async()=>{
    const accessToken = Cookies.get("accessToken");
    const refreshToken = Cookies.get("refreshToken");
    console.log('AtToken: ',accessToken);
    console.log('RtToken: ',refreshToken);
    
    if(accessToken && refreshToken){
        const decodedAtToken = await jwt_decode.jwtDecode(accessToken);
        if(decodedAtToken && typeof decodedAtToken.exp === 'number') {
            const expirationTime = decodedAtToken.exp * 1000;
            const currentTime = Date.now();

            const timeToRefresh = expirationTime - currentTime - 60000;
            console.log("It's time to refresh: ",timeToRefresh);
            
            if(timeToRefresh>0){
                setTimeout(async()=>{
                    await refreshTokens(refreshToken);  
                    await setupTokenRefresh();
                    },timeToRefresh
                )
            }else {
                await refreshTokens(refreshToken);
                await setupTokenRefresh();
            }
        };
    }
    if(!accessToken && refreshToken){
        await refreshTokens(refreshToken);
        await setupTokenRefresh();
    }

}