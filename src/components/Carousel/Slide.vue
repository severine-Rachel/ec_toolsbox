<template>
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