<template>
  <div>
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
    >
      Toutes les astuces techniques pour réaliser son film amateur sur le site devenir-realisateur.com.
      <b-icon icon="box-arrow-right"></b-icon>
    </a>

    <h4>
      Applications de montage gratuites pour Android, Iphone et Ipad
    </h4>
    <p>
      <b-row class="justify-content-md-center">
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

        <b-popover target="popover-Magisto" triggers="hover" placement="bottom">
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

        <b-popover target="popover-PowerDirector" triggers="hover" placement="bottom">
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

        <b-popover target="popover-PremiereRush" triggers="hover" placement="bottom">
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

        <b-popover target="popover-LumaFusion" triggers="hover" placement="bottom">
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

        <b-popover target="popover-Kinemaster" triggers="hover" placement="bottom">
          Kinemaster
        </b-popover>
      </b-row>
    </p>
    
    
    
    
  </div>
</template>
<style lang="scss"></style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BIcon, BIconBoxArrowRight, BPopover } from "bootstrap-vue";
@Component({
  components: {
    BIconBoxArrowRight,
    BIcon,
    BPopover,
  },
})
export default class AudioVisualTips extends Vue {}
</script>
