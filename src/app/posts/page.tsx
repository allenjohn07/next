import Link from 'next/link'
import React from 'react'

interface Post{
  id: number
  title: string
  body: string
  tags: string[]
  reactions: Record<string, any>
  views: number
  userId: number
}

const Post = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch("https://dummyjson.com/posts?limit=10")
  const data = await response.json()
  

  return (
    <main className="text-center pt-24 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All posts</h1>
      <ul>
        {
          data?.posts.map((post: any) => (
            <li key={post.id} className='mb-3'>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))
        }
      </ul>
    </main>
  )
}

export default Post