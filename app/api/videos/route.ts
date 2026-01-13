import {NextResponse} from "next/server";
import * as mongoose from "mongoose";
import {connectionStr} from "@/app/lib/db";

export async function GET(){

    try {
        await mongoose.connect(connectionStr);
        return NextResponse.json({ status: 200 , message: 'Hello World!' });
    } catch (error:unknown) {
        console.log("Error connecting to DB", error);
    }

}