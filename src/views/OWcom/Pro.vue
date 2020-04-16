<template>
    <div>
    <Header></Header>
    <Menu></Menu>

    <Footer></Footer>
  </div>
</template>

<style lang="scss">

</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
         Header,
    Menu,

    Footer
  }
})
export default class Pro extends Vue {
  
}
</script>