import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
// import commonJs from './assets/js/common'

let app = createApp(App);
for (let i in Icons) {
    app.component(i, Icons[i])
}
// app.config.globalProperties.$commonJs = commonJs
app.use(router)
app.use(ElementPlus)
app.mount('#app')
