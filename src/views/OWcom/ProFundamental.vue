<template>
  <div id="ProFundamental">
    <Header></Header>
    <Menu></Menu>
    <h3>LES FONDAMENTAUX DE L'ÉCRIT</h3>
    <p>
      Aujourd’hui, avec l’essor du numérique, chacun d’entre nous est amené à
      rédiger. Que ce soit dans un cadre privé (SMS, e-mails, etc.), dans un
      cadre académique (dissertations, essais, rapports, etc.) ou dans un cadre
      professionnel (compte rendu, dossier technique, lettre de motivation,
      etc.), l’écrit fait partie intégrante de notre environnement quotidien.
      Pascal disait «{{ "\xa0" }}Savoir bien écrire, c’est savoir bien penser{{
        "\xa0"
      }}» et, encore aujourd’hui, savoir bien rédiger est perçu comme une
      aptitude essentielle, notamment dans le milieu professionnel. Bien
      rédiger, c’est prendre en compte son destinataire (réfléchir à ses
      attentes, à ses besoins, lui parler avec ses mots, etc.), lui faciliter le
      tri de l’information (concision, objet, titre, etc.) ou encore respecter
      les normes en vigueur (présentation et mise en page, respect de la langue
      française, etc.). Vous trouverez ici des éléments pour vous aider à
      améliorer vos compétences rédactionnelles.
    </p>
    <p>
      <strong>
        L'écrit réussi, c'est :
      </strong>
    </p>
    <img
      class="square"
      src="/picture_OWcom/schematic/schema_goal_writter.png"
      alt="Pourquoi écrit-on"
      draggable="false"
    />
    <p>
      <i>Source</i>{{ "\xa0" }}: D'après Bettina SOULEZ, Marie-Agnès GIRAUDY,
      <i
        >Écrire vite et bien en affaires{{ "\xa0" }}: La référence de l'écrit
        professionnel</i
      >, Chiron, 2014, p.139.
    </p>
    <p>
      <strong>
        Pour tout écrit, il faut adopter une démarche par objectif
      </strong>
    </p>
    <img
      class="square"
      src="/picture_OWcom/schematic/schema_pro.png"
      alt="structuration-discours"
      draggable="false"
    />
    <p>
      <i>Source</i>{{ "\xa0" }}: D'après Bettina SOULEZ, Marie-Agnès GIRAUDY,
      <i
        >Écrire vite et bien en affaires{{ "\xa0" }}: La référence de l'écrit
        professionnel</i
      >, Chiron, 2014, p.138.
    </p>
    <a
      class="subtitle-link"
      href="http://fr.copian.ca/biblio/apprenti/rhdcc/competences_essentielles/conseils_redaction/conseils_redaction.pdf"
      target="_blank"
    >
      <strong
        >Fiche conseil rédaction <b-icon icon="box-arrow-right"></b-icon
      ></strong>
    </a>

    <p class="none-margin-top">
      <i>Source{{ "\xa0" }}:</i>
      http://fr.copian.ca/biblio/apprenti/rhdcc/competences_essentielles/conseils_redaction/conseils_redaction.pdf
    </p>
    <p>
      <strong>Pour structurer votre texte, recourez à la carte mentale</strong>
    </p>

    <Video v-bind:galery-video="videoTipsPro" v-bind:id-video="'pro1'"></Video>
    <p id="form"></p>
    <h4>La forme</h4>

    <h5 id="h5-title">Le modèle de la lettre professionnelle</h5>
    <div id="DesktopInteraction">
      <p>
        Les marqueurs bleus vous apporteront des conseils sur la structuration
        de votre lettre et les marqueurs jaunes sur sa mise en page.
      </p>
      <FundamentalLetter></FundamentalLetter>
    </div>
    <div id="PhoneExplanation">
      <p>
        La lettre doit respecter un équilibre global{{ "\xa0" }}; c’est la règle
        des 3 tiers.
      </p>
      <p>
        <strong>Pour la structuration{{ "\xa0" }}:</strong>
      </p>
      <ul class="margin">
        <li>
          1er tiers{{ "\xa0" }}: l'en-tête de la lettre. Eventuellement, ce 1er
          tiers peut englober la formule d'appel.
        </li>
        <li>
          2e tiers{{ "\xa0" }}: le corps de la lettre. Le texte doit être
          justifié informatiquement.
        </li>
        <li>3e tiers{{ "\xa0" }}: formule de politesse et signature.</li>
        <li>
          L'adresse du destinataire doit être aligné à gauche. Utilisez un
          tableau caché.
        </li>
        <li>Alinéa au début de chaque paragraphe.</li>
      </ul>
      <p>
        <strong>Pour la mise en page{{ "\xa0" }}:</strong>
      </p>

      <ul class="margin">
        <li>
          Adresse expéditeur. Toujours le prénom avant le nom. Numéro de
          téléphone + e-mail professionnel.
        </li>
        <li>Indiquez le lieu et la date. Le tout aligné sur la droite.</li>
        <li>Adresse destinataire. On n'indique ni téléphone ni e-mail.</li>
        <li>
          Espace avant la désignation du destinataire précis. Indiquez le poste
          de votre interlocuteur.
        </li>
        <li>
          Objet{{ "\xa0" }}: un verbe nominalisé doit indiquer l'objectif du
          courrier. Ici{{ "\xa0" }}: candidater.
        </li>
        <li>Commencez votre rédaction avec la formule d'appel.</li>
        <li>
          Le corps de la lettre doit être décomposé en paragraphes signifiants.
          Préférez l’interligne entre paragraphes plutôt que les sauts de
          ligne{{ "\xa0" }}!
        </li>
        <li>
          Finissez votre rédaction avec les indications de disponibilités et la
          formule de politesse.
        </li>
        <li>
          Signature manuscrite au-dessus de la signature informatique (prévoir
          la place suffisante lors de l'impression papier). Alignement à droite.
        </li>
      </ul>
    </div>
    <h5 id="h5-title">Le modèle du rapport</h5>
    <div id="DesktopInteraction">
      <h7>Dossier page de garde 1</h7>

      <p>
        Cette page de garde est trop sobre et les différents niveaux de lecture
        non respectés.
      </p>
      <FundamentalCoverPage1></FundamentalCoverPage1>

      <p></p>
      <h7>Dossier page de garde 2</h7>

      <p>
        Cette page de garde est bien plus attractive. Elle témoigne du soin
        accordé à l’ensemble du dossier.
      </p>
      <b-row>
        <FundamentalCoverPage2></FundamentalCoverPage2>
      </b-row>

      <h7>Dossier Sommaire 1</h7>

      <Summary1></Summary1>

      <h7>Dossier Sommaire 2</h7>

      <Summary2></Summary2>

      <h7>Dossier Sommaire 3</h7>

      <Summary3></Summary3>
    </div>
    <div id="PhoneExplanation">
      <h7>Dossier page de garde</h7>
      <p>
        La page de garde doit être attractive et doit respecter les différents
        niveaux de lecture. Elle témoigne du soin accordé à l’ensemble du
        dossier.
      </p>
      <ul class="margin">
        <li>
          Les prénoms doivent être placés avant le nom, l'ensemble doit figuré
          sous le titre du projet.
        </li>
        <li>
          Le titre doit être explicite. Le titre générique du type "rapport de
          stage" n'est pas central. Le titre ne doit pas être souligné.
        </li>
        <li>
          Le titre doit être explicite. Le titre générique du type "rapport de
          stage" n'est pas central. Le titre ne doit pas être souligné.
        </li>
        <li>
          Il ne faut oublier aucun logo, ils doivent être positionnés en bas de
          la page et ne pas être trop gros.
        </li>
        <li>
          Il faut mettre une charte graphique intéressante que l'on retrouvera
          dans le dossier.
        </li>
        <li>
          L'iconographie est un point avantageux. Elle doit être en lien avec le
          thème.
        </li>
        <li>
          Le sous-titre doit être mis en avant.
        </li>
      </ul>
      <h7>Dossier Sommaire</h7>
      <ul class="margin">
        <li>
          Le sommaire doit être généré informatiquement et les numéros de page
          relégués à droite.
        </li>
        <li>
          Les parties et sous-parties doivent être organisées à l'aide d'une
          hiérarchisation bien précise ; les parties et sous-parties doivent
          être associées à un plan numéroté.
        </li>
        <li>
          Le titre "Sommaire" doit être mis en valeur.
        </li>
        <li>
          L'introduction, la conclusion et les annexes ne sont pas une partie, on ne les inclut donc pas dans la
          numérotation du plan.
        </li>
        <li>
           Il ne doit pas y avoir trop de parties.
        </li>
        <li>
           Les titres doivent être problématisés en fonction du sujet.
        </li>
        <li>
          Il ne faut pas mettre trop de sous-parties. Il faut les réunir sous de grands ensembles thématiques.
        </li>
        <li>
          Il ne faut pas mettre trop de sous-parties. Il faut les réunir sous de grands ensembles thématiques.
        </li>
        <li>
          Prévoyez un saut de ligne entre les grandes parties pour rendre le sommaire plus lisible.
        </li>


      </ul>
    </div>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevProFundamental"></NextPrevBtn>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
@media (max-width: 600px) {
  #DesktopInteraction {
    display: none;
  }
  #h5-title {
    color: #2e367f;
    margin: 1% !important;
  }
}
@media (min-width: 600px) {
  #PhoneExplanation {
    display: none;
  }
  #h5-title {
    color: #2e367f;
  }
}

