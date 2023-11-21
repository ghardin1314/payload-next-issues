const path = require("path");
const { withPayload } = require("@payloadcms/next-payload");

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withPayload(nextConfig, {
  configPath: path.resolve(__dirname, "./src/payload/payload.config.ts"),
  // Point to your exported, initialized Payload instance (optional, default shown below`)
  payloadPath: path.resolve(__dirname, "./src/payload/payloadClient.ts"),
});
