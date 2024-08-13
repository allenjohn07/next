import Link from 'next/link'
import React from 'react'


interface Post {
    id: number
    title: string
    body: string
    tags: string[]
    reactions: Record<string, any>
    views: number
    userId: number
}

const PostList = async () => {

    await new Promise((resolve) => setTimeout(resolve, 1000))
    const response = await fetch("https://dummyjson.com/posts?limit=10")
    const data = await response.json()

    return (
        <ul>
            {
                data?.posts.map((post: Post) => (
                    <li key={post.id} className='mb-3'>
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default PostList