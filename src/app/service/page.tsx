import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'

async function getPage(slug: string) {
  return client.fetch(`*[_type == "page" && slug.current == $slug][0]`, { slug })
}

export default async function ServicePage() {
  const page = await getPage('service')
  if (!page) return <p className="container py-20 text-center text-slate-700">Add a "Service" page in the Studio at /studio</p>

  return (
    <main className="container py-20">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-red-700">Our Capabilities</p>
          <h1 className="text-4xl font-semibold text-slate-950">{page.title}</h1>
          <p className="text-slate-700 leading-8">
            Delivering high-quality hides, skins, and leather products for international buyers with end-to-end attention to quality, timing, and compliance.
          </p>
        </div>
        <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-slate-950 p-10 text-white shadow-xl">
          <div>
            <h2 className="text-2xl font-semibold">Why partner with us?</h2>
            <ul className="mt-6 space-y-4 text-slate-200">
              <li>Reliable supply chain from Australia to global markets.</li>
              <li>Industry expertise in hides, wetblue, and finished leather.</li>
              <li>Dedicated customer service for large and small orders.</li>
            </ul>
          </div>
          <a href="/contact" className="section-cta">Contact our team</a>
        </div>
      </div>
      <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl prose text-slate-700">
        <PortableText value={page.body} />
      </div>
    </main>
  )
}
