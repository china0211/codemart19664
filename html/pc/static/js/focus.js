/*!
 * �õ�Ƭ
 */
(function ($) {
    $.fn.wmuSlider = function (options) {
        var defaults = {
            animation: "fade",
            animationDuration: 600,
            slideshow: true,
            slideshowSpeed: 7000,
            slideToStart: 0,
            navigationControl: true,
            paginationControl: true,
            previousText: "Previous",
            nextText: "Next",
            touch: false,
            slide: ".slider_img",
            items: 1
        };
        var options = $.extend(defaults, options);
        return this.each(function () {
            var $this = $(this);
            var currentIndex = options.slideToStart;
            var wrapper = $this.find(".wmuSlider");
            var slides = $this.find(options.slide);
            var slidesCount = slides.length;
            var slideshowTimeout;
            var paginationControl;
            var isAnimating;
            var loadSlide = function (index, infinite) {
                if (isAnimating) {
                    return false
                }
                isAnimating = true;
                currentIndex = index;
                var slide = $(slides[index]);
                $this.animate({
                    height: slide.innerHeight()
                });
                if (options.animation == "fade") {
                    slides.css({
                        position: "absolute",
                        opacity: 0
                    });
                    slide.css("position", "relative");
                    slide.animate({
                        opacity: 1
                    }, options.animationDuration, function () {
                        isAnimating = false
                    })
                } else {
                    if (options.animation == "slide") {
                        if (!infinite) {
                            wrapper.animate({
                                marginLeft: -$this.width() / options.items * index
                            }, options.animationDuration, function () {
                                isAnimating = false
                            })
                        } else {
                            if (index == 0) {
                                wrapper.animate({
                                    marginLeft: -$this.width() / options.items * slidesCount
                                }, options.animationDuration, function () {
                                    wrapper.css("marginLeft", 0);
                                    isAnimating = false
                                })
                            } else {
                                wrapper.animate({
                                    marginLeft: -$this.width() / options.items * index
                                }, options.animationDuration, function () {
                                    isAnimating = false
                                })
                            }
                        }
                    }
                }
                if (paginationControl) {
                    paginationControl.find("a").each(function (i) {
                        if (i == index) {
                            $(this).addClass("wmuActive")
                        } else {
                            $(this).removeClass("wmuActive")
                        }
                    })
                }
                $this.trigger("slideLoaded", index)
            };
            if (options.paginationControl) {
                paginationControl = $('<ul class="bbdd"></ul>');
                if (slides.size() > 1) {
                    $.each(slides, function (i) {
                        paginationControl.append('<li><a href="#">' + i + "</a></li>");
                        paginationControl.find("a:eq(" + i + ")").click(function (e) {
                            e.preventDefault();
                            clearTimeout(slideshowTimeout);
                            loadSlide(i)
                        })
                    });
                    $this.append(paginationControl)
                }
            }
            if (options.slideshow) {
                if (slides.size() > 1) {
                    var slideshow = function () {
                        if (currentIndex + 1 < slidesCount) {
                            loadSlide(currentIndex + 1)
                        } else {
                            loadSlide(0, true)
                        }
                        slideshowTimeout = setTimeout(slideshow, options.slideshowSpeed)
                    };
                    slideshowTimeout = setTimeout(slideshow, options.slideshowSpeed)
                }
            }
            var resize = function () {
                var slide = $(slides[currentIndex]);
                $this.animate({
                    height: slide.innerHeight()
                });
                if (options.animation == "slide") {
                    slides.css({
                        width: $this.width() / options.items
                    });
                    wrapper.css({
                        marginLeft: -$this.width() / options.items * currentIndex,
                        width: $this.width() * slides.length
                    })
                }
            };
            var init = function () {
                var slide = $(slides[currentIndex]);
                var img = slide.find("img");
                img.load(function () {
                    wrapper.show();
                    $this.animate({
                        height: slide.innerHeight()
                    })
                });
                if (options.animation == "fade") {
                    slides.css({
                        position: "absolute",
                        width: "100%",
                        opacity: 0
                    });
                    $(slides[currentIndex]).css("position", "relative")
                } else {
                    if (options.animation == "slide") {
                        if (options.items > slidesCount) {
                            options.items = slidesCount
                        }
                        slides.css("float", "left");
                        slides.each(function (i) {
                            var slide = $(this);
                            slide.attr("data-index", i)
                        });
                        for (var i = 0; i < options.items; i++) {
                            wrapper.append($(slides[i]).clone())
                        }
                        slides = $this.find(options.slide)
                    }
                }
                resize();
                $this.trigger("hasLoaded");
                loadSlide(currentIndex)
            };
            init();
            $(window).resize(resize);
            $this.bind("loadSlide", function (e, i) {
                clearTimeout(slideshowTimeout);
                loadSlide(i)
            })
        })
    }
})(jQuery);
$(".example1").wmuSlider();