(function ($) {
    moment.locale(window.__LANG__);

    $('.article-meta time').each(function (i) {
        $(this).text(moment($(this).text()).fromNow())
    });

    $('.navbar-burger').click(function () {
        $(this).toggleClass('is-active');
        $('.navbar-main .navbar-start').toggleClass('is-active');
        $('.navbar-main .navbar-end').toggleClass('is-active');
    });

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.navbar-main').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta) {
            return;
        }

        // If they scrolled down and are past the navbar, add class .navbar-down.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            var posY = Math.min(st, navbarHeight);
            // Scroll Down
            $('.navbar-main').css({
                '-webkit-transform' : 'translateY(-' + posY + 'px)',
                '-moz-transform'    : 'translateY(-' + posY + 'px)',
                '-ms-transform'     : 'translateY(-' + posY + 'px)',
                '-o-transform'      : 'translateY(-' + posY + 'px)',
                'transform'         : 'translateY(-' + posY + 'px)'
            });
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.navbar-main').css({
                    '-webkit-transform' : 'translateY(0px)',
                    '-moz-transform'    : 'translateY(0px)',
                    '-ms-transform'     : 'translateY(0px)',
                    '-o-transform'      : 'translateY(0px)',
                    'transform'         : 'translateY(0px)'
                });
            }
        }

        lastScrollTop = st;
    }

    $('.lightgallery img').each(function () {
        // wrap images with link and add caption if possible
        if ($(this).parent('a').length === 0) {
            $(this).wrap('<a class="gallery-item" href="' + $(this).attr('src') + '"></a>');
            if (this.alt) {
                $(this).after('<div class="caption">' + this.alt + '</div>');
            }
        }
    });
    $('.lightgallery').lightGallery({ selector: '.gallery-item' });
    $('.justified-gallery').justifiedGallery();
})(jQuery);