

import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";



export async function GET(request: NextRequest) {
   //1 First way to get headers
   const reqHead = new Headers(request.headers);
   const h3 = reqHead.get("auth")

   //2nd way to get headers
   const reqHeaders = await  headers();
   const cookiesReq = await cookies();
   cookiesReq.set("authCookie", "Bearer 2226906")
   const h1 = reqHeaders.get("auth") ?? "";
   const c1 = cookiesReq.get("authCookie")?? "";
   return Response.json({ "data": "Empty ", "header": h1, "cookies": c1, "another-header": h3 });
}

  