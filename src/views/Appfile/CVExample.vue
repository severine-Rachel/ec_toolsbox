<template>
  <div>
    <h3 id="exampleCV">
      EXEMPLES DE CV (IUT)
    </h3>
    <p>
      On compte 8 000 étudiants de DUT GEII en France chaque année, malgré le cursus
      similaire choisi par ces étudiants, il est toujours possible de présenter
      un CV bien à eux. Le plus important est de faire des compromis entre la
      personnalité et la rigueure que le monde professionel attend par rapport
      au domaine d'expertise. Ces exemples vous donneront des pistes pour un CV 
      personnalisé et en rapport avec le domaine d'étude suivi.
    </p>
    <Galery v-bind:galery-picture="CVIUT"></Galery>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Galery from "@/components/Galery.vue";
@Component({
  components: {
    Galery,
  },
})
export default class CVExample extends Vue {
  public CVIUT: string[] = [
    "/picture_cv/example_CV_IUT1.jpg",
    "/picture_cv/example_CV_IUT2.jpg",
    "/picture_cv/example_CV_IUT3.jpg",
    "/picture_cv/example_CV_IUT4.jpg",
    "/picture_cv/example_CV_IUT55.jpg",
    "/picture_CV/example_CV_IUT6.jpg",
  ];
}
</script>
