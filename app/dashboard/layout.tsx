import React from 'react'

export default function DashboardLayout({ children, comments, notifications }: {
   children: React.ReactNode;
   comments: React.ReactNode;
   notifications: React.ReactNode;
}) {
   return (
      <>
         <div>DashboardLayout</div>
         <div>{children}</div>
         <div className='flex flex-row'>
            {comments}
            {notifications}
         </div>
      </>
   )
}

