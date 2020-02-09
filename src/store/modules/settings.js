import { settings as defaultSettings, version } from '@/config';
import { setVuetifyThemeDark, setVuetifyTheme } from '@/plugins/vuetify';
import { setLocale } from '@/locale';

const getDefaultSettings = () => {
    const settings = JSON.parse(JSON.stringify(defaultSettings));
    return settings;
};

const settings = {
    state: getDefaultSettings(), // Deep Clone

    getters: {
        version: () => version,
        locale: (state) => state.locale,
        navbarShow: (state) => state.navbar.show,
        navbarStyle: (state) => state.navbar.style,
        fullscreenBtn: (state) => state.fullscreen.btn,
        fullscreenShow: (state) => state.fullscreen.show,
        settingsPanelBtn: (state) => state.settingsPanel.btn,
        settingsPanelShow: (state) => state.settingsPanel.show,
        footerShow: (state) => state.footer,
        themeIndex: (state) => state.theme.index,
        themeDark: (state) => state.theme.dark,
    },

    mutations: {
        SET_SETTINGS: (state, payload) => {
            state.locale = payload.locale || state.locale;
            state.footer = typeof payload.dense === 'boolean' ? payload.footer : state.footer;
            state.navbar = payload.navbar || state.navbar;
            state.fullscreen = payload.fullscreen || state.fullscreen;
            state.theme = payload.theme || state.theme;
            // apply settings to plugins
            setVuetifyTheme(state.theme.index);
            setVuetifyThemeDark(state.theme.dark);
            setLocale(state.locale);
        },
        SET_LOCALE: (state, payload) => {
            state.locale = payload.locale;
        },
        THEME_TOGGLE: (state, payload) => {
            state.theme.index = payload.index;
        },
        THEME_DARK_TOGGLE: (state) => {
            state.theme.dark = !state.theme.dark;
        },

        NAVBAR_TOGGLE: (state) => {
            state.navbar.show = !state.navbar.show;
        },
        NAVBAR_STATE: (state, payload) => {
            state.navbar.show = payload.state;
        },
        NAVBAR_STYLE: (state, payload) => {
           // console.log(payload.style)
            state.navbar.style = payload;
        },
        FULLSCREEN_TOGGLE: (state, payload) => {
            state.fullscreen.show = payload.state;
        },
        FULLSCREEN_BTN: (state, payload) => {
            state.fullscreen.btn = payload.state;
        },
        FOOTER_TOGGLE: (state) => {
            state.footer = !state.footer;
        },
    },
    actions: {
        SetLocale: async (context, payload) => {
            context.commit('SET_LOCALE', payload);
            await setLocale(payload.locale);
        },
        ThemeToggle: async (context, payload) => {
            context.commit('THEME_TOGGLE', payload);
            await setVuetifyTheme(payload.index);
        },
        ThemeDarkToggle: async (context) => {
            context.commit('THEME_DARK_TOGGLE');
            await setVuetifyThemeDark(context.state.theme.dark);
        },
        ToolbarDenseToggle: async (context) => {
            context.commit('TOOLBAR_DENSE_TOGGLE');
        },
        NavbarDenseToggle: async (context) => {
            context.commit('NAVBAR_DENSE_TOGGLE');
        },
        NavbarLogoToggle: async (context, payload) => {
            context.commit('NAVBAR_LOGO_TOGGLE', payload);
        },
        NavbarToggle: async (context, payload) => {
            context.commit('NAVBAR_TOGGLE', payload);
        },
        NavbarState: async (context, payload) => {
            context.commit('NAVBAR_STATE', payload);
        },
        NavbarStyle: async (context, payload) => {
            context.commit('NAVBAR_STYLE', payload);
        },
        FullscreenToggle: async (context, payload) => {
            context.commit('FULLSCREEN_TOGGLE', payload);
        },
        FullscreenBtn: async (context, payload) => {
            context.commit('FULLSCREEN_BTN', payload);
        },
        FooterToggle: async (context) => {
            context.commit('FOOTER_TOGGLE');
        },
    },
};

export default settings;
