const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const altConfigs = {};
const themeRoot = path.join(__dirname, '..');

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

/**
 * Get alternative theme config file by page language
 *
 * @param lang page language
 * @returns Object merged theme config
 */
function getThemeConfig(lang = null) {
    if (lang) {
        if (!altConfigs.hasOwnProperty(lang)) {
            const configPath = path.join(themeRoot, '_config.' + lang + '.yml');
            if (fs.existsSync(configPath)) {
                const config = yaml.load(fs.readFileSync(configPath));
                if (config != null) {
                    altConfigs[lang] = config;
                }
            }
        }
        if (altConfigs.hasOwnProperty(lang) && altConfigs[lang]) {
            return Object.assign({}, hexo.theme.config, altConfigs[lang]);
        }
    }
    return hexo.theme.config;
}

hexo.extend.helper.register('has_config', function (configName, excludePage = false) {
    return getConfig(Object.assign({},
        this.config,
        getThemeConfig(this.page.lang),
        !excludePage ? this.page : {}), configName) !== null;
});

hexo.extend.helper.register('get_config', function (configName, defaultValue = null, excludePage = false) {
    let config = getConfig(Object.assign({},
        this.config,
        getThemeConfig(this.page.lang),
        !excludePage ? this.page : {}), configName);
    return config === null ? defaultValue : config;
});