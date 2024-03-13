import Image from "next/image";
import { useRouter } from "next/navigation";


import React from 'react'

function Logo() {
  return (
    <Image
        alt="Beicraft Logo"
        className=" hidden md:block cursor-pointer"
        height={50}
        width={70}
        src={"/images/logo.png"}
        />
  )
}

export default Logo