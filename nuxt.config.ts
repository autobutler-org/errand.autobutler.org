const title = "Errand: Self-Hosted GitHub Actions Runners";
const description =
  "Errand runs GitHub Actions jobs on Kubernetes you control: Arm and x64 runner pools that grow with the queue, built on GitHub's Actions Runner Controller.";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-08-01",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint"],
  /*
   * Fonts are self-hosted: @fontsource packages are bundled into the build, so
   * no request ever leaves for a font CDN.
   */
  css: [
    "@fontsource-variable/newsreader/opsz.css",
    "@fontsource-variable/newsreader/opsz-italic.css",
    "@fontsource-variable/geist",
    "@fontsource-variable/geist-mono",
    "~/assets/main.css",
  ],
  nitro: {
    static: true,
  },
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title,
      meta: [
        { name: "description", content: description },
        { property: "og:site_name", content: "Errand" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: "https://errand.autobutler.org" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "theme-color", content: "#f7f6f3", media: "(prefers-color-scheme: light)" },
        { name: "theme-color", content: "#161615", media: "(prefers-color-scheme: dark)" },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
});
