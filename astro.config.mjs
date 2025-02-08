// @ts-check
import { defineConfig } from "astro/config";
import bun from "@nurodev/astro-bun";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config

export default defineConfig({
	output: "server",
	adapter: bun(),
	integrations: [solidJs()],
});
