// import { StaticImageData } from "next/image";

export interface GalleryImage {
   id: string,
   name: string,
   src: string,
   photographer:string,
   location:string,
   description:string
}

const  galleryImages : GalleryImage[] = [
   {
      id:"1",
      name:"Mountain Peak",
      src:"https://picsum.photos/id/1018/1200/1200",
      photographer:"Photo by Unsplash",
      location:"Alpine Region",
      description:"A crisp mountain landscape with layered ridges and open sky."
   },
   {
      id: "2",
      name: "Ocean Waves",
      src: "https://picsum.photos/id/1011/1200/1200",
      photographer: "Photo by Unsplash",
      location: "Coastal Area",
      description: "Rolling ocean waves captured in bright daylight near the shoreline."
   },
   {
      id: "3",
      name: "Forest Trail",
      src: "https://picsum.photos/id/1015/1200/1200",
      photographer: "Photo by Unsplash",
      location: "Ancient Forest",
      description: "A quiet forest path cutting through dense trees and soft natural light."
   },
   {
      id: "4",
      name: "Desert Landscape",
      src: "https://picsum.photos/id/1002/1200/1200",
      photographer: "Photo by Unsplash",
      location: "Sahara Desert",
      description: "Warm desert terrain with wide open sand textures and a distant horizon."
   },
   {
      id: "5",
      name: "Urban Architecture",
      src: "https://picsum.photos/id/1031/1200/1200",
      photographer: "Photo by Unsplash",
      location: "Metropolitan City",
      description: "A modern city scene focused on sharp lines, glass, and geometric forms."
   },
   {
      id: "6",
      name: "Tropical Paradise",
      src: "https://picsum.photos/id/1016/1200/1200",
      photographer: "Photo by Unsplash",
      location: "Island Paradise",
      description: "Lush tropical scenery with bright greens, water, and a relaxed atmosphere."
   }
];

export default galleryImages;