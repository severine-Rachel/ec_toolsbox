<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>MUSIQUE</h3>
    
      <strong>
        <a
          href="https://artips.fr/Musiktips/"
          class="subtitle-link"
          target="_blank"
        >
          Musiktips <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
   
    <p>
      Musiktips est un site internet qui propose aux internautes de s'abonner
      gratuitement pour recevoir trois fois par semaine dans leurs boites
      e-mail, une newsletter comprenant une explication courte et originale d’un
      artiste ou d’un morceau de musique célèbre ou peu connu.
    </p>
   
      <strong>
        <a href="www.tsugi.fr" class="subtitle-link" target="_blank">
          Tsugi <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
   
    <p>
      Toute la musique d'aujourd'hui… et de demain.
    </p>
 
      <strong>
        <a
          href="https://www.youtube.com/playlist?list=PLWlqwXzikEuBZ-Edcr1_knBLU_AWBzHW_"
          class="subtitle-link"
          target="_blank"
        >
          Playlist Youtube <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
    
    <p>
      Plus de 380 lives et documentaires électronique réunis en une unique
      playlist Youtube.
    </p>
    <p>
      <strong>
        Testez vos connaissances musicales !
      </strong>
    </p>
    <p>
      De la chanson française aux années 80 en passant par le métal et les films
      Disney, testez vos connaissances musicales à l’occasion de blinds tests en
      ligne.
      <ul>
        <li>
          <a href="https://blinest.com/" target="_blank" class="list-link">
            https://blinest.com/ <b-icon icon="box-arrow-right"></b-icon>
          </a>
        </li>
        <li>
          <a href="https://www.massivemusicquiz.com/" target="_blank" class="list-link">
            https://www.massivemusicquiz.com/ <b-icon icon="box-arrow-right"></b-icon>
          </a>
        </li>
      </ul>
    </p>

    <Footer></Footer>
  </div>
</template>
<style lang="scss"></style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import {BIcon, BIconBoxArrowRight} from "bootstrap-vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    BIconBoxArrowRight,
    BIcon,
    Footer,
  },
})
export default class OnlineCultureMusic extends Vue {}
</script>
