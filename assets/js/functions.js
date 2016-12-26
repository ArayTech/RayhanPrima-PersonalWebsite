$(document).ready(function() {

	$(window).scroll(function(){
		var scrolltop;
		if($(this).width() <= 920){
			scrolltop = 50;
		} else {
			scrolltop = 612;
		}
		if($(this).scrollTop() >= scrolltop){
			$('#nav-top').addClass('active');
		} else {
			$('#nav-top').removeClass('active');
		}
	});

	$('.nav-search .add-on').click(function(){
		$('#nav-search-layout').addClass('active');
		$('#nav-search-layout .closebtn').click(function(){
			$('#nav-search-layout').removeClass('active');
		});
	});

	$('#nav-top .nav-toggle').click(function(){
		$('#menu-active').addClass('active');
		$('#menu-active').click(function(event){
			if(event.target == this){
				$('#menu-active').removeClass('active');
			}
		});
	});

	// SLIM SCROLL
	$('#menu-active .scroll-wrapper').slimScroll({
         width:"auto",
         height:"auto",
         size:"10px",
         position:"right",
         color:"#000",
         alwaysVisible:true,
         distance:'0px',
         start:'top',
         wheelStep : 20,
         railVisible :true,
         railColor:'#333',
         railOpacity:'0.3',
         allowPageScroll:true,
         disableFadeOut:true,
	});

	// AUTO HIDE NAVIGATION

	$(window).scroll(function(){
		setTimeout(autoHideNavBar,250);
	});

	function autoHideNavBar(){
		console.log($(window).scrollTop() - $(window).scrollTop());
		if ($(window).scrollTop() - $(window).scrollTop() > 10) {
	    	//if scrolling up...
	    	$('#nav-top').removeClass('ishidden');
	    } 
	    // else if( currentTop - $(window).scrollTop() > scrollDelta && currentTop > scrollOffset) {
	    // 	//if scrolling down...
	    // 	mainHeader.addClass('is-hidden');
	    // }
	}

});