import { youtubeVideos } from "./data";


 export async function  GET(){
    return Response.json(youtubeVideos);
 }