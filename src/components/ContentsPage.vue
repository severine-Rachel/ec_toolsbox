<template>
  <div>
  
    <b-row align-h="center">
      <b-col
        sm="5"
        class="casethumbnail"
        v-for="contentsElement in contentsList"
        :key="contentsElement.ContentsTitle"
        v-bind:style="{
          'background-image': 'url(' + contentsElement.ContentsImage + ')',
          'background-size': '100% 100%',
          
        }"
      >
        <b-link class="wallpaper" v-bind:to="contentsElement.ContentsPath">
          <h3 class="H3-thumbnail-title">{{ contentsElement.ContentsTitle }}</h3>
        </b-link>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss">

.wallpaper {
  text-align: center;
  text-decoration: none !important;
   box-sizing: inherit;
    &:focus{
    outline: none;
  }
}
.casethumbnail {
  margin: 1%;
  max-height:230px ;
  animation-name: appearBand;
  animation-duration: 1s;
  
}
.H3-thumbnail-title {
  color: white;
  padding: 13vh 02vw;
  transition: transform 0.2s ease-in-out;
  margin: 0;
  font-size: 2rem;
  &:hover {
    transform: scale(1.1);
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
    ContentsPath: string;
    ContentsImage: string;
  }[];
}
</script>
