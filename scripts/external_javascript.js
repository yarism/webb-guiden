// JavaScript Document

function showMenu(nr, show) {
	var element = document.getElementById("link"+nr); 
	if (show) {
		element.style.left = "0px";
		element.style.position= "relative";

	}
	else { 
		element.style.left ="-177px"; 
	}
}

function showPic(nr, show) {
	var element = document.getElementById("pic"+nr);
	if (show) {
		element.style.visibility = "visible";
		element.style.display = "block";
	}
	else {
		element.style.visibility = "hidden";
		element.style.display = "none";
	}
}

function showText(nr, show) {
	var element = document.getElementById("text"+nr);
	if (show) {
		element.style.visibility = "visible";
		element.style.display = "block";
	}
	else {
		element.style.visibility = "hidden";
		element.style.display = "none";
	}
}