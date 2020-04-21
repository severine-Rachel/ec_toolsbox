<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>CONSEILS ET ASTUCES</h3>
    <p>
      <strong>
        Comment créer une affiche en 20 minutes ?
      </strong>
    </p>
    <b-row align-h="center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/PIIA5SJ-pKM"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </b-row>
    <p>
      <strong>
        Les créateurs d’affiches en ligne :
      </strong>
    </p>
    <a href="https://www.canva.com/fr_fr/creer/" target="_blank">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/3/3b/Canva_Logo.png"
        class="logo-software"
        title="Canva"
        alt="Canva"
      />
    </a>
    <a href="https://piktochart.com/" target="_blank">
      <img
        src="https://d1qb2nb5cznatu.cloudfront.net/startups/i/24959-4d2540d2c2d0044a14ea83e250767b88-medium_jpg.jpg?buster=1517195542"
        class="logo-software"
        title="Piktochart"
        alt="Piktochart"
      />
    </a>
    <a href="https://crello.com/fr/" target="_blank">
      <img
        src="https://cdn.dribbble.com/users/1921403/screenshots/3882859/crello_logo.jpg"
        class="logo-software"
        title="Crello"
        alt="Crello"
      />
    </a>
    <a href="https://spark.adobe.com/fr-FR/" target="_blank">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Adobe_Spark_logo.svg/1200px-Adobe_Spark_logo.svg.png"
        class="logo-software"
        title="Adobe spark"
        alt="Adobe spark"
      />
    </a>
    <a href="https://www.lucidpress.com/pages/" target="_blank">
      <img
        src="http://schoolpress.cdn.whipplehill.net/hebron61/3/files/2014/11/lucidpress-logo-icon-circle.png"
        class="logo-software"
        title="Lucidpress"
        alt="Lucidpress"
      />
    </a>
    <a href="http://www.studio-scrap.com/" target="_blank">
      <img
        src="https://lh3.googleusercontent.com/proxy/UNnJlsIO0ju5llRCq12B8Bohe91ILq0NLRqZQtxioWvxp6XnLsioC6nWK2ebbuiXU8qXXNFGp7LzvoR5TKuqMJPtAgoQRM6f7dcHck9KA3uGMcUD5g"
        class="logo-software"
        title="Studio scrap"
        alt="Studio scrap"
      />
    </a>
    <Footer></Footer>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    Footer,
  },
})
export default class PosterTips extends Vue {}
</script>
