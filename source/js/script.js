(function ($) {
    $('.article-entry').each(function(i) {
        $(this).find('img').each(function() {
            if (this.alt) {
                $(this).after('<span class="caption">' + this.alt + '</span>');
            }
        });

        $(this).readingTime({
            readingTimeTarget: $(this).parent().find('.reading-time'),
            wordCountTarget: $(this).parent().find('.word-count'),
        });
    });

    $('.article-meta time').each(function (i) {
        $(this).text(moment($(this).text()).fromNow())
    });

    $('.navbar-burger').click(function () {
        $(this).toggleClass('is-active');
        $('.navbar-main .navbar-start').toggleClass('is-active');
        $('.navbar-main .navbar-end').toggleClass('is-active');
    });
})(jQuery);