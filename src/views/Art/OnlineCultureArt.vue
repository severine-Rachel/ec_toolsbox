<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>ARTS</h3>

    <strong>
      <a
        href="https://www.histoiredesarts.culture.fr/"
        class="subtitle-link"
        target="_blank"
      >
        Histoire des arts <b-icon icon="box-arrow-right"></b-icon>
      </a>
    </strong>

    <p>
      Le portail Histoire des arts propose un accès libre et gratuit à des
      milliers de ressources en ligne, produites par des personnels qualifiés
      des structures culturelles, et touchant tous les domaines de la création
      artistique et du patrimoine. Le moteur de recherche permet un accès rapide
      aux documents.
    </p>

    <strong>
      <a
        href="https://www.panoramadelart.fr/"
        class="subtitle-link"
        target="_blank"
      >
        Panorama de l’art <b-icon icon="box-arrow-right"></b-icon>
      </a>
    </strong>
    <p>
      Panorama de l’art couvre tout le champ de l’histoire de l’art, de la
      préhistoire jusqu’à nos jours{{'\xa0'}}: architectures, sculptures, peintures,
      vitraux, tapisseries… Des centaines d’images en grand format et de haute
      qualité pour le simple plaisir de regarder, comparer, découvrir et rêver.
    </p>

    <strong>
      <a href="https://artips.fr/" class="subtitle-link" target="_blank">
        Artips <b-icon icon="box-arrow-right"></b-icon>
      </a>
    </strong>

    <p>
      Artips est un site internet qui propose aux internautes de s'abonner
      gratuitement pour recevoir trois fois par semaine dans leurs boites
      e-mail, une newsletter comprenant une explication courte et originale
      d'une œuvre d'art célèbre ou peu connue.
    </p>

    <strong>
      <a
        href="https://www.beauxarts.com/categorie/videos/"
        class="subtitle-link"
        target="_blank"
      >
        Docus gratuits sur l’art – Les Beaux-Arts
        <b-icon icon="box-arrow-right"></b-icon>
      </a>
    </strong>

    <p></p>
    <strong>
      <a
        href="https://www.beauxarts.com/"
        class="subtitle-link"
        target="_blank"
      >
        Les Beaux-Arts <b-icon icon="box-arrow-right"></b-icon>
      </a>
    </strong>

    <p>
      Le magazine des Beaux-Arts en ligne est consacré aux arts visuels sous
      toutes leurs formes et périodes. Il permet, notamment dans sa partie «{{'\xa0'}}
      Encyclo{{'\xa0'}}», de re-découvrir des artistes ou des mouvements artistiques.
    </p>

    <strong>
      <a
        href="http://www.lacontemporaine.fr/ "
        class="subtitle-link"
        target="_blank"
      >
        La contemporaine <b-icon icon="box-arrow-right"></b-icon>
      </a>
    </strong>

    <p>
      La contemporaine — Bibliothèque, archives, musée des mondes contemporains
      — est une bibliothèque, un musée et un centre d'archives français
      spécialisé sur l'histoire des 20ᵉ et 21ᵉ siècles.
    </p>

    <strong>
      <a href="https://madparis.fr/ " class="subtitle-link" target="_blank">
        Musée des arts décoratifs <b-icon icon="box-arrow-right"></b-icon>
      </a>
    </strong>

    <p>
      Le musée des Arts décoratifs est un musée parisien qui a pour objectif la
      valorisation des beaux-arts appliqués et le développement de liens entre
      industrie et culture, création et production. Vous pouvez y retrouver des
      dossiers thématiques comme «{{'\xa0'}}Marques et personnages de la publicité » ou
      encore «{{'\xa0'}}Une histoire de bijoux{{'\xa0'}}».
    </p>

    <strong>
      <a
        href="https://podcast.ausha.co/bulle-d-art"
        class="subtitle-link"
        target="_blank"
      >
        Podcast Bulle d’Art <b-icon icon="box-arrow-right"></b-icon>
      </a>
    </strong>

    <p>
      Un podcast qui parle d'art contemporain, cinq à dix minutes sur une œuvre,
      un artiste, une expo, à découvrir simplement, sur un coup de cœur.
    </p>

    <strong>
      <a
        href="https://www.louvre.fr/images-du-louvre"
        class="subtitle-link"
        target="_blank"
      >
        Images du Louvre <b-icon icon="box-arrow-right"></b-icon>
      </a>
    </strong>

    <p>
      Des œuvres majeures du Louvre sont ici à découvrir et à explorer.
      Découvrez des dossiers documentaires synthétiques ainsi que des activités
      pédagogiques rédigées par des enseignants et organisées par cycles et par
      thèmes.
    </p>

    <strong>
      <a
        href=" https://www.louvre.fr/base-images-d-art"
        class="subtitle-link"
        target="_blank"
      >
        Base Images d'Art <b-icon icon="box-arrow-right"></b-icon>
      </a>
    </strong>

    <p>
      La photothèque universelle Images d’art propose au grand public de
      découvrir, collectionner et partager des photographies de plus de 500 000
      œuvres présentées dans les musées français.
    </p>
    <p>
      <strong>
        Visite au musée
      </strong>
    </p>
    <p>
      Plusieurs musées proposent des visites virtuelles de leur collection
    </p>
    <p>
    <ul>
      <li>Le musée d’Orsay à Paris</li>
      <li>Le musée Van Gogh à Amsterdam</li>
      <li>Le British Museum à Londres</li>
      <li>Le Guggenheim à Bilbao</li>
      <li>
        Les musées du Vatican, pour réaliser, entre autres, une visite 360° de
        la Chapelle Sixtine
      </li>
    </ul>
    </p>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevOnlineCultureArt"></NextPrevBtn>
    <Footer></Footer>
  </div>
</template>
<style lang="scss"></style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import { BIcon, BIconBoxArrowRight } from "bootstrap-vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    BIconBoxArrowRight,
    BIcon,
    NextPrevBtn,
    Footer,
  },
})
export default class OnlineCultureArt extends Vue {
  public nxtprevOnlineCultureArt =
  {
    BoolPrev: false,
    BoolNext: true,
    PrevImage: " ",
    NextImage: "/thumbnail5.png",
    PrevLink: " ",
    NextLink: "/CultureenLigne/Cinema",
  };
}
</script>
