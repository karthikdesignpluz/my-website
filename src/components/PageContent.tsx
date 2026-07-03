import { PortableText } from '@portabletext/react'
import { urlFor } from '@/sanity/lib/image'

type PageSection = {
  eyebrow?: string
  title?: string
  subtitle?: string
  content?: any[]
  media?: any
  ctaText?: string
  ctaUrl?: string
}

type PageDocument = {
  title: string
  heroTitle?: string
  heroSubtitle?: string
  heroEyebrow?: string
  heroImage?: any
  heroCtaText?: string
  heroCtaUrl?: string
  sections?: PageSection[]
  body?: any[]
}

const imageUrl = (image: any) => {
  if (!image) return undefined
  return urlFor(image).width(1200).height(800).fit('crop').url()
}

export default function PageContent({ page }: { page: PageDocument }) {
  const heroTitle = page.heroTitle || page.title

  return (
    <>
      <section className="container pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            {page.heroEyebrow ? (
            <div className="inline-flex items-center gap-3 rounded-full border border-red-700/15 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
              {page.heroEyebrow}
            </div>
          ) : null}
          <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-950">
                {heroTitle}
              </h1>
              {page.heroSubtitle ? (
                <p className="max-w-2xl text-lg leading-8 text-slate-700">
                  {page.heroSubtitle}
                </p>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-4">
              {page.heroCtaText && page.heroCtaUrl ? (
                <a href={page.heroCtaUrl} className="section-cta">
                  {page.heroCtaText}
                </a>
              ) : (
                <a href="/contact" className="section-cta">
                  Contact us
                </a>
              )}
              <a href="/about" className="section-cta secondary">
                Learn more
              </a>
            </div>
          </div>
          {page.heroImage ? (
            <div className="overflow-hidden rounded-4xl border border-slate-200 bg-slate-950 text-white shadow-xl">
              <img src={imageUrl(page.heroImage)} alt={heroTitle} className="h-full w-full object-cover" />
            </div>
          ) : null}
        </div>
      </section>

      {page.sections?.map((section, index) => (
        <section key={index} className="container py-12">
          <div className="rounded-4xl border border-slate-200 bg-white p-10 shadow-xl">
            {section.eyebrow ? (
              <p className="text-sm uppercase tracking-[0.3em] text-red-700">{section.eyebrow}</p>
            ) : null}
            {section.title ? (
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">{section.title}</h2>
            ) : null}
            {section.subtitle ? (
              <p className="mt-4 max-w-2xl text-slate-700 leading-8">{section.subtitle}</p>
            ) : null}
            {section.content ? (
              <div className="mt-8 prose text-slate-700">
                <PortableText value={section.content} />
              </div>
            ) : null}
            {section.media ? (
              <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">
                <img src={imageUrl(section.media)} alt={section.title || 'Section image'} className="w-full object-cover" />
              </div>
            ) : null}
            {section.ctaText && section.ctaUrl ? (
              <a href={section.ctaUrl} className="mt-8 inline-flex section-cta">
                {section.ctaText}
              </a>
            ) : null}
          </div>
        </section>
      ))}

      {page.body && page.body.length ? (
        <section className="container my-16 rounded-4xl border border-slate-200 bg-white p-10 shadow-xl prose text-slate-700">
          <PortableText value={page.body} />
        </section>
      ) : null}
    </>
  )
}
