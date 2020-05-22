<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>LES TYPES DE COMMUNICATIONS</h3>
    <p>
      On peut envisager la communication en privilégiant soit{{'\xa0'}}:
      <ul>
        <li>
          Les acteurs
        </li>
        <li>
          Le contexte
        </li>
        <li>
          Les actions
        </li>
      </ul>
    </p>
    <TypeActors></TypeActors>
    <TypePlanning></TypePlanning>
    <TypeAction></TypeAction>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevDefType"></NextPrevBtn>
    <Footer></Footer>
  </div>
</template>

<style></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import TypeActors from "@/views/OWcom/DefType/TypeActors.vue";
import TypePlanning from "@/views/OWcom/DefType/TypePlanning.vue";
import TypeAction from "@/views/OWcom/DefType/TypeAction.vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    TypeActors,
    TypePlanning,
    TypeAction,
    NextPrevBtn,
    Footer
  },
})
export default class DefType extends Vue {
  public nxtprevDefType =
{
    BoolPrev: true,
    BoolNext: true,
    PrevImage: "/thumbnail2.png",
    NextImage: "/thumbnail3.png",
    PrevLink: "/Definition_Communication/Partager",
    NextLink: "/Definition_Communication/Situation_Communication",
  };
}

</script>
