 
const date = new Date();

const inputs = document.querySelectorAll(".input");

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
 
document.getElementById('form').onsubmit = function(e) {
    e.preventDefault();
    let mm = document.getElementById('mm').value;
    let dd = document.getElementById('dd').value;
    let yyyy = document.getElementById('yyyy').value;
    let currentYear = new Date().getFullYear();
    let age = currentYear - yyyy;
    if (age < 18) {
		console.log("199999")
      alert('Debes ser mayor de edad para ingresar a este sitio.');
      return false;
    }else{
		location.replace('landing_page.html');
	}
  };