import UpVote from '@/components/upvote-btn'
import prisma from '@/lib/db'
import { notFound } from 'next/navigation'
import React, { useState } from 'react'

interface Params {
    params: { id: string }
}

const Page = async ({ params }: Params) => {

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const response = await prisma.post.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })

    if(!response){
        notFound()
    }

    return (
        <main className='px-7 py-24 text-center'>
            <h1 className='text-4xl md:text-5xl font-semibold mb-7'>{response.title}</h1>
            <p className='max-w-[700px] mx-auto'>{response.body}</p>
            <UpVote/>
        </main>
    )
}

export default Page
