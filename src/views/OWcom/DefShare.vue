<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>
      COMMUNIQUER, C'EST ÉCHANGER
    </h3>
    <p><u>La communication</u></p>
    <div class="margin">
      <ul>
        <li class="first-list">
          L’étymologie du terme nous renseigne sur le sens à donner à la
          communication{{ "\xa0" }}: en latin, <i>communicare</i> signifie «{{
            "\xa0"
          }}avoir part, partager{{ "\xa0" }}». Composé de <i>cum/munus</i> ou
          <i>cum/municus</i>, il signifie «{{ "\xa0" }}être en relation avec{{
            "\xa0"
          }}» (<i>cum</i>{{ "\xa0" }}: avec, <i>munus</i>{{ "\xa0" }}: charge,
          fonction).
        </li>
        <li class="first-list">
          Au XVIe siècle, la communication désigne littéralement la mise en
          commun, l’échange mais également une manière d’être ensemble, un mode
          privilégié de relations sociales.
        </li>
      </ul>
    </div>
    <ShareTheory></ShareTheory>
    <ShareFeedBack></ShareFeedBack>
    <ShareSchematic></ShareSchematic>
    <h3 id="NoneResponse">
      LE "MONDE" DE LA NON-RÉPONSE
    </h3>
    <p>
      Dans un monde où les échanges se sont démultipliés (téléphone, e-mails,
      messageries instantanées...), la communication est devenue massive.
      Difficile de répondre à toutes les sollicitations dans une ère de constant
      zapping... S'étend alors le "monde" de la non-réponse qui peut être lourde
      en répercussions.
    </p>
    <img class="horizontal" draggable="false"  src="/picture_OWcom/schematic/No-Answer.jpg" alt="Le monde de la non-réponse">
    <NextPrevBtn v-bind:nxtprev-list="nxtprevDefShare"></NextPrevBtn>
    <Footer></Footer>
  </div>
</template>

<style></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import ShareTheory from "@/views/OWcom/DefShare/ShareTheory.vue";
import ShareFeedBack from "@/views/OWcom/DefShare/ShareFeedBack.vue";
import ShareSchematic from "@/views/OWcom/DefShare/ShareSchematic.vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    ShareTheory,
    ShareFeedBack,
    ShareSchematic,
    NextPrevBtn,
    Footer,
  },
})
export default class DefShare extends Vue {
  public nxtprevDefShare = {
    BoolPrev: false,
    BoolNext: true,
    PrevImage: "",
    NextImage: "/thumbnail7.png",
    PrevLink: "",
    NextLink: "/Definition_Communication/Types_Communication",
  };
}
</script>
