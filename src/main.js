import { createApp } from 'vue'
// import App from './pages/App.vue'
import Starter from './Starter.vue'
import Routes from './routes'

createApp(Starter)
.use(Routes)
.mount('#app')
