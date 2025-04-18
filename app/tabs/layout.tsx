import Link from 'next/link'
import React, { ReactNode } from 'react'

interface Props {
   children?: ReactNode
}
export default function TabsLayout({ children }: Props) {
   return (
      <>
         <div>TabsLayout</div>
         <h3>Common Input </h3>
         <input className='border border-black bg-green-100 p-3'/>
         <ul className='inline'>
            <li><Link href="tab1">One</Link></li>
            <li><Link href="tab2">Two</Link></li>
            <li><Link href="tab3">Three</Link></li>
         </ul>
         {children}
      </>
   )


   // Tabs layout  persists the state of components which are common across childern pages.

   // if we want to refresh state everytime then we can use template insted of layout 
}
