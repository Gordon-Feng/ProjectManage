<template>
  <div class="header">
    <img src="@/assets/img/logo.png">
    <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="SelectMenu" menu-trigger="click" style="margin-left:auto;border-bottom:0px;">
      <el-menu-item index="1">{{$store.state.AccountInfo.role}}</el-menu-item>
      <!-- <el-menu-item index="2">处理中心</el-menu-item> -->
      <el-submenu index="2">
        <template slot="title">账号</template>
        <el-menu-item index="2-1">账号:{{$store.state.AccountInfo.account}}</el-menu-item>
        <el-menu-item index="2-2">角色:{{$store.state.AccountInfo.role}}</el-menu-item>
        <el-menu-item index="2-3">
          <template>
            <el-button type="text" @click="LoginOut">退出当前账号</el-button>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      
    }
  },
  created () {
    
  },
  methods:{
    // 选择菜单
    SelectMenu(key, keyPath) {
      console.log(key, keyPath);
    },
    // 退出登录
    LoginOut(){
      this.$router.replace('/Login');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    border-bottom: 0.5px solid rgb(226, 226, 226);text-align: left;font-size: 22px;line-height: 60px;color: lightblue;display: flex;
  }
  .header img{
    height:59px;width: auto;
  }
</style>