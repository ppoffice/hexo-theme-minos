/**
 * Theme configuration helper.
 */
function getConfig(config, path) {
    const paths = path.split('.');
    for (let path of paths) {
        if (typeof(config) === 'undefined' || config === null || !config.hasOwnProperty(path)) {
            return null;
        }
        config = config[path];
    }
    return config;
}

hexo.extend.helper.register('has_config', function (configName) {
    return getConfig(Object.assign({}, hexo.theme.config, this.page), configName) !== null;
});

hexo.extend.helper.register('get_config', function (configName, defaultValue = null) {
    let config = getConfig(Object.assign({}, hexo.theme.config, this.page), configName);
    return configName === null ? defaultValue : config;
});