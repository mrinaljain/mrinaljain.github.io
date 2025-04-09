import { youtubeVideos } from "../../data/youtubeVideos";


 export async function  GET(){
    return Response.json(youtubeVideos);
 }