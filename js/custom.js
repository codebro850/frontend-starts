$(document).ready(function()
{
    var header = $('nav .navbar');
    
	header.addClass('stop');

	   console.log(($(window).scrollTop));
		if($(window).scrollTop() > 127||$(html).scrollTop>127)
		{
			header.addClass('fix-nav');
			console.log('scrolled')
			
		}
		else
		{
			header.removeClass('fix-nav');
		}

});