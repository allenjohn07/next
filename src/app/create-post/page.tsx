import { createPost } from '@/actions/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { auth } from '@clerk/nextjs/server'
import { SignInButton, SignOutButton } from '@clerk/nextjs'

const Page = async () => {

    const { userId } = auth()

    return (
        userId ? <main className='px-7 py-24 text-center'>
            <h1 className='text-4xl md:text-5xl font-bold mb-7'>Create Post</h1>

            <div className='w-full flex justify-center'>
                <div className="flex flex-col items-center">
                    <form className='flex gap-2' action={createPost}>
                        <Input required name='title' type="text" placeholder="Title for new post" />
                        <Button variant="outline" type="submit">Submit</Button>
                    </form>
                    <Button className='bg-red-700 w-1/3 hover:bg-red-600 mt-32'><SignOutButton /></Button>
                </div>
            </div>
        </main> : <main className='px-7 py-24 flex justify-center items-center text-center'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h2>Login to create post</h2>
                <Button className='bg-emerald-400 text-black rounded-sm hover:bg-emerald-300'><SignInButton /></Button>
            </div>
        </main>

    )
}

export default Page