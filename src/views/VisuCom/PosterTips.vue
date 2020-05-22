<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>CONSEILS ET ASTUCES</h3>
    <h4>
        Comment créer une affiche en 20 minutes{{'\xa0'}}?
      </h4>
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
    <h4>
        Les créateurs d’affiches en ligne
      </h4>
    <p>
    <b-row class="justify-content-md-center breath-top">
      <b-col>
        <a href="https://www.canva.com/fr_fr/creer/" target="_blank">
          <b-button class="icon" id="popover-Canva">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/3/3b/Canva_Logo.png"
              class="Logo"
              
              alt="Canva"
            />
          </b-button>
        </a>
      </b-col>
      <b-popover target="popover-Canva" triggers="hover" placement="top">
        Canva
      </b-popover>
      <b-col>
        <a href="https://piktochart.com/" target="_blank">
          <b-button class="icon" id="popover-Piktochart">
            <img
              src="https://blog.smatsocial.com/wp-content/uploads/2018/03/Logo-Tagline_Vertical_Full-Color-540x386.png"
              class="Logo"
              alt="Piktochart"
            />
          </b-button>
        </a>
      </b-col>
      <b-popover target="popover-Piktochart" triggers="hover" placement="top">
        Piktochart
      </b-popover>
      <b-col>
        <a href="https://crello.com/fr/" target="_blank">
          <b-button class="icon" id="popover-Crello">
            <img
              src="https://theme.zdassets.com/theme_assets/1895245/eb4788098e4596fc299444e0c3c768c11f7f74ea.png"
              class="Logo"
              
              alt="Crello"
            />
          </b-button>
        </a>
      </b-col>
      <b-popover target="popover-Crello" triggers="hover" placement="top">
        Crello
      </b-popover>
      <b-col>
        <a href="https://spark.adobe.com/fr-FR/" target="_blank">
        <b-button class="icon" id="popover-AdobeSpark">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Adobe_Spark_logo.svg/1200px-Adobe_Spark_logo.svg.png"
            class="Logo"
           
            alt="Adobe spark"
          />
        </b-button>
        </a>
      </b-col>
      <b-popover target="popover-AdobeSpark" triggers="hover" placement="top">
        Adobe Spark
      </b-popover>
      <b-col>
        <a href="https://www.lucidpress.com/pages/" target="_blank">
          <b-button class="icon" id="popover-Lucidpress">
            <img
              src="http://schoolpress.cdn.whipplehill.net/hebron61/3/files/2014/11/lucidpress-logo-icon-circle.png"
              class="Logo"
             
              alt="Lucidpress"
            />
          </b-button>
        </a>
      </b-col>
      <b-popover target="popover-Lucidpress" triggers="hover" placement="top">
        Lucidpress
      </b-popover>
      <b-col>
        <a href="http://www.studio-scrap.com/" target="_blank">
          <b-button class="icon" id="popover-StudioScrap">
            <img
              src="https://www.studio-scrap.com/uploads/images/ss7/ss7-logo-400.png"
              class="Logo"
             
              alt="Studio scrap"
            />
          </b-button>
        </a>
      </b-col>
      <b-popover target="popover-StudioScrap" triggers="hover" placement="top">
        Studio Scrap
      </b-popover>
    </b-row>
    </p>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevPosterTips"></NextPrevBtn>
    <Footer></Footer>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import {BPopover} from "bootstrap-vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    BPopover,
    NextPrevBtn,
    Footer,
  },
})
export default class PosterTips extends Vue {
  public nxtprevPosterTips = {
    BoolPrev: true ,
    BoolNext: true,
    PrevImage: "/thumbnail3.png",
    NextImage: "/thumbnail1.png",
    PrevLink: "/Affiche/Fondamentaux",
    NextLink: "/Affiche/EnPratique",
  };
}
</script>
