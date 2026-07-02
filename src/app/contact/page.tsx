import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'

async function getPage(slug: string) {
	return client.fetch(`*[_type == "page" && slug.current == $slug][0]`, { slug })
}
export default async function ContactPage() {
	const page = await getPage('contact')
	if (!page) return <p>Add a "Contact" page in the Studio at /studio</p>
	return (
		<main className="max-w-2xl mx-auto py-16 px-4">
			<h1 className="text-4xl font-bold mb-6">{page.title}</h1>
			<PortableText value={page.body} />
		</main>
	)
}
