// Part I

$(document).on('ready', function() {

	// Show body message
	$(".button-body").on("click", function() {
		$("body").append("<p>Yo what up!</p>");
	});  /* End of event handler*/

	// Show new h1 tag
	$(".button-h1").on("click", function() {
		$("body").append("<h1>New heading</h1>");
	});  /* End of event handler*/

	// Add unordered list
	$(".button-list").on("click", function() {
		$("body").append("<ul><li>Hello</li><li>Yo</li><li>Hi there</li></ul>");
	});  /* End of event handler*/



// Part 2

	// On mouse-over, turn text of paragraph pink
	$("p").on("mouseover", function() {

		$("p").css({ color: "pink" });

	});

	// Add exclamation point to end of EACH heading
	$("h1,h2").append("!");

	// Show body message
	$(".button-body").on("click", function() {
		$("body").append("<p>Yo what up!</p>");
	});  /* End of event handler*/

	// Turn paragraph pink on mouseover
	$("p").on("mouseover", function() {

		$(this).css( { color: "pink" } );

	});



	// // When user clicks a link, pop up a confirm. If they click "Cancel" to the confirm
	// // i.e. if !confirm, return false (do nothing). else return true (go to the link)
	// $("a").on("click", function() {

	// 	if (!confirm("Do you really want to do this?")) {
	// 		$(this).remove();   // Remove this button that you clicked
	// 		return false;     
	// 	} 

	// });

	// Part 3

	// When you click the large button, pop up a message
	$(".button-large").on("click", function() {
		
		$(".button-large").hide();
		// Show popup
		

	});  /* End of event handler*/










});  /* End of document ready check */