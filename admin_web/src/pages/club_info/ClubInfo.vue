<template>
  <div class="div_box">
    <el-card class="box-card">
      Hellow World
    </el-card>
  </div>
</template>

<script>
import { storage } from '@/services'
import Header from '@/components/Header'; //头部
export default {
  name: 'ClubInfo',
  data () {
    return {
      
    }
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .div_box{
    height:100%;width:100%;display:flex;
  }
  .box-card {
    width: 350px;margin: auto auto auto auto;
  }
</style>