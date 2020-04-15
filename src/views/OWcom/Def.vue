<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <DefShare></DefShare>
    <Footer></Footer>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import DefShare from "@/views/OWcom/DefShare.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    DefShare,
    Footer
  }
})
export default class Def extends Vue {}
</script>
