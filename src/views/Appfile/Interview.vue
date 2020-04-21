<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h2 class="rubric-title">ENTRETIEN DE RECRUTEMENT</h2>
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
     <InterviewKeys></InterviewKeys>
      <InterviewTips></InterviewTips>
      <InterviewGoFurther></InterviewGoFurther>
    

    

    <Footer></Footer>
  </div>
</template>

<style lang="scss">
#interview-galery {
  margin-left:10%;
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
import InterviewKeys from "@/views/Appfile/InterviewKeys.vue";
import InterviewTips from "@/views/Appfile/InterviewTips.vue";
import InterviewGoFurther from "@/views/Appfile/InterviewGoFurther.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    Menu,
    Index,
    InterviewKeys,
    InterviewTips,
    InterviewGoFurther,
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


}
</script>
