<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>
      COMMUNIQUER, C'EST ÉCHANGER
    </h3>
    <p><u>La communication</u></p>
    <p>
      <ul>
        <li class="first-list">
          L’étymologie du terme nous renseigne sur le sens à donner à la
          communication : en latin, <i>communicare</i> signifie « avoir part, partager ».
          Composé de <i>cum/munus</i> ou <i>cum/municus</i>, il signifie « être en relation avec
          » (<i>cum</i> : avec, <i>munus</i> : charge, fonction).
        </li>
        <li class="first-list">
          Au XVIe siècle, la communication désigne littéralement la mise en
          commun, l’échange mais également une manière d’être ensemble, un mode
          privilégié de relations sociales.
        </li>
      </ul>
    </p>
    <ShareTheory></ShareTheory>
    <ShareFeedBack></ShareFeedBack>
    <ShareSchematic></ShareSchematic>
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
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    ShareTheory,
    ShareFeedBack,
    ShareSchematic,
    Footer
  }
})
export default class DefShare extends Vue {}
</script>
