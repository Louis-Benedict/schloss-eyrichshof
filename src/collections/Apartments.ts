import type { CollectionConfig } from 'payload'

export const Apartments: CollectionConfig = {
  slug: 'apartments',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'size', 'maxGuests', 'petFriendly'],
  },
  fields: [
    {
      name: 'name',
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
      name: 'size',
      type: 'number',
      label: 'Größe (m²)',
    },
    {
      name: 'maxGuests',
      type: 'number',
      required: true,
      label: 'Max. Personen',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Ausstattung',
      fields: [
        {
          name: 'feature',
          type: 'text',
          label: 'Merkmal',
        },
      ],
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Titelbild',
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Bildergalerie',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Beschreibung',
    },
    {
      name: 'petFriendly',
      type: 'checkbox',
      label: 'Haustiere erlaubt',
      defaultValue: false,
    },
    {
      name: 'bookingUrl',
      type: 'text',
      label: 'Buchungs-URL',
    },
  ],
}
