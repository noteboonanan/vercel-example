<template>
  <div>
    Welcome to Nuxt.js!
  </div>
</template>

<script setup>
const { $fb } = useNuxtApp();
const facebookPixelCode = "980460796412146,1114858976263485";
const gtagId = "GTM-TH6P3MGK";

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
    function gtag() {
      window.dataLayer.push(arguments);
    }

    window.dataLayer = window.dataLayer || [];

    gtag("js", new Date());
    gtag("config", gtagId);
  }
});
</script>
