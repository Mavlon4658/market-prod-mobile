import { createApp } from 'vue'
import App from './App.vue'
import clickOutside from './directives/click-outside.js'
import '@/assets/scss/style.scss'

const app = createApp(App);

app.directive('click-outside', clickOutside);

app.config.globalProperties.$getImage = (imageName) => {
    return require(`@/assets/images/${imageName}`);
}

app.mount('#app')