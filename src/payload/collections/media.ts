import { type CollectionConfig } from 'payload/types';

export const media = {
  slug: 'media',

  access: {
    read: () => true, // TODO: add access rules for sibling published status
  },
  admin: {
    useAsTitle: 'alt',
    group: 'Content',
  },
  upload: {
    mimeTypes: ['image/*'],
    disableLocalStorage: true,
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      required: true,
    },
    {
      name: 'source',
      label: 'Source',
      type: 'text',
    },
  ],
} satisfies CollectionConfig;
