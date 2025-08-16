import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	base: "/sidharth_sivaprasad_portfolio_v2/",
	plugins: [
		react(),
		tailwindcss(),
		nodePolyfills({
			// Automatically polyfill global variables like "process" and "Buffer"
			protocolImports: true,
		}),
	],
});
