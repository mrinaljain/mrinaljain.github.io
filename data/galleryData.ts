// import { StaticImageData } from "next/image";

export interface GalleryImage {
   id: string,
   name: string,
   src: string,
   photographer:string,
   location:string
}

const  galleryImages : GalleryImage[] = [
   {
      id:"1",
      name:"",
      src:"p1",
      photographer:"",
      location:""
   },
   {
      id: "2",
      name: "",
      src: "p2",
      photographer: "",
      location: ""
   },
   {
      id: "3",
      name: "",
      src: "p3",
      photographer: "",
      location: ""
   },
   {
      id: "4",
      name: "",
      src: "p4",
      photographer: "",
      location: ""
   },
   {
      id: "5",
      name: "",
      src: "p5",
      photographer: "",
      location: ""
   },
   {
      id: "6",
      name: "",
      src: "p6",
      photographer: "",
      location: ""
   }
];

export default galleryImages;