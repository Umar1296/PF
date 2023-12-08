import { createApp } from 'vue';
import App from './App.vue';

// define global component
import router from './router';
import store from './store/index';
import BaseCard from './components/ui/BaseCard';
import BaseButton from './components/ui/BaseButton';
import BaseBadge from './components/ui/BaseBadge'

/// use router and store in this app
const app =  createApp(App)

app.use(router);
app.use (store);

// used global component
app.component('base-card' , BaseCard);
app.component('base-button' , BaseButton);
app.component('base-badge' , BaseBadge)


app.mount('#app')
