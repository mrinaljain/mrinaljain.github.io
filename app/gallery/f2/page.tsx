import Link from "next/link";

export default function F2Page() {
  return (
    <div>
      <h1> F2 Page normal one</h1>

      <Link href={"/gallery"}>Go back to galery Page</Link>
    </div>
  )
}

