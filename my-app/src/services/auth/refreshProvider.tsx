"use client"

import { useEffect } from "react";
import { setupTokenRefresh } from "./setupTokenRefresh";


const RefreshProvider = ({ children }: { children: React.ReactNode })=>{
    useEffect(() => {
        setupTokenRefresh();
      }, []);
    
      return <>{children}</>;
}
export default RefreshProvider;