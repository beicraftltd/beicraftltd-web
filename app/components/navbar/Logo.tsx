import Image from "next/image";
import { useRouter } from "next/navigation";


import React from 'react'

function Logo() {
  return (
    <div >
      
      <Image
        alt="Beicraft Logo"
        className=" hidden md:block cursor-pointer dark:bg-slate-100"
        height={50}
        width={70}
        src={"/images/logo.png"}
        
        />
    </div>
    
        
        
        
  )
}

export default Logo