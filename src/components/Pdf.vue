<style lang="scss">
@media (min-width: 600px) {
  .fundamentals-pdf {
    width: 10vw;
    text-align: center;
    display: block;
    height: 10vh;
    margin: 1vh 0 1vh 2vw;
    background-image: url(../assets/pdf.png);
    background-size: 100% 100%;
    text-decoration: none !important;
  }
}

.rowcomponents {
  margin: 0 5% 0 10% !important;
}
.text-pdf {
  padding: 9% 0;
  &:hover {
    color: #0056b3;
  }
}
</style>

<template>
  <div>
    <b-row class="justify-content-md-left  rowcomponents">
      <div v-for="pdfElement in galeryPdf" :key="pdfElement.PdfLink">
        <a
          class="fundamentals-pdf"
          draggable="false"
          v-bind:href="pdfElement.PdfLink"
          v-bind:download="pdfElement.PdfDownload"
        >
          <h6 class="text-pdf">
            {{ pdfElement.TxtPdf }} <b-icon icon="upload" />
          </h6>
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
  @Prop() protected readonly galeryPdf!: {
    PdfLink: string;
    PdfDownload: string;
    TxtPdf: string;
  }[];
}
</script>
