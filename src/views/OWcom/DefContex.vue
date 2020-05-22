<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>LES SITUATIONS DE COMMUNICATION</h3>
    <ContexCant></ContexCant>
    <ContexConstruction></ContexConstruction>
    <ContexSocial></ContexSocial>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevDefContex"></NextPrevBtn>
    <Footer></Footer>
  </div>
</template>

<style></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import ContexCant from "@/views/OWcom/DefContex/ContexCant.vue";
import ContexConstruction from "@/views/OWcom/DefContex/ContexConstruction.vue";
import ContexSocial from "@/views/OWcom/DefContex/ContexSocial.vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    ContexCant,
    ContexConstruction,
    ContexSocial,
    NextPrevBtn,
    Footer,
  },
})
export default class DefContex extends Vue {
  public nxtprevDefContex =
  {
    BoolPrev: true,
    BoolNext: false,
    PrevImage: "/thumbnail7.png",
    NextImage: "",
    PrevLink: "/Definition_Communication/Types_Communication",
    NextLink: "",
  };
}
</script>
