function setContentHeight() {	
	var viewportHeight = window.innerHeight;	
	document.getElementById("section-1").style.height = viewportHeight;		

	var sections = document.getElementsByClassName("section");
	for (i = 0; i < sections.length; i ++)  {		
		sections[i].style.visibility = "visible";
	}
}

window.onresize = setContentHeight;
window.onload = setContentHeight;

$(function(){
	// rotateText();

	var rightToLeftConnector = jsPlumb.getInstance();
	rightToLeftConnector.setContainer($(".explanation-section"));

	var leftToRightConnector = jsPlumb.getInstance();
	leftToRightConnector.setContainer($(".explanation-section"));

	var bottomToTopConnector = jsPlumb.getInstance();
	bottomToTopConnector.setContainer($(".explanation-section"));

	rightToLeftConnector.importDefaults({
		Connector:[ "Flowchart"],
		Anchors : [ "Bottom", "Left" ],
		Endpoint:[ "Dot", { radius:5 } ],
		EndpointStyle : { fillStyle: "#567567"  },
		// Anchor : [ 0.5, 0.5, 1, 1 ]
	});

	leftToRightConnector.importDefaults({
		Connector:[ "Flowchart"],
		Anchors : [ "Bottom", "Right" ],
		Endpoint:[ "Dot", { radius:5 } ],
		EndpointStyle : { fillStyle: "#567567"  },
		// Anchor : [ 0.5, 0.5, 1, 1 ]
	});

	bottomToTopConnector.importDefaults({
		Connector:[ "Flowchart"],
		Anchors : [ "Bottom", "Top" ],
		Endpoint:[ "Dot", { radius:5 } ],
		EndpointStyle : { fillStyle: "#567567"  },
		// Anchor : [ 0.5, 0.5, 1, 1 ]
	});	

	rightToLeftConnector.connect({
		source:"teachers-header",
		target:"school-shaped-header"
	});	

	leftToRightConnector.connect({
		source:"builders-header",
		target:"school-shaped-header"
	});	

	bottomToTopConnector.connect({
		source:"school-shaped-header-bottom",
		target:"component-explanation"
	});	
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