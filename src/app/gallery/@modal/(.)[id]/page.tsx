import Image from "next/image";
import { notFound } from "next/navigation";
import Modal from "@/components/modal";
import galleryImages from "@/data/galleryData";

export default async function PhotoModal({   
   params,
}: {
   params: Promise<{ id: string }>;
}) {
   const { id } = await params;
   const photo = galleryImages.find((p) => p.id === id);

   if (!photo) {
      notFound();
   }

   return (
      <Modal>
         <Image
            alt={photo.name}
            src={photo.src}
            width={1200}
            height={1200}
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="aspect-square w-full rounded-t-3xl object-cover"
         />

         <div className="rounded-b-3xl bg-white p-4 dark:bg-slate-900">
            <h2 className="text-xl font-semibold">{photo.name}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{photo.description}</p>
            <h3 className="mt-3 text-gray-600 dark:text-slate-400">{photo.photographer}</h3>
            <h3 className="text-gray-700 dark:text-slate-200">{photo.location}</h3>
         </div>
      </Modal>
   );
}