import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://theuq.com",
  integrations: [mdx(), sitemap(), tailwind(), react({
    include: ["**/react/*"]
  })],
  output: "server",
  adapter: vercel()
});