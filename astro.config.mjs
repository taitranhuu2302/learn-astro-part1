import {defineConfig} from 'astro/config';
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";
import customClientDirective from './src/integrations/directives/custom-client-directive'

// https://astro.build/config
export default defineConfig({
    extensions: {
        '.jsx': 'react',
        '.tsx': 'react',
        '.vue': 'vue',
        '.svelte': 'svelte'
    },
    integrations: [vue(), svelte(), react(), tailwind(), customClientDirective()],
    server: ({command}) => ({port: command === 'dev' ? 3001 : 4000}),
});