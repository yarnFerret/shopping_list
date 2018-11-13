var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click", clickedLi);
	li.appendChild(newDelButton());
	ul.appendChild(li);
	input.value = "";

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


function clickedLi(e){
	e.target.classList.toggle("done");
}

function newDelButton(){
	var newButton = document.createElement("button");
		newButton.setAttribute("class","delete");
		newButton.innerHTML = "Delete";
		newButton.addEventListener("click",deleteLi);
		return newButton;
}

function deleteLi(e){
	e.target.parentNode.parentNode.removeChild(e.target.parentNode);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