#ProFundamental {
  scroll-behavior: smooth;
  overflow: auto;
  height: 100vh;
}
.interractive {
  width: 596px;
  height: 781px;
  margin: 50px 0px 50px 200px;
  box-shadow: 1px 1px 10px;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import { BIcon, BIconBoxArrowRight } from "bootstrap-vue";
import FundamentalLetter from "@/views/OWcom/ProFundamental/FundamentalLetter.vue";
import FundamentalCoverPage1 from "@/views/OWcom/ProFundamental/FundamentalCoverPage1.vue";
import FundamentalCoverPage2 from "@/views/OWcom/ProFundamental/FundamentalCoverPage2.vue";
import Summary1 from "@/views/OWcom/ProFundamental/Summary1.vue";
import Summary2 from "@/views/OWcom/ProFundamental/Summary2.vue";
import Summary3 from "@/views/OWcom/ProFundamental/Summary3.vue";
import Video from "@/components/Video.vue";
import Pdf from "@/components/Pdf.vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    BIcon,
    BIconBoxArrowRight,
    FundamentalLetter,
    FundamentalCoverPage1,
    FundamentalCoverPage2,
    Summary1,
    Summary2,
    Summary3,
    Pdf,
    Video,
    NextPrevBtn,
    Footer,
  },
})
export default class ProFundamental extends Vue {
  public pdfPro = [
    {
      pdfLink: "/pdf_OWcom/betterWritePro.pdf",
      pdfDownload: "Fiche conseil rédaction",
      TxtPdf: "Fiche conseil rédaction",
    },
  ];
  public videoTipsPro = [
    {
      videoSrc: "https://www.youtube.com/embed/B5LUC22dmdg",
      videoTitle: "Conseils pour améliorer vos compétences rédactionnelles",
      videoRoot: "Chaîne :  Lucie Rondelet",
    },
    {
      videoSrc: "https://www.youtube.com/embed/vFWoWZFDKB8",
      videoTitle: "Mad mapping : les 3 types de cartes mentales",
      videoRoot: "Chaîne :   Cyril Maitre",
    },
  ];
  public nxtprevProFundamental = {
    BoolPrev: false,
    BoolNext: true,
    PrevImage: "",
    NextImage: "/thumbnail3.png",
    PrevLink: "",
    NextLink: "/Ecrit_Pro/Strategie",
  };
}
</script>
