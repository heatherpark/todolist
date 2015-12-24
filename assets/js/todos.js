// toggle to-do input by clicking plus sign in top bar
$(".add-todo").click(function() {
	$("input").fadeToggle(500);
	$("input").focus();
});

// add to-do to list
$("input").keypress(function(event) {
	// when user presses "enter" after typing to-do
	if (event.which === 13) {
		// obtain text that has been input and add to list
		var todoText = $(this).val();
		// clear out input textbox after hitting enter
		$(this).val("");
		// create new li and add to completed to-dos section
		$("ul").prepend("<li>" + todoText + " <span class='checkbox-outer'><span class='checkbox-inner hidden'>&nbsp;</span></span><i class='fa fa-trash hidden'></i></li>");
	}
});

// toggle delete icon when hovering over li
$("ul").on({
    mouseenter: function () {
        $(this).children(".fa-trash").fadeIn();
    },
    mouseleave: function () {
        $(this).children(".fa-trash").fadeOut();
    }
}, "li");

// remove to-do when delete icon is clicked
$("ul").on("click", ".fa-trash", function(event) {
	$(this).parent().fadeOut(function() {
		$(this).remove();
	});
});

// "check off" to do item
$("ul").on("click", ".checkbox-outer", function() {
	$(this).children(".checkbox-inner").fadeToggle();
	$(this).parent("li").toggleClass("completed");
	// drop completed task to bottom of list
	var $this = $(this).parent("li");
	if($this.hasClass("completed")) {
		$this.insertAfter("li:last-of-type");
	} else {
		$this.insertBefore("li:first-of-type");
	}
});


