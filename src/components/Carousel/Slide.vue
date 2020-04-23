<template>
    <!--slide visible en fonction de la fonction 'visible'-->
    <div v-show="visible" class="slide">
        <slot>
        </slot>
    </div>    
</template>

<script lang="ts">
import Carousel from "@/components/Carousel/Carousel.vue";
export default {
    data (){
        return {
            index: 0, 
        }
    },
    //retourne vrai si l'index de la slide correspond a l'index du carousel
    computed:{
        visible (): boolean{
            return this.index === (this.$parent as any).index
        }
    }
}
</script>
<style>
.slide{
    background-color: #bce8ff;
    padding:5%;
}
</style>