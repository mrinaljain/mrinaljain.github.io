import Image from 'next/image';
import React from 'react'
import { GitHubUser } from '@/lib/github';

interface HeaderProps {
   gitHubUser: GitHubUser | null;
}

function Header({ gitHubUser }: HeaderProps) {
   return (
      <div id="photoHeader" className="text-center">
         {/* PHOTO (AVATAR) */}
         <div id="photo" className="inline-block justify-center mb-4 w-40.5 h-40.5 rounded-full overflow-hidden p-1.25 bg-slate-700 dark:bg-slate-800">
            <Image
               src={gitHubUser?.avatar_url || './mrinal_jain.jpeg'}
               height={160}
               width={160}
               alt="avatar"
               className="rounded-full border-4 shadow-md"
               priority
            />
         </div>
         <div id="textHeader">
            <h1 className=" ">
               {gitHubUser?.name || 'Mrinal Jain'}
               <br />
               <span className="">Web Developer</span>
            </h1>
            
         </div>
      </div>
   )
}

export default Header;