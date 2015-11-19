function setContentHeight() {	
	var viewportHeight = window.innerHeight;	
	document.getElementById("section-1").style.height = viewportHeight;		

	var sections = document.getElementsByClassName("section");
	for (i = 0; i < sections.length; i ++)  {		
		sections[i].style.visibility = "visible";
	}
}

// window.onresize = setContentHeight;
// window.onload = setContentHeight;

$(function(){
	// rotateText();

	var firstInstance = jsPlumb.getInstance();
	firstInstance.setContainer($(".program-explanations"));

	firstInstance.importDefaults({
		Connector:[ "Straight" ],
		Anchors : [ "BottomCenter", "TopCenter" ],
		Endpoint:[ "Dot", { radius:5 } ],
		EndpointStyle : { fillStyle: "#567567"  },
		// Anchor : [ 0.5, 0.5, 1, 1 ]
	});

	var numberOfExplanations = 5;

	for (i = 1; i < numberOfExplanations; i++) {
		firstInstance.connect({
			source:"teacher-explanation-" + i, 
			target:"teacher-explanation-" + (i + 1)		
		});	

		firstInstance.connect({
			source:"builder-explanation-" + i, 
			target:"builder-explanation-" + (i + 1)		
		});	
	}	
})

function rotateText(currentIndex) {
	var el = $(".text-rotate");	

	var textRotateValues = [
		"curriculum?",
		"lesson?",
		"grading experience?",		
	]

	var currentIndex = currentIndex || 0;

	var children = el.children();

	console.log(children);

	if (children.length > 3) {
		children[children.length-1].remove();
	}

	var currentScroll = el.scrollTop();	
	el.prepend("<div>" + textRotateValues[currentIndex % textRotateValues.length] + "</div>");	
	el.scrollTop(currentScroll + el.height());
	el.animate({scrollTop: 0}, '1000');

	setTimeout(function() { rotateText(currentIndex + 1) }, 3000);
}