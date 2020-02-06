const cheerio = require('cheerio');

/**
 * Colored quote block
 */
hexo.extend.tag.register('colorquote', function (args, content) {
    var type = args[0];
    return '<blockquote class="colorquote ' + type + '">' + hexo.render.renderSync({ text: content, engine: 'markdown' }) + '</blockquote>';
}, { ends: true });

const rEscapeContent = /<escape(?:[^>]*)>([\s\S]*?)<\/escape>/g;
const rPlaceholder = /(?:<|&lt;)epacse(?:[^>]*)(?:>|&gt;)(\d+)(?:<|&lt;)\/epacse(?:[^>]*)(?:>|&gt;)/g;
const cache = [];
function escapeContent(str) {
    return '<epacse hidden>' + (cache.push(str) - 1) + '</epacse>';
}

hexo.extend.filter.register('before_post_render', function (data) {
    data.content = data.content.replace(rEscapeContent, function (match, content) {
        return escapeContent(content);
    });
    return data;
});

hexo.extend.filter.register('after_post_render', function (data) {
    data.content = data.content.replace(rPlaceholder, function () {
        return cache[arguments[1]];
    });
    return data;
});

function patchCodeHighlight(content) {
    const $ = cheerio.load(content, { decodeEntities: true });
    $('figure.highlight').addClass('hljs');
    $('figure.highlight .code .line span').each(function () {
        const classes = $(this).attr('class').split(' ');
        if (classes.length === 1) {
            $(this).addClass('hljs-' + classes[0]);
            $(this).removeClass(classes[0]);
        }
    });
    return $.html();
}

/**
* Add .hljs class name to the code blocks and code elements.
* Note: must be put after the above escape patch (hexojs/hexo#2400)
*/
hexo.extend.filter.register('after_post_render', function (data) {
    data.content = data.content ? patchCodeHighlight(data.content) : data.content;
    data.excerpt = data.excerpt ? patchCodeHighlight(data.excerpt) : data.excerpt;
    return data;
});
