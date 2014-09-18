	// Part 3

	// When you click the large button, pop up a message
	$(".button-large").on("click", function() {
		$(this).hide();
		// Show popup
		$("body").append("<div class = 'outside'><div><div class = 'inside'><h3>Popup, WHAT!</h3><p>Here is some text</p></div></div></div></div>");

		
	});  /* End of event handler*/
