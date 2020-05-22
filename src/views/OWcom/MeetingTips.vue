<template>
  <div id="MeetingTips">
    <Header></Header>
    <Menu></Menu>
    <h3>CONSEILS ET ASTUCES</h3>
    <h4>Être efficace</h4>
    <Video v-bind:galery-video="videoMeetingTips"  v-bind:id-video="'meet2'"></Video>
    <h4>Réussir à capter l’auditoire</h4>
    <Video v-bind:galery-video="videoMeetingListen"  v-bind:id-video="'meet3'"></Video>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevMeetingTips"></NextPrevBtn>
    <Footer></Footer>
    
  </div>
</template>

<style lang="scss">
#MeetingTips {
  scroll-behavior: smooth;
  overflow: auto;
  height: 100vh;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Video from "@/components/Video.vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    Video,
    NextPrevBtn,
    Footer,
  },
})
export default class MeetingTips extends Vue {
    public videoMeetingTips = [
    {
      videoSrc: "https://www.youtube.com/embed/3w8lmzfGqQE",
      videoTitle: "Comment animer efficacement une réunion ? 1",
      videoRoot: "Chaîne :  Breasy : Et si manager devenait un jeu d'enfants ?",
    },
    {
      videoSrc: "https://www.youtube.com/embed/kBSHSZiS9uk",
      videoTitle: "Comment animer efficacement une réunion ? 2",
      videoRoot: "Chaîne : L'Express",
    },
  
    {
      videoSrc: "https://www.youtube.com/embed/jffoiI3ETr4",
      videoTitle: "Réunion de travail : interview d’un directeur qui a réussi à transformer ses séances.",
      videoRoot: "Chaîne : Organisologie",
    },

  ];
    public videoMeetingListen = [
  
    {
      videoSrc: "https://www.youtube.com/embed/YjLEeS5oIBQ",
      videoTitle: "Comment garder vos participants éveillés ?",
      videoRoot: "Chaîne : Aysseline de Lardemelle ",
    },
    
     {
      videoSrc: "https://www.youtube.com/embed/KL0M-w-Rmwo",
      videoTitle: "Animer une réunion : mission impossible ?",
      videoRoot: "Chaîne : Aysseline de Lardemelle ",
    },
  ];
  public nxtprevMeetingTips =
{
    BoolPrev: true,
    BoolNext: false,
    PrevImage: "/thumbnail5.png",
    NextImage: "",
    PrevLink: "/Conduite_Reunion/Fondamentaux",
    NextLink: "",
  };
}
</script>
