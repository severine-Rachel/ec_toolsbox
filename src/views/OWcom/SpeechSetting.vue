<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>LES PARAMÈTRES DE LA PRISE DE PAROLE EN PUBLIC</h3>
    <img
      class="square"
      src="/picture_OWcom/good-meeting.png"
      draggable="false"
    />
    <NextPrevBtn v-bind:nxtprev-list="nxtprevSpeechSetting"></NextPrevBtn>
    <Footer></Footer>
  </div>
</template>

<style></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    NextPrevBtn,
    Footer,
  },
})
export default class SpeechSetting extends Vue {
  public nxtprevSpeechSetting = {
    BoolPrev: true,
    BoolNext:  true,
    PrevImage: "/thumbnail6.png",
    NextImage: "/thumbnail2.png",
    PrevLink: "/Prise_de_Parole/Oser_Parler",
    NextLink: "/Prise_de_Parole/Astuces",
  };
}
</script>
