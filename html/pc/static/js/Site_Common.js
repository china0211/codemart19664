function PSearch() {
    var a = $.trim($("#txtSearch").val());
    if (a == "") {
        alert("Please enter product name!");
        return false
    }
    if (a.length <= 1) {
        return false
    }
    location.href = "http:///" + document.domain + "/search/" + encodeURIComponent(a) + ".html"
}
$(function () {
    $("#txtSearch").keydown(function (a) {
        var b = a.which;
        if (b == 13) {
            PSearch()
        }
    });
    $("#A_1,#A_2,#A_3,#A_4,#A_5,#A_6,#A_7").click(function () {
        $.ajax({
            type: "POST",
            url: "/OutOpen/AddEmailRecord",
            data: {
                fromEmail: $(this).text(),
                pathPage: document.URL
            },
            dataType: "jsonp",
            jsonp: "callback",
            crossDomain: true,
            jsonpCallback: "result",
            error: function () { },
            success: function (a) { },
            async: false
        })
    });
    checkCookie();
    $(".cose123").click(function () {
        setCookie("zxgt123", 0, 3)
    });
    $(".put123").click(function () {
        setCookie("zxgt123", 1, 3)
    })
});

function NSearch() {
    var a = $.trim($("#txtSearch").val());
    if (a == "") {
        return false
    }
    if (a.length <= 1) {
        return false
    }
    location.href = "http:///" + document.domain + "/View_Aspx/NSearch.aspx?q=" + escape(a)
}

function submitEmail() {
    var b = $("#FootEmail").val();
    if (b == "") {
        alert("Please enter a  email ");
        $("#FootEmail").focus();
        return false
    }
    var a = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!a.test(b) && $.trim(b) !== "") {
        alert("Please enter a valid email format");
        $("#FootEmail").focus();
        return false
    }
    if ($("#FootEM_Name").length>0&&$("#FootEM_Name").val().indexOf("免斐菜金88元") != -1) {
        setTimeout(function () {
            alert("Submit successfully , we will contact you soon!");
        }, 500);
    } else {
        $.ajax({
            type: "POST",
            url: "/OutOpen/SubmitEmail",
            data: {
                email: $("#FootEmail").val(),
                name: $("#FootEM_Name").val(),
                pageUrl: document.URL
            },
            dataType: "jsonp",
            crossDomain: true,
            jsonp: "callback",
            jsonpCallback: "result",
            error: function (c, e, d) {
                alert("Submit failed, Please try again later!");
                $("#FootEmail").val("");
                return false
            },
            success: function (c) {
                alert("Submit successfully, we will contact you soon!");
                $("#FootEmail").val("")
            },
            async: false
        })

    }
}

function FixJqText(b) {
    var a = b.replace(/\+/g, "＋");
    return a
}

function submitInquiry() {
    var b = $.trim($("#SubmitEmail_I").val());
    var f = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (b == "" || b == "E-mail Address") {
        alert("Please enter the Email!");
        $("#SubmitEmail_I").val("").focus();
        return false
    }
    if (!f.test(b)) {
        alert("Please enter a valid email format");
        $("#SubmitEmail_I").focus();
        return false
    }
    var d = $.trim($("#SubmitContent_I").val());
    if ($("#SubmitContent_I").length > 0) {
        if (d == "Content" || d == "") {
            alert("Please enter the content!");
            $("#SubmitContent_I").val("").focus();
            return false
        }
        if (d.length > 2000) {
            alert("Contents of the number of characters can not be more than 2000!");
            $("#SubmitContent_I").focus();
            return false
        }
        d = escape(FixJqText(d))
    }
    var e = $.trim($("#SubmitName_I").val());
    var a = $.trim($("#SubmitCompanyName_I").val());
    var g = $.trim($("#SubmitTitle_I").val());
    var c = $.trim($("#SubmitPhone_I").val());
    if (e != "") {
        e = escape(FixJqText(e))
    }
    if (a != "") {
        a = escape(FixJqText(a))
    }
    if (g != "") {
        if (g.length > 340) {
            alert("The title you have entered is too long!");
            $("#SubmitTitle_I").focus();
            return false
        } else {
            g = escape(FixJqText(g))
        }
    }
    if (c != "") {
        c = escape(FixJqText(c))
    }
    $.ajax({
        type: "POST",
        url: "/OutOpen/SaveInquirySimp",
        data: {
            name: e,
            company: a,
            proId: Number($.trim($("#productID").val())),
            phone: c,
            email: b,
            title: g,
            content: d,
            pageUrl: document.URL
        },
        dataType: "jsonp",
        crossDomain: true,
        jsonp: "callback",
        jsonpCallback: "result",
        error: function (h, j, i) {
            alert("Submit failed, Please try again later!")
        },
        success: function (h) {
            if (h == "1") {
                $("#ImgSend_I").removeAttr("disabled");
                alert("Submit successfully, we will contact you soon!");
                $("#SubmitContent_I").val("");
            }
            else if (h == "-1") {
                alert("Send failure, send too frequently!");
            }
            else {
                alert("Send failed, please re submit!");
            }
        },
        async: false
    });
    return false
}

