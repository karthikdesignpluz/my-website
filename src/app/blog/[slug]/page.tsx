import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'

async function getPost(slug: string) {
  return client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug })
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return <p className="container py-20 text-slate-700">Post not found</p>

  return (
    <main className="container py-20">
      <article className="space-y-10 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-red-700">Blog post</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950">{post.title}</h1>
        </div>
        <div className="prose text-slate-700">
          <PortableText value={post.body} />
        </div>
      </article>
    </main>
  )
}