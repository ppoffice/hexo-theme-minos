/**
 * Colored quote block
 */
hexo.extend.tag.register('colorquote', function (args, content) {
    var type =  args[0];
    return '<blockquote class="colorquote ' + type + '">' + content + '</blockquote>';
}, {ends: true});