<template>
  <div>
    <Header />
    <Menu />
    <h3>LES PARAMÈTRES DE LA PRISE DE PAROLE EN PUBLIC</h3>
    <img
      id="HeightScreen"
      src="/picture_OWcom/good-meeting.png"
      draggable="false"
    />
    <NextPrevBtn v-bind:nxtprev-list="nxtprevSpeechSetting" />
    <Footer />
  </div>
</template>

<style>
@media (max-width: 600px) {
  #HeightScreen {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    display: block;
  }
}
@media (min-width: 600px) {
  #HeightScreen {
    height: 98vh;
    margin-right: auto;
    margin-left: auto;
    display: block;
  }
}
</style>

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
  protected nxtprevSpeechSetting = {
    BoolPrev: true,
    BoolNext: true,
    PrevImage: "/thumbnail6.png",
    NextImage: "/thumbnail2.png",
    PrevLink: "/Prise_de_Parole/Oser_Parler",
    NextLink: "/Prise_de_Parole/Astuces",
  };
}
</script>
