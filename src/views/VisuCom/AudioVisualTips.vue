<template>
  <div>
    <Header />
    <Menu />
    <h3 id="AudioVisualTips">
      CONSEILS ET ASTUCES
    </h3>
    <h4>
        Astuces de réalisateurs
      </h4>

    <a
      class="subtitle-link"
      href="https://devenir-realisateur.com/"
      target="_blank"
    ><strong>
      Toutes les astuces techniques pour réaliser son film amateur sur le site devenir-realisateur.com.
      <b-icon icon="box-arrow-right" /></strong>
    </a>

    <h4>
      Applications de montage gratuites pour Android, Iphone et Ipad
    </h4>
    <p>
      <b-row class="justify-content-md-center breath-top">
        <b-col>
          <a href="https://www.magisto.com/" target="_blank">
            <b-button class="icon" id="popover-Magisto">
              <img
                src="https://d1ekrxlws13em5.cloudfront.net/media/images/mediakit/appicon.png"
                class="Logo"
                alt="Magisto"
              />
            </b-button>
          </a>
        </b-col>

        <b-popover target="popover-Magisto" triggers="hover" placement="top">
          Magisto
        </b-popover>

        <b-col>
          <a href="https://powerdirector.fr.uptodown.com/android/telecharger" target="_blank">
            <b-button class="icon" id="popover-PowerDirector">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/7/7d/PowerDirector_logo.png"
                class="Logo"
                alt="PowerDirector"
              />
            </b-button>
          </a>
        </b-col>

        <b-popover target="popover-PowerDirector" triggers="hover" placement="top">
          PowerDirector
        </b-popover>

        <b-col>
          <a href="https://www.adobe.com/fr/products/premiere-rush.html" target="_blank">
            <b-button class="icon" id="popover-PremiereRush">
              <img
                src="https://www.adobe.com/content/dam/cc/us/en/creative-cloud/premiere-rush.svg"
                class="Logo"
                alt="Première Rush"
              />
            </b-button>
          </a>
        </b-col>

        <b-popover target="popover-PremiereRush" triggers="hover" placement="top">
          Première Rush
        </b-popover>


        <b-col>
          <a href="https://luma-touch.com/lumafusion-for-ios-2/" target="_blank">
            <b-button class="icon" id="popover-LumaFusion">
              <img
                src="https://luma-touch.com/wp-content/uploads/2017/02/LumaFusion_rounded.png"
                class="Logo"
                alt="LumaFusion"
              />
            </b-button>
          </a>
        </b-col>

        <b-popover target="popover-LumaFusion" triggers="hover" placement="top">
          LumaFusion
        </b-popover>

        <b-col>
          <a href="https://play.google.com/store/apps/details?id=com.nexstreaming.app.kinemasterfree&hl=en_US" target="_blank">
            <b-button class="icon" id="popover-Kinemaster">
              <img
                src="https://yt3.ggpht.com/a-/AN66SAwqeToBnMhgw7PyvAZZm0h7JZE9krF_QOlOZQ=s900-mo-c-c0xffffffff-rj-k-no"
                class="Logo"
                alt="Kinemaster"
              />
            </b-button>
          </a>
        </b-col>

        <b-popover target="popover-Kinemaster" triggers="hover" placement="top">
          Kinemaster
        </b-popover>
      </b-row>
    </p>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevAudioVisualTips" />
    <Footer />
    
    
  </div>
</template>
<style lang="scss"></style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import { BIcon, BIconBoxArrowRight, BPopover } from "bootstrap-vue";
import Footer from "@/components/Footer.vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
@Component({
  components: {
    Header,
    Menu,
    BIconBoxArrowRight,
    BIcon,
    BPopover,
    NextPrevBtn,
    Footer,
  },
})
export default class AudioVisualTips extends Vue {
  protected nxtprevAudioVisualTips = {
    BoolPrev: true,
    BoolNext: false ,
    PrevImage: "/thumbnail3.png",
    NextImage: "",
    PrevLink: "/Audiovisuel/Fondamentaux",
    NextLink: "",
  };
}
</script>
