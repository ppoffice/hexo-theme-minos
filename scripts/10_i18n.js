const _ = require('lodash');
const util = require('hexo-util');
const postGenerator = require('hexo/lib/plugins/generator/post');
const indexGenerator = require('hexo-generator-index/lib/generator');
const archiveGenerator = require('hexo-generator-archive/lib/generator');
const categoryGenerator = require('hexo-generator-category/lib/generator');
const tagGenerator = require('hexo-generator-tag/lib/generator');
const {
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
} = require('../lib/i18n')(hexo);

/**
 * Modify previous and next post link
 */
hexo.extend.generator.register('post', function(locals) {
    return postGenerator(locals).map(route => {
        let post = route.data;
        if (post.next) {
            let next = post.next;
            while (next && post.lang !== next.lang) {
                next = next.next;
            }
            post.next = next;
            if (next) {
                next.prev = post;
            }
        }
        if (post.prev) {
            let prev = post.prev;
            while (prev && post.lang !== prev.lang) {
                prev = prev.prev;
            }
            post.prev = prev;
            if (prev) {
                prev.next = post;
            }
        }
        return route;
    });
});

/**
 * Multi-language index generator.
 *
 * ATTENTION: This will override the default index generator!
 */
hexo.extend.generator.register('index', injectLanguages(function(languages, locals) {
    return _.flatten(languages.map((language) => {
        // Filter posts by language considering. Posts without a language is considered of the default language.
        const posts = locals.posts.filter(postFilter(language));
        if (posts.length === 0) {
            return null;
        }
        const routes = indexGenerator.call(this, Object.assign({}, locals, {
            posts: posts
        }));
        if (isDefaultLanguage(language)) {
            return routes;
        }
        return routes.map(route => {
            const data = Object.assign({}, route.data, {
                base: pathJoin(language, route.data.base),
                current_url: pathJoin(language, route.data.current_url)
            });
            return Object.assign({}, route, {
                path: pathJoin(language, route.path),
                data: data
            });
        });
    }).filter(post => post !== null));
}));

/**
 * Multi-language archive generator.
 *
 * ATTENTION: This will override the default archive generator!
 */
hexo.extend.generator.register('archive', injectLanguages(function(languages, locals) {
    return _.flatten(languages.map((language) => {
        // Filter posts by language considering. Posts without a language is considered of the default language.
        const posts = locals.posts.filter(postFilter(language));
        if (posts.length === 0) {
            return null;
        }
        const routes = archiveGenerator.call(this, Object.assign({}, locals, {
            posts: posts
        }));
        if (isDefaultLanguage(language)) {
            return routes;
        }
        return routes.map(route => {
            const data = Object.assign({}, route.data, {
                base: pathJoin(language, route.data.base),
                current_url: pathJoin(language, route.data.current_url)
            });
            return Object.assign({}, route, {
                path: pathJoin(language, route.path),
                data: data
            });
        });
    }).filter(post => post !== null));
}));

/**
 * Multi-language category generator.
 *
 * ATTENTION: This will override the default category generator!
 */
hexo.extend.generator.register('category', injectLanguages(function(languages, locals) {
    return _.flatten(languages.map((language) => {
        const categories = locals.categories.map(category => {
            // Filter posts by language considering. Posts without a language is considered of the default language.
            const posts = category.posts.filter(postFilter(language));
            if (posts.length === 0) {
                return null;
            }
            return Object.assign({}, category, {
                posts: posts
            });
        }).filter(category => category !== null);
        if (categories.length === 0) {
            return null;
        }

        const routes = categoryGenerator.call(this, Object.assign({}, locals, {
            categories: categories
        }));
        if (isDefaultLanguage(language)) {
            return routes;
        }
        return routes.map(route => {
            const data = Object.assign({}, route.data, {
                base: pathJoin(language, route.data.base),
                current_url: pathJoin(language, route.data.current_url)
            });
            return Object.assign({}, route, {
                path: pathJoin(language, route.path),
                data: data
            });
        });
    }).filter(post => post !== null));
}));

/**
 * Multi-language tag generator.
 *
 * ATTENTION: This will override the default tag generator!
 */
hexo.extend.generator.register('tag', injectLanguages(function(languages, locals) {
    return _.flatten(languages.map((language) => {
        const tags = locals.tags.map(tag => {
            // Filter posts by language considering. Posts without a language is considered of the default language.
            const posts = tag.posts.filter(postFilter(language));
            if (posts.length === 0) {
                return null;
            }
            return Object.assign({}, tag, {
                posts: posts
            });
        }).filter(category => category !== null);
        if (tags.length === 0) {
            return null;
        }

        const routes = tagGenerator.call(this, Object.assign({}, locals, {
            tags: tags
        }));
        if (isDefaultLanguage(language)) {
            return routes;
        }

        return routes.map(route => {
            const data = Object.assign({}, route.data, {
                base: pathJoin(language, route.data.base),
                current_url: pathJoin(language, route.data.current_url)
            });
            return Object.assign({}, route, {
                path: pathJoin(language, route.path),
                data: data
            });
        });
    }).filter(post => post !== null));
}));

