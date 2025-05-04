"use client"

import { startTransition } from "react";
import { useRouter } from "next/router";
function ErrorBoundry({ error, reset }: {
  error: Error;
  reset: () => void; // attempts rerender client side
}) {
  const router = useRouter();
  function reload() {
    startTransition(() => {
      router.reload();
      reset()
    })
  }
  return (

    <div>

      <p>Error occured in this component</p>
      <p>{error.message}</p>
      <button onClick={reload}>Retry loading</button>
    </div>

  )
}

export default ErrorBoundry;