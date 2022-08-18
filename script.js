(function(d,w,container) {
	d.ready(function() {
		container.append('<div class="bg-hover"></div>');
	});
	
	w.load(function() {		
		var bgHover = $('.bg-hover');
		MA_fix(container, bgHover);
		container.on('mouseenter', 'li', function() {  		
			var botao = $(this); 
			MA_move( container, bgHover, botao ); 
		}).on('mouseleave', 'li', function() {
			MA_fix(container, bgHover);	
		});	
	});
	
	function MA_fix(c,bg) {
		var btn = c.find('.atual');
		var pL = btn.position().left;
		var pW = btn.outerWidth();
		bg.stop().animate({ 'left' : pL, 'width' : pW }, 2000, 'easeOutElastic');
	}
	
	function MA_move(c,bg,btn) {
		var pL = btn.position().left;
		var pW = btn.outerWidth();
		bg.stop().animate({ 'left' : pL, 'width' : pW }, 400, 'easeOutBack');
	}
	
	
})($(document),$(window),$('#menu'));