import Loading from '@/components/loading'
import PostList from '@/components/post-list'
import React, { Suspense } from 'react'

const Post = async () => {
  return (
    <main className="text-center py-24 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All posts</h1>

      <Suspense fallback={<Loading />}>
        <PostList />
      </Suspense>
    </main>
  )
}

export default Post