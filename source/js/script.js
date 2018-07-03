(function ($) {
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

    $('.article.gallery img:not(".not-gallery-item")').each(function () {
        // wrap images with link and add caption if possible
        if ($(this).parent('a').length === 0) {
            $(this).wrap('<a class="gallery-item" href="' + $(this).attr('src') + '"></a>');
            if (this.alt) {
                $(this).after('<div class="caption">' + this.alt + '</div>');
            }
        }
    });

    $('.article-entry').find('h1, h2, h3, h4, h5, h6').on('click', function () {
        if ($(this).get(0).id) {
            window.location.hash = $(this).get(0).id;
        }
    });

    if (typeof(moment) === 'function') {
        $('.article-meta time').each(function () {
            $(this).text(moment($(this).attr('datetime')).fromNow());
        });
    }
})(jQuery);