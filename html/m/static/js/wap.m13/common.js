
$(function() {
  window.onload = function() {
    var $list = $(".list");
    var $menu = $(".menu");
    $menu.click(function(event) {
      event.stopPropagation();
      if ($list.css("display") == "none") {

        $list.slideDown(500);
      } else {
        $list.slideUp(500);
      }
    });
    $list.click(function(event){
      event.stopPropagation();
    });
    $(document).click(function() {
      $list.slideUp(500);
    });
    $('.lower').on('click',function(){

      if($(this).hasClass("rotate")){ //�����ͷ��ת180��
        $(this).removeClass("rotate");
        $(this).addClass("rotate1");
        $('.flage-list li').hide();
        $('.flage-list li').eq(0).show();
      } else {
        $(this).removeClass("rotate1"); //�ٴε����ͷ����
        $(this).addClass("rotate");
        $('.flage-list li').show();
      }
    });
    $('.flage-list li').on('click',function(){
      $('.flage-list').prepend($(this));
      $('.lower').removeClass("rotate");
      $('.lower').addClass("rotate1");
      $('.flage-list li').hide();
      $('.flage-list li').eq(0).show();
    })
    function abc(dom){
      $(dom).each(function(index,i){
        if($(dom).eq(index).find('ul').length > 0){
          $(dom).eq(index).prepend('<span class="arrow"></span>');
          var node=$(dom).eq(index).children('ul').children('li');
          return abc(node)
        } else {
          return 0;
        }
      })
    }
    abc('.list-container > li');
    $('.arrow').on('click',function(event){
      event.stopPropagation();
      if ($(this).siblings('ul').css("display") == "none") {
        $(this).siblings('ul').slideDown(300);
        $(this).siblings('a').children('img').addClass("rotate2");
      } else {
        $(this).siblings('ul').slideUp(300);
        $(this).siblings('a').children('img').removeClass("rotate2");
        $(this).siblings('a').children('img').addClass("rotate1");
      }
    });
    $(window).on( 'resize', function(e){
      orient();
    });
  }
});
function orient() {
  var dd = document.documentElement,cw = dd.clientWidth;dd.style.fontSize = cw/320 * 20 + 'px';
}

function PSearch() {
    var vSearchVal = $("#txtSearch").val();
    if (vSearchVal == "") {
        alert("Please enter product name!");
        return false;
    } else {
        vSearchVal = vSearchVal.replace(/[^a-zA-Z0-9]/g, '-');
        location.href = "http:///" + document.domain + "/search/" + escape(vSearchVal) + ".html";
    }
}

$(function () {
    $("#txtSearch").keydown(function (e) {
        var curKey = e.which;
        if (curKey == 13) {
            PSearch();
        }
    });
});
var browser = {
    versions: function() {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {//�ƶ��ն�������汾��Ϣ
            trident: u.indexOf('Trident') > -1, //IE�ں�
            presto: u.indexOf('Presto') > -1, //opera�ں�
            webKit: u.indexOf('AppleWebKit') > -1, //ƻ�����ȸ��ں�
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //����ں�
            //mobile: !!u.match(/AppleWebKit.*Mobile.*/), //�Ƿ�Ϊ�ƶ��ն�
            mobile: u.indexOf('Mobile') > -1,
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios�ն�
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android�ն˻�uc�����
            iPhone: u.indexOf('iPhone') > -1, //�Ƿ�ΪiPhone����QQHD�����
            iPad: u.indexOf('iPad') > -1, //�Ƿ�iPad
            webApp: u.indexOf('Safari') == -1, //�Ƿ�webӦ�ó���û��ͷ����ײ�
            weixinApp: u.indexOf('Version') > -1 //΢�Ű�׿�ͻ���
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
};

function getQueryStringByName(name) {
    var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
    if (result == null || result.length < 1) {
        return "";
    }
    return result[1];
}

$(function() {
    /*�ж��ֻ������,�Ƿ�ͨһ������*/
    $("a[href^='tel']").click(function() {
        if (browser.versions.mobile) {
            if (browser.versions.weixinApp) {
                var tel = $(this).attr('href').substring(4);
                //alert('���ֶ�����绰��' + tel);
                //return false;
            }
        } else { // if (browser.versions.webApp)
            alert('��ʹ���ֻ����ʣ�');
            return false;
        }
    });

    /*�Ҳ൯���б�*/
    $(".header a.links").toggle(function() {
        $(".sidebar").stop(true).css({"display": "block", "z-index": "99999"});
        $(".sidebar").stop(true).animate({"right": "0%"});
        function show() {
            $(".bj").stop(true).css({"z-index": "2", "display": "block"});
            $(".bj").stop(true).animate({"opacity": "0.6"});
        }
        setTimeout(show, 300);
    }, function() {
        $(".sidebar").stop(true).animate({"right": "-50%"});
        function show() {
            $(".bj").stop(true).animate({"opacity": "0"});
            $(".sidebar").stop(true).css({"display": "none"});
            $(".sidebar").stop(true).css({"z-index": "999"});
        }
        setTimeout(show, 300);
        $(".bj").stop(true).css({"display": "none"});
    }
    );

    /*��ϵ��ʽ�����б�*/
    $(".header a.contect").toggle(function() {
        $(".touch").stop(true).show(300);
        function show() {
            $(".bj").stop(true).css({"z-index": "8", "display": "block"});
            $(".bj").stop(true, false).animate({"opacity": "0.6"});
            $(".touch").stop(true).css({"opacity": "1"});
        }
        setTimeout(show, 300);

    }, function() {
        $(".touch").stop(true).hide(300);
        function show() {
            $(".bj").stop(true, false).animate({"opacity": "0"});
        }
        setTimeout(show, 300);
        $(".bj").stop(true).css({"display": "none"});
    });

    $(".bj").click(function() {
        if ($(".touch").is(":visible")) {
            $(".touch").stop(true).hide(300);
            function show() {
                $(".bj").stop(true, false).animate({"opacity": "0"});

            }
            setTimeout(show, 300);
            $(".bj").stop(true).css({"display": "none"});
        }
        else if ($(".sidebar").is(":visible")) {
            $(".sidebar").stop(true).animate({"right": "-50%"});
            function a() {
                $(".bj").stop(true).animate({"opacity": "0"});
                $(".bj").stop(true).css({"display": "none"});
            }
            setTimeout(a, 300);
            $(".bj").stop(true).css({"display": "none"});
        }
    });

    $("http://m.maxsunindustry.com/js/wap.m13/a.back").click(function() {
        if (window.history.length <= 1) {
            window.location.href = '../../index.htm'/*tpa=http://m.maxsunindustry.com/*/;
        } else {
            window.history.back();
        }
    });
});