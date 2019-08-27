function FixJqText(c) {
    var d = c.replace(/\+/g, "＋");
    return d;
}
$.fn.formreset = function () {
    $(this).each(function () {
        this.reset();
    });
    $("#msg").text("");
};
function SendInquiry() {
    var vSubmitName = $.trim($("#SubmitName").val());
    if (vSubmitName == "") {alert($lang.msgInputName);$("#SubmitName").focus();return false;}
    var vEmail = $.trim($("#SubmitEmail").val());
    if (vEmail == "") {
        alert($lang.msgInputEmail);
        $("#SubmitEmail").focus();
        return false;
    }
    var mail_filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!mail_filter.test(vEmail)) {
        alert($lang.msgCheckEmail);
        $("#SubmitEmail").focus();
        return false;
    }
    
    var vPhone = $.trim($("#SubmitPhone").val());
    if (vPhone == "") {alert($lang.msgInputPhone);return false;}

    var vCompany = $.trim($("#SubmitCompanyName").val());
    if (vCompany == "") {alert($lang.msgInputCompany);return false;}

    var vSubmitTitle = $.trim($("#SubmitTitle").val());
    if (vSubmitTitle == "") {alert($lang.msgInputTitle);$("#SubmitTitle").focus();return false;}

    var vSubmitContent = $.trim($("#SubmitContent").val());
    if (vSubmitContent == "") {
        alert($lang.msgInputContent);
        $("#SubmitContent").focus();
        return false;
    }
    $(this).attr("disabled", "disabled");
    $("#msg").text($lang.txtSubmit);
    $.ajax({
        type: "POST",
        url: "/OutOpen/AddInquiry",
        data: {
            name: escape(FixJqText(vSubmitName)),
            company: escape(FixJqText(vCompany)),
            proId: $("#productID").val(),
            phone: vPhone,
            email: vEmail,
            title: escape(FixJqText(vSubmitTitle)),
            content: escape(FixJqText(vSubmitContent)),
            pageUrl: document.URL
        },
        dataType: "json",
        error: function () {
            alert($lang.msgSendFailed);
            $("#ImgSend").removeAttr("disabled");
            $("#msg").text("");
        },
        success: function (a) {
            $("#ImgSend").removeAttr("disabled");
            if (a == "1") {
                alert($lang.msgSendSucess);
                $("#feedbackForm").formreset();
            } else if (a == "2") {
                alert($lang.msgSameContent);
            } else if (a == "3") {
                location.href = "../../Code.htm";
            } else {
                alert($lang.msgSendFailed);
            }
            $("#msg").text("");
        },
        async: false
    });

    return false;
}


