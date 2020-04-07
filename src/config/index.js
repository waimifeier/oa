const packageJson = require('../../package.json');

// https://github.com/NelsonEAX/vue-vuetify-admin
module.exports = {
    title: packageJson.title,

    /**
     * @type {String} '0.0.1'
     * @description Application version.
     * After the release of the new version, it is reset to the default settings.
     */
    version: packageJson.version,

    /**
     * @type {String} 'localStorage' | 'sessionStorage'
     * @description Storage for user settings and sessions.
     */
    storage: 'localStorage',

    /**
     * @type {String} 'vva_'
     * @description Key prefix for data in storage.
     */
    prefix: 'vva_',

    /**
     * @type {Number} 604800
     * @description User session storage time in seconds.
     * Default 7 days
     */
    ttl: /* 7 * 24 * 60 * */ 60,

    /**
     * @type {Object}
     * @description Default application settings.
     */
    settings: {
        locale: 'en',
        footer: false,
        navbar: {
            show: true,
            mini: true,
            style: 'horizontal'  //  vertical(竖着的) ，horizontal(横着的)
        },
        fullscreen: {
            show: false,
            btn: true,
        },
        settingsPanel: {
            show: false,
            btn: true,
        },
        theme: {
            index: 1,
            dark: false,
        },
    }
};
