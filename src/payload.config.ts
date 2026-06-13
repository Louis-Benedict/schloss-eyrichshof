import { buildConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Events } from './collections/Events'
import { Apartments } from './collections/Apartments'
import { TeamMembers } from './collections/TeamMembers'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '— Schloss Eyrichshof',
    },
  },
  collections: [Users, Media, Pages, Events, Apartments, TeamMembers],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'schloss-eyrichshof-secret',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./database.db',
    },
  }),
  upload: {
    limits: {
      fileSize: 10000000, // 10MB
    },
  },
})
