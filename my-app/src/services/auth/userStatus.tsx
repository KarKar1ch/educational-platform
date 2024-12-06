import { cookies } from "next/headers";

const getUserState = async()=>{
    const cookiesStore = cookies();
    const atToken = cookiesStore.get("accessToken");
    if(atToken !== undefined){
        return "registered";
    }
    else{
        return "unregistered";
    }
}
export default getUserState;