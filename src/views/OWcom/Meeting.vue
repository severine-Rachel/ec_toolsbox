<template>
  <div>
    <Header />
    <Menu />
    <h2 class="rubric-title">CONDUITE DE RÉUNION</h2>
    <ContentsPage v-bind:contents-list="contentsMeeting"></ContentsPage>
    <Footer />
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
  protected contentsMeeting= [
    {
    ContentsTitle:  "LES FONDAMENTAUX DE LA RÉUNION",
    ContentsPath: "/Conduite_Reunion/Fondamentaux",
    ContentsImage: "/thumbnail5.png"
    },
    {
    ContentsTitle: "CONSEILS ET ASTUCES",
    ContentsPath: "/Conduite_Reunion/Astuces",
    ContentsImage:"/thumbnail1.png"
    },
    ]
}
</script>
