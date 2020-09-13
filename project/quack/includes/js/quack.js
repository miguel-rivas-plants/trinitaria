(function( $ ){
	$.fn.getHeight = function( adelay, num ) {
		adelay = adelay || 0; /* animation delay */
		num = num || 1; /* divide */

		dh = $(window).height()
		|| document.height
		|| document.documentElement.clientHeight
		|| document.innerHeight
		|| screen.height
		|| window.innerHeight;

		dh /= num;

		this.stop().animate({ "height" : dh }, adelay);
		return this;
	};
})( jQuery );

$(window).resize(function()
{
	$(".fullscrn").getHeight(500);
});

$(function()
{
	$(".fullscrn").getHeight(500);
});