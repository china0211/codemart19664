$(function() {
	$(".f_top").click(function() {
		$("html,body").animate({
			scrollTop: 0
		}, 100)
	});
	$('#svos').hover(function() {
		$('#svos').stop().animate({
			right: '0px'
		}, 100)
	}, function() {
		$('#svos').stop().animate({
			right: '-160px'
		}, 100)
	})
});
jQuery(document).ready(function($) {
	$('.f_fb').on('click', function(event) {
		event.preventDefault();
		$('.svbox').addClass('boxxg')
	});
	$('.svbox').on('click', function(event) {
		if($(event.target).is('.fbclose') || $(event.target).is('.svbox')) {
			event.preventDefault();
			$(this).removeClass('boxxg')
		}
	});
	$(document).keyup(function(event) {
		if(event.which == '27') {
			$('.svbox').removeClass('boxxg')
		}
	})
});