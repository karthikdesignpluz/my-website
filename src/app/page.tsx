import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'

async function getPage(slug: string) {
  return client.fetch(`*[_type == "page" && slug.current == $slug][0]`, { slug })
}

export default async function HomePage() {
  const page = await getPage('home')
  if (!page) return <p className="container py-20 text-center text-slate-700">Add a "Home" page in the Studio at /studio</p>

  return (
    <div className="bg-slate-50 pb-20">
      <section className="container pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-red-700/15 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
              Premium hides from Australia
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-950">{page.title}</h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-700">
                Quality, reliability, and global shipping for leather raw materials that meet modern automotive, furniture, and fashion markets.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="section-cta">Get in touch</a>
              <a href="/about" className="section-cta secondary">Learn our story</a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 px-6 py-12 text-white shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.28),_transparent_45%)]" />
            <div className="relative space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Featured categories</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/10 p-5 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.5)]">
                  <p className="text-sm uppercase text-orange-200">Salted Hides</p>
                  <p className="mt-3 text-lg font-semibold">Reliable automotive supply.</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-5 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.5)]">
                  <p className="text-sm uppercase text-orange-200">Wetblue Hides</p>
                  <p className="mt-3 text-lg font-semibold">Stable, premium leather inputs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-16 grid gap-6 lg:grid-cols-3">
        {[
          {
            title: 'Salted Hides',
            description: 'Raw salted cattle hides for furniture and upholstery markets.',
          },
          {
            title: 'Wetblue Hides',
            description: 'Consistent wetblue hides processed for global manufacturing.',
          },
          {
            title: 'Deer Skins',
            description: 'Flexible deer skin leather for premium small goods.',
          },
        ].map((item) => (
          <article key={item.title} className="section-card p-8">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-slate-500">Product</p>
            <h2 className="text-xl font-semibold text-slate-950">{item.title}</h2>
            <p className="mt-3 text-slate-600">{item.description}</p>
            <a href="/contact" className="mt-6 inline-flex text-sm font-semibold text-red-700">
              Read more →
            </a>
          </article>
        ))}
      </section>

      <section className="container mt-20 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div className="space-y-4">
            <p className="heading-split text-sm uppercase tracking-[0.3em] text-red-700">About Us</p>
            <h2 className="text-3xl font-semibold text-slate-950">Trusted supply, transparent process</h2>
          </div>
          <div className="prose">
            <PortableText value={page.body} />
          </div>
        </div>
      </section>
    </div>
  )
}
