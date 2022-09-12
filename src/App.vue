<template>
  <nav>
    <HeaderVue></HeaderVue>
    <router-view/>
    <FooterVue></FooterVue>
  </nav>
</template>

<script>
import HeaderVue from '@/components/HeaderFooter/Header.vue';
import FooterVue from '@/components/HeaderFooter/Footer.vue';
export default {
  components:{
    HeaderVue,
    FooterVue,
  }
}
</script>