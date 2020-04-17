<template>
  <div>
  
    <b-row align-h="center">
      <b-col
        cols="5"
        class="casethumbnail"
        v-for="contentsElement in contentsList"
        :key="contentsElement"
        v-bind:style="{
          'background-image': 'url(' + contentsElement.ContentsImage + ')',
          'background-size': '100% 100%'
        }"
      >
        <b-link class="wallpaper" v-bind:to="contentsElement.ContentsPath">
          <h3 class="thumbnailTitle">{{ contentsElement.ContentsTitle }}</h3>
        </b-link>
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
  padding: 5vh 1vw !important;
}

.thumbnailTitle {
  color: white;
  transition: font-size 0.5s ease-in-out;
  margin:0;
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
import { BLink } from "bootstrap-vue";
@Component({
    components: {
        BLink
    }
})
export default class ContentsPage extends Vue {
  @Prop() public readonly contentsList!: {
    ContentsTitle: string;
    ContextsPath: string;
    ContextsImage: string;
  }[];
}
</script>
