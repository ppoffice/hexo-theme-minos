/**
 * Export moment.duration
 */
hexo.extend.helper.register('duration', (...arguments) => {
    const moment = require('moment');
    return moment.duration.apply(null, arguments);
});