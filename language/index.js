import { I18nManager } from 'react-native';
import { Restart } from 'fiction-expo-restart';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

export function langinit() {
    i18n.translations = {
        en: require('./en.json'),
        ar: require('./ar.json'),
    };
    console.log("isRTL : " + I18nManager.isRTL)
    if (lang == "ar" && !I18nManager.isRTL) {
        I18nManager.allowRTL(true)
        I18nManager.forceRTL(true)
        i18n.locale = "ar"
        Restart()
    }
    if (lang == "en" && I18nManager.isRTL) {
        I18nManager.allowRTL(false)
        I18nManager.forceRTL(false)
        i18n.locale = "en"
        Restart()
    }
    console.log("isRTL : " + I18nManager.isRTL)
}

export const t = (n) => { return i18n.t(n) }