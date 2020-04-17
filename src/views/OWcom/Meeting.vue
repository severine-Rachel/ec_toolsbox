<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>LA CONDUITE DE RÉUNION</h3>
    <ContentsPage v-bind:contents-list="contentsMeeting"></ContentsPage>
    <Footer></Footer>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import ContentsPage from "@/components/ContentsPage.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    ContentsPage,
    Footer,
  },
})
export default class Meeting extends Vue {
  public contentsMeeting= [
    {
    ContentsTitle:  "LES FONDAMENTAUX",
    ContentsPath: "/Conduite_Reunion/Fondamentaux",
    ContentsImage: "/thumbail.png"
    },
    {
    ContentsTitle: "CONSEILS ET ASTUCES",
    ContentsPath: "/Conduite_Reunion/Astuces",
    ContentsImage:"/thumbail.png"
    },
    ]
}
</script>
