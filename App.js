import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity, Share, I18nManager, LogBox } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Feather, Ionicons } from '@expo/vector-icons';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabNavigator from './navigation/BottomTabNavigator';
import NestedNavigations from './navigation/NestedNavigations';
import LoginScreen from './screens/LoginScreen'
import RegScreen from './screens/Register'
import TabBarIcon from './components/TabBarIcon';
import Screen3 from './screens/Screen3'
import useLinking from './navigation/useLinking';
import Colors from './constants/Colors';
import Constants from 'expo-constants';
import LoadingScreen from './screens/Loading';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  useFonts,
  Tajawal_400Regular,
  Tajawal_700Bold,
  Tajawal_900Black,
} from '@expo-google-fonts/tajawal';
import { Cairo_400Regular, Cairo_700Bold, Cairo_900Black } from '@expo-google-fonts/cairo'
import { Poppins_200ExtraLight, Poppins_300Light, Poppins_500Medium, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { Montserrat_400Regular, Montserrat_700Bold, Montserrat_900Black } from '@expo-google-fonts/montserrat';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import Fonts from './constants/Fonts';
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import { Restart } from 'fiction-expo-restart';

const change = createAction('change')
const changeReducer = createReducer({ "obj": { "x": "y", "ActiveS": true, "lang": "ar", "RandomNoti": 2342 } }, {
  [change]: (state, action) => {
    state.obj = action.obj
    return state
  },
})
export const mystore = configureStore({ reducer: changeReducer })

LogBox.ignoreAllLogs()

/*
mystore.dispatch({ type: 'change', "obj": { "lang": "ar" } })

const [ft, setFt] = React.useState(true)
const [Azkar, setAzkar] = React.useState(mystore.getState().obj.Azkar)


const chaged = () => {
    try {
        setAzkar(mystore.getState().obj.Azkar)
    } catch (e) {

    }
}

if (ft) {
    setFt(false)
    mystore.subscribe(chaged)
}
*/
const Stack = createStackNavigator();
// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  en: require("./language/en.json"),
  ar: require("./language/ar.json"),
};
// Set the locale once at the beginning of your app.
// i18n.locale = Localization.locale;
i18n.locale = "ar";
global.lang = "ar"
I18nManager.forceRTL = true
if (I18nManager.isRTL && i18n.locale == "ar") {
  I18nManager.forceRTL = true
  I18nManager.allowRTL = true
  // Restart()
} else {
  I18nManager.forceRTL = false
  I18nManager.allowRTL = false
  // Restart()
}

console.log(i18n.locale)
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  let [fontsLoaded] = useFonts({
    Tajawal_400Regular,
    Tajawal_700Bold,
    Tajawal_900Black,
    Cairo_900Black,
    Cairo_700Bold,
    Cairo_400Regular,
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_900Black,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        setInitialNavigationState(await getInitialState());
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);
  if (!isLoadingComplete && !fontsLoaded && !props.skipLoadingScreen) {
    return null
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer
          ref={containerRef}
          initialState={initialNavigationState}
        >
          <NestedNavigations />
        </NavigationContainer>
      </View>
    );

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
