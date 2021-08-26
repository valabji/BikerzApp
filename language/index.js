import { I18nManager } from 'react-native';
import { Restart } from 'fiction-expo-restart';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function langinit() {
    AsyncStorage.getItem('@lang').then(lang => {
        global.lang = lang
        if (lang == "ar" && !I18nManager.isRTL) {
            I18nManager.allowRTL(true)
            I18nManager.forceRTL(true)
            Restart()
        }
        if (lang == "en" && I18nManager.isRTL) {
            I18nManager.allowRTL(false)
            I18nManager.forceRTL(false)
            Restart()
        }
        // console.log("isRTL : " + I18nManager.isRTL)
        // console.error("Lang Check : " + I18nManager.isRTL + " : " + lang + " : " + t("login"))
    })
}

export const t = (n) => {
    let l = require("./en.json")
    if (global.lang == "ar") {
        l = require("./ar.json")
    }
    return l[n];
}