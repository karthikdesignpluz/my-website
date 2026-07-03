import { client } from '@/sanity/lib/client'
import PageContent from '@/components/PageContent'

async function getPage(slug: string) {
  return client.fetch(`*[_type == "page" && slug.current == $slug][0]`, { slug })
}

export default async function ServicePage() {
  const page = await getPage('service')
  if (!page) return <p className="container py-20 text-center text-slate-700">Add a "Service" page in the Studio at /studio</p>

  return (
    <div className="bg-slate-50 pb-20">
      <PageContent page={page} />
    </div>
  )
}
