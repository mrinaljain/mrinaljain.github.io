"use client";

import { socialLinks } from "@/data/socialLinks";


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
                              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 text-2xl transition"
                         >
                              <Icon />
                         </a>
                    ))
               }
          </div >
     )
}

export default SocialLinks