var kjwsbpj = $("div.xyz12 span");
var ctzuh = $("div.xyz12");
var ickovgeykr = $("#liDropD_En");
ickovgeykr.siblings().hide();
ctzuh.click(function() {
	if(ickovgeykr.siblings().css("display") == "none") {
		ickovgeykr.siblings().slideDown(300);
		kjwsbpj.removeClass("up");
		kjwsbpj.addClass("dp");
	} else {
		ickovgeykr.siblings().slideUp(500);
		kjwsbpj.removeClass("dp");
		kjwsbpj.addClass("up");
	}
});

$(function() {

	$('.qrcode').hover(function() {
		$('.qrcode .ErWeiImg').stop().animate({
			height: "120px",
			width: "120px",
			left: "-48px",
			top: "-136px",
			opacity: "1"
		}, 500);
	}, function() {
		$('.qrcode .ErWeiImg').stop().animate({
			height: "24px",
			width: "24px",
			left: "0px",
			top: "0px",
			opacity: "0"
		}, 500);
	});
});