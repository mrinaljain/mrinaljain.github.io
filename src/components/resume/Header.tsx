import Image from 'next/image';
import React from 'react'

function Header() {
   return (
      <div id="photoHeader" className="text-center">
         {/* PHOTO (AVATAR) */}
         <div id="photo" className="inline-block justify-center mb-4 w-[162px] h-[162px]  rounded-full overflow-hidden p-[5px] bg-[#334960]">
            <Image
               src="./mrinal_jain.jpeg"
               height={160}
               width={160}
               alt="avatar"
               className="rounded-full border-4 shadow-md"
            />
         </div>
         <div id="textHeader">
            <h1 className=" ">
               Mrinal Jain
               <br />
               <span className="">Web Developer</span>
            </h1>
         </div>
      </div>
   )
}

export default Header;