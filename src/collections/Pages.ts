import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-Pfadsegment (z.B. "geschichte" für /landschloss/geschichte)',
      },
    },
    {
      name: 'section',
      type: 'select',
      options: [
        { label: 'Landschloss', value: 'landschloss' },
        { label: 'Kontakt', value: 'kontakt' },
        { label: 'Standalone', value: 'standalone' },
      ],
      required: true,
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        { name: 'title', type: 'text', label: 'Seitentitel' },
        { name: 'description', type: 'textarea', label: 'Meta-Beschreibung' },
      ],
    },
  ],
}
