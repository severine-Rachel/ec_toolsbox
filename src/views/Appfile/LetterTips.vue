<template>
  <div>
    <h3 id="tipsLetter">
      CONSEILS ET ASTUCES
    </h3>
    <p>
      <a
        href="https://baborlelefan.com/2013/12/07/enquete-faut-tenter-des-candidatures-originales/"
        target="_blank"
        class="subtitle-link"
      >
        <strong>Pour dédramatiser</strong>
        <b-icon icon="box-arrow-right"></b-icon
      ></a>
    </p>
    <p>
      N’hésitez pas à faire un rappel de la charte graphique de votre CV dans
      votre lettre de motivation. Modèles de lettres de motivation graphiques :
    </p>
    <p>
      <a
        href="https://fr.venngage.com/templates/resumes/cover-letters"
        alt="vennage"
        target="_blank"
        ><img
          class="Help_Builder"
          src="/picture_letter/LetterTool1.png"
        /><b-icon icon="box-arrow-right"></b-icon>
      </a>
      <a
        href="https://fr.venngage.com/blog/modeles-lettres-de-motivation/"
        alt="vennage"
        target="_blank"
        ><img
          class="Help_Builder"
          src="/picture_letter/LetterTool2.png"
        /><b-icon icon="box-arrow-right"></b-icon>
      </a>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BIcon, BIconBoxArrowRight } from "bootstrap-vue";
@Component({
  components: {
    BIcon,
    BIconBoxArrowRight,
  },
})
export default class LetterKeys extends Vue {}
</script>
