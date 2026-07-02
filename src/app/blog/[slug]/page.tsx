import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'

async function getPost(slug: string) {
  return client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug })
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return <p>Post not found</p>

  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <PortableText value={post.body} />
    </main>
  )
}