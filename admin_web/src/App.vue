<template>
  <div id="app" style="width:100%;height:100%;display:flex;">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import { CheckToken , storage } from '@/services';
export default {
  name: 'App',
  async created () {
    var result = await CheckToken();
    console.log("检查token:",result);
    if(result.status == 200){
      this.$store.commit('UpdateAccountInfo' , result.data);
      console.log("当前账号信息:",this.$store.state.AccountInfo);
    }else{
      storage.remove('token');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
