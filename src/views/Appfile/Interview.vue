<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <p>
      <strong>
        Vos CV et lettre de motivation ont retenu l’attention du recruteur.
        Bravo ! Il ne vous reste plus qu’une dernière étape : l’entretien de
        recrutement. Laissez le stress de côté et réjouissez-vous de cette
        rencontre importante qui va forcément être enrichissante pour vous : au
        mieux, elle vous permettra d’accéder à la formation de vos rêves, au
        stage ou au poste convoités, au pire, elle vous permettra d’améliorer
        encore vos techniques d’entretien ! Quoiqu’il en soit, le succès d’un
        entretien réside essentiellement dans sa préparation ! Préparez-le donc
        comme un grand oral. Si vous souhaitez forger vos propres outils,
        individualisés, et découvrir davantage d’astuces, n’hésitez pas à
        consulter mon ouvrage :<i> Les Premiers Entretiens de recrutement. Les clés
        pour se démarquer et réussir.</i>
      </strong>
    </p>
     <Index v-bind:index-list="indexInterview"></Index>
    <h3 id="keysInterview">
      LES FONDAMENTAUX: FICHES-CLEFS
    </h3>
    <h4>
      Les étapes de l’entretien de recrutement:
    </h4>
    <p>
      Pour limiter les surprises, préparez-vous l’entretien de recrutement qui
      se décompose généralement en 5 temps forts. Ces étapes peuvent apparaitre
      dans un ordre différent, selon votre interlocuteur. Dans tous les cas,
      c’est lui qui donne le tempo des échanges. Vous aurez entre 30 minutes et
      1 heure pour convaincre.
    </p>
    
    <Pdf  v-bind:galery-pdf="pdfInterview"></Pdf>

   

    <a
      id="interview-galery"
      href="https://www.univ-angers.fr/fr/formations/insertion-professionnelle/ip-box/entretien-de-recrutement.html?search-keywords=entretien+recrutement"
      target="_blank"
    >
      source : <b-icon
            icon="box-arrow-right"
          ></b-icon
        >
         www.univ-angers.fr/fr/formations/insertion-professionnelle/ip-box 
    </a>

    <Galery v-bind:galery-picture="galeryInterview"></Galery>

    <h4>
      Quelle tenue adopter ?
    </h4>
    <p>
      Il n’est pas question ici d’être prescripteur d’un quelconque style. Il
      s’agit seulement de questionner les stéréotypes et les idées reçues qui
      peuvent façonner le jugement de certains recruteurs ou qui président à
      certains secteurs.
    </p>
    <p>
       <a
        href="https://www.keljob.com/articles/5-attitudes-qui-impressionnent-les-recruteurs-en-entretien-d-embauche"
        target="_blank"
        class="subtitle-link"
      >
      <strong> Attitudes pour marquer le recruteur </strong>
     
        <b-icon icon="box-arrow-right"></b-icon>
      </a>
    </p>
    <p>
       <a
        href="https://www.regionsjob.com/conseils/reussir-entretien-skype.html"
        target="_blank"
        class="subtitle-link"
      >
      <strong>Comment réussir un entretien à distance </strong>
     
        <b-icon icon="box-arrow-right"></b-icon>
      </a>
    </p>

     <h3 id="tipsInterview">
      CONSEILS ET ASTUCES
    </h3>
      <h3 id="goFurtherInterview">
      POUR ALLER PLUS LOIN
    </h3>
    
    <b-row id="go-further-Interview">
        
    <b-col cols="4">
        <img id="book-Com"  src="../../assets/book.jpg">
    </b-col>
    <b-col cols="8">
        <p>
        Cet ouvrage s’adresse à tous ceux qui doivent se présenter à des entretiens 
        de recrutement pour la première fois : jeunes diplômés qui entrent sur le marché 
        de l’emploi, étudiants qui postulent à un stage, à une poursuite d’études ou encore 
        lycéens face à une épreuve orale de concours. Vous y trouverez des exercices pratiques, 
        des conseils méthodologiques, des outils concrets, des astuces et des témoignages de professionnels.
    </p>
    <p>
        À partir d’exemples vécus, de tests, de QCM, ou encore des 50 questions 
        les plus posées en entretien, vous pourrez acquérir des connaissances sur 
        les méthodes de recrutement et les dernières tendances en la matière. Vous 
        aiguiserez ainsi votre capacité à vous présenter, à argumenter, à interagir 
        positivement avec le recruteur ou encore à négocier. Au-delà des recettes toutes 
        faites, l’objectif de cet ouvrage est de vous faire prendre conscience des enjeux 
        fondamentaux de l’entretien et de ses codes bien spécifiques. Il doit vous permettre 
        de trouver, en vous, les ressources afin de vous démarquer des autres candidats en adoptant 
        l’attitude professionnelle adéquate et en communicant efficacement avec votre interlocuteur.
    </p>
    </b-col>
  </b-row>
    

    

    <Footer></Footer>
  </div>
