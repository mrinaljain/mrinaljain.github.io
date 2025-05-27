import Link from "next/link";

export default function InterceptedF2Page() {
  return (
    <div>
      <h1> Intercepted F2 Page</h1>

      <Link href={"/gallery"}>Go to Gallery Page</Link>
      </div>
  )
}

