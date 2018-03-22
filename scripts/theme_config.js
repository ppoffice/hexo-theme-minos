/**
 * Theme configuration helper.
 */
hexo.extend.helper.register('has_config', (configName) => {
    const paths = configName.split('.');
    let _config = hexo.theme.config;
    for (let path of paths) {
        if (_config === null || !_config.hasOwnProperty(path)) {
            return false;
        }
        _config = _config[path];
    }
    return true;
});
hexo.extend.helper.register('get_config', (configName, defaultValue = null) => {
    const paths = configName.split('.');
    let _config = hexo.theme.config;
    for (let path of paths) {
        if (_config === null || !_config.hasOwnProperty(path)) {
            return defaultValue;
        }
        _config = _config[path];
    }
    return _config;
});