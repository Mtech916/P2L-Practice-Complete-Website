import axios from 'axios';
import VueAxios from 'vue-axios';

import { createApp } from 'vue'
import router from './router'; // import our router

import App from './App.vue'

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

const app = createApp(App); // Create our app instance

app.use(router); // Tell our app to use our router
app.use(VueAxios, axios); // Tell our app to use axios

app.mount('#app'); // Mount our app on the div#app element in our template
