<template>
    <div v-show="visible" class="slide">
        <slot>
        </slot>
    </div>    
</template>

<script lang="ts">
export default {
    data (){
        return {
            index: 0,
        }
    },
    computed:{
        visible (){
            return this.index === this.$parent.index
        }
    }
}
</script>
<style>

</style>