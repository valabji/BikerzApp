import * as React from "react";
import { StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import VIP from "../screens/HomeVip";
import Fav from "../screens/Fav";
import Offer from "../screens/Offer";
import Profile from "../screens/Profile";
import Account from "../screens/Account";
import About from "../screens/About";
import Contact from "../screens/Contact";
import AddOffers from "../screens/AddOffer";
import Colors from "../constants/Colors";
import LoginScreen from "../screens/LoginScreen";
import RegScreen from "../screens/Register";
import { LinearGradient } from "expo-linear-gradient";
import Animated from "react-native-reanimated";
import styles from "../constants/Style";
import { t } from "../language";

import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import Lang from "../screens/Lang";
import Lang2 from "../screens/Lang2";
import Test from "../screens/Test";
import { baseurl } from "../network";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Restart } from "fiction-expo-restart";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function NestedNavigations() {
  const Stack = createStackNavigator();

  function BottomTabNavigation({ navigation, style }) {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <Animated.View
          style={StyleSheet.flatten([
            {
              flex: 1,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 8,
              },
              shadowOpacity: 0.44,
              shadowRadius: 10.32,
              // borderRadius: 25,
              elevation: 16,
              overflow: "hidden",
              // borderWidth: 1,
            },
            style,
          ])}
        >
          <View style={{ flex: 1 }}>
            <BottomTab.Navigator
              initialRouteName={INITIAL_ROUTE_NAME}
              tabBarOptions={{
                showLabel: false,
                style: {
                  height: 60,
                  position: "absolute",
                  bottom: 25,
                  left: 20,
                  right: 20,

                  borderColor: Colors.DGray,
                  borderTopColor: Colors.DGray,
                  borderWidth: 0.25,

                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  borderRadius: 15,
                  ...styles.shadow,
                },
              }}
            >
              <BottomTab.Screen
                name="Main"
                component={HomeScreen}
                options={{
                  tabBarIcon: ({ focused }) => {
                    return (
                      <View
                        style={{
                          width: 70,
                          height: 60,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Ionicons
                          name="home"
                          size={32}
                          color={focused ? Colors.BGreen : Colors.DGray}
                        />
                      </View>
                    );
                  },
                  tabBarButton: (p) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          p.onPress();
                        }}
                      >
                        <View
                          style={{
                            width: 70,
                            height: 60,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {p.children}
                        </View>
                      </TouchableOpacity>
                    );
                  },
                }}
              />
              <BottomTab.Screen
                name="Sc2"
                component={VIP}
                options={{
                  tabBarIcon: ({ focused }) => {
                    return (
                      <View
                        style={{
                          width: 70,
                          height: 60,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <View
                          style={{
                            paddingTop: 5,
                            paddingBottom: 4,
                            paddingLeft: 7,
                            paddingRight: 7,
                            borderRadius: 10,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              color: Colors.BGray,
                              fontSize: 32,
                            }}
                          >
                            🇺🇸
                          </Text>
                        </View>
                      </View>
                    );
                  },
                  tabBarButton: (p) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          p.onPress();
                        }}
                      >
                        <View
                          style={{
                            width: 70,
                            height: 60,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {p.children}
                        </View>
                      </TouchableOpacity>
                    );
                  },
                }}
              />
              <BottomTab.Screen
                name="Sc3"
                component={AddOffers}
                options={{
                  tabBarIcon: ({ focused }) => {
                    return (
                      <View
                        style={{
                          width: 70,
                          height: 60,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Ionicons name="add" size={32} color={Colors.WHITE} />
                      </View>
                    );
                  },
                  tabBarButton: (p) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          if (global.token == "") {
                            Alert.alert(
                              "Users Only!",
                              "Please login to add offers"
                            );
                          } else {
                            p.onPress();
                          }
                        }}
                        style={{
                          bottom: 15,
                          justifyContent: "center",
                          alignItems: "center",
                          ...styles.shadow,
                        }}
                      >
                        <View
                          style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,

                            borderColor: Colors.DGray,
                            borderWidth: 0.25,
                            backgroundColor: Colors.BGreen,
                          }}
                        >
                          {p.children}
                        </View>
                      </TouchableOpacity>
                    );
                  },
                }}
              />
              <BottomTab.Screen
                name="Sc4"
                component={Fav}
                options={{
                  tabBarIcon: ({ focused }) => {
                    return (
                      <View
                        style={{
                          width: 70,
                          height: 60,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Ionicons
                          name="heart"
                          size={32}
                          color={focused ? Colors.BGreen : Colors.DGray}
                        />
                      </View>
                    );
                  },
                  tabBarButton: (p) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          if (global.token == "") {
                            Alert.alert(
                              "Users Only!",
                              "Please login to add offers"
                            );
                          } else {
                            p.onPress();
                          }
                        }}
                      >
                        <View
                          style={{
                            width: 70,
                            height: 60,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {p.children}
                        </View>
                      </TouchableOpacity>
                    );
                  },
                }}
              />
              <BottomTab.Screen
                name="Sc5"
                component={HomeScreen}
                options={{
                  tabBarButton: (p) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          if (global.token != "") {
                            navigation.openDrawer();
                          } else {
                            navigation.navigate("Login");
                          }
                        }}
                      >
                        <View
                          style={{
                            width: 70,
                            height: 60,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Ionicons
                            name="person"
                            size={32}
                            color={Colors.DGray}
                          />
                        </View>
                      </TouchableOpacity>
                    );
                  },
                }}
              />
            </BottomTab.Navigator>
          </View>
        </Animated.View>
      </View>
    );
  }

  const Drawer = createDrawerNavigator();
  function DNav() {
    const [progress, setProgress] = React.useState(new Animated.Value(0));
    const scale = Animated.interpolateNode(progress, {
      inputRange: [0, 1],
      outputRange: [1, 0.9],
    });
    const borderRadius = Animated.interpolateNode(progress, {
      inputRange: [0, 1],
      outputRange: [0, 20],
    });

    const marginLeft = Animated.interpolateNode(progress, {
      inputRange: [0, 1],
      outputRange: [0, 15],
    });
    const marginTop = Animated.interpolateNode(progress, {
      inputRange: [0, 1],
      outputRange: [0, 15],
    });
    const marginBottom = Animated.interpolateNode(progress, {
      inputRange: [0, 1],
      outputRange: [0, 15],
    });

    const animatedStyle = {
      borderRadius,
      marginLeft,
      marginTop,
      marginBottom,
      transform: [{ scale }],
    };

    return (
      <LinearGradient
        style={{ flex: 1 }}
        locations={["0%", "20%"]}
        colors={["#000", "#000"]}
      >
        <Drawer.Navigator
          drawerType="slide"
          overlayColor="transparent"
          drawerPosition={global.lang == "ar" ? "right" : "left"}
          drawerStyle={{
            flex: 1,
            width: 250,
            backgroundColor: "transparent",
          }}
          contentContainerStyle={{ flex: 1 }}
          drawerContentOptions={{
            activeBackgroundColor: "transparent",
            activeTintColor: "white",
            inactiveTintColor: "white",
          }}
          sceneContainerStyle={{ backgroundColor: "transparent" }}
          drawerContent={({ navigation, progress }) => {
            setProgress(progress);
            return (
              <View
                pointerEvents="box-none"
                style={{
                  // position: "absolute",
                  //   backgroundColor: "pink",
                  marginLeft: -44,
                  //   marginRight: 0,
                  marginTop: -166,
                  //   marginBottom: -521,
                  //   borderTopRightRadius: 25,
                  flex: 1,
                }}
              >
                <View
                  pointerEvents="box-none"
                  style={{
                    // position: "absolute",
                    marginLeft: 44,
                    // width: 315,
                    marginTop: 165,
                    // marginBottom: 497,
                    alignItems: "flex-start",
                    flex: 1,
                  }}
                >
                  <View style={{ backgroundColor: "black", width: "100%" }}>
                    <View
                      pointerEvents="box-none"
                      style={{
                        // position: "absolute",
                        // marginLeft: 25,
                        // marginRight: 115,
                        // marginTop: 35,
                        // height: 188,
                        alignItems: "flex-start",
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: "white",
                          width: 250,
                          paddingTop: 15,
                          paddingBottom: 15,
                          borderBottomRightRadius: 15,
                        }}
                      >
                        {/* <Text style={styles.brandShopText}>BRAND {"\n"}SHOP</Text> */}
                        <Image
                          // source={require("../assets/images/Logo.png")}
                          source={require("../assets/images/bikerzType.png")}
                          style={{
                            width: 250,
                            height: 80,
                            resizeMode: "contain",
                            // backgroundColor:"red",
                          }}
                        />
                      </View>

                      <View
                        pointerEvents="box-none"
                        style={{
                          alignSelf: "stretch",
                          height: 90,
                          marginTop: 20,
                          marginBottom: 20,
                          marginLeft: 10,
                          flexDirection: "row",
                          alignItems: "flex-start",
                        }}
                      >
                        <Image
                          source={{ uri: baseurl + global.avatar }}
                          style={styles.avatarImage}
                        />
                        <View
                          style={{
                            marginLeft: 15,
                            paddingTop: 15,
                            paddingBottom: 15,
                            // marginRight: 20,
                          }}
                        >
                          <Text style={styles.solimanAhmedText}>
                            {global.fullname}
                          </Text>
                          <Text style={styles.solimanGmailComText}>
                            {global.email}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      backgroundColor: "white",
                      borderTopRightRadius: 20,
                      flex: 1,
                      width: 250,
                      paddingTop: 15,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        // console.log(JSON.stringify(global.user));
                        navigation.navigate("Profile", { user: JSON.parse(global.user) });
                      }}
                      style={{
                        flexDirection: "row",
                        paddingTop: 15,
                        paddingBottom: 15,
                      }}
                    >
                      <Feather
                        name="user"
                        size={24}
                        style={{
                          marginLeft: 10,
                        }}
                      />
                      <Text style={styles.womenClothingMenText}>
                        {t("myprofile")}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Account");
                      }}
                      style={{
                        flexDirection: "row",
                        paddingTop: 15,
                        paddingBottom: 15,
                      }}
                    >
                      <Feather
                        name="edit"
                        size={24}
                        style={{
                          marginLeft: 10,
                        }}
                      />
                      <Text style={styles.womenClothingMenText}>
                        {t("acc")}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Lang2");
                      }}
                      style={{
                        flexDirection: "row",
                        paddingTop: 15,
                        paddingBottom: 15,
                      }}
                    >
                      <FontAwesome
                        name="language"
                        size={24}
                        style={{
                          marginLeft: 10,
                        }}
                      />
                      <Text style={styles.womenClothingMenText}>
                        {t("lang")}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Contact");
                      }}
                      style={{
                        flexDirection: "row",
                        paddingTop: 15,
                        paddingBottom: 15,
                      }}
                    >
                      <Feather
                        name="phone-call"
                        size={24}
                        style={{
                          marginLeft: 10,
                        }}
                      />
                      <Text style={styles.womenClothingMenText}>
                        {t("contact")}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("About");
                      }}
                      style={{
                        flexDirection: "row",
                        paddingTop: 15,
                        paddingBottom: 15,
                      }}
                    >
                      <Feather
                        name="info"
                        size={24}
                        style={{
                          marginLeft: 10,
                        }}
                      />
                      <Text style={styles.womenClothingMenText}>
                        {t("about")}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={async () => {
                        global.token = "";
                        await AsyncStorage.removeItem("@token");
                        Restart();
                      }}
                      style={{
                        flexDirection: "row",
                        paddingTop: 15,
                        paddingBottom: 15,
                      }}
                    >
                      <Feather
                        name="log-out"
                        size={24}
                        style={{
                          marginLeft: 10,
                        }}
                      />
                      <Text style={styles.womenClothingMenText}>
                        {t("logout")}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* <Image
                  source={require("./../assets/images/group-1701-3.png")}
                  style={styles.group1701Image}
                /> */}
              </View>
            );
          }}
          initialRouteName="Home"
        >
          <Drawer.Screen name="Home">
            {(props) => (
              <BottomTabNavigation {...props} style={animatedStyle} />
            )}
          </Drawer.Screen>
          <Drawer.Screen name="Screen3" component={HomeScreen} />
        </Drawer.Navigator>
      </LinearGradient>
    );
  }

  function MainNavigation() {
    return (
      <Stack.Navigator initialRouteName="Lang">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Login",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="md-log-in" />
            ),
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegScreen}
          options={{
            title: "Register",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="md-person-add" />
            ),
          }}
        />
        <Stack.Screen
          name="BotNav"
          component={DNav}
          options={{
            title: "",
            headerShown: false,
            headerStyle: { backgroundColor: "#ddd" },
          }}
        />
        <Stack.Screen
          name="Lang"
          component={Lang}
          options={{
            title: "",
            headerShown: false,
            headerStyle: { backgroundColor: "#ddd" },
          }}
        />

        <Stack.Screen
          name="Lang2"
          component={Lang2}
          options={{
            title: "",
            headerShown: false,
            headerStyle: { backgroundColor: "#ddd" },
          }}
        />

        <Stack.Screen
          name="Test"
          component={Test}
          options={{
            title: "",
            headerShown: false,
            headerStyle: { backgroundColor: "#ddd" },
          }}
        />

        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            title: "",
            headerShown: false,
            headerStyle: { backgroundColor: "#ddd" },
          }}
        />

        <Stack.Screen
          name="About"
          component={About}
          options={{
            title: "",
            headerShown: false,
            headerStyle: { backgroundColor: "#ddd" },
          }}
        />

        <Stack.Screen
          name="Offer"
          component={Offer}
          options={{
            title: "",
            headerShown: false,
            headerStyle: { backgroundColor: "#ddd" },
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "",
            headerShown: false,
            headerStyle: { backgroundColor: "#ddd" },
          }}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{
            title: "",
            headerShown: false,
            headerStyle: { backgroundColor: "#ddd" },
          }}
        />
      </Stack.Navigator>
    );
  }

  return <MainNavigation />;
}
