const { format } = require("path");
const date = new Date();

const inputs = document.querySelectorAll(".input");
const dd = document.getElementById("dd");
const mm = document.getElementById("mm");
const yyyy = document.getElementById("yyy");
const form = document.getElementById("form");

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

format.addEventListener('submit',(e) =>{
	

})

//agrega id a elementos
//agregar eventlistener
