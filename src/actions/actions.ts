"use server"

import prisma from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const createPost = async (formData: FormData) => {

    //authenticate the request
    const { userId } = auth()

    //if no user is logged in then redirect
    if(!userId){
        redirect('/sign-in')
    }

    const title = formData.get('title') as string
    const body = formData.get('body') as string

    //creating the post inside db using prisma
    await prisma.post.create({
        data: {
            title,
            body
        }
    })

    //revalidate ( re renders everytime a post is created. Else it wont show the newly created post)
    revalidatePath("/posts")
}