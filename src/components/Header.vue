<template>
  <div>
    <div>
      <img alt="banner" src="../assets/banner.png" />
      <h1>P. RAFFY-HIDEUX</h1>
      <br /><br />
      <h2>Enseignante en lettre, Expression et Communication</h2>
    </div>

    <nav class="container">
      <ul>
        <li><a href="#">ACCUEIL</a></li>
        <li><a href="#">DOSSIER DE CANDIDATURE</a></li>
        <li><a href="#">COMMUNICATION &Eacute;CRITE ET ORALE</a></li>
        <li><a href="#">COMMUNICATION VISUELLE</a></li>
        <li><a href="#">ARTS ET CULTURE</a></li>
        <li class="caesura"></li>
        <li><a href="#">QUI SUIS-JE</a></li>
      </ul>
    </nav>
  </div>
</template>

<style>
img {
  position: absolute;
  width: 100vw;
  height: 30vh;
  left: 0%;
  top: 0%;
}
@font-face {
  font-family: Myriad;
  src: url(../assets/MyriadProBC.otf);
}
h1 {
  position: absolute;
  font-family: Myriad;
  color: white;
}
h2 {
  position: absolute;
  font-family: Myriad;
  color: #aef0ff;
}
nav ul {
  position: absolute;

  left: 0;
  
  padding: 0px;
  margin-top: 23vh;
  list-style-type: none;
  width: 100vw;
}
nav .caesura {
  background-color: red;
  background-image: none;
  width: 1vw;
  color: red;
 position: fixed;
 
}

nav li {
  background-image: url("../assets/button.png");
  background-size: 100% 100%;
  border-right: white 1px solid;
  text-align: center;
  width: 16.61vw;
  height: 40px;
  line-height: 40px;
  font-family: Myriad;
  font-size: 12pt;
  display: inline-block;
}

nav li a {
  display: block;
  text-decoration: none;
  color: white;
}
nav li :hover {
  background-image: url("../assets/buttonhover.png");
  background-size: 100% 100%;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class Header extends Vue {
  // export default==public class
}
</script>
