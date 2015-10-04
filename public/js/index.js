function setContentHeight() {
	var numberOfSections = 3
	var viewportHeight = window.innerHeight;

	document.getElementById("content").style.height = viewportHeight * numberOfSections;
	document.getElementById("section-1").style.height = viewportHeight;
	document.getElementById("section-2").style.height = viewportHeight;
}

window.onresize = setContentHeight;
window.onload = setContentHeight;