
var projects = [
	{
		type : 'personal',
		name : 'Code Meets Coffee',
		role : 'design + full-stack dev',
		link : 'coming soon',
		repo : 'https://github.com/garvinling/code-meets-coffee',
		tech : 'MeteorJS , React'
	},
	{
		type : 'work',
		name : 'CLP',
		role : 'architecture + full-stack dev',
		link : 'coming soon',
		repo : 'private',
		tech : 'Node(Express) , Angular'
	},


]





var li = document.getElementById('project-dir').getElementsByTagName('li');
var projectContent = document.getElementById('project-render');
var source = document.getElementById('project-template');
var template = Handlebars.compile(source.innerHTML);
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

			li[i].onclick = function(){

				removeAllClasses();
				this.classList.add('project-selected');
				projectContent.innerHTML = template(projects[index-1]);
			  
			  }    
		})(i);

	}
}








