<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h2 class="rubric-title">PLAISIR DE LIRE</h2>
    <p>
      <strong>
        Vous trouverez ci-dessous des suggestions de livres à découvrir ou à redécouvrir...
      </strong>
    </p>
    <p>
      Vous pourrez accéder à certains de ces livres numérisés (et à plein
      d’autres) gratuitement grâce aux sites suivants{{'\xa0'}}:
    </p>
    <p>
    <ul>
      <li>
        <a
          href="https://fr.wikisource.org/wiki/Wikisource:Accueil"
          target="_blank"
          class="list-link"
          >Wikisource <b-icon icon="box-arrow-right"></b-icon
        ></a>
      </li>
      <li>
        <a
          href="http://www.gutenberg.org/browse/languages/fr"
          target="_blank"
          class="list-link"
          >Projet Gutenberg <b-icon icon="box-arrow-right"></b-icon
        ></a>
      </li>
      <li>
        <a
          href="https://gallica.bnf.fr/blog/14052014/pres-de-3-000-livres-en-epub-telecharger-dans-gallica?mode=desktop"
          target="_blank"
          class="list-link"
          >Gallica <b-icon icon="box-arrow-right"></b-icon
        ></a>
      </li>
      <li>
        <a
          href="https://www.ebooksgratuits.com/"
          target="_blank"
          class="list-link"
          >Ebooksgratuits <b-icon icon="box-arrow-right"></b-icon
        ></a>
      </li>
      <li>
        <a
          href="https://www.furet.com/ebooks-gratuits"
          target="_blank"
          class="list-link"
          >Le Furet <b-icon icon="box-arrow-right"></b-icon
        ></a>
      </li>
      <li>
        <a
          href="https://livre.fnac.com/n286016/Petit-prix-et-bons-plans-ebooks/Tous-les-Ebooks-gratuits"
          target="_blank"
          class="list-link"
          >La Fnac <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </li>

      <li>
        <a href="https://www.dupuis.com/" target="_blank" class="list-link"
          >Dupuis <b-icon icon="box-arrow-right"></b-icon
        ></a>
      </li>
      <li>
        <a
          href="https://librairie.lapin.org/"
          target="_blank"
          class="list-link"
          >Les éditions Lapin mettent gratuitement à disposition de nombreuses
          bandes dessinées en ligne. <b-icon icon="box-arrow-right"></b-icon
        ></a>
      </li>
    </ul>
    </p>
    <ContentsPage v-bind:contents-list="contentsRead"></ContentsPage>
    <Footer></Footer>
  </div>
</template>
<style lang="scss">
.picture-book{
  width:15vw;
  box-shadow: 1px 1px 5px;
}
.reading{
  margin: 5% 5%;
}
.text-read{
  margin-left: 0;
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import { BIcon, BIconBoxArrowRight } from "bootstrap-vue";
import ContentsPage from "@/components/ContentsPage.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    BIcon,
    BIconBoxArrowRight,
    ContentsPage,
    Footer,
  },
})
export default class ReadPleasure extends Vue {
  public contentsRead = [
    {
      ContentsTitle:"POUR RENOUER AVEC LA LECTURE...",
      ContentsPath:"/PlaisirdeLire/RenouerAvecLaLecture",
      ContentsImage: "/thumbnail4.png"
    },
    {
      ContentsTitle:"LES CLASSIQUES",
      ContentsPath:"/PlaisirdeLire/LesClassiques",
      ContentsImage: "/thumbnail5.png"
    },
    {
      ContentsTitle:"TÉMOIGNAGES/ESSAIS",
      ContentsPath:"/PlaisirdeLire/LesEssaisEtTemoignages",
      ContentsImage: "/thumbnail2.png"
    },
    {
      ContentsTitle:"LECTURES INSULAIRES (RÉUNION, HAÏTI)",
      ContentsPath:"/PlaisirdeLire/LectureInsulaire",
      ContentsImage: "/thumbnail1.png"
    },
    {
      ContentsTitle:"LES BANDES DESSINÉES",
      ContentsPath:"/PlaisirdeLire/BandesDessinees",
      ContentsImage: "/thumbnail7.png"
    },
    {
      ContentsTitle:"POUR LES LECTEURS LES PLUS AGUERRIS...",
      ContentsPath:"/PlaisirdeLire/PourLesAguerris",
      ContentsImage: "/thumbnail3.png"
    },
  ]
}
</script>
