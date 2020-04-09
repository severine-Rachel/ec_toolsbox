<template>
  <Home></Home>
</template>
<style>
  html{
    height:100%;
  }
</style>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Home from '@/views/Home/Home.vue';

@Component({
  components: {
    Home,
  }
})
export default class App extends Vue {

}
</script>