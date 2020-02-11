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
        footerShow: (state) => state.footer,
        themeIndex: (state) => state.theme.index,
        themeDark: (state) => state.theme.dark,
    },

    mutations: {
        // 设置setting里面到所有数据
        SET_SETTINGS: (state, payload) => {
            state.locale = payload.locale || state.locale;
            state.footer = payload.footer || state.footer;
            state.navbar = payload.navbar || state.navbar;
            state.fullscreen = payload.fullscreen || state.fullscreen;
            state.theme = payload.theme || state.theme;
            // apply settings to plugins
            setVuetifyTheme(state.theme.index);
            setVuetifyThemeDark(state.theme.dark);
            setLocale(state.locale);
        },
        // 设置语言
        SET_LOCALE: (state, payload) => {
            state.locale = payload.locale;
        },
        // 切换主题
        THEME_TOGGLE: (state, payload) => {
            state.theme.index = payload.index;
        },
        // 切换深色模式
        THEME_DARK_TOGGLE: (state) => {
            state.theme.dark = !state.theme.dark;
        },
        // 切换左侧导航显示/隐藏
        NAVBAR_TOGGLE: (state) => {
            state.navbar.show = !state.navbar.show;
        },
        // 设置左侧导航显示或隐藏
        NAVBAR_STATE: (state, payload) => {
            state.navbar.show = payload.state;
        },
        // 设置导航样式
        NAVBAR_STYLE: (state, payload) => {
            state.navbar.style = payload;
        },
        // 切换全屏
        FULLSCREEN_TOGGLE: (state, payload) => {
            state.fullscreen.show = payload.state;
        },
        // 设置全屏按钮显示隐藏状态
        FULLSCREEN_BTN: (state, payload) => {
            state.fullscreen.btn = payload.state;
        },
        // 切换footer显示或隐藏
        FOOTER_TOGGLE: (state) => {
            state.footer = !state.footer;
        },
    },
    actions: {
        // 设置语言
        SetLocale: async (context, payload) => {
            context.commit('SET_LOCALE', payload);
            await setLocale(payload.locale);
        },
        //设置主题
        ThemeToggle: async (context, payload) => {
            context.commit('THEME_TOGGLE', payload);
            await setVuetifyTheme(payload.index);
        },
        // 切换深色模式
        ThemeDarkToggle: async (context) => {
            context.commit('THEME_DARK_TOGGLE');
            await setVuetifyThemeDark(context.state.theme.dark);
        },
        NavbarToggle: async (context, payload) => {
            context.commit('NAVBAR_TOGGLE', payload);
        },
        NavbarState: async (context, payload) => {
            context.commit('NAVBAR_STATE', payload);
        },
        NavbarStyle: async (context, payload) => {
            if(payload==='horizontal'){
                context.commit('NAVBAR_STATE', false);
            }else if(payload==='vertical'){
                context.commit('NAVBAR_STATE', true);
            }
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
