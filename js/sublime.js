
var projects = [
	{
		type : 'personal',
		name : 'Code Meets Coffee',
		role : 'design + full-stack dev',
		link : 'coming soon',
		repo : 'https://github.com/garvinling/code-meets-coffee',
		tech : 'MeteorJS , React',
		desc : 'A tinder-like web app using the Github API for discovering open source projects.'
	},
	{
		type : 'work',
		name : 'CoffeeDisplay',
		role : 'architecture + full-stack dev',
		link : 'private',
		repo : 'private',
		tech : 'Node(Express) , Angular',
		desc : 'News-feed for digital signage that pulls in Twitter data and allows users to post content to be displayed.'

	},
	{
		type : 'work',
		name : 'CLP',
		role : 'architecture + full-stack dev',
		link : 'coming soon',
		repo : 'private',
		tech : 'Node(Express) , Angular',
		desc : 'Project management web app for all projects in the Southern California region.'

	},
	{
		type : 'work',
		name : 'KP WalkOn',
		role : 'led dev efforts for enhancements feature set',
		link : 'coming soon',
		repo : 'private',
		tech : 'Node(Express) , Angular',
		desc : 'Dashboard to track physical activity steps of patients.'

	},




]


var li                   = document.getElementById('project-dir').getElementsByTagName('li');
var workli               = document.getElementById('project-dir').getElementsByTagName('li');
var projectContent       = document.getElementById('project-render');
var source               = document.getElementById('project-template');
var template             = Handlebars.compile(source.innerHTML);
projectContent.innerHTML = template(projects[0]);



addEventListeners();


function removeAllClasses() {


	for(var i=0;i<li.length;i++) {

		li[i].classList.remove('project-selected');

	}

}


function addEventListeners() {

	for(var i = 0 ; i < li.length ; i ++) {

	   (function(index){
	   		if(index === 1) 
	   			li[i].classList.add('project-selected');


			li[i].onclick = function(){
				if(index > 0 ) {

					removeAllClasses();
					this.classList.add('project-selected');
					projectContent.innerHTML = template(projects[index-1]);
				  
				}
 
			  }    
		})(i);

	}
}








