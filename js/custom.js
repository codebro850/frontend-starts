$(document).ready(function()
{
    var header = $('.navbar');
    function setHeader()
	{
		if($(window).scrollTop() > 127)
		{
			header.addClass('stop');
			headerSocial.addClass('stop');
		}
		else
		{
			header.removeClass('stop');
			headerSocial.removeClass('stop');
		}
	}
});