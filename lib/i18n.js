const _ = require('lodash');
const util = require('hexo-util');
const RFC5646_TAGS = require('./rfc5646');

const Pattern = util.Pattern;

module.exports = function (hexo) {
    function pathJoin(...paths) {
        return paths.join('/');
    }

    function formatRfc5646(language) {
        if (!language) {
            return '';
        }
        return language.split(/[-_]/).map((l, i) => i === 0 ? l.toLowerCase() : l.toUpperCase()).join('-');
    }

    function formatIso639(language) {
        if (!language) {
            return '';
        }
        return language.split(/[-_]/)[0].toLowerCase();
    }

    function getClosestRfc5646WithCountryCode(language) {
        if (!language) {
            return '';
        }
        const iso639 = formatRfc5646(language).split('-')[0];
        const result = Object.keys(RFC5646_TAGS).find(tag => tag.startsWith(iso639 + '-'));
        return result ? result : iso639;
    }

    function getUsedLanguages() {
        return hexo.theme.i18n.list();
    }

    function getDisplayLanguages() {
        let languages = hexo.config.language;
        if (!languages) {
            return ['default'];
        }
        languages = [].concat(hexo.config.language);
        if (!Array.isArray(languages)) {
            languages = [languages];
        }
        if (languages.indexOf('default') > -1) {
            languages.splice(languages.indexOf('default'), 1);
        }
        return languages;
    }

    function isLanguageValid(language) {
        const variants = [language, formatRfc5646(language)];
        return variants.some(variant => RFC5646_TAGS.hasOwnProperty(variant));
    }

    function injectLanguages(func) {
        return function(locals) {
            return func.call(this, getDisplayLanguages(), locals);
        }
    }

    function getPageLanguage(post) {
        const languages = getUsedLanguages();
        let lang = post.lang || post.language;
        if (!lang && post.source) {
            const path = post.source.startsWith('_posts/') ? post.source.slice('_posts/'.length) : post.source;
            const pattern = new Pattern(`${hexo.config.i18n_dir}/*path`);
            const data = pattern.match(path);

            if (data && data.lang && ~languages.indexOf(data.lang)) {
                lang = data.lang;
            }
        }
        return lang;
    }

    function isDefaultLanguage(language) {
        return !language || getDisplayLanguages().indexOf(language) === 0;
    }

    function postFilter(language) {
        return function (post) {
            let lang = getPageLanguage(post);
            return (lang === language || (isDefaultLanguage(language) && !lang)) && (post.indexing !== false);
        }
    }

    function url_for(path) {
        return hexo.extend.helper.get('url_for').call(hexo, path);
    }

    return {
        pathJoin,
        isDefaultLanguage,
        url_for,
        postFilter,
        injectLanguages,
        getUsedLanguages,
        getDisplayLanguages,
        getPageLanguage,
        isLanguageValid,
        formatRfc5646,
        formatIso639,
        getClosestRfc5646WithCountryCode
    };
};