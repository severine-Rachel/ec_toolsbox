<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>LES FONDAMENTAUX</h3>
    <p>
      <a
        href="https://slideplayer.fr/slide/8743175/ https://slideplayer.fr/slide/2572800/"
        target="_blank"
        ><strong>Comment conduire une réunion</strong></a
      >
    </p>
    <Pdf v-bind:galery-pdf="pdfMeeting"></Pdf>
    <Footer></Footer>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Pdf from "@/components/Pdf.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    Pdf,
    Footer,
  },
})
export default class MeetingFundamental extends Vue {
  public pdfMeeting = [
    {
      pdfLink: "/pdf_OWcom/MeetingChapter1.pdf",
      pdfDownload: "OrganiserReunion",
      TxtPdf: "Chapitre 1 : organiser une réunion",
    },
    {
      pdfLink: "/pdf_OWcom/MeetingChapter2.pdf",
      pdfDownload: "AnimerReunion",
      TxtPdf: "Chapitre 2 : animer une réunion",
    },
    {
      pdfLink: "/pdf_OWcom/MeetingChapter3.pdf",
      pdfDownload: "CommunicationReunion",
      TxtPdf: "Chapitre 3 : la communication orale en réunion",
    },
    {
      pdfLink: "/pdf_OWcom/MeetingReport.pdf",
      pdfDownload: "CompteRenduReunion",
      TxtPdf: "Rédiger un compte rendu de réunion",
    },
  ];
}
</script>
