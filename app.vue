<template>
  <div>Welcome to Nuxt.js!</div>
</template>

<script setup>
const { $fb } = useNuxtApp();
const facebookPixelCode = "980460796412146,1114858976263485";
const gtagId = "GTM-TH6P3MGK";
// const gaId = "G-8QD1DD7Y33"; // Replace with your Google Analytics ID
const googleSiteCode = "uoxRLwDbag-9GSqoLvnoloP2gBaJhk6LXmj-lpTPNLE";
// import { useAnalytics } from '@nuxtjs/google-analytics'

// const analytics = useAnalytics()

const { initialize, enableAnalytics } = useGtag();

useHead({
  meta: [
    {
      hid: "google-site-verification",
      name: "google-site-verification",
      content: googleSiteCode,
    },
  ],
  // script: [
  //   {
  //     src: gaId && `https://www.googletagmanager.com/gtag/js?id=${gaId}`,
  //     async: true,
  //   },
  // ],
});
onMounted(() => {
  if (facebookPixelCode && facebookPixelCode.trim() !== "") {
    const fbCodes = facebookPixelCode.trim().split(",");
    for (let i = 0; i < fbCodes.length; i++) {
      if ($fb) {
        $fb.setPixelId(fbCodes[i]);
        $fb.enable();
      }
    }
  }
  if (gtagId) {
    initialize(gtagId);
    enableAnalytics(gtagId);
  }
  // if (gaId) {
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag() {
  //     dataLayer.push(arguments);
  //   }
  //   gtag("js", new Date());

  //   gtag("config", gaId);
  // }
});
</script>
