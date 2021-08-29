import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity, Share, LogBox, Alert } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Feather, Ionicons } from '@expo/vector-icons';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NestedNavigations from './navigation/NestedNavigations';
import useLinking from './navigation/useLinking';
import Constants from 'expo-constants';
import * as Linking from 'expo-linking';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useFonts,
  Tajawal_400Regular,
  Tajawal_700Bold,
  Tajawal_900Black,
} from '@expo-google-fonts/tajawal';
import { Cairo_400Regular, Cairo_700Bold, Cairo_900Black } from '@expo-google-fonts/cairo'
import { Poppins_200ExtraLight, Poppins_300Light, Poppins_500Medium, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { Montserrat_400Regular, Montserrat_700Bold, Montserrat_900Black } from '@expo-google-fonts/montserrat';
import { langinit } from './language';
import I18n from 'i18n-js';

LogBox.ignoreAllLogs()

const Stack = createStackNavigator();
export default function App(props) {
  // SplashScreen.preventAutoHideAsync();
  // I18n.locale = "ar"

  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [ft, setFt] = React.useState(true);
  const [ft2, setFt2] = React.useState(true);
  const [dt, setDt] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(true);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  const prefix = Linking.makeUrl("/")

  const linking = {
    prefixes:[prefix],
    config:{
      screens:{
        "Offers":"Offers"
      }
    }
  }


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
        global.token = await AsyncStorage.getItem("@token") || ""
        global.fullname = await AsyncStorage.getItem("@fullname") || ""
        global.uid = await AsyncStorage.getItem("@uid") || ""
        global.avatar = await AsyncStorage.getItem("@avatar") || ""
        global.email = await AsyncStorage.getItem("@email") || ""
        global.phone = await AsyncStorage.getItem("@phone") || ""
        global.user = await AsyncStorage.getItem("@user") || ""
        const test = await AsyncStorage.getItem("@token")
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
        if (ft2) {
          setFt2(false)
          // SplashScreen.hideAsync();
        }
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
