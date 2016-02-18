var li = document.getElementById('project-dir').getElementsByTagName('li');


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