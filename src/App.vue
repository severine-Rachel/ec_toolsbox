<template>
  <router-view></router-view>
</template>
<style>
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