module.exports = function(hexo, context) {
  return {
    is_archive: hexo.extend.helper.get('is_archive').bind(context),
    is_category: hexo.extend.helper.get('is_category').bind(context),
    is_tag: hexo.extend.helper.get('is_tag').bind(context),
    is_month: hexo.extend.helper.get('is_month').bind(context),
    is_year: hexo.extend.helper.get('is_year').bind(context),
  }
};