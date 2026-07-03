import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'

async function getPage(slug: string) {
  return client.fetch(`*[_type == "page" && slug.current == $slug][0]`, { slug })
}

export default async function AboutPage() {
  const page = await getPage('about')
  if (!page) return <p className="container py-20 text-center text-slate-700">Add an "About" page in the Studio at /studio</p>

  return (
    <main className="container py-20">
      <div className="space-y-8 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-red-700">About Us</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950">{page.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
            We combine decades of leather export experience with trusted global partners to deliver premium hides and skins with consistency, transparency, and care.
          </p>
        </div>
        <div className="prose text-slate-700">
          <PortableText value={page.body} />
        </div>
      </div>
    </main>
  )
}
