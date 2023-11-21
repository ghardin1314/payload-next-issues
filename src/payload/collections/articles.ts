import { type CollectionConfig } from "payload/types";

export const articles = {
  slug: "articles",
  admin: {
    group: "Content",
    useAsTitle: "title",
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: "articleType",
      label: "Article Type",
      type: "radio",
      required: true,
      defaultValue: "internal",
      options: [
        {
          label: "Internal",
          value: "internal",
        },
        {
          label: "External",
          value: "external",
        },
      ],
    },
    {
      label: "Hero Section",
      type: "collapsible",
      fields: [
        {
          name: "heroImage",
          type: "upload",
          relationTo: "media",
          required: false,
        },
        {
          name: "title",
          type: "text",
          required: false,
          maxLength: 190,
          index: true,
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          maxLength: 260,
        },
        {
          name: "heroBackgroundColor",
          type: "select",
          hasMany: false,
          required: true,
          defaultValue: "dark",
          options: [
            "dark",
            "red",
            "blue",
            "pink",
            "purple",
            "magenta",
            "cyan",
            "green",
            "orange",
            "lime",
            "yellow",
          ],
          admin: {
            condition: (data) => data.articleType === "internal",
          },
        },
      ],
    },
    {
      label: "External Article Info",
      name: "externalProps",
      type: "group",
      fields: [
        { name: "author", type: "text", required: false },
        { name: "link", type: "text", required: false },
        { name: "source", type: "text", required: false },
      ],
      admin: {
        condition: (data) => data.articleType === "external",
      },
    },
    {
      label: "Article Info",
      type: "group",
      name: "internalProps",
      fields: [
        {
          name: "content",
          type: "richText",
        },
      ],
      admin: {
        condition: (data) => data.articleType === "internal",
      },
    },
    {
      label: "Publishing",
      type: "collapsible",
      fields: [
        {
          name: "publishedOn",
          type: "date",
          admin: {
            readOnly: true,
            date: {
              pickerAppearance: "dayAndTime",
            },
          },
        },
      ],
    },
  ],
} satisfies CollectionConfig;
