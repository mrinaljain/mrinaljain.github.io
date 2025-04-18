import React from 'react'

export default async function BlogPage() {

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved")

    }, 5000);
  })
  return (
    <div>BlogPage</div>
  )
}

