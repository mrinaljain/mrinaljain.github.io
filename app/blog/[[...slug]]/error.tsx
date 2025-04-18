"use client"

function ErrorBoundry({error, reset}: {
  error:Error;
  reset: () =>void;
}) {
  return (
    <div>

      <p>Error occured in this component</p>
      <p>{error.message}</p>
      <button onClick={reset}>Retry loading</button>
    </div>
  )
}

export default ErrorBoundry;