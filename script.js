
$(document).ready(function(){
	var list = ['.a','.b','.c','.d','.e','.f'];
	$('.link').hover(function(){
		var hover = $('.link').index(this);
		var show = (list[hover])+'>div';
		$(show).toggle();
	})
});