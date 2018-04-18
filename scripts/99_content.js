const _ = require('lodash');
const moment = require('moment');
const cheerio = require('cheerio');
const { formatRfc5646, formatIso639, getClosestRfc5646WithCountryCode, getPageLanguage } = require('./10_i18n');

const MOMENTJS_SUPPORTED_LANGUAGES = ['af', 'ar-dz', 'ar-kw', 'ar-ly', 'ar-ma', 'ar-sa',
    'ar-tn', 'ar', 'az', 'be', 'bg', 'bm', 'bn', 'bo', 'br', 'bs', 'ca', 'cs', 'cv', 'cy',
    'da', 'de-at', 'de-ch', 'de', 'dv', 'el', 'en-au', 'en-ca', 'en-gb', 'en-ie', 'en-il',
    'en-nz', 'eo', 'es-do', 'es-us', 'es', 'et', 'eu', 'fa', 'fi', 'fo', 'fr-ca', 'fr-ch',
    'fr', 'fy', 'gd', 'gl', 'gom-latn', 'gu', 'he', 'hi', 'hr', 'hu', 'hy-am', 'id', 'is',
    'it', 'ja', 'jv', 'ka', 'kk', 'km', 'kn', 'ko', 'ky', 'lb', 'lo', 'lt', 'lv', 'me',
    'mi', 'mk', 'ml', 'mn', 'mr', 'ms-my', 'ms', 'mt', 'my', 'nb', 'ne', 'nl-be', 'nl',
    'nn', 'pa-in', 'pl', 'pt-br', 'pt', 'ro', 'ru', 'sd', 'se', 'si', 'sk', 'sl', 'sq',
    'sr-cyrl', 'sr', 'ss', 'sv', 'sw', 'ta', 'te', 'tet', 'tg', 'th', 'tl-ph', 'tlh', 'tr',
    'tzl', 'tzm-latn', 'tzm', 'ug-cn', 'uk', 'ur', 'uz-latn', 'uz', 'vi', 'x-pseudo', 'yo',
    'zh-cn', 'zh-hk', 'zh-tw'];

function injectMomentLocale(func) {
    return function() {
        let language = formatRfc5646(getPageLanguage(this.page));
        if (MOMENTJS_SUPPORTED_LANGUAGES.indexOf(language) === -1) {
            if (MOMENTJS_SUPPORTED_LANGUAGES.indexOf(formatIso639(language)) > -1) {
                language = formatIso639(language);
            } else if (MOMENTJS_SUPPORTED_LANGUAGES.indexOf(getClosestRfc5646WithCountryCode(language).toLowerCase()) > -1) {
                language = getClosestRfc5646WithCountryCode(language);
            }
        }
        moment.locale(language);
        const args = Array.prototype.slice.call(arguments).map(arg => {
            if (arg instanceof moment) {
                return moment(arg).locale(language);
            }
            return arg;
        });
        return func.apply(this, args);
    }
}

hexo.extend.helper.register('is_categories', function () {
    return this.page.__categories;
});

hexo.extend.helper.register('is_tags', function () {
    return this.page.__tags;
});

/**
 * Generate html head title based on page type
 */
hexo.extend.helper.register('page_title', function() {
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
    } else if (this.is_categories()) {
        title = this.__('common.categories');
    } else if (this.is_tags()) {
        title = this.__('common.tags');
    }

    const getConfig = hexo.extend.helper.get('get_config').bind(this);

    return [title, getConfig('title', '', true)].filter(str => typeof(str) !== 'undefined' && str.trim() !== '').join(' - ');
});

/**
 * Format date to string without year.
 */
hexo.extend.helper.register('format_date', injectMomentLocale(function(date) {
    return moment(date).format('MMM D');
}));

/**
 * Export moment.duration
 */
hexo.extend.helper.register('duration', injectMomentLocale(function() {
    return moment.duration.apply(null, arguments);
}));

/**
 * Get the difference between the page date time from now
 */
hexo.extend.helper.register('from_now', injectMomentLocale(function(date = null) {
    return moment(date || this.page.date).fromNow();
}));

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
    headings.each(function() {
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