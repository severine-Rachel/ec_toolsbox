<style>
.fundamentals-pdf {
  width: 10vw;
  color: red;
  text-align: center;
  margin: 5% 0 0 10%;
}
</style>

<template>
  <div>
    <div v-for="pdfElement in galeryPdf" :key="pdfElement">
      <a
        class="fundamentals-pdf"
        v-bind:href="pdfElement.pdfLink"
        v-bind:download="pdfElement.pdfDownload"
      >
        <b-icon icon="upload"></b-icon> {{ pdfElement.TxtPdf }}
        </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { BIcon, BIconXCircle, BIconUpload } from "bootstrap-vue";
@Component({
  components: {
    BIcon, BIconUpload, BIconXCircle
  }
})
export default class Pdf extends Vue {
  @Prop() public readonly galeryPdf!: {
    pdfLink: string;
    pdfDownload: string;
    TxtPdf: string;
  }[];
}
</script>