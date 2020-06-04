<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h2 class="rubric-title">QU'EST CE QUE LA COMMUNICATION</h2>
    <ContentsPage v-bind:contents-list="contentsDef"></ContentsPage>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
</style>

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
    Footer
  }
})
export default class Def extends Vue {
  public contentsDef= [
    {
    ContentsTitle:  "COMMUNIQUER, C'EST ÉCHANGER",
    ContentsPath: "/Definition_Communication/Partager",
    ContentsImage: "/thumbnail2.png"
    },
    {
    ContentsTitle: "LES TYPES DE COMMUNICATION",
    ContentsPath: "/Definition_Communication/Types_Communication",
    ContentsImage:"/thumbnail7.png"
    },
    {
    ContentsTitle: "LES SITUATIONS DE COMMUNICATION",
    ContentsPath: "/Definition_Communication/Situation_Communication",
    ContentsImage:"/thumbnail3.png"
    },
    {
    ContentsTitle: "STRATÉGIES DE COMMUNICATION",
    ContentsPath: "/Definition_Communication/Strategie_Communication",
    ContentsImage:"/thumbnail1.png"
    },

  ]
}
</script>
