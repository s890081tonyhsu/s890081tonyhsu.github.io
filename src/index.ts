import { createApp } from 'vue';
import Unlazy from '@unlazy/vue';
import router from './router';
import App from './App.vue';

createApp(App).use(Unlazy).use(router).mount('#root');
