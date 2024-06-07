<template>
  <div>Welcome to Nuxt.js!</div>
</template>

<script setup>
const { $fb } = useNuxtApp();
const facebookPixelCode = "980460796412146,1114858976263485";
const gtagId = "G-8QD1DD7Y33";
const googleSiteCode = "uoxRLwDbag-9GSqoLvnoloP2gBaJhk6LXmj-lpTPNLE";

const { initialize, enableAnalytics } = useGtag();

useHead({
  meta: [
    {
      hid: "google-site-verification",
      name: "google-site-verification",
      content: googleSiteCode,
    },
  ],
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
});
</script>
