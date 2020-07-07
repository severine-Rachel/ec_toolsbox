<template>
  <div>
    <Header />
    <Menu />
    <h3>OSER PARLER EN PUBLIC</h3>

    <p>
      Il existe
      <strong>trois sortes de prise de parole en public</strong> définies à
      partir de deux critères qui sont{{'\xa0'}}:
    </p>
    <p>
    <ul>
      <li>
        le nombre d’interlocuteurs en jeu
      </li>
      <li>leurs relations</li>
        
    </ul>
    </p>
    <h4>I - La prise de parole en solo{{'\xa0'}}:</h4>
    
    <p>
      Vous êtes seul à parler devant un auditoire{{'\xa0'}}:
    </p>
    <p>
    <ul>
      <li>
        Conférence,
      </li>
      <li>exposé,</li>
      <li>présentation d’un rapport devant une commission,</li>
      <li>une conférence de presse...</li>
    </ul>
    </p>
    <p>
      Vous vous trouvez en position d’autorité par rapport à un auditoire qui
      vous fait confiance.
    </p>
    
    <h4>II - L’intervention dans un groupe{{'\xa0'}}:</h4>
      
    
    <p>
      C’est <i>a priori</i> une prise de parole libre. Vous êtes théoriquement
      sur un « pied d’égalité » avec les autres participants qui sont également
      invités à s’exprimer{{'\xa0'}}:
    </p>
    <p>
    <ul>
      <li>
        Débat public,
      </li>
      <li>séance de travail de groupe,</li>
      <li>réunion professionnelle,</li>
      <li>
        Travail en équipe...
        </li>
        </ul>
        </p>
        <h4>III - L’entretien face à face{{'\xa0'}}:</h4>
    
    
    <p>Vous ne vous adressez qu’à une seule personne, présente face à vous{{'\xa0'}}:</p>
    <p>
    <ul>
      <li>
        Soutenance d’un rapport devant un supérieur hiérarchique,
      </li>
      <li>présentation d’un projet à un client,</li>
      <li>l’entretien d’embauche dans une entreprise,</li>
      <li>le démarchage d’un client...</li>
    </ul>
    </p>
    <p>
      En général, dans ce cas, la prise de parole est plus improvisée. Elle peut
      avoir été préparée en amont mais elle va se faire sans notes.
    </p>
    <p><strong> Ce qu’il est important d’avoir à l’esprit{{'\xa0'}}:</strong></p>
    <p>
    <ul>
      <li>
        Le message oral est <strong>immédiat</strong> (on peut percevoir son
        effet sur l’auditeur; les paroles sont confortées par la gestuelle, le
        regard, les mimiques, la voix, etc.)
      </li>
      <li>
        La<strong> spontanéité</strong> totale n’est pas de mise quand il s’agit
        de la fonction sociale du langage.
      </li>
      <li>
        <strong
          >La tradition, les modèles imposés par le cadre de la communication
          impliquent une réserve et un respect des us et coutumes.</strong
        >
      </li>
      <li>
        On doit rechercher un
        <strong>compromis entre sa personnalité et le conformisme.</strong>
        L’excès de l’un ou de l’autre peut être nuisible.
      </li>
      <li>
        <strong>On ne naît pas orateur</strong>, on le devient au prix de maints
        exercices et de nombreux essais. Parler en protected est un art qui
        s’apprend et qu’il faut ensuite dissimuler.
      </li>
    </ul>
    </p>
    <p>
      <b-icon icon="arrow-right" /> Le moment de l’oral est une mise en
      scène de soi.
    </p>
    <img
      src="/picture_OWcom/public_meeting/dareToSpeak.jpg"
      alt="Osez-Parler"
      class="vertical"
      draggable="false" 
    />

    <p><i>Source{{'\xa0'}}: </i>Gautier Antoine, <i>J’ose parler en public</i>, Paris, Dunod, 2019</p>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevSpeechDare" />
    <Footer />
  </div>
</template>

<style></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import { BIcon, BIconArrowRight } from "bootstrap-vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    BIcon,
    BIconArrowRight,
    NextPrevBtn,
    Footer,
  },
})
export default class SpeechDare extends Vue {
  protected nxtprevSpeechDare = {
    BoolPrev: false,
    BoolNext:  true,
    PrevImage: "",
    NextImage: "/thumbnail4.png",
    PrevLink: "",
    NextLink: "/Prise_de_Parole/Parametre_Parole",
  };
}
</script>
