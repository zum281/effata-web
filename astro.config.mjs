import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
	site: "https://effata-web.vercel.app/",
	integrations: [
		tailwind(),
		react(),
		robotsTxt({
			policy: [
				{
					userAgent: "*",
					disallow: "/",
				},
			],
		}),
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
	],
});
