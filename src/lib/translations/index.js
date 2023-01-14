import i18n from 'sveltekit-i18n';
import lang from './lang.json';

/** @type {import('sveltekit-i18n').Config} */
export const config = {
    translations: {
        en: { lang },
        it: { lang },
    },
    loaders: [
        {
            locale: 'en',
            key: 'about',
            routes: ['/about'],
            loader: async () => (await import('./en/about.json')).default,
        },
        // {
        //     locale: 'en',
        //     key: 'home',
        //     routes: ['/'],
        //     loader: async () => (await import('./en/home.json')).default,
        // },
        {
            locale: 'it',
            key: 'about',
            routes: ['/about'],
            loader: async () => (await import('./it/about.json')).default,
        },
        // {
        //     locale: 'it',
        //     key: 'home',
        //     routes: ['/'],
        //     loader: async () => (await import('./it/home.json')).default,
        // },
    ],
};

export const { t, loading, locales, locale, loadTranslations } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));