// $(document).ready(function() {

//   $('.dropdown-content').click( function() { 
//     $(`.dropdown-content`).css("background-color", "red");
//   });

// })


$(function() {
	var pull = $('#pull');
	var	menu = $('nav ul');

	$(pull).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	
	$(window).resize(function(){
		var w = $(this).width();

		if(w > 800 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});

	$('li').on('click', function(e) {		
		var w = $(window).width();
		if(w < 800 ) {
			menu.slideToggle();
		}
	});

	$('.panel').height($(window).height());
	
});

$(function() {
	var addToAll = false;
	var gallery = true;
	var titlePosition = 'inside';
	$(addToAll ? 'img' : 'img.fancybox').each(function(){
		var $this = $(this);
		var title = $this.attr('title');
		var src = $this.attr('data-big') || $this.attr('src');
		var a = $('<a href="#" class="fancybox"></a>').attr('href', src).attr('title', title);
		$this.wrap(a);
	});
	if (gallery)
		$('a.fancybox').attr('rel', 'fancyboxgallery');
	$('a.fancybox').fancybox({
		titlePosition: titlePosition
	});
});