<template>
  <div style="width:100%;height:100%;">
    <el-container style="height:100%;">
      <el-header style="padding:0px;">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside_style">
          <el-menu :default-active="$route.path" class="el-menu-vertical-demo" :router='true' style="height:100%;">
            <el-menu-item index="/ClubInfo" route="/ClubInfo">
              <svg class="ad_icon"><use xlink:href="#icon-club"></use></svg>
              <span slot="title">社团信息</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main style="padding:0;">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/Header'; //头部
export default {
  name: 'AdminHome',
  components:{
    Header
  },
  data () {
    return {
      
    }
  },
  created () {
    console.log("当前路由:",this.$route.path);
    if(this.$route.path == '/'){
      this.$router.replace('/ClubInfo');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .aside_style{
    border-top: solid 0.5px #e6e6e6;text-align: center;
  }
  .ad_icon{
    width: 24px;height: 24px;
  }
</style>
