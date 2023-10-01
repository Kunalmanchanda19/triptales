import { NextResponse } from "next/server"

connectDb()
export function GET(request)
{
    const users =[
        {
            name:"kunal",
            phone:"2343",
            course:"java"
        },
        {
            name:"kunal",
            phone:"2343",
            course:"java"
        }
    ]
    return NextResponse.json(users)
}