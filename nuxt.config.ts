// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt3-meta-pixel", "nuxt-gtag"],
  facebook: {
    /* module options */
    track: "PageView",
    // pixelId: '980460796412146',
    autoPageView: true,
    disabled: true,
  },
});
