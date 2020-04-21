<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>POUR LES LECTEURS LES PLUS AGUERRIS...</h3>
    <p>
      <b-row class="justify-content-md-start reading reading">
        <b-col col md="auto"
          ><img src="/picture_read/Hardened/Bienveillantes.jpg" class="picture-book" />
        </b-col>
        <b-col col md="6">
          <p class="text-read">
            <strong>
              « Les Bienveillantes », Jonathan Littell
            </strong>
          </p>
          <p class="text-read">
            Jonathan Littell nous fait revivre les horreurs de la Seconde Guerre
            mondiale du côté des bourreaux, tout en nous montrant un homme comme
            rarement on l'avait fait : l'épopée d'un être emporté dans la
            traversée de lui-même et de l'Histoire.
          </p>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center reading">
        <b-col col md="auto"
          ><img src="/picture_read/Hardened/Voyage.jpg" class="picture-book" />
        </b-col>
        <b-col col md="6">
          <p class="text-read">
            <strong>
              « Voyage au bout de la nuit », Céline
            </strong>
          </p>
          <p class="text-read">
            Lorsque Ferdinand Bardamu s’engage dans l’armée, il côtoie la Grande
            Guerre et ses horreurs. Il y perd ses illusions, en même temps que
            son innocence et son héroïsme. En Afrique, où le colonialisme lui
            montre une autre forme d’atrocité, Bardamu s’insurge de cette
            exploitation de l’homme par l’homme, plus terrible encore que la
            guerre. En Amérique, où le capitalisme conduit à la misère des moins
            chanceux, Bardamu refuse toute morale et survit comme il peut, entre
            son travail à la chaîne et son amour pour Molly, généreuse
            prostituée. En France, où il exerce comme médecin de banlieue,
            Bardamu tente d’apaiser les malheurs humains. Au fil de son voyage,
            étape par étape, il côtoie sans cesse la misère humaine et
            s’indigne, cynique et sombre comme la nuit.
          </p>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-end reading">
        <b-col col md="auto"
          ><img src="/picture_read/Hardened/Invisible.jpg" class="picture-book" />
        </b-col>
        <b-col col md="6">
          <p class="text-read">
            <strong>
              « Homme invisible, pour qui chantes-tu ? », Ralph Ellison
            </strong>
          </p>
          <p class="text-read">
            L'homme invisible ? C'est l'homme noir dans la société américaine.
          </p>
          <p class="text-read">
            Il y vit, travaille, mange, parle. Il lui arrive même de se faire
            tuer pour elle : l'Amérique ne le voit pourtant pas. Pour elle, il
            est invisible. Sous ce titre paradoxal, dérisoire et pathétique,
            Ralph Ellison nous raconte l'histoire d'un jeune "Noir" du Sud, aux
            prises avec une société qui lui refuse sa place. Ce jeune "Noir",
            Ellison se garde de le décrire ou de lui donner un nom.
          </p>
        </b-col>
      </b-row>

      <b-row class="justify-content-md-center reading">
        <b-col col md="auto"
          ><img src="/picture_read/Hardened/Tambour.jpg" class="picture-book" />
        </b-col>
        <b-col col md="6">
          <p class="text-read">
            <strong>
              « Le tambour », Gϋnter Grass
            </strong>
          </p>
          <p class="text-read">
            Oskar, héros et narrateur, s'exprime tantôt à la première personne
            du singulier, tantôt à la troisième. Il est interné dans un asile
            psychiatrique et, après avoir affirmé certaines choses, les
            reformule sous l'angle d'un éclairage légèrement différent. Le
            Tambour est donc, à l'image du personnage principal, un roman où
            règnent l'équivoque et l'ambigu. Oskar évoque ses souvenirs et nous
            fait prendre connaissance de manière intime de la montée et de la
            chute du nazisme...
          </p>
        </b-col>
      </b-row>
    </p>

    <Footer></Footer>
  </div>
</template>
<style lang="scss"></style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import { BIcon, BIconUpload } from "bootstrap-vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    BIcon,
    BIconUpload,
    Footer,
  },
})
export default class ReadHardened extends Vue {}
</script>
