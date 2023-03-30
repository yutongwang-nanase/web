import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './routes'
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(createVuestic())
app.mount('#app')

