import React from "react";
import Image from "next/image";

const ProfileImg = () => {
    return(
        <Image 
            src="/img/profile.png" 
            alt="img"
            width={35}
            height={35}
            className="h-full w-full object-cover"
        />
    )
}

export default ProfileImg;