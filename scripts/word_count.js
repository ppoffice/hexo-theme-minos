/**
 * Get the word count of a paragraph.
 */
hexo.extend.helper.register('word_count', (content) => {
    content = content.replace(/<\/?[a-z][^>]*>/gi, '');
    content = content.trim();
    return content ? (content.replace(/['";:,.?¿\-!¡]+/g, '').match(/\S+/g) || []).length : 0;
});