// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BaiduMap from 'vue-baidu-map'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.use(BaiduMap, {
  /* 需要注册百度地图开发者来获取你的ak */
  ak: 'UiIy3EOw22fOLvXWvhFNQ9LfRfG4zZz7'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
