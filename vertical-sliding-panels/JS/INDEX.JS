/* Panels Functionality */
(function($) {
	$(".sliding-panels").click(function() {
	    
	    var n = $(this).attr("number");
	    var i, toggle_class;
		
		for (i = 1; i <= 4; ++i) {
		    
		    if (i == n) { 
		    	toggle_class = "panel-active"; 
		    }
		    
		    else if (i < n) { 
		    	toggle_class = "panel-push-left"; 
		    }

		    else if (i > n) { 
		    	toggle_class = "panel-push-right"; 
		    }

		    $(".panel" + i ).toggleClass(toggle_class);
		}
	})
})(jQuery);

/* Closing Panels */
(function($) {
	$(".close").click(function() {
		$(".sliding-panels").removeClass("panel-push-left panel-push-right panel-active");
		$( ".text" ).toggle();
	})
})(jQuery);