/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/line-clamp"),
		plugin(function ({ addComponents }) {
			const components = {
				".full-bleed": {
					boxShadow: "0 0 0 100vmax var(--tw-shadow-color)",
					clipPath: "inset(0 -100vmax)",
				},
			};
			addComponents(components);
		}),
	],
};
