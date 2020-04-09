<template>
  <div>
    <Header></Header>
    
    <HomeBanner></HomeBanner>
  </div>
</template>
<style>
  #header-template{
    margin-bottom:5%;
  }
</style>
<script>
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import HomeBanner from '@/views/Home/HomeBanner.vue';

@Component({
  components: {
    Header,
    HomeBanner,
  }
})
export default class Home extends Vue {

}
</script>
