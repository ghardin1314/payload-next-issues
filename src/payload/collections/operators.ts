import { type CollectionConfig } from "payload/types";

export const operators = {
  slug: "operators",
  auth: true,
  fields: [
    {
      name: "name",
      type: "text",
      unique: true,
    },
    {
      name: "roles",
      type: "select",
      hasMany: true,
      saveToJWT: true,
      options: [
        { label: "Admin", value: "admin" },
        { label: "Editor", value: "editor" },
      ],
    },
  ],
} satisfies CollectionConfig;
