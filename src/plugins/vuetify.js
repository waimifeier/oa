import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import theme from './theme'
Vue.use(Vuetify);

export default new Vuetify({
    theme:{
        themes:theme,
        default: 'light',
        disable: false,
        options: {
            cspNonce: undefined,
            customProperties: undefined,
            minifyTheme: undefined,
            themeCache: undefined,
        }
    }
});


