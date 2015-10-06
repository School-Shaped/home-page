function setContentHeight() {
	var numberOfSections = 3
	var viewportHeight = window.innerHeight;

	document.getElementById("content").style.height = viewportHeight * numberOfSections;
	document.getElementById("section-1").style.height = viewportHeight;
	document.getElementById("section-2").style["min-height"] = viewportHeight;
	document.getElementById("section-3").style["min-height"] = viewportHeight;

	var sections = document.getElementsByClassName("section");
	for (i = 0; i < sections.length; i ++)  {		
		sections[i].style.visibility = "visible";
	}
}

window.onresize = setContentHeight;
window.onload = setContentHeight;