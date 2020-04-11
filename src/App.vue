<template>
  <router-view></router-view>
</template>
<style>
  html{
    height:100%;
  }
</style>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Home from '@/views/Home/Home.vue';
import LegalNotice from './views/LegalNotice.vue';

@Component({
  components: {
    Home,
  }
})
export default class App extends Vue {
  
}
</script>