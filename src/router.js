import Vue from 'vue';
import VueRouter from 'vue-router';
// Tell Vue we'll use the routes's package
Vue.use(VueRouter);
// Import route's components
import TeamComponent from './components/TeamComponent'

// Importando a store do vue
// import store from './store/store';

// Define routes
// The name of this const MUST BE "routes"
export const routes = [
	{path: '/team', component: TeamComponent, name: 'team'},
	// {path: '/players-amount', component: PlayersAmountComponent, name: 'players-amount'},

];

export default new VueRouter({
	mode: 'history',
	routes
});
