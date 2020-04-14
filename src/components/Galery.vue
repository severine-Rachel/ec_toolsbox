<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial;
}
#image{
  width:15vw;
}
/* The grid: Four equal columns that floats next to each other */
.column {
  float: left;
  width: 25%;
  padding: 10px;
}

/* Style the images inside the grid */
.column img {
  opacity: 0.8;
  cursor: pointer;
}

.column img:hover {
  opacity: 1;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* The expanding image container */
.container {
  position: relative;
  display: none;
}

/* Expanding image text */
#imgtext {
  position: absolute;
  bottom: 15px;
  left: 15px;
  color: white;
  font-size: 20px;
}

/* Closable button inside the expanded image */
.closebtn {
  position: absolute;
  top: 10px;
  right: 15px;
  color: white;
  font-size: 35px;
  cursor: pointer;
}
</style>

<template>
  <div>
    <span v-on:click="clicked=true">
    <img  id="image" src="/fundamentals_CV_Keys.png" alt="art-perf">
    </span>
    <span v-if="clicked">
    <img v-bind:src="image" atl="art-perf">
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({ //class juste en desosous décrit un composant vue, décrire tous les data a utiliser
  
})
export default class Galery extends Vue {  // export default==public class
  protected image =  "/fundamentals_CV_Keys.png";
  protected clicked = false;
}

</script>