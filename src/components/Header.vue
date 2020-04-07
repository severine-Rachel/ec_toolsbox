
<template>
    <div>
        
        <div>
            <img alt="banner" src="../assets/banner.png">
        </div>
        
        <nav>
            <ul><li>Home</li><li>Appfile</li><li>Home</li><li>Appfile</li><li>Home</li><li>Appfile</li></ul>

        </nav>
    </div>
</template>

<style>
    img{
        position: absolute;
        width: 100vw;
        height: 25vh;
        left:0%;
        top:0%;
    }
      @font-face {
        font-family: Myriad;
        src: url(../assets/MyriadProBC.otf);
        }

    nav ul{
        position: relative;
        padding: 0px;
        margin-top:25vh;
        list-style-type: none;
    }
    nav li{
        display: inline-block;
        background-image:  url("../assets/button.png");
        background-size : 100% 100%;
        border-right:white 1px solid;
        text-align: center;
        width: 16.43vw;
        padding-top:10px;
        padding-bottom:10px;
        color:white;
        font-family:Myriad;
        font-size:12pt;
    }

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Header extends Vue { // export default==public class

}
</script>