<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>LES TYPES DE COMMUNICATIONS</h3>
    <p>
      On peut envisager la communication en privilégiant soit:
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
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    TypeActors,
    TypePlanning,
    TypeAction,
    Footer
  },
})
export default class DefType extends Vue {}
</script>
