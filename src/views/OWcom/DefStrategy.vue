<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>
      STRATÉGIES DE COMMUNICATION
    </h3>
    <p>
        Que vous soyez chargé.e de communication dans un cadre professionnel, institutionnel ou encore associatif, que vous vous occupiez de communication interne ou externe, vous trouverez ici les méthodes indispensables pour mettre en œuvre une stratégie et des outils de communication efficaces : pourquoi communiquer ? Comment définir une cible ? Quel est l'objectif à atteindre ? Quel plan de communication envisager ? Quels outils et canaux de communication privilégier ?... Étape par étape, appliquer cette méthodologie du questionnement à votre propre projet.F
    </p>
    <h4>
        Créer des outils de communication
    </h4>
    <p>
        Pas à pas, découvrez comment créer votre communication en vous posant les bonnes questions. Ces recommandations de l'Unicef valent pour tous les projets de communication.
    </p>
    <a
      class="subtitle-link pdf-line"
      href="/pdf_OWcom/ComTool.pdf"
      download="fiche_initiative_creer_outils_communication.pdf"
    >
      Créer des outils de communication et des partenariats pour valoriser mon action <img class="logo-pdf" src="../../assets/logo-pdf.png" />
    </a>
   
    <h4>
        Les basiques de la communication
    </h4>
    <p>
        Qu'est-ce qu'un plan de communication, à quoi servent les supports web, quel support imprimé privilégier, comment développer ses relations presse ? Ce petit guide à l'usage des associations apporte les outils fondamentaux à toute organisation qui souhaite communiquer efficacement.
    </p>
    <a
      class="subtitle-link pdf-line"
      href="/pdf_OWcom/COM.pdf"
      download="Guide de la communication.pdf"
    >
      Guide de la communication <img class="logo-pdf" src="../../assets/logo-pdf.png" />
    </a>

    <h4>
        Établir le plan de communication d’un projet
    </h4>
    <p>
        Vous êtes impliqué dans un projet ? Que vous soyez sponsor, chef de projet professionnel ou occasionnel, gestionnaire d’un portefeuille de projets ou tout simplement membre d’une équipe de projet, les documents ci-dessous vous proposent une méthode complète pour élaborer le plan de communication de votre projet.
    </p>
      <Pdf v-bind:galery-pdf="pdfDefStrat"></Pdf>

    <h4>
        La sélection des moyens de communication
    </h4>
    <p>
        Le plan média est la liste des supports sélectionnés et des dates retenues pour la diffusion des messages publicitaires. Il a pour objectif d’obtenir la meilleure couverture possible de la cible qui a été définie dans la stratégie de communication. Comment définir sa stratégie et son plan média ?
    </p>
    <a
      class="subtitle-link pdf-line"
      href="/pdf_OWcom/PlanMedia.pdf"
      download="Etablir le plan de communication d’un projet.pdf"
    >
      Le plan média <img class="logo-pdf" src="../../assets/logo-pdf.png" />
    </a>
    <h4>
        Guide pratique des principaux outils de communication
    </h4>
    <p>
        Communiqué de presse, outils de promotion, publicité, plan de communication...: guide des bonnes pratiques de la communication.
    </p>
    <a
      class="subtitle-link pdf-line"
      href="/pdf_OWcom/MainComTool.pdf"
      download="Guide Principaux outils de communication.pdf"
    >
     Principaux outils de communication <img class="logo-pdf" src="../../assets/logo-pdf.png" />
    </a>
    <h4>
        La communication interne
    </h4>
    <p>
        Comprendre les fondements et les éléments théoriques de la communication interne, aborder la communication interne digitale, le journal d'entreprise, l'événementiel, apprendre à faire face à une communication interne de crise... Tels sont les objectifs de ce cours de Pauline Folcher de l'Université de Montpellier.
    </p>
    <a
      class="subtitle-link pdf-line"
      href="/pdf_OWcom/InterneCom.pdf"
      download="Communication interne.pdf"
    >
     Communication interne <img class="logo-pdf" src="../../assets/logo-pdf.png" />
    </a>

    <h4>
        Les différents réseaux sociaux et leurs spécificités
    </h4>
    <p>
        La présence d’une association sur les réseaux sociaux ne relève presque pas d’un choix, mais plutôt d’une nécessité. En revanche, pour que cette décision soit productive et diffuse le meilleur de vous-même, il s’agit d’être pertinent quant à la qualité de votre présence digitale. En effet, tous les médias sociaux ne se valent pas. 
    </p>
    <a
      class="subtitle-link pdf-line"
      href="/pdf_OWcom/NetCom.pdf"
      download="Communication et Reseau Sociaux.pdf"
    >
     Communication et Reseau Sociaux <img class="logo-pdf" src="../../assets/logo-pdf.png" />
    </a>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevDefStrategy"></NextPrevBtn>
    <Footer></Footer>
  </div>
</template>

<style></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Pdf from "@/components/Pdf.vue"
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    Pdf,
    NextPrevBtn,
    Footer,
  },
})
export default class DefStrategy extends Vue {
  public pdfDefStrat = [
    {
      pdfLink: "/pdf_OWcom/PlanCom.pdf",
      pdfDownload: "Pourquoi et comment concevoir son plan de communication\xa0?",
      TxtPdf: "Pourquoi et comment concevoir son plan de communication\xa0?",
    },
    {
      pdfLink: "/pdf_OWcom/PlanCom2.pdf",
      pdfDownload: "Le plan de communication",
      TxtPdf: "Le plan de communication",
    },
    {
      pdfLink: "/pdf_OWcom/PlanCom3.pdf",
      pdfDownload: "Etablir le plan de communication d’un projet",
      TxtPdf: "Etablir le plan de communication d’un projet",
    },
  ];
  public nxtprevDefStrategy =
  {
    BoolPrev: true,
    BoolNext: false,
    PrevImage: "/thumbnail3.png",
    NextImage: "",
    PrevLink: "/Definition_Communication/Situation_Communication",
    NextLink: "",
  };
}
</script>