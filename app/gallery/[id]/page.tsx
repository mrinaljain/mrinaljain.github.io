import galleryImages, { GalleryImage } from '@/data/galleryData';
import Image from 'next/image';

export default async function PhotoPage(
   { params }:{ params: Promise<{ id: string }> }
) {
   const {id} = await params;
   const photo: GalleryImage = galleryImages.find((p)=> p.id === id)!;
   return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
         <Image
            src={`https://picsum.photos/id/${photo.id}/200/300`} // assuming your image is in public/images/
            alt={photo.name || "Photo"}
            width={400}
            height={300}
            className="object-cover w-full h-auto"
         />
         <div className="px-4 py-3">
            {photo.name && <h2 className="font-bold text-lg">{photo.name}</h2>}
            <p className="text-sm text-gray-600">{photo.photographer}</p>
            <p className="text-sm text-gray-500 italic">{photo.location}</p>
         </div>
      </div>
   )
}
