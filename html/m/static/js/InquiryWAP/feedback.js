function FixJqText(str) {
    //str=encodeURIComponent(str);
    var tempstr = str.replace(/\+/g, "＋");
    //tempstr = tempstr.replace(/\&/g, "&amp;");
    return tempstr;
}
function ClearForm() {
    $("#order_email").val("");
    $("#order_tel").val("");
    $("#order_content").val("");
}
function SendMsg() {
    var _email = $.trim($("#order_email").val());
    var _content = $.trim($("#order_content").val());
    var _tel = $.trim($("#order_tel").val());

    if (_email == "") { alert($lang.msgInputEmail); return; }
    var mail_filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!mail_filter.test(_email) && $.trim(_email) !== "") {
        alert($lang.msgCheckEmail);
        return false;
    }

    if (_content == "") { alert($lang.msgInputContent); return; }
    var vEmail = escape(FixJqText(_email));
    var vContent = escape(FixJqText(_content));
    var vTel = escape(FixJqText(_tel));

    //if(_content.length>1000){alert("输入过长");return;}
    //   function (url, parameters, functionName)

    $(this).attr("disabled", "disabled");
    $.ajax({
        type: "POST",
        url: "/OutOpen/SaveInquiryM",
        data: {
            email: vEmail,
            tel: vTel,
            content: vContent,
            pageUrl: document.URL,
            proId: $("#productID").val()
        },
        dataType: "json",
        error: function () {
            // alert($lang.msgSendFailed);
            //alert("Mail has been sent successfully, we will contact you later!");
            alert($lang.msgSendSucess);
            ClearForm();
        },
        success: function (data) {
            if (data == "1") {
                $(this).removeAttr("disabled");
                //alert($lang.msgSendSucess);
                //alert("Mail has been sent successfully, we will contact you later!");
                alert($lang.msgSendSucess);
                ClearForm();
            } else if (data == "2") {
                // alert($lang.msgSameContent);
                // alert("Mail has been sent successfully, we will contact you later!");
                alert($lang.msgSendSucess);
            } else if (data == "3") {
                location.href = "../../Code.htm"/*tpa=http://m.maxsunindustry.com/Code*/;
            } else if (data == "-1") {
                location.href = alert($lang.msgFrequentlyContent);
            }else {
                // alert($lang.msgSendFailed);
                //alert("Mail has been sent successfully, we will contact you later!");
                alert($lang.msgSendSucess);
            }
        },
        async: false

    });
    return false;

}

/*********************************************
document.writeln("    <div class=\"form-m\"> ");
document.writeln("    <div class=\"area2 mtp\"> ");
document.writeln("     <input id=\"order_email\" maxlength=\"100\" placeholder=\"E-mail\" type=\"text\">  ");
document.writeln(" </div> ");
document.writeln("     <div class=\"area2\">  ");
document.writeln(" <input id=\"order_tel\" maxlength=\"50\" placeholder=\"Tel\" type=\"text\">");
document.writeln("  </div>");
document.writeln("    <div class=\"area2\"> ");
document.writeln("   <textarea id=\"order_content\" class=\"textarea2\" placeholder=\"" + $lang.msgInputContent + "\"></textarea>  ");
document.writeln("    </div> ");
document.writeln("   <div style=\"margin: 18px 0;\" class=\"area-btn\"> ");
document.writeln("    <button class=\"button2\" id=\"btnSendFeedback\" onclick=\"SendMsg();return false;\">" + $lang.btnSubmit + "</button> ");
document.writeln("   </div> ");
document.writeln("   </div> ");
document.writeln(" <br /> ");
document.writeln(" <br /> ");
document.writeln(" <br /> ");
*/