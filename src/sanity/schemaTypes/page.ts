import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL path)',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'heroCtaText',
      title: 'Hero CTA Text',
      type: 'string',
    }),
    defineField({
      name: 'heroCtaUrl',
      title: 'Hero CTA URL',
      type: 'url',
    }),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'pageSection',
          title: 'Page Section',
          fields: [
            defineField({
              name: 'eyebrow',
              title: 'Eyebrow',
              type: 'string',
            }),
            defineField({
              name: 'title',
              title: 'Section Title',
              type: 'string',
            }),
            defineField({
              name: 'subtitle',
              title: 'Section Subtitle',
              type: 'text',
            }),
            defineField({
              name: 'content',
              title: 'Section Content',
              type: 'array',
              of: [{ type: 'block' }],
            }),
            defineField({
              name: 'media',
              title: 'Section Image',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'ctaText',
              title: 'CTA Text',
              type: 'string',
            }),
            defineField({
              name: 'ctaUrl',
              title: 'CTA URL',
              type: 'url',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Page Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})