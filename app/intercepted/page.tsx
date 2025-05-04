import Link from 'next/link'
import React from 'react'

export default function InterceptedPage() {
  return (
    <div className='mt-10'>

        <h1>InterceptedPage</h1>

        <Link href="intercepted/p1"> Go to p1</Link>
    </div>
  )
}


/*
when we need to show a page from some other folder in current route , then use this.
*/
 