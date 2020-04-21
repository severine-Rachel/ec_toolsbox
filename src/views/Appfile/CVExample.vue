<template>
  <div>
    <h3 id="exampleCV">
      EXEMPLES DE CV (IUT)
    </h3>

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
    "/picture_cv/example_CV_IUT1.png",
    "/picture_cv/example_CV_IUT2.png",
    "/picture_cv/example_CV_IUT3.png",
    "/picture_cv/example_CV_IUT4.png",
    "/picture_cv/example_CV_IUT55.png",
    "/picture_CV/example_CV_IUT6.png",
  ];
}
</script>
