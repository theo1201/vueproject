import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入mui部分
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 引入mint-ui
import Mint from 'mint-ui';
Vue.use(Mint)
// 引入css
import'mint-ui/lib/style.css'

// 引入封装的请求模块
import {post,fetch,patch,put} from './utils/axios/http.js'
// 定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;

// 定义全局过滤器
// 导入格式化时间插件
import moment from 'moment'
Vue.filter('dateFormat',(datastr,pattern='YYYY-MM-DD HH:mm:ss')=>{
  return moment(datastr).format(pattern)
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
