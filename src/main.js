import { createApp } from 'vue';
import App from './App.vue';
import About from './About.vue';
import Home from './Home.vue';
import Events from './Events.vue'; // Import the Events component
import Offer from './Offer.vue'; // Import the Events component
import Develop1 from './Develop1.vue'; // Import the Events component
import Develop2 from './Develop2.vue'; // Import the Events component
import Projects from './Projects.vue'; // Import the Events component
import Resources from './Resources.vue'; // Import the Events component
import Join from './Join.vue'; // Import the Events component
import Gallery from './Gallery.vue'; // Import the Events component
import Contact from './Contact.vue'; // Import the Events component
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/events', component: Events }, 
  { path: '/offers', component: Offer },  
  { path: '/develop', component: Develop1 },
  { path: '/develops', component: Develop2 },  
  { path: '/projects', component: Projects },
  { path: '/resources', component: Resources },
  { path: '/join', component: Join },
  { path: '/gallery', component: Gallery },
  { path: '/contact', component: Contact },
            
  // Add other routes for each section
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
