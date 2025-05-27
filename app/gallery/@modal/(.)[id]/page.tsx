import Image from "next/image";
import Modal from "@/components/modal";
import galleryImages, { GalleryImage } from "@/data/galleryData";

export default async function PhotoModal({   
   params,
}: {
   params: Promise<{ id: string }>;
}) {
   const { id } = await params;
   const photo: GalleryImage = galleryImages.find((p) => p.id === id)!;

   return (
      <Modal>
         <Image
            alt={photo.name}
            src={`https://picsum.photos/id/${photo.id}/200/300`}
            className="w-full object-cover aspect-square"
         />

         <div className="bg-white p-4">
            <h2 className="text-xl font-semibold">{photo.name}</h2>
            <h3>{photo.photographer}</h3>
            <h3>{photo.location}</h3>
         </div>
      </Modal>
   );
}