</template>

<style lang="scss">
#interview-galery {
  margin-left:10%;
}
#book-Com{
    width: 30vw;
    border:solid 1px #bce8ff;
    
}
#go-further-Interview{
    margin-left:8vw;
    
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Index from "@/components/Index.vue";
import Galery from "@/components/Galery.vue";
import Pdf from "@/components/Pdf.vue";
import Footer from "@/components/Footer.vue";
import { BIcon,  BIconBoxArrowRight } from "bootstrap-vue";
@Component({
  components: {
    Header,
    Menu,
    Index,
    Galery,
    Pdf,
    BIcon,
    
    BIconBoxArrowRight,
    Footer
  }
})
export default class Interview extends Vue {

public indexInterview= [
    {
    IndexTitle:  "LES FONDAMENTAUX : FICHES-CLÉS",
    IndexId: "#keysInterview",
    IndexImage: "/thumbail.png"
    },
    {
    IndexTitle: "CONSEILS ET ASTUCES",
    IndexId: "#tipsInterview",
    IndexImage:"/thumbail.png"
    },
    {
    IndexTitle: "POUR ALLER PLUS LOIN",
    IndexId: "#goFurtherInterview",
    IndexImage:"/thumbail.png"
    }

  ]


  public galeryInterview: string[] = [
    "/picture_interview/fundamentals_Interview_What'sit.png",
    "/picture_interview/fundamentals_Interview_Keys.png",
    "/picture_interview/fundamentals_Interview_Question.png",
    "/picture_interview/fundamentals_Interview_Question2.png",
    "/picture_interview/fundamentals_Interview_Grid.png"
  ];
  public pdfInterview= [
     {
      pdfLink:"/pdf_interview/fundamental_Interview_What'sit.pdf",
      pdfDownload:"Qu'est-ce-qu'un-entretien?",
      TxtPdf:"Fiche 1 : Qu’est-ce qu’un entretien ? "
    },
      {
      pdfLink: "/pdf_interview/fundamentals_Interview_Keys.pdf",
      pdfDownload:"10PointsClésEntretien",
      TxtPdf:"Fiche 2 : Les 10 points clés de l’entretien"
    },
      {
      pdfLink:"/pdf_interview/fundamental_Interview_Question.pdf",
      pdfDownload:"QuestionType1Entretien",
      TxtPdf:"Fiche 3 : Les questions types 1"
    },
      {
      pdfLink:"/pdf_interview/fundamental_Interview_Question2.pdf",
      pdfDownload:"QuestionType2Entretien",
      TxtPdf:"Fiche 4 : Les questions types 2"
    },
      {
      pdfLink:"/pdf_interview/fundamentals_Interview_Grid.pdf",
      pdfDownload:"GrilleAnalyseEntretien",
      TxtPdf:"Fiche 5 : Grille d’analyse recruteur"
    }
     
  ]

}
</script>
