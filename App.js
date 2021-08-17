import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity, Share, LogBox, Alert } from 'react-native';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { LocalizationProvider, LocalizationContext } from './language';

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
import Fonts from './constants/Fonts';
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import { langinit } from './language';

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

export default function App(props) {
  SplashScreen.preventAutoHideAsync();

  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [ft, setFt] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(true);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);
  /* 
    const {
      translations,
      appLanguage,
      setAppLanguage,
      initializeAppLanguage,
    } = useContext(LocalizationContext); // 1 
    initializeAppLanguage(); // 2  */

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

  if (ft) {
    setFt(false)
    const f = async () => {
      try {
        const lang = await AsyncStorage.getItem('@lang') || "new"
        global.lang = lang
        langinit()
        // AsyncStorage.clear('@lang')
      } catch (e) {

      }
      setIsLoading(false)
    }
    f()
  }

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
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
    if (isLoading) {
      return null
    } else {
      return (
        <View style={styles.container}>
          {/* <LocalizationProvider> */}
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <NavigationContainer
            ref={containerRef}
            initialState={initialNavigationState}
          >
            <NestedNavigations />
          </NavigationContainer>
          {/* </LocalizationProvider> */}
        </View>
      );
    }

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
