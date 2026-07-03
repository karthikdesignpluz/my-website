import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'

async function getPage(slug: string) {
  return client.fetch(`*[_type == "page" && slug.current == $slug][0]`, { slug })
}

export default async function ContactPage() {
  const page = await getPage('contact')
  if (!page) return <p className="container py-20 text-center text-slate-700">Add a "Contact" page in the Studio at /studio</p>

  return (
    <main className="container py-20">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-red-700">Get in touch</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-950">{page.title}</h1>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Reach our export team for quotes, product questions, or scheduling your next shipment.
            </p>
          </div>
          <div className="space-y-4 rounded-[1.75rem] bg-slate-50 p-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Phone</p>
              <p className="mt-2 text-xl font-semibold text-slate-900">+61 2 9261 4665</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Email</p>
              <p className="mt-2 text-xl font-semibold text-slate-900">isb@southernhide.com.au</p>
            </div>
          </div>
        </div>
        <div className="mt-10 prose text-slate-700">
          <PortableText value={page.body} />
        </div>
      </div>
    </main>
  )
}
