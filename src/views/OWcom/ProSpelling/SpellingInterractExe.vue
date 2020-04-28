<template>
  <div>
    <p>
      <strong>
        Exercices interactifs
      </strong>
    </p>
    <p></p>

    <b-card-group deck>
    <b-card img-src="/thumbail2.png" class="img-card" img-alt="Image" img-top>
      <a
        href="https://www.ccdmd.qc.ca/fr/exercices_interactifs/"
        target="_blank"
      >
        <b-card-text class="writeInCard">
          CCDMD –Exercices interactifspour travailler différents points de
          l’expression écrite (syntaxe, cohérence textuelle, accords,
          ponctuation, orthographe, etc.)
        </b-card-text>
      </a>
    </b-card>
    </b-card-group>
    <b-card-group deck>
      <b-card img-src="/thumbail2.png" img-alt="Image" class="img-card" img-top>
        <a
          href="https://www.ccdmd.qc.ca/fr/exercices_interactifs/"
          target="_blank"
        >
          <b-card-text class="writeInCard">
            Exercices sur les difficultés orthographiques
          </b-card-text></a
        >
      </b-card>

      <b-card img-src="/thumbail2.png" img-alt="Image" class="img-card" img-top>
        <b-card-text class="writeInCard">
          Défi orthographe d’usage
        </b-card-text>
      </b-card>
    </b-card-group>

    <b-card-group deck>
      <b-card img-src="/thumbail2.png" img-alt="Image" img-top>
        <b-card-text class="writeInCard">
          Méli-mélo orthographique
        </b-card-text>
      </b-card>
      <b-card img-src="/thumbail2.png" img-alt="Image" img-top>
        <b-card-text class="writeInCard">
          Conjugaison avec contexte
        </b-card-text>
      </b-card>

      <b-card img-src="/thumbail2.png" img-alt="Image" img-top>
        <b-card-text class="writeInCard">
          Conjugaison sans contexte
        </b-card-text>
      </b-card>
    </b-card-group>
    <b-card-group deck>
      <b-card img-src="/thumbail2.png" img-alt="Image" img-top>
        <b-card-text class="writeInCard">
          Genre des mots
        </b-card-text>
      </b-card>

      <b-card img-src="/thumbail2.png" img-alt="Image" img-top>
        <b-card-text class="writeInCard">
          Participes passés
        </b-card-text>
      </b-card>
      <b-card img-src="/thumbail2.png" img-alt="Image" img-top>
        <b-card-text class="writeInCard">
          Pluriels particuliers
        </b-card-text>
      </b-card>
    </b-card-group>
    <b-card-group deck>
      <b-card img-src="/thumbail2.png" img-alt="Image" img-top>
        <b-card-text class="writeInCard">
          Choisir les prépositions appropriées
        </b-card-text>
      </b-card>

      <b-card img-src="/thumbail2.png" img-alt="Image" img-top>
        <b-card-text class="writeInCard">
          Constructions fautives
        </b-card-text>
      </b-card>

      <b-card img-src="/thumbail2.png" img-alt="Image" img-top>
        <b-card-text class="writeInCard">
          Jeu du dictionnaire
        </b-card-text>
      </b-card>
    </b-card-group>
    <b-card-group deck>
      <b-card img-src="/thumbail2.png" img-alt="Image" img-top>
        <b-card-text class="writeInCard">
          Apportez des nuances
        </b-card-text>
      </b-card>
      <b-card img-src="/thumbail2.png" img-alt="Image" img-top>
        <b-card-text class="writeInCard">
          Précision du vocabulaire
        </b-card-text>
      </b-card>
      <b-card img-src="/thumbail2.png" img-alt="Image" img-top>
        <b-card-text class="writeInCard">
          Série d’exercices sous forme PDF avec corrigés
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<style>
.card-body {
  margin: 2% !important;
  padding: 0 !important;
}
.card-deck {
  margin: 5% !important;
}
.img-card{
  height:5% !important;
}
.writeInCard {
  text-align: center;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BCard, BCardGroup, BCardText, BCardImg } from "bootstrap-vue";
@Component({
  components: {
    BCard,
    BCardGroup,
    BCardText,
    BCardImg,
  },
})
export default class SpellingInterractExe extends Vue {}
</script>
