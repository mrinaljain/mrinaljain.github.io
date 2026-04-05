import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import galleryImages from "@/data/galleryData";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata(
   { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
   const { id } = await params;
   const photo = galleryImages.find((item) => item.id === id);

   if (!photo) {
      return createPageMetadata({
         title: "Gallery",
         description: "Photo not found.",
         path: "/gallery",
         noIndex: true,
      });
   }

   return createPageMetadata({
      title: photo.name,
      description: photo.description,
      path: `/gallery/${photo.id}`,
      image: photo.src,
      keywords: [photo.name, photo.location, "gallery image", "photo detail"],
      type: "website",
   });
}

export default async function PhotoPage(
   { params }:{ params: Promise<{ id: string }> }
) {
   const {id} = await params;
   const photo = galleryImages.find((p)=> p.id === id);

   if (!photo) {
      notFound();
   }

   return (
      <main className="mx-auto max-w-4xl px-6 pb-16 pt-28">
         <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <div className="flex flex-col gap-3">
               <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                  {photo.location}
               </p>
               <h1 className="text-4xl font-bold tracking-tight">{photo.name}</h1>
               <p className="text-base leading-7 text-slate-600 dark:text-slate-300">{photo.description}</p>
            </div>

            <Image
               alt={photo.name}
               src={photo.src}
               width={1200}
               height={1200}
               sizes="(min-width: 1024px) 768px, 100vw"
               className="aspect-square w-full rounded-3xl object-cover shadow-lg"
            />

            <div className="grid gap-3 rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
               <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Photo details
               </h2>
               <p className="text-base text-slate-600 dark:text-slate-300">{photo.photographer}</p>
               <p className="text-lg font-semibold text-slate-900 dark:text-white">{photo.location}</p>
            </div>
         </div>
      </main>
   );
}
