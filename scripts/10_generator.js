const _ = require('underscore');
const indexGenerator = require('hexo-generator-index/lib/generator');
const archiveGenerator = require('hexo-generator-archive/lib/generator');
const categoryGenerator = require('hexo-generator-category/lib/generator');
const tagGenerator = require('hexo-generator-tag/lib/generator');

function pathJoin(...paths) {
    return paths.join('/');
}

function withLanguage(func) {
    return function(locals) {
        let languages = this.config.language;
        if (!Array.isArray(languages)) {
            languages = [languages];
        }
        return func.call(this, languages, locals);
    }
}

/**
 * Multi-language index generator.
 *
 * ATTENTION: This will override the default index generator!
 */
hexo.extend.generator.register('index', withLanguage(function(languages, locals) {
    return _.flatten(languages.map((language, i) => {
        // Filter posts by language considering. Posts without a language is considered of the default language.
        const posts = locals.posts.filter(post => post.lang === language || (i === 0 && !post.lang));
        if (posts.length === 0) {
            return null;
        }
        const routes = indexGenerator.call(this, Object.assign({}, locals, {
            posts: posts
        }));
        if (i === 0) {
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
    }).filter(post => post !== null), true);
}));

/**
 * Multi-language archive generator.
 *
 * ATTENTION: This will override the default archive generator!
 */
hexo.extend.generator.register('archive', withLanguage(function(languages, locals) {
    return _.flatten(languages.map((language, i) => {
        // Filter posts by language considering. Posts without a language is considered of the default language.
        const posts = locals.posts.filter(post => post.lang === language || (i === 0 && !post.lang));
        if (posts.length === 0) {
            return null;
        }
        const routes = archiveGenerator.call(this, Object.assign({}, locals, {
            posts: posts
        }));
        if (i === 0) {
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
    }).filter(post => post !== null), true);
}));

/**
 * Multi-language category generator.
 *
 * ATTENTION: This will override the default category generator!
 */
hexo.extend.generator.register('category', withLanguage(function(languages, locals) {
    return _.flatten(languages.map((language, i) => {
        const categories = locals.categories.map(category => {
            // Filter posts by language considering. Posts without a language is considered of the default language.
            const posts = category.posts.filter(post => post.lang === language || (i === 0 && !post.lang));
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
        if (i === 0) {
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
    }).filter(post => post !== null), true);
}));

/**
 * Multi-language tag generator.
 *
 * ATTENTION: This will override the default tag generator!
 */
hexo.extend.generator.register('tag', withLanguage(function(languages, locals) {
    return _.flatten(languages.map((language, i) => {
        const tags = locals.tags.map(tag => {
            // Filter posts by language considering. Posts without a language is considered of the default language.
            const posts = tag.posts.filter(post => post.lang === language || (i === 0 && !post.lang));
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
        if (i === 0) {
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
    }).filter(post => post !== null), true);
}));

/**
 * Category list page generator
 */
hexo.extend.generator.register('categories', withLanguage(function(languages, locals) {
    return languages.map((language, i) => {
        const categories = locals.categories.map(category => {
            // Filter posts by language considering. Posts without a language is considered of the default language.
            const posts = category.posts.filter(post => post.lang === language || (i === 0 && !post.lang));
            if (posts.length === 0) {
                return null;
            }
            return Object.assign({}, category, {
                posts: posts
            });
        }).filter(category => category !== null);
        return {
            path: i !== 0 ? pathJoin(language, 'categories/') : 'categories/',
            layout: ['categories'],
            data: Object.assign({}, locals, {
                _categories: categories
            })
        };
    })
}));

/**
 * Tag list page generator
 */
hexo.extend.generator.register('tags', withLanguage(function(languages, locals) {
    return languages.map((language, i) => {
        const tags = locals.tags.map(tag => {
            // Filter posts by language considering. Posts without a language is considered of the default language.
            const posts = tag.posts.filter(post => post.lang === language || (i === 0 && !post.lang));
            if (posts.length === 0) {
                return null;
            }
            return Object.assign({}, tag, {
                posts: posts
            });
        }).filter(category => category !== null);
        return {
            path: i !== 0 ? pathJoin(language, 'tags/') : 'tags/',
            layout: ['tags'],
            data: Object.assign({}, locals, {
                _tags: tags
            })
        };
    })
}));

try {
    require.resolve('hexo-generator-json-content');
    const jsonContentGenerator = hexo.extend.generator.get('json-content');

    /**
     * Multi-language tag generator.
     *
     * ATTENTION: This will override the default tag generator!
     */
    hexo.extend.generator.register('json-content', withLanguage(function(languages, locals) {
        return _.flatten(languages.map((language, i) => {
            const site = {
                pages: locals.pages.filter(page => page.lang === language || (i === 0 && !page.lang)),
                posts: locals.posts.filter(post => post.lang === language || (i === 0 && !post.lang))
            };
            try {
                // Shouldn't use private function _rejectionHandler0 here, but I don't want to copy
                // the entire hexo-generator-json-content!
                return Object.assign({}, jsonContentGenerator(site)._rejectionHandler0, {
                    path: i === 0 ? 'content.json' : 'content.' + language + '.json'
                })
            } catch(e) {
                return null;
            }
        }).filter(json => json !== null));
    }));
} catch(e) {}

/**
 * Append language directory to the post tags and categories
 */
hexo.extend.filter.register('before_post_render', function(data){
    data._categories = data.categories ? data.categories.map(category => {
        return {
            name: category.name,
            path: data.lang ? pathJoin(data.lang, category.path) : category.path
        };
    }) : [];
    data._tags = data.tags ? data.tags.map(tag => {
        return {
            name: tag.name,
            path: data.lang ? pathJoin(data.lang, tag.path) : tag.path
        };
    }) : [];
    return data;
});