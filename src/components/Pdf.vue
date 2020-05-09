<style>
.fundamentals-pdf {
  width: 10vw;
  text-align: center;
  display: block;
  height: 10vh;
  margin:  1vh 0 1vh 2vw;
  background-image: url(../assets/pdf.png);
  background-size: 100% 100%;
}

.rowcomponents{
  margin:0 5% 0 10%!important;
}
.text-pdf{
  padding: 9% 0;
}
</style>

<template>
  <div>
    <b-row class="justify-content-md-left  rowcomponents" >
    <div v-for="pdfElement in galeryPdf" :key="pdfElement">
      <a
        class="fundamentals-pdf"
        v-bind:href="pdfElement.pdfLink"
        v-bind:download="pdfElement.pdfDownload"
      >
      
         <h6 class="text-pdf">{{ pdfElement.TxtPdf }} <b-icon icon="upload"></b-icon>  </h6> 
      </a>
    </div>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { BIcon, BIconXCircle, BIconUpload } from "bootstrap-vue";
@Component({
  components: {
    BIcon,
    BIconUpload,
    BIconXCircle,
  },
})
export default class Pdf extends Vue {
  @Prop() public readonly galeryPdf!: {
    pdfLink: string;
    pdfDownload: string;
    TxtPdf: string;
  }[];
}
</script>
