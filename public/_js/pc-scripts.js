// variable to hold current window state - small, medium, or large
var windowState = 'large';

// check intital width of the screen, respond with appropriate menu
$(document).ready(function() {
    var sw = document.body.clientWidth;
    if (sw < 770) {
       smMenu();
    } else if (sw >= 771 && sw <= 1250) {
		medMenu();
	} else {
		lgMenu();
	}
});


// take care of resizing the window
$(window).resize(function() {
	var sw = document.body.clientWidth;
    if (sw < 770 && windowState !== 'small') {
       smMenu();
    }
	if (sw > 771 && sw < 1250 && windowState !== 'medium') {
       medMenu();
    }  
    if (sw > 1251 && windowState !== 'large') {
       lgMenu();
    } 
});

function smMenu() {
	// since we may be switching from another menu, reset the menu first
	//unbind click and touch events    
    $('.menuToggle a').off('click');
	$('html').off('touchstart');
	$('#mainNav').off('touchstart');
	//reset the menu in case it's being resized from a medium screen    
    // remove any expanded menus
	$('.expand').removeClass('expand');
	$('.more').removeClass('more');

	$('.menuToggle').remove();
    //now that the menu is reset, add the toggle and reinitialize the indicator
     $('.topMenu').before('<div class="menuToggle"><a id="nav-toggle" href="javascript:void(0);"><span></span></a></div>');
    // wire up clicks and changing the various menu states
	//we'll use clicks instead of touch in case a smaller screen has a pointer device
	//first, let's deal with the menu toggle
	$('.menuToggle a').click(function() {
		//expand the menu
		$('.topMenu').toggleClass('expand');
		$('#nav-toggle').toggleClass('active');
	});
	
	//indicate current window state
	windowState = 'small';
}

function medMenu() {
	//reset the menu in case it's being resized from a small screen
	// unbind click events    
    $('.menuToggle a').off('click');
    // remove any expanded menus
	$('.expand').removeClass('expand');
	$('.more').removeClass('more');
    $('.menuToggle').remove();
	//now that the menu is reset, add the toggle and reinitialize the indicator
    $('.topMenu').before('<div class="menuToggle"><a id="nav-toggle" href="javascript:void(0);"><span></span></a></div>');
	 // wire up clicks and changing the various menu states
	//we'll use clicks instead of touch in case a smaller screen has a pointer device
	//first, let's deal with the menu toggle
	$('.menuToggle a').click(function() {
		//expand the menu
		$('.topMenu').toggleClass('expand');
		$('#nav-toggle').toggleClass('active');
	});
	$(window).scroll(function() {
		if ($(this).scrollTop() > 516){  
    $('header').addClass("sticky");
 		 }
 	 else{
    $('header').removeClass("sticky");
	  }
		});
		$(function () {
});
	//indicate current window state
	windowState = 'medium';
}

function lgMenu() {
    //largely what we'll do here is simple remove functionality that
	//may be left behind by other screen sizes
    // unbind click and touch events    
    $('.menuToggle a').off('click');
    $('.topMenu h3').off('click touchstart');
	$('html').off('touchstart');
	$('#mainNav').off('touchstart');
	$('.tabNav').removeClass('more');
    
    // remove the "menu" element
    $('.menuToggle').remove();
	$(window).scroll(function() {
		if ($(this).scrollTop() > 500){  
    $('header').addClass("sticky");
 		 }
 	 else{
    $('header').removeClass("sticky");
	  }
		});
    //indicate current window state
    windowState = 'large';
}
