const _ = require('underscore');
const moment = require('moment');
const cheerio = require('cheerio');

/**
 * Get page language. Returns empty if language is not found or is default language.
 */
hexo.extend.helper.register('lang', function () {
    let language = this.page.lang;
    let languages = this.config.language;
    if (!Array.isArray(languages)) {
        languages = [languages];
    }
    return languages.indexOf(language) > 0 ? language : '';
});

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

    const getConfig = hexo.extend.helper.get('get_config').bind(this);

    return [title, getConfig('title', '', true)].filter(str => typeof(str) !== 'undefined' && str.trim() !== '').join(' - ');
});

/**
 * Format date to string without year.
 */
hexo.extend.helper.register('format_date', function (date) {
    if (date instanceof moment) {
        date = moment(date).locale(this.page.lang || hexo.config.language);
    } else {
        moment.locale(this.page.lang || hexo.config.language);
    }
    return moment(date).format('MMM D');
});

/**
 * Export moment.duration
 */
hexo.extend.helper.register('duration', function (...arguments) {
    moment.locale(this.page.lang || hexo.config.language);
    return moment.duration.apply(null, arguments);
});

/**
 * Get the difference between the page date time from now
 */
hexo.extend.helper.register('from_now', function (date = null) {
    if (date instanceof moment) {
        date = moment(date).locale(this.page.lang || hexo.config.language);
    } else {
        moment.locale(this.page.lang || hexo.config.language);
    }
    return moment(date || this.page.date).fromNow();
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
 * Export a list of headings of an article
 * [
 *     ['1', 'heading-anchor-1', 'Title of the heading 1'],
 *     ['1.1', 'heading-anchor-1-1', 'Title of the heading 1.1'],
 * ]
 */
hexo.extend.helper.register('toc_list', (content) => {
    const $ = cheerio.load(content);
    const levels = [0, 0, 0];
    const headings = $(['h1', 'h2', 'h3'].join(','));

    const tocList = [];
    headings.each(function () {
        const level = +this.name[1];
        const id = $(this).attr('id');
        const text = _.escape($(this).text());

        levels[level - 1] += 1;
        for (let i = level; i < levels.length; i++) {
            levels[i] = 0;
        }
        tocList.push([levels.slice(0, level).join('.'), id, text]);
    });
    return tocList;
});