import { NextResponse } from "next/server";


export async function GET() {

    return NextResponse.json({ ok: true, message: "Video fetched succesfully" }, { status: 200 });
}