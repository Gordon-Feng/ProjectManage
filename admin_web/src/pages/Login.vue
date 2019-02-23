<template>
  <div class="div_box">
    <el-card class="box-card">
      <el-input placeholder="请输入账号" v-model="AccountInfo.account" class="login_input" @keyup.enter.native="Login">
        <template slot="prepend">账号</template>
      </el-input>
      <el-input placeholder="请输入密码" type="password" v-model="AccountInfo.password" class="login_input" @keyup.enter.native="Login">
        <template slot="prepend">密码</template>
      </el-input>
      <el-button type="primary" round class="login_button" @click="Login">社团登录</el-button>
    </el-card>
  </div>
</template>

<script>
import { storage , AdminLogin } from '@/services'
export default {
  name: 'AdminLogin',
  data () {
    return {
      AccountInfo:{
        account:"",
        password:""
      }
    }
  },
  methods:{
    // 登录
    Login: async function(){
      if(!this.AccountInfo.account || !this.AccountInfo.password){
        this.$message({message: '信息不完整',type: 'warning'});
        return;
      }
      var result = await AdminLogin(this.AccountInfo)
      if(result.status != 200){
        this.$message({message: result.msg , type: 'error'});
        return;
      }
      // 登录成功后,跳转首页
      this.$store.commit('UpdateAccountInfo' , result.data.account);
      storage.set('token',result.data.token);
      this.$router.replace('/');
    }
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
  .login_input{
    margin-top:30px;
  }
  .login_button{
    margin-top:30px;margin-bottom: 30px;width: 100%;
  }
</style>