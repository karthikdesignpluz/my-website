import { client } from '@/sanity/lib/client'
import Link from 'next/link'

async function getPosts() {
  return client.fetch(`*[_type == "post"] | order(publishedAt desc){ title, "slug": slug.current, excerpt }`)
}

export default async function BlogIndex() {
  const posts = await getPosts()
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      {posts.map((post: any) => (
        <div key={post.slug} className="mb-8">
          <Link href={`/blog/${post.slug}`} className="text-2xl font-semibold hover:underline">
            {post.title}
          </Link>
          <p className="text-gray-600">{post.excerpt}</p>
        </div>
      ))}
    </main>
  )
}