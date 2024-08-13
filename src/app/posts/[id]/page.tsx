import UpVote from '@/components/upvote-btn'
import React, { useState } from 'react'

interface Params {
    params: { id: string }
}

const Page = async ({ params }: Params) => {

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const response = await fetch(`https://dummyjson.com/posts/${params.id}`)
    const data = await response.json()

    return (
        <main className='px-7 py-24 text-center'>
            <h1 className='text-4xl md:text-5xl font-semibold mb-7'>{data.title}</h1>
            <p className='max-w-[700px] mx-auto'>{data.body}</p>
            <UpVote/>
        </main>
    )
}

export default Page
