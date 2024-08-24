<template>
  <div class="home">
    <div class="lg:pt-[0px]">
      <HomeDigdaya/>
      <AboutUs/>
      <FilletCik/>
      <WhyUs/>
      <TesEuy/>
      <LocationCik/>
      <FooterDigdaya/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import '@/assets/tailwind.css';
import HomeDigdaya from '@/components/HomeDigdaya.vue';
import AboutUs from '@/components/AboutUs.vue';
import WhyUs from '@/components/WhyUs.vue';
import FilletCik from '@/components/FilletCik.vue'
import TesEuy from '@/components/TesEuy.vue';
import LocationCik from '@/components/LocationCik.vue';
import FooterDigdaya from '@/components/FooterDigdaya.vue';
import AOS from 'aos'

export default {
  name: 'HomeView',
  components: {
    HomeDigdaya,
    AboutUs,
    FilletCik,
    WhyUs,
    TesEuy,
    LocationCik,
    FooterDigdaya
},
beforeCreate(){
    setTimeout(() => {
      AOS.init()
  }, 1500)
  }
}
</script>
