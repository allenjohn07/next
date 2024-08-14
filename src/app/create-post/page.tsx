import { createPost } from '@/actions/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { auth } from '@clerk/nextjs/server'
import { SignInButton, SignOutButton } from '@clerk/nextjs'
import { Textarea } from '@/components/ui/textarea'

const Page = async () => {

    const { userId } = auth()

    return (
        userId ? <main className='px-7 py-24 text-center'>
            <h1 className='text-4xl md:text-5xl font-bold mb-7'>Create Post</h1>

            <div className='flex justify-center'>
                <div  className='w-full md:w-1/2 flex flex-col justify-center items-center'>
                    <form className='w-full flex flex-col gap-2' action={createPost}>
                        <Input required name='title' type="text" placeholder="Title for new post" />
                        <Textarea name='body' rows={6} required placeholder="Type your content here." />
                        <Button variant="outline" type="submit">Submit</Button>
                    </form>
                    <div className='px-2 py-1 rounded-sm border-b-2 mt-16 w-1/3 md:w-1/5 hover:border-b-red-700'><SignOutButton /></div>
                </div>
            </div>
        </main> : <main className='px-7 py-24 flex justify-center items-center text-center'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h2>Login to create post</h2>
                <div className='px-2 py-1 rounded-sm border-b-2 hover:border-b-emerald-500'><SignInButton /></div>
            </div>
        </main>

    )
}

export default Page