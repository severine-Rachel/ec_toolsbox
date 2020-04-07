<template>
  <div>
    <div>
      <img alt="banner" src="../assets/banner.png" />
      <h1>P. RAFFY-HIDEUX </h1>
      <br><br>
      <h2>Enseignante en lettre, Expression et Communication </h2>
    </div>

    <nav>
      <ul>
        <li>ACCUEIL</li>
        <li>DOSSIER DE CANDIDATURE</li>
        <li>COMMUNICATION &Eacute;CRITE ET ORALE</li>
        <li>COMMUNICATION VISUELLE</li>
        <li>ARTS ET CULTURE</li>
        <li>QUI SUIS-JE</li>
      </ul>
    </nav>
  </div>
</template>

<style>
img {
  position: absolute;
  width: 100vw;
  height: 25vh;
  left: 0%;
  top: 0%;
}
@font-face {
  font-family: Myriad;
  src: url(../assets/MyriadProBC.otf);
}
h1{
    position: absolute;
    font-family: Myriad;
    color:white;
}
h2{
    position: absolute;
    font-family: Myriad;
    color:#AEF0FF;
}
nav ul {
  position: relative;
  padding: 0px;
  margin-top: 18.8vh;
  list-style-type: none;
}
nav li {
  display: inline-block;
  background-image: url("../assets/button.png");
  background-size: 100% 100%;
  border-right: white 1px solid;
  text-align: center;
  width: 16.43vw;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
  font-family: Myriad;
  font-size: 12pt;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class Header extends Vue {
  // export default==public class
}
</script>
