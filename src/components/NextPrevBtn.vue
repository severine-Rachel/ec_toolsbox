<template>
  <div>
    <div id="MarginBetween">
      <b-row align-h="between" class="btn-next-prev">
        <b-col
          cols="2"
          id="PrevButton"
          class="nxt-prev"
          v-if="nxtprevList.BoolPrev"
          v-bind:style="{
            'background-image': 'url(' + nxtprevList.PrevImage + ')',
            'background-size': '100% 100%',
          }"
        >
          <b-link class="wallpaper" v-bind:to="nxtprevList.PrevLink">
            <h5 class="H5-nxt-prev">Précédent</h5>
          </b-link>
        </b-col>
        <div v-if="nxtprevList.BoolPrev == false"></div>
        <b-col
          cols="2"
          id="NextButton"
          class="nxt-prev"
          v-if="nxtprevList.BoolNext"
          v-bind:style="{
            'background-image': 'url(' + nxtprevList.NextImage + ')',
            'background-size': '100% 100%',
          }"
        >
          <b-link class="wallpaper" v-bind:to="nxtprevList.NextLink">
            <h5 class="H5-nxt-prev">Suivant</h5>
          </b-link>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<style lang="scss">
.btn-next-prev {
  margin: 5% 1%;
}
#MarginBetween{
  margin:5% !important;

}
.nxt-prev {
  padding: 1vh 1vw;
}
.H5-nxt-prev {
  color: white;
  transition: transform 0.2s ease-in-out;
  &:hover{
    transform: scale(1.1);
  }
}
#NextButton {
  right: 0;
}
#PrevButton {
  left: 0;
}
</style>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { BLink } from "bootstrap-vue";
@Component({
  components: {
    BLink,
  },
})
export default class NextPrevBtn extends Vue {
  public boolPrev = false;
  public boolNext = false;
  @Prop() public readonly nxtprevList!: {
    BoolPrev: boolean;
    BoolNext: boolean;
    PrevImage: string;
    NextImage: string;
    PrevLink: string;
    NextLink: string;
  };
}
</script>
