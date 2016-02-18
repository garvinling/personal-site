
var projects = [
	{
		type : 'personal',
		name : 'git'
	}
	


]





var li = document.getElementById('project-dir').getElementsByTagName('li');
var projectContent = document.getElementById('project-render');
var source = document.getElementById('project-template');
var template = Handlebars.compile(source.innerHTML);


projectContent.innerHTML = template(context);



addEventListeners();





function removeAllClasses() {


	for(var i=0;i<li.length;i++) {

		li[i].classList.remove('project-selected');

	}

}


function addEventListeners() {

	for(var i = 0 ; i < li.length ; i ++) {

		li[i].addEventListener('click',function(){

			removeAllClasses();
			this.classList.add('project-selected');

		},false);
	}
}