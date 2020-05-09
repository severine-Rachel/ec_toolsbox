<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>LES PARAMÈTRES DE LA PRISE DE PAROLE EN PUBLIC</h3>
    <img class="square" src="/picture_OWcom/good-meeting.png" draggable="false">

    <Footer></Footer>
  </div>
</template>

<style></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,

    Footer,
  },
})
export default class SpeechSetting extends Vue {}
</script>
