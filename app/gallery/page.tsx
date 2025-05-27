import Link from "next/link";
import Image from "next/image";
import galleryImages from "@/data/galleryData";

export default function Gallery() {
  return (
     <main className="container mx-auto">
        <h1 className="text-center text-3xl font-bold my-4">
           New Wonders of the World
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
           {galleryImages.map(({ id, src, name }) => (
              <Link key={id} href={`/gallery/${id}`}>
                 <Image alt={name} src={`https://picsum.photos/id/${id}/200/300`}
                    width={200}
                    height={300}
                    className="w-full object-cover aspect-square" />
              </Link>
           ))}

        </div>

     </main>
  )
}

