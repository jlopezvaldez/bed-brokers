import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from '@astrojs/netlify';
import react from "@astrojs/react";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://azbedbrokers.com/',
  integrations: [tailwind(), react(), robotsTxt()],
  output: 'server',
  adapter: netlify()
});