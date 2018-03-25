const moment = require('moment');
moment.locale(hexo.config.language);

/**
 * Generate html head title based on page type
 */
hexo.extend.helper.register('page_title', function () {
    const page = this.page;
    let title = page.title;

    if (this.is_archive()) {
        title = this.__('common.archives');
        if (this.is_month()) {
            title += ': ' + page.year + '/' + page.month;
        } else if (this.is_year()) {
            title += ': ' + page.year;
        }
    } else if (this.is_category()) {
        title = this.__('common.category') + ': ' + page.category;
    } else if (this.is_tag()) {
        title = this.__('common.tag') + ': ' + page.tag;
    }

    return [title, hexo.config.title].filter(str => typeof(str) !== 'undefined' && str.trim() !== '').join(' - ');
});

/**
 * Format date to string without year.
 */
hexo.extend.helper.register('format_date', (date) => {
    return moment(date).format('MMM D');
});

/**
 * Get the word count of a paragraph.
 */
hexo.extend.helper.register('word_count', (content) => {
    content = content.replace(/<\/?[a-z][^>]*>/gi, '');
    content = content.trim();
    return content ? (content.match(/[\u00ff-\uffff]|[a-zA-Z]+/g) || []).length : 0;
});

/**
 * Export moment.duration
 */
hexo.extend.helper.register('duration', (...arguments) => {
    return moment.duration.apply(null, arguments);
});
