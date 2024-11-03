import React from "react";
import Image from "next/image";

const ImgAuth = () => {
    return(
        <Image 
            src="/auth/Vector.png" 
            alt="img"
            className="h-full w-full object-cover"
            width={330 }
            height={415}
        />
    )
}

export default ImgAuth