/**
 * Category list page generator
 */
hexo.extend.generator.register('categories', injectLanguages(function(languages, locals) {
    return languages.map((language) => {
        const categories = locals.categories.map(category => {
            // Filter posts by language considering. Posts without a language is considered of the default language.
            const posts = category.posts.filter(postFilter(language));
            if (posts.length === 0) {
                return null;
            }
            return Object.assign({}, category, {
                posts: posts,
                path: isDefaultLanguage(language) ? category.path : pathJoin(language, category.path)
            });
        }).filter(category => category !== null);
        return {
            path: isDefaultLanguage(language) ? 'categories/' : pathJoin(language, 'categories/'),
            layout: ['categories'],
            data: Object.assign({}, locals, {
                _categories: categories,
                __categories: true
            })
        };
    })
}));

/**
 * Tag list page generator
 */
hexo.extend.generator.register('tags', injectLanguages(function(languages, locals) {
    return languages.map((language) => {
        const tags = locals.tags.map(tag => {
            // Filter posts by language considering. Posts without a language is considered of the default language.
            const posts = tag.posts.filter(postFilter(language));
            if (posts.length === 0) {
                return null;
            }
            return Object.assign({}, tag, {
                posts: posts,
                path: isDefaultLanguage(language) ? tag.path : pathJoin(language, tag.path)
            });
        }).filter(category => category !== null);
        return {
            path: isDefaultLanguage(language) ? 'tags/' : pathJoin(language, 'tags/'),
            layout: ['tags'],
            data: Object.assign({}, locals, {
                _tags: tags,
                __tags: true
            })
        };
    })
}));

/**
 * Multi-language insight search content.json generator.
 *
 * ATTENTION: This will override the default insight search content.json generator!
 */
hexo.extend.generator.register('insight', injectLanguages(function(languages, locals) {
    function minify(str) {
        return util.stripHTML(str).trim().replace(/\n/g, ' ').replace(/\s+/g, ' ');
    }
    function postMapper(post) {
        return {
            title: post.title,
            text: minify(post.content),
            link: url_for(post.path)
        }
    }
    function tagMapper(language) {
        return function (tag) {
            return {
                name: tag.name,
                slug: tag.slug,
                link: url_for(isDefaultLanguage(language) ? tag.path : pathJoin(language, tag.path))
            }
        }
    }
    return languages.map((language) => {
        const site = {
            pages: locals.pages.filter(postFilter(language)).map(postMapper),
            posts: locals.posts.filter(postFilter(language)).map(postMapper),
            tags: locals.tags.filter(tag => tag.posts.some(postFilter(language)))
                .map(tagMapper(language)),
            categories: locals.categories.filter(category => category.posts.some(postFilter(language)))
                .map(tagMapper(language)),
        };
        return {
            path: isDefaultLanguage(language) ? 'content.json' : 'content.' + language + '.json',
            data: JSON.stringify(site)
        };
    });
}));

/**
 * Append language directory to the post tags and categories
 */
hexo.extend.filter.register('before_post_render', function(data) {
    data.lang = getPageLanguage(data);
    data._categories = data.categories ? data.categories.map(category => {
        return {
            name: category.name,
            path: !isDefaultLanguage(data.lang) ? pathJoin(data.lang, category.path) : category.path
        };
    }) : [];
    data._tags = data.tags ? data.tags.map(tag => {
        return {
            name: tag.name,
            path: !isDefaultLanguage(data.lang) ? pathJoin(data.lang, tag.path) : tag.path
        };
    }) : [];
    return data;
});

/**
 * Get all languages set in the site's _config.yml
 */
hexo.extend.helper.register('display_languages', function () {
    return getDisplayLanguages();
});

/**
 * Test if the given language is sites default language.
 */
hexo.extend.helper.register('is_default_language', function (language) {
    return isDefaultLanguage(language);
});

/**
 * Get page language. Returns empty if language is not found or is default language.
 */
hexo.extend.helper.register('page_language', function () {
    return getPageLanguage(this.page);
});

/**
 * Get page path given a certain language tag
 */
hexo.extend.helper.register('i18n_path', function (language) {
    const path = this.page.path;
    const lang = getPageLanguage(this.page);
    const base = path.startsWith(lang) ? path.slice(lang.length + 1) : path;
    return (language ? '/' + language : '') + '/' + base;
});

/**
 * Format language to RFC5646 style
 */
hexo.extend.helper.register('rfc5646', function (language) {
    return formatRfc5646(language);
});

/**
 * Return the ISO639 part of the language tag
 */
hexo.extend.helper.register('iso639', function (language) {
    return formatIso639(language);
});

/**
 * Get the closest language tag to the provided language tag
 */
hexo.extend.helper.register('closest_rfc5646_with_country_code', function (language) {
    return getClosestRfc5646WithCountryCode(language);
});

/**
 * Get the language name
 */
hexo.extend.helper.register('language_name', function (language) {
    const name = hexo.theme.i18n.__(language)('name');
    return name === 'name' ? language : name;
});