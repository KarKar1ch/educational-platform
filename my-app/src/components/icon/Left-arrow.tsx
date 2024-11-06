import React from "react";
import Image from "next/image";

const LeftArrow = () => {
    return(
        <Image 
            src="/icons/left-arrow-grey.png" 
            alt="left arrow"
            width={32}
            height={36}
        />
    )
}

export default LeftArrow;