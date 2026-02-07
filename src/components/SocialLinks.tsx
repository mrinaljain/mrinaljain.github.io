"use client";

import { socialLinks } from "@/src/data/socialLinks";


function SocialLinks() {
     return (
          < div className="mt-6 flex justify-center gap-6" >
               {
                    socialLinks.map(({ id, href, icon: Icon }) => (
                         <a
                              key={id}
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-gray-900 text-2xl transition"
                         >
                              <Icon />
                         </a>
                    ))
               }
          </div >
     )
}

export default SocialLinks