<template>
  <div class="cctv">
    <div class="lg:pt-[0px]">
      <HomeCCTV />

      <FooterDigdaya />
    </div>
  </div>
</template>
  
  <script>
// @ is an alias to /src
import "@/assets/tailwind.css";
import HomeCCTV from "@/components/cctv/HomeCCTV.vue";
import FooterDigdaya from "@/components/FooterDigdaya.vue";

export default {
  name: "CctvView",
  components: {
    HomeCCTV,
    FooterDigdaya
  }
};
</script>