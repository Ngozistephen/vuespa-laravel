import './bootstrap';

import { createApp, onMounted } from 'vue/dist/vue.esm-bundler';
import router from './routes/index';
import VueSweetalert2 from 'vue-sweetalert2';
import useAuth from './composables/auth';
import { abilitiesPlugin } from '@casl/vue';
import ability from './services/ability';


import 'sweetalert2/dist/sweetalert2.min.css';



const app = createApp({
    setup() {

        const {getUser} = useAuth()
        onMounted(getUser)
    }
})
app.use(router)
app.use(abilitiesPlugin, ability)
app.use(VueSweetalert2)
app.mount('#app')

