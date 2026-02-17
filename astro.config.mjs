import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://royalpalmbeachconcrete.com',
  integrations: [tailwind()],
  build: {
    format: 'directory',
  },
});
