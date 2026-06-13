import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'startDate', 'updatedAt'],
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
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Winterszeit', value: 'winterszeit' },
        { label: 'Gartenfest', value: 'gartenfest' },
        { label: 'Rösler Open Air', value: 'roesler-open-air' },
        { label: 'Hochzeiten & Feste', value: 'hochzeiten-feste' },
        { label: 'Firmenevents', value: 'firmenevents' },
      ],
    },
    {
      name: 'startDate',
      type: 'date',
      label: 'Startdatum',
    },
    {
      name: 'endDate',
      type: 'date',
      label: 'Enddatum',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Titelbild',
    },
    {
      name: 'teaser',
      type: 'textarea',
      label: 'Kurztext',
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Inhalt',
    },
    {
      name: 'ticketUrl',
      type: 'text',
      label: 'Ticket-URL',
      admin: {
        description: 'Externer Link zur Ticketbuchung',
      },
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
