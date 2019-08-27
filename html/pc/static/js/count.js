var url = "/o/s?l=" + escape(document.referrer) + "&u=" + escape(window.location) + "&navUA=" + escape(navigator.userAgent);

function loadScript(url, callback) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	if(script.readyState) {
		script.onreadystatechange = function() {
			if(script.readyState == "loaded" || script.readyState == "complete") {
				script.onreadystatechange = null;
				callback();
			}
		};
	} else {
		script.onload = function() {
			callback();
		};
	}
	script.src = url;
	(document.getElementsByTagName("head")[0] || document.head).appendChild(
		script);
}
loadScript(url, function() {});
$("#A_1,#A_2,#A_3,#A_4,#A_5,#A_6,#A_7").click(function() {
	$.ajax({
		type: "POST",
		url: "/OutOpen/AddEmailRecord",
		data: {
			fromEmail: $(this).text(),
			pathPage: document.URL,
			ipAddress: $("#ipAddress").val(),
			siteLangId: $("#siteLangId").val()
		},
		dataType: "jsonp",
		crossDomain: true,
		jsonp: "callback",
		jsonpCallback: "result",
		error: function() {},
		success: function(msg) {},
		async: false
	});
});