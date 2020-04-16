<template>
  <div>
  
    <b-row align-h="center">
      <b-col
        cols="5"
        class="casethumbnail"
        v-for="indexElement in indexList"
        :key="indexElement"
        v-bind:style="{
          'background-image': 'url(' + indexElement.IndexImage + ')',
          'background-size': '100% 100%'
        }"
      >
        <a class="wallpaper" v-bind:href="indexElement.IndexId">
          <h3 class="thumbnailTitle">{{ indexElement.IndexTitle }}</h3>
        </a>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss">

.wallpaper {
  text-align: center;
  text-decoration: none !important;

}
.casethumbnail {
  margin: 1%;
  padding: 5vh 0;
}

.thumbnailTitle {
  color: white;
  transition: font-size 0.5s ease-in-out;
      &:hover {
      font-size:190%;
    
  }
}
.thumbnail {
  width: 100%;
}
</style>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({})
export default class Index extends Vue {
  @Prop() public readonly indexList!: {
    IndexTitle: string;
    IndexId: string;
    IndexImage: string;
  }[];
}
</script>
