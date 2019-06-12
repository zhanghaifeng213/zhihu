import Home from './components/Home.vue'

export default{
	routes:[
		{path:'/Home',component:Home},
		{path:'*',redirect:'/home'}
		
	]
}
