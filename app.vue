<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script setup>
const { $fb } = useNuxtApp();
const facebookPixelCode = "980460796412146,1114858976263485";

onMounted(() => {
  if (facebookPixelCode && facebookPixelCode.trim() !== "") {
    const fbCodes = facebookPixelCode.trim().split(",");
    console.log($fb);
    for (let i = 0; i < fbCodes.length; i++) {
      if ($fb.fbq) {
        console.log("fbCodes", fbCodes[i]);
        
        $fb.setPixelId(fbCodes[i]);
        $fb.setUserData({ external_id: 32323, fn: 'John' })
        $fb.pageView();
        $fb.event('ViewContent', { content_name: 'test', content_category: 'test' });
        $fb.enable()
      }
    }
  }
});
</script>
