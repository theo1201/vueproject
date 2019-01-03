import axios from 'axios';

// 设置请求超时时间
axios.defaults.timeout = 5000;
// 设置baseurl
axios.defaults.baseURL ='https://www.easy-mock.com/mock/5c2dd8f05cfaa5209116fb93/vue-test';

//http request 拦截器
axios.interceptors.request.use(
    config => {
      // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
      config.data = JSON.stringify(config.data);
      config.headers = {
        'Content-Type':'application/x-www-form-urlencoded'
      }
      // if(token){
      //   config.params = {'token':token}
      // }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  //http response 拦截器
axios.interceptors.response.use(
    response => {
      if(response.status ==1){
        console.log("返回状态错误。。。。")
      }
      return response;
    },
    error => {
      return Promise.reject(error)
    }
  )

//   封装get方法
export function fetch(url,params={}){
    return new Promise((resolve,reject) => {
      axios.get(url,{
        params:params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
    })
  }

//   封装post方法
export function post(url,data = {}){
    return new Promise((resolve,reject) => {
      axios.post(url,data)
           .then(response => {
             resolve(response.data);
           },err => {
             reject(err)
           })
    })
  }

//   封装patch请求
export function patch(url,data = {}){
    return new Promise((resolve,reject) => {
      axios.patch(url,data)
           .then(response => {
             resolve(response.data);
           },err => {
             reject(err)
           })
    })
  }
//   封装put请求
export function put(url,data = {}){
    return new Promise((resolve,reject) => {
      axios.put(url,data)
           .then(response => {
             resolve(response.data);
           },err => {
             reject(err)
           })
    })
  }