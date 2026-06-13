import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Website-Einstellungen',
  admin: {
    group: 'Einstellungen',
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      label: 'Seitenname',
      defaultValue: 'Schloss Eyrichshof',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo',
    },
    {
      name: 'socialMedia',
      type: 'group',
      label: 'Social Media',
      fields: [
        { name: 'instagram', type: 'text', label: 'Instagram URL' },
        { name: 'facebook', type: 'text', label: 'Facebook URL' },
        { name: 'youtube', type: 'text', label: 'YouTube URL' },
      ],
    },
    {
      name: 'footer',
      type: 'group',
      label: 'Footer',
      fields: [
        { name: 'address', type: 'textarea', label: 'Adresse' },
        { name: 'phone', type: 'text', label: 'Telefon' },
        { name: 'email', type: 'email', label: 'E-Mail' },
      ],
    },
  ],
}
