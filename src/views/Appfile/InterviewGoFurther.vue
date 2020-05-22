<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3 id="goFurtherInterview">
      POUR ALLER PLUS LOIN
    </h3>

    <b-row id="go-further-Interview">
      <b-col cols="2">
        <img
          id="book-Com"
          src="../../assets/book.jpg"
          alt="Les premiers entretiens de recrutement Peggy Raffy-Hideux : Livre sur le recrutements "
          draggable="false"
        />
      </b-col>
      <b-col cols="9">
        <p>
          Cet ouvrage s’adresse à tous ceux qui doivent se présenter à des
          entretiens de recrutement pour la première fois{{'\xa0'}}: jeunes diplômés
          qui entrent sur le marché de l’emploi, étudiants qui postulent à un
          stage, à une poursuite d’études ou encore lycéens face à une épreuve
          orale de concours. Vous y trouverez des exercices pratiques, des
          conseils méthodologiques, des outils concrets, des astuces et des
          témoignages de professionnels.
        </p>
        <p>
          À partir d’exemples vécus, de tests, de QCM, ou encore des 50
          questions les plus posées en entretien, vous pourrez acquérir des
          connaissances sur les méthodes de recrutement et les dernières
          tendances en la matière. Vous aiguiserez ainsi votre capacité à vous
          présenter, à argumenter, à interagir positivement avec le recruteur ou
          encore à négocier. Au-delà des recettes toutes faites, l’objectif de
          cet ouvrage est de vous faire prendre conscience des enjeux
          fondamentaux de l’entretien et de ses codes bien spécifiques. Il doit
          vous permettre de trouver, en vous, les ressources afin de vous
          démarquer des autres candidats en adoptant l’attitude professionnelle
          adéquate et en communicant efficacement avec votre interlocuteur.
        </p>
      </b-col>
    </b-row>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevInterviewGoFurther"></NextPrevBtn>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
#book-Com {
  width: 20vw;
  box-shadow: 1px 1px 10px;
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
   }
})
export default class InterviewGoFurther extends Vue {
   public nxtprevInterviewGoFurther =
  {
    BoolPrev: true,
    BoolNext: false,
    PrevImage: "/thumbnail6.png",
    NextImage: "",
    PrevLink: "/Entretien/Astuces",
    NextLink: "",
  };
}
</script>
