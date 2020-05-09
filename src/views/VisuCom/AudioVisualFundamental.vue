<template>
  <div>
    <h3 id="AudioVisualFundamental">
      LES FONDAMENTAUX
    </h3>
    <h4>
      Le spot publicitaire, le film institutionnel, Céline Clavel
    </h4>
    <p>
      Le message publicitaire relève de la communication commerciale ou
      institutionnelle. Son objectif&nbsp;: promouvoir, faire adhérer, créer
      l’émotion ou encore démontrer une expertise, des connaissances.
      Aujourd’hui, nous sommes submergés par les annonces publicitaires. Comment
      se démarquer&nbsp;? Quelle méthode adopter pour réaliser un spot publicitaire
      ou un film institutionnel pertinents&nbsp;?
    </p>
    <a
      class="subtitle-link"
      href="/pdf_AV/Commercial.pdf"
      download="SpotPublicitaire"
    >
     <strong> Préparer spot pub, institutionnel </strong>
      <b-icon icon="upload"></b-icon>
    </a>
    <h4>
      Le reportage, Philippe Bouesse
    </h4>
    <p>
      Le reportage est un moyen de transmission d'informations très rigoureux,
      qui nécessite la synthèse d'informations diverses, qui doivent ensuite
      faire l'objet d'un traitement linguistique et audiovisuel. Comment
      préparer et filmer un entretien&nbsp;? Quels sont les différents types
      d’entretien&nbsp;? Quelles prises de vues privilégier&nbsp;?
    </p>
    <a
      href="https://movilab.org/index.php?title=Cr%C3%A9er_un_reportage_audiovisuel"
      target="_blank"
      class="subtitle-link"
      ><strong>Créer un reportage audiovisuel <b-icon icon="box-arrow-right"></b-icon
    ></strong></a>
    <p></p>
    <a
      class="subtitle-link"
      href="/pdf_AV/Reportage.pdf"
      download="ReportageVideo"
    >
      <strong>Méthodologie du reportage vidéo, Philippe Bouesse, Sceren CRDP Pays de la
      Loire, 2002
      <b-icon icon="upload"></b-icon></strong>
    </a>
    <h4>
      La capsule vidéo, Prof T.I.M.
    </h4>
    <p>
      La capsule vidéo est une séquence, généralement courte et scénarisée, qui
      permet de traiter de manière condensée, d’un sujet ou d’un thème donné.
      Quelles sont les règles d’un tel exercice&nbsp;? Quels sont les différents
      types de capsules vidéo&nbsp;? Quels outils choisir&nbsp;?
    </p>
    <a
      class="subtitle-link"
      href="https://www.ac-strasbourg.fr/fileadmin/pedagogie/histoiregeographie/TICE/GFA_TICE/Creer_des_videos_pedagogiques.pdf"
      target="_blank"
    >
     <strong> la capsule vidéo, Claire Guglielmina
      <b-icon icon="box-arrow-right"></b-icon></strong>
    </a>
    <p></p>
    <p>
      Pourquoi créer des capsules pédagogiques&nbsp;? En dehors des enseignements,
      ces capsules pédagogiques peuvent servir à expliquer à un utilisateur
      comment fonctionne un produit, à exposer des services à des clients ou
      encore à transmettre des connaissances qui dépassent largement le cadre
      scolaire à un public… À quelles exigences doivent répondre les capsules
      pédagogiques&nbsp;? Quels outils choisir&nbsp;?
    </p>
    <a class="subtitle-link" href="/pdf_AV/Capsule.pdf" download="CapsuleVideo">
      <strong>Capsule vidéo pédagogique
      <b-icon icon="upload"></b-icon></strong>
    </a>
    <Video v-bind:galery-video="videoVideo"></Video>

    <h4>
      Le court métrage
    </h4>
    <p>
      Le court métrage se détermine par sa durée inférieure à 59 minutes. Pour
      réaliser un bon court métrage, il ne faut négliger aucune étape, de la
      distribution des rôles au planning de tournage, en passant par le
      scénario, le story-board, le choix des lieux de tournage, les
      autorisations, le casting ou encore le matériel nécessaire…
    </p>
    <a
      class="subtitle-link"
      href="/pdf_AV/ShortFilm.pdf"
      download="CourtMetrage"
    ><strong>
      Réaliser un court métrage - PASSEURS D’IMAGES, PAYS DE LA LOIRE, FESTIVAL
      1ERS PLANS – ANGERS
      <b-icon icon="upload"></b-icon></strong>
    </a>
    <h5 class="text-vid">6 étapes pour écrire un scénario de court métrage</h5>
    <b-row align-h="center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/isgqmDXLzTQ"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </b-row>
    <p class="text-vid">Chaîne&nbsp;: Pros et Heros</p>
    <h4>
      Comment composer son story-board&nbsp;?
    </h4>
    <p>
      <strong
        >TUMMINELLO Wendy, Techniques de storyboards, Eyrolles, 2007</strong
      >
    </p>
    <div style="text-align:center;">
      <div style="margin:8px 0px 4px;">
        <a
          href="https://www.calameo.com/books/0053223625f0f98f0cbd8"
          target="_blank"
          >Chapitre 3&nbsp;: Les caractéristiques fondamentales du plan</a
        >
      </div>
      <iframe
        src="//v.calameo.com/?bkcode=0053223625f0f98f0cbd8"
        width="300"
        height="194"
        frameborder="0"
        scrolling="no"
        allowtransparency
        allowfullscreen
        style="margin:0 auto;"
      ></iframe>
      <div style="margin:4px 0px 8px;">
        <a href="http://www.calameo.com/">Publish at Calameo</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BIcon, BIconUpload, BIconBoxArrowRight } from "bootstrap-vue";
import Video from "@/components/Video.vue";
@Component({
  components: {
    BIcon,
    BIconUpload,
    BIconBoxArrowRight,
    Video,
  },
})
export default class AudioVisualFundamental extends Vue {
  public videoVideo = [
    {
      videoSrc: "https://www.youtube.com/embed/PUPuemxfm2c",
      videoTitle: "Comment faire une capsule vidéo&nbsp;?",
      videoRoot: "Chaîne&nbsp;: La classe de JJonet",
    },
    {
      videoSrc: "https://www.youtube.com/embed/YRQb8cHhwj0",
      videoTitle: "La capsule animée",
      videoRoot: " Chaîne&nbsp;: Jerome Blanstier",
    },
  ];
}
</script>