function submitFloatInquiry() {
    var a = $.trim($("#SubmitEmail_Float").val());
    var c = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (a == "" || a == "E-mail") {
        alert("Please enter the Email!");
        $("#SubmitEmail_Float").val("").focus();
        return false
    }
    if (!c.test(a)) {
        alert("Please enter a valid email format");
        $("#SubmitEmail_Float").focus();
        return false
    }
    var b = $.trim($("#SubmitContent_Float").val());
    if ($("#SubmitContent_Float").length > 0) {
        if (b == "Content" || b == "") {
            alert("Please enter the content!");
            $("#SubmitContent_Float").val("").focus();
            return false
        }
        if (b.length > 2000) {
            alert("Contents of the number of characters can not be more than 2000!");
            $("#SubmitContent_Float").focus();
            return false
        }
        b = escape(FixJqText(b))
    }
    $.ajax({
        type: "POST",
        url: "/OutOpen/SaveInquirySimp",
        data: {
            name: "",
            company: "",
            proId: 0,
            phone: "",
            email: a,
            title: "",
            content: b,
            pageUrl: document.URL
        },
        dataType: "jsonp",
        crossDomain: true,
        jsonp: "callback",
        jsonpCallback: "result",
        error: function (d, f, e) {
            alert("Submit failed, Please try again later!")
        },
        success: function (d) {
            if (d == "1") {
                $("#ImgSend_Float").removeAttr("disabled");
                alert("Submit successfully, we will contact you soon!");
                $("#SubmitContent_Float").val("")
            }
            else if (d == "-1") {
                alert("Send failure, send too frequently!");
            }
            else {
                alert("Send failed, please re submit!");
            }
        },
        async: false
    });
    return false
}

function ShowHid(a, c) {
    var b = $("#" + a + "").css("display");
    if (b == "none") {
        $("#" + a + "").show();
        $("#" + c + "").removeClass("bodyRight100").addClass("bodyRight")
    } else {
        $("#" + a + "").hide();
        $("#" + c + "").removeClass("bodyRight").addClass("bodyRight100")
    }
}

function IsMobile() {
    var a = navigator.userAgent;
    var b = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var d = false;
    for (var c = 0; c < b.length; c++) {
        if (a.indexOf(b[c]) > 0) {
            d = true;
            break
        }
    }
    return d
}

function displaySubMenu(a) {
    var b = a.getElementsByTagName("ul")[0];
    b.style.display = "block"
}

function hideSubMenu(a) {
    var b = a.getElementsByTagName("ul")[0];
    b.style.display = "none"
}
$(function () {
    var a = document.getElementById("pg2");
    if (a != null) {
        a.style.display = "none"
    }
});

function showdiv(a, b) {
    var d = document.getElementById(a);
    var c = document.getElementById(b);
    if (d.style.display == "inline") {
        d.style.display = "none";
        c.innerHTML = '<span class="areaon"> </span>'
    } else {
        d.style.display = "inline";
        c.innerHTML = '<span class="areaon1">  </span>'
    }
}
var vIsMobile = IsMobile();
if (vIsMobile) {
    var homeUrl = document.URL;
    if (homeUrl.indexOf("http://www./") > -1) {
        location.href = document.URL.replace("http://www./", "http://m./")
    } else if (homeUrl.indexOf("https://www.") > -1) {
        location.href = document.URL.replace("https://www.", "http://m./")
    } else {
        if (homeUrl.indexOf("http://m./") == -1) {
            location.href = document.URL.replace("http://", "http://m./")
        }
    }
}

function addFavorite() {
    var a = document.location.href;
    var c = document.title;
    try {
        window.external.addFavorite(a, c)
    } catch (b) {
        try {
            window.sidebar.addPanel(c, a, "")
        } catch (b) {
            alert("Sorry, but you are using a browser to complete this operation.\nFavorite fails, use Ctrl + D add")
        }
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ""
}

function checkCookie() {
    var zxgt123 = getCookie("zxgt123");
    if (zxgt123 == "0") {
        $("#cose123").hide();
        $("#put123").show()
    }
}