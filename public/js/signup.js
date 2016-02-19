console.log("loaded JS!")

$(function() {
	$(".submit-application").click(function() {	
		var application = $(".application-form")
		$(".submit-application").addClass("btn-warning").val("Sending...");
		$.ajax({
			url: "https://script.google.com/macros/s/AKfycbwFMBbibka0pQ9cRd1VOLR2XxV7paC48WX91Uqx-WV9YDtMQUk/exec",
			method: "POST",
			data: application.serialize(),
			success: function() {
				application.animate({"height": 0}, {
					duration: 500,
					complete: function() {
						$(".success-text").show();
						$(".submit-application").addClass("btn-success").val("Success");
					} 
				})				
			}
		})
	})	
})
