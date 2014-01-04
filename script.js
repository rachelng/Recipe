$(document).ready(function(){
	$('.list li').prepend('<input type ="checkbox" name="ingredients">' + ' ');
	
	$('button').click(function(){
		$('img').fadeOut('fast');
	});

	$('ol li').mouseover(function(){
		$(this).addClass('highlight');
	});
	$('ol li').mouseout(function(){
		$(this).removeClass('highlight');
	});
});