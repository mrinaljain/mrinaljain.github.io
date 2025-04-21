"use client"
import Link from 'next/link';
import React from 'react'
export default function NotificationsPage() {
  // const router = useRouter();
  // function handleRoute(){
  //   router.push("child")
  // }
  return (
    <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
      
      <h3> Notification page as a parallel route</h3>

      <Link href="/dashboard/child" > Go to child page further </Link>
    </div>
  )
}

