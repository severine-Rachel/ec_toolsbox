<template>
  <div>
    <h3 id="AudioVisualTips">
      CONSEILS ET ASTUCES
    </h3>
    <p>
      <strong>
        Astuces de réalisateur
      </strong>
    </p>
    <p>
      <a
        class="subtitle-link"
        href="https://devenir-realisateur.com/"
        target="_blank"
      >
        Toutes les astuces techniques pour réaliser son film amateur.<b-icon
          icon="box-arrow-right"
        ></b-icon>
      </a>
    </p>
    <p>
      <strong>
        Applications de montage gratuites pour Android, Iphone et Ipad :
      </strong>
    </p>
    <a href="https://www.magisto.com/" target="_blank">
      <img
        src="https://d1ekrxlws13em5.cloudfront.net/media/images/mediakit/appicon.png"
        class="logo-software"
        alt="Magisto"
        title="Magisto"
      />
    </a>
    <a href="https://powerdirector.fr.uptodown.com/android/telecharger" target="_blank">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/7/7d/PowerDirector_logo.png"
        class="logo-software"
        alt="PowerDirector"
        title="PowerDirector"
      />
    </a>
    <a href="https://www.adobe.com/fr/products/premiere-rush.html" target="_blank">
      <img
        src="https://www.adobe.com/content/dam/cc/us/en/creative-cloud/premiere-rush.svg"
        class="logo-software"
        alt="Première Rush"
        title="Première Rush"
      />
    </a>
    <a href="https://luma-touch.com/lumafusion-for-ios-2/" target="_blank">
      <img
        src="https://luma-touch.com/wp-content/uploads/2017/02/LumaFusion_rounded.png"
        class="logo-software"
        alt="LumaFusion"
        title="LumaFusion"
      />
    </a>
    <a href="https://play.google.com/store/apps/details?id=com.nexstreaming.app.kinemasterfree&hl=en_US" target="_blank">
      <img
        src="https://yt3.ggpht.com/a-/AN66SAwqeToBnMhgw7PyvAZZm0h7JZE9krF_QOlOZQ=s900-mo-c-c0xffffffff-rj-k-no"
        class="logo-software"
        alt="Kinemaster"
        title="Kinemaster"
      />
    </a>
  </div>
</template>
<style lang="scss"></style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BIcon, BIconBoxArrowRight } from "bootstrap-vue";
@Component({
  components: {
    BIconBoxArrowRight,
    BIcon,
  },
})
export default class AudioVisualTips extends Vue {}
</script>
