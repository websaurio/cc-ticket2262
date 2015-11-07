 /**
 * This demo was prepared for you by Petr Tichy - Ihatetomatoes.net
 * Want to see more similar demos and tutorials?
 * Help by spreading the word about Ihatetomatoes blog.
 * Facebook - https://www.facebook.com/ihatetomatoesblog
 * Twitter - https://twitter.com/ihatetomatoes
 * Google+ - https://plus.google.com/u/0/109859280204979591787/about
 * Article URL: http://ihatetomatoes.net/parallax-scrolling-master-class/
 */

( function( $ ) {

	function enableSkrollr(){

		// Enable Skroll only for non-touch devices
		if(!Modernizr.touch){
			var s = skrollr.init({
	            forceHeight: false
	        });
        }

	}

	function disableSkrollr(){

		// Destroy Skrollr
		var s = skrollr.init();
		s.destroy();
	}

	enquire.register("screen and (min-width: 1250px)", {
	    match : function() {
	        enableSkrollr();
	    },  
	    unmatch : function() {
	        disableSkrollr();
	    }
	});

} )( jQuery );