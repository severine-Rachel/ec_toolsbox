<template>
  <div>
      <h4>
          LA FONCTION SOCIALE DE LA COMMUNICATION
      </h4>
    <p>
        Le langage, comme l’allure physique, se dotent d’une fonction sociale dans la communication: 
    </p>
    <p>
        <ul>
            <li>
                notre personnalité,
            </li>
            <li>
                notre milieu,
            </li>
            <li>
                notre capacité d’adaptation aux normes linguistiques.
            </li>
            Différence entre «J’ai eu ce job à l’arrache» et «j’ai obtenu ce poste de justesse».
        </ul>
    </p>
    <p>
        L’apparence physique est un élément de communication. C’est à partir de ses traits visibles qu’une personne est analysée:
        </p>
    <p>
        <ul>
            <li>
               tenue,
            </li>
            <li>
                posture,
            </li>
            <li>
                gestuelle.
            </li>
           </ul>
    </p>
    <p>
        La part des informations qui passent par des perceptions visuelles est estimée à 55%! 
    </p>
    <img id="socialpicture" src="/picture_OWcom/schematic/schema_Impression.png" alt="information_impression">
    <p>
        En conclusion :  pour exercer l’art dela communication, il est primordial d’œuvrer par étape :
    <ul>
        <li>L'écoute,
        </li>
        <li>La réflexion,
        </li>
        <li>L'écriture,
        </li>
        <li>L'exposé oral,
        </li>
        <li>L'action
        </li>
    </ul>
    </p>
    <Galery v-bind:galery-picture="galerySocial"></Galery>
  <p>
      D’après Georges Séror, <i>Communication</i>, Dunod, 2016
  </p>
  </div>
</template>

<style lang="scss">
#socialpicture{
    width: 50vw;
    margin: 1% 10%;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Galery from "@/components/Galery.vue"
@Component({
  components: {
      Galery
  },
})
export default class ContexSocial extends Vue {
    public galerySocial: string[] = [
    "/picture_OWcom/schematic/table_seror.png",
    

  ];

}
</script>
