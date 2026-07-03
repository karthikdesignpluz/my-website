import { client } from '@/sanity/lib/client'
import Link from 'next/link'

async function getPosts() {
  return client.fetch(`*[_type == "post"] | order(publishedAt desc){ title, "slug": slug.current, excerpt }`)
}

export default async function BlogIndex() {
  const posts = await getPosts()
  return (
    <main className="container py-20">
      <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-red-700">Insights</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950">Blog</h1>
          <p className="mt-4 max-w-2xl text-slate-700 leading-8">
            Industry updates, market insights, and our latest product news.
          </p>
        </div>
        <div className="space-y-8">
          {posts.map((post: any) => (
            <article key={post.slug} className="rounded-3xl border border-slate-200 p-6 transition hover:border-red-700/30">
              <Link href={`/blog/${post.slug}`} className="text-2xl font-semibold text-slate-950 hover:text-red-700">
                {post.title}
              </Link>
              <p className="mt-3 text-slate-600">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}