import axios from 'axios'

// 封装本地存储方法
const storage = {
  set(key,value){
      let val = value;
      if(typeof(val) === 'object'){
          val = JSON.stringify(val)
      }
      localStorage.setItem(key,val);
  },
  get(key){
      return localStorage.getItem(key);
  },
  remove(key){
      return localStorage.removeItem(key);
  }
}

// 服务器api地址
const ApiUrl = 'http://localhost:3001'

// 封装http请求
// 服务器get请求,needHeader参数用于判断是否需要认证
const getData = ( url, params, needHeader ) => {
  let headers = {};
  if(needHeader){
    headers = {
      token:storage.get('token')
    }
  }
  const xhr = axios.create({
    baseURL:ApiUrl,
    timeout:10000,
  });
  return new Promise((resolve,reject)=>{
    xhr({url, params, headers,method:'get'})
    .then(res => {
      resolve(res.data)
    })
    .catch(err => reject(err))
  })
}

// 服务器post请求,needHeader参数用于判断是否需要认证
const postData = ( url, data, needHeader ) => {
  let headers = {};
  if(needHeader){
    headers = {
      token:storage.get('token')
    }
  }
  const xhr = axios.create({
    baseURL:ApiUrl,
    timeout:10000,
  });
  return new Promise((resolve,reject)=>{
    xhr({url, data, headers, method:'post'})
    .then(res => {
      resolve(res.data)
    })
    .catch(err => reject(err))
  })
}

// 管理员账号相关==============================================================
// 管理员账号登录
const AdminLogin = (data)=>{
  const url = '/Admin/Login';
  return postData(url , data);
}

// 验证token
const CheckToken = (data)=>{
  const url = '/Admin/CheckToken';
  return getData(url , data ,true);
}

export {
  storage,//本地存储
  ApiUrl,//api地址

  // 管理员账号相关=============================================================
  AdminLogin,//管理员账号登录
  CheckToken,//验证token
}