const moment = require('moment');
moment.locale(hexo.config.language);

/**
 * Generate html head title based on page type
 */
hexo.extend.helper.register('page_title', (page, site_title, __) => {
    const { is_archive, is_category, is_tag, is_month, is_year } = require('./builtin')(hexo, { page });

    let title = page.title;

    if (is_archive()) {
        title = __('common.archives');
        if (is_month()) {
            title += ': ' + page.year + '/' + page.month;
        } else if (is_year()) {
            title += ': ' + page.year;
        }
    } else if (is_category()) {
        title = __('common.category') + ': ' + page.category;
    } else if (is_tag()) {
        title = __('common.tag') + ': ' + page.tag;
    }

    return [title, site_title].filter(str => typeof(str) !== 'undefined' && str.trim() !== '').join(' - ');
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
