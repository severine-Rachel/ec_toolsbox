<template>
    <div class="Carousel">    
        <!--Bouton de navigation du carousel-->
        <button class="btn_prev btn_carousel" @click.prevent="prev"></button>
        <button class="btn_next btn_carousel" @click.prevent="next"></button>
        <slot></slot>
    </div>
</template>

<script>


export default {
    data (){
        return{
            index: 0,   //index de la slide affichée
            slide: [],  //tableau regroupant les slides
        }
    },
    //définition des slides comme classe fille de la classe carousel
    mounted (){
        this.slide =  this.$children
        //attribution d'un index a chaque slide
        this.slide.forEach((slide, i)=> {
            slide.index = i
        })
    },
    //renvoie le nombre de slide du carousel
    computed: {
        slideCount () { return this.slide.length }
    },
    //fonctions de défilement des slides des boutons
    methods: {
        next (){
            this.index++
            if (this.index >= this.slideCount){
                this.index = 0
            }
        },
        prev () {
            this.index--
            if (this.index < 0){
                this.index = this.slideCount - 1
            }
        }
        
    }
}
</script>

<style>
.carousel {
    position: relative;
}
.btn_carousel{
    position: relative;
    border: none;
    top: 400px;
    left: 35%;
    width: 70px;
    height: 70px;
    background: url(next.png);
    background-size: 70px 70px;
    border-radius:50%;
}
.btn_carousel.btn_prev{
    right: 35%;
    left: auto;
    background: url(prev.png);
    background-size: 70px 70px;
    border-radius:50%;
}
</style>