import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigation Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Menu Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "Main Navigation", "Footer Menu"',
    }),
    defineField({
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [
        defineField({
          name: 'menuItem',
          title: 'Menu Item',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
              validation: (Rule) => Rule.required(),
              description: 'e.g., /, /about, /services, /blog',
            }),
            defineField({
              name: 'order',
              title: 'Order',
              type: 'number',
              description: 'Display order (lower numbers appear first)',
            }),
            defineField({
              name: 'isExternal',
              title: 'External Link',
              type: 'boolean',
              initialValue: false,
              description: 'Check if this link opens in a new tab',
            }),
          ],
          preview: {
            select: {
              title: 'label',
              url: 'url',
            },
            prepare({ title, url }) {
              return {
                title: title,
                subtitle: url,
              }
            },
          },
        }),
      ],
    }),
  ],
})
