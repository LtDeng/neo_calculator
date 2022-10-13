import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      // preprocess: sveltePreprocess({
      //   preserve: ["ld+json"],
      //   scss: {
      //     includePaths: ["src/", "node_modules/bootstrap/scss/"],
      //     importer: [
      //       (url) => {
      //         // Redirects tilde-prefixed imports to node_modules
      //         if (/^~/.test(url))
      //           return { file: `node_modules/${url.replace("~", "")}` };
      //         return null;
      //       },
      //     ],
      //     quietDeps: true,
      //   },
      // }),
      preprocess: sveltePreprocess(),
      // enable run-time checks when not in production
      // we'll extract any component CSS out into
      // a separate file — better for performance
      css: (css) => {
        css.write("public/bundle.css");
      },
    }),
  ],
});
