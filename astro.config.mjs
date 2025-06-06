import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroIcon from "astro-icon"; // ESTE nombre es importante

export default defineConfig({
  integrations: [
    tailwind(),
    astroIcon({
      collections: {
        "simple-icons": () => import("@iconify-json/simple-icons/icons.json"),
        mdi: () => import("@iconify-json/mdi/icons.json"),
      },
    }),
  ],
});
