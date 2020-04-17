<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <ContentsPage v-bind:contents-list="contentsDef"></ContentsPage>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
#sharepicture{
  width:75vw;
  margin: 4% 10%;
}</style>

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
    ContentsImage: "/thumbail.png"
    },
    {
    ContentsTitle: "LES TYPES DE COMMUNICATION",
    ContentsPath: "/Definition_Communication/Types_Communication",
    ContentsImage:"/thumbail.png"
    },
    {
    ContentsTitle: "LES SITUATIONS DE COMMUNICATION",
    ContentsPath: "/Definition_Communication/Situation_Communication",
    ContentsImage:"/thumbail.png"
    }

  ]
}
</script>
