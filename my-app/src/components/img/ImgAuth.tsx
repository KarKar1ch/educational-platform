import React from "react";
import Image from "next/image";

const ImgAuth = () => {
    return(
        <Image 
            src="/auth/Vector.png" 
            alt="img"
            width={600}
            height={600}
            className="h-full w-full object-cover"
        />
    )
}

export default ImgAuth