import * as React from "react";
import { StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import HomeScreen2 from "../screens/HomeScreen2";
import Screen2 from "../screens/Screen2";
// import Shops from "../BScreens/Shops/Shops";
// import Shop from "../BScreens/Shop/Shop";
// import Item from "../BScreens/Item/Item";
import Screen3 from "../screens/Screen3";
import Colors from "../constants/Colors";
// import Account from "../BScreens/Account/Account";
// import Home from "../BScreens/Home/Home";
import LoginScreen from "../screens/LoginScreen";
import RegScreen from "../screens/Register";
import i18n from "i18n-js";
import { LinearGradient } from "expo-linear-gradient";
import Animated from "react-native-reanimated";
import styles from "../constants/Style";

import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import {
  Discount,
  DiscountOff,
  ShopingCart,
  Ic_nounshoppingcart,
  Ic_categorybar,
  Ic_categorybaryellow,
  Ic_shopbar,
  Ic_shopbaryellow,
  Ic_cartbar,
  Ic_cartbaryellow,
  Ic_profilebaryellow,
  Ic_profilebar,
} from "../components/SVG";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import Account from "../BScreens/Account/Account";
import Account2 from "../BScreens/Account/AccountOLD";
let TScreen = Account;
import AccountShipping from "../BScreens/AccountShipping/AccountShipping";
// TScreen = AccountShipping
import AccountTrackOrder from "../BScreens/AccountTrackOrder/AccountTrackOrder";
// TScreen = AccountTrackOrder
import AccountTrackOrderViewOrderItenirary from "../BScreens/AccountTrackOrderViewOrderItenirary/AccountTrackOrderViewOrderItenirary";
// TScreen = AccountTrackOrderViewOrderItenirary
import AccountWishlist from "../BScreens/AccountWishlist/AccountWishlist";
// TScreen = AccountWishlist
import Cart from "../BScreens/Cart/Cart";
// TScreen = Cart
import CartScroll from "../BScreens/CartScroll/CartScroll";
// TScreen = CartScroll
import CartSwipeDelete from "../BScreens/CartSwipeDelete/CartSwipeDelete";
// TScreen = CartSwipeDelete
import CartSwipeWishlist from "../BScreens/CartSwipeWishlist/CartSwipeWishlist";
// TScreen = CartSwipeWishlist
import CheckoutAddress from "../BScreens/CheckoutAddress/CheckoutAddress";
// TScreen = CheckoutAddress
import CheckoutDelivery from "../BScreens/CheckoutDelivery/CheckoutDelivery";
// TScreen = CheckoutDelivery
import CheckoutOrderSummary from "../BScreens/CheckoutOrderSummary/CheckoutOrderSummary";
// TScreen = CheckoutOrderSummary
import CheckoutPaymentsSaveCards from "../BScreens/CheckoutPaymentsSaveCards/CheckoutPaymentsSaveCards";
// TScreen = CheckoutPaymentsSaveCards
import Home from "../BScreens/Home/Home";
// TScreen = Home
import Item from "../BScreens/Item/Item";
// TScreen = Item
import LOGIN from "../BScreens/LOGIN/LOGIN";
// TScreen = LOGIN
import Menu from "../BScreens/Menu/Menu";
// TScreen = Menu
import SIGNUP from "../BScreens/SIGNUP/SIGNUP";
// TScreen = SIGNUP
import Shop from "../BScreens/Shop/Shop";
// TScreen = Shop
import Shops from "../BScreens/Shops/Shops";
import Categories from "../BScreens/Shops/Categories";
// TScreen = Shops
import Splash from "../BScreens/Splash/Splash";
import Lang from "../BScreens/Splash/Lang";
// TScreen = Splash

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function NestedNavigations() {
  const Stack = createStackNavigator();

  function Shoppz() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="shops"
          component={Shops}
          options={{
            title: "",
            headerShown: false,
            headerStyle: { backgroundColor: "#ddd" },
          }}
        />
        <Stack.Screen
          name="shop"
          component={Shop}
          options={{
            title: "",
            headerShown: false,
            headerStyle: { backgroundColor: "#ddd" },
          }}
        />
        <Stack.Screen
          name="item"
          component={Item}
          options={{
            title: "",
            headerShown: false,
            headerStyle: { backgroundColor: "#ddd" },
          }}
        />
      </Stack.Navigator>
    );
  }

  function Accountz() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Account"
          component={Account}
          options={{
            title: "",
            headerShown: false,
            headerStyle: { backgroundColor: "#ddd" },
          }}
        />
        <Stack.Screen
          name="TrackOrder"
          component={AccountTrackOrder}
          options={{
            title: "",
            headerShown: false,
            headerStyle: { backgroundColor: "#ddd" },
          }}
        />
        <Stack.Screen
          name="TrackOrder2"
          component={AccountTrackOrderViewOrderItenirary}
          options={{
            title: "",
            headerShown: false,
            headerStyle: { backgroundColor: "#ddd" },
          }}
        />
        <Stack.Screen
          name="Shipping"
          component={AccountShipping}
          options={{
            title: "",
            headerShown: false,
            headerStyle: { backgroundColor: "#ddd" },
          }}
        />
        <Stack.Screen
          name="Wishlist"
          component={AccountWishlist}
          options={{
            title: "",
            headerShown: false,
            headerStyle: { backgroundColor: "#ddd" },
          }}
        />
      </Stack.Navigator>
    );
  }

  function Cartz() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            title: "",
            headerShown: false,
            headerStyle: { backgroundColor: "#ddd" },
          }}
        />
        <Stack.Screen
          name="Cart2"
          component={CartScroll}
          options={{
            title: "",
            headerShown: false,
            headerStyle: { backgroundColor: "#ddd" },
          }}
        />
        <Stack.Screen
          name="Cart3"
          component={CartSwipeDelete}
          options={{
            title: "",
            headerShown: false,
            headerStyle: { backgroundColor: "#ddd" },
          }}
        />
        <Stack.Screen
          name="Cart4"
          component={CartSwipeWishlist}
          options={{
            title: "",
            headerShown: false,
            headerStyle: { backgroundColor: "#ddd" },
          }}
        />
        <Stack.Screen
          name="CheckOut"
          component={CheckoutDelivery}
          options={{
            title: "",
            headerShown: false,
            headerStyle: { backgroundColor: "#ddd" },
          }}
        />
        <Stack.Screen
          name="CheckOut2"
          component={CheckoutAddress}
          options={{
            title: "",
            headerShown: false,
            headerStyle: { backgroundColor: "#ddd" },
          }}
        />
        <Stack.Screen
          name="CheckOut3"
          component={CheckoutPaymentsSaveCards}
          options={{
            title: "",
            headerShown: false,
            headerStyle: { backgroundColor: "#ddd" },
          }}
        />
        <Stack.Screen
          name="CheckOut4"
          component={CheckoutOrderSummary}
          options={{
            title: "",
            headerShown: false,
            headerStyle: { backgroundColor: "#ddd" },
          }}
        />
      </Stack.Navigator>
    );
  }

  function BottomTabNavigation({ navigation, style }) {
    return (
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

            elevation: 16,
            overflow: "scroll",
            // borderWidth: 1,
          },
          style,
        ])}
      >
        <BottomTab.Navigator
          initialRouteName={INITIAL_ROUTE_NAME}
          tabBarOptions={{
            activeBackgroundColor: Colors.BGray,
            inactiveBackgroundColor: Colors.BGray,
            tabStyle: {
              paddingTop: 10,
              // marginTop:10,
            },
            style: {
              // borderTopWidth: 0,
              height: 100,
            },
          }}
        >
          <BottomTab.Screen
            name="Main"
            component={HomeScreen}
            // component={Home}
            options={{
              tabBarLabel: ({ focused }) => {
                return <View />;
              },
              tabBarIcon: ({ focused }) => {
                return (
                  <View style={{ width: 80, alignItems: "center" }}>
                    {/* <Entypo
                    name="shop"
                    size={24}
                    color={focused ? Colors.DYellow : Colors.DGray}
                  /> */}
                    {focused ? <Ic_shopbaryellow /> : <Ic_shopbar />}
                    <Text
                      style={{
                        fontFamily: "Cairo_400Regular",
                        color: focused ? Colors.DYellow : Colors.DGray,
                      }}
                    >
                      Home
                    </Text>
                  </View>
                );
              },
            }}
          />
          <BottomTab.Screen
            name="Sc2"
            component={HomeScreen2}
            // component={Screen2}
            options={{
              tabBarLabel: ({ focused }) => {
                return <View />;
              },
              tabBarIcon: ({ focused }) => {
                return (
                  <View style={{ width: 80, alignItems: "center" }}>
                    {/*  <Feather
                    name="grid"
                    size={24}
                    color={focused ? Colors.DYellow : Colors.DGray}
                  /> */}
                    {focused ? <Ic_categorybaryellow /> : <Ic_categorybar />}
                    <Text
                      style={{
                        fontFamily: "Cairo_400Regular",
                        color: focused ? Colors.DYellow : Colors.DGray,
                      }}
                    >
                      Categories
                    </Text>
                  </View>
                );
              },
            }}
          />
          <BottomTab.Screen
            name="Sc3"
            component={Shoppz}
            options={{
              tabBarLabel: ({ focused }) => {
                return <View />;
              },
              tabBarIcon: ({ focused }) => {
                return (
                  <View style={{ width: 80, alignItems: "center" }}>
                    <Feather
                      name="shopping-bag"
                      size={24}
                      color={focused ? Colors.DYellow : Colors.DGray}
                    />
                    {/* {focused ? <Discount /> : <DiscountOff />} */}
                    <Text
                      style={{
                        fontFamily: "Cairo_400Regular",
                        color: focused ? Colors.DYellow : Colors.DGray,
                      }}
                    >
                      Brands
                    </Text>
                  </View>
                );
              },
            }}
          />
          <BottomTab.Screen
            name="Sc4"
            component={Screen3}
            options={{
              tabBarLabel: ({ focused }) => {
                return <View />;
              },
              tabBarIcon: ({ focused }) => {
                return (
                  <View style={{ width: 80, alignItems: "center" }}>
                    {/* <MaterialCommunityIcons
                    name="bitcoin"
                    size={24}
                    style={{ paddingTop: 5, paddingBottom: 2 }}
                    color={focused ? Colors.DYellow : Colors.DGray}
                  /> */}
                    {focused ? <Ic_cartbaryellow /> : <Ic_cartbar />}
                    <Text
                      style={{
                        fontFamily: "Cairo_400Regular",
                        color: focused ? Colors.DYellow : Colors.DGray,
                      }}
                    >
                      My Cart
                    </Text>
                  </View>
                );
              },
            }}
          />
          <BottomTab.Screen
            name="Sc5"
            component={Accountz}
            options={{
              tabBarLabel: ({ focused }) => {
                return <View />;
              },
              tabBarIcon: ({ focused }) => {
                return (
                  <View style={{ width: 80, alignItems: "center" }}>
                    {/* <MaterialCommunityIcons
                    name="diamond"
                    size={24}
                    style={{ paddingTop: 5, paddingBottom: 2 }}
                    color={focused ? Colors.DYellow : Colors.DGray}
                  /> */}
                    {focused ? <Ic_profilebaryellow /> : <Ic_profilebar />}
                    <Text
                      style={{
                        fontFamily: "Cairo_400Regular",
                        color: focused ? Colors.DYellow : Colors.DGray,
                      }}
                    >
                      Me
                    </Text>
                  </View>
                );
              },
            }}
          />
        </BottomTab.Navigator>
      </Animated.View>
    );
  }

  const Drawer = createDrawerNavigator();
  function DNav() {
    const [progress, setProgress] = React.useState(new Animated.Value(0));
    const scale = Animated.interpolate(progress, {
      inputRange: [0, 1],
      outputRange: [1, 0.9],
    });
    const borderRadius = Animated.interpolate(progress, {
      inputRange: [0, 1],
      outputRange: [0, 20],
    });

    const marginLeft = Animated.interpolate(progress, {
      inputRange: [0, 1],
      outputRange: [0, 15],
    });
    const marginTop = Animated.interpolate(progress, {
      inputRange: [0, 1],
      outputRange: [0, 15],
    });
    const marginBottom = Animated.interpolate(progress, {
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
        colors={["#000", "#fff"]}
      >
        <Drawer.Navigator
          drawerType="slide"
          overlayColor="transparent"
          drawerPosition="left"
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
                      <View style={{ backgroundColor: "white",width:250,paddingTop: 15,paddingBottom:15,borderBottomRightRadius:15 }}>
                        {/* <Text style={styles.brandShopText}>BRAND {"\n"}SHOP</Text> */}
                        <Image
                          // source={require("../assets/images/Logo.png")}
                          source={require("../assets/images/LogoType.png")}
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
                          marginLeft: 25,
                          flexDirection: "row",
                          alignItems: "flex-start",
                        }}
                      >
                        <Image
                          source={require("./../assets/images/avatar-2.png")}
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
                            Soliman Ali
                          </Text>
                          <Text style={styles.solimanGmailComText}>
                            Soliman@gmail.com
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
                    <View
                      style={{
                        flexDirection: "row",
                        paddingTop: 15,
                        paddingBottom: 15,
                      }}
                    >
                      <Feather
                        name="chevron-right"
                        size={24}
                        style={{
                          marginLeft: 10,
                        }}
                      />
                      <Text style={styles.womenClothingMenText}>
                        Women Clothing
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        paddingTop: 15,
                        paddingBottom: 15,
                      }}
                    >
                      <Feather
                        name="chevron-right"
                        size={24}
                        style={{
                          marginLeft: 10,
                        }}
                      />
                      <Text style={styles.womenClothingMenText}>
                        Women Clothing
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        paddingTop: 15,
                        paddingBottom: 15,
                      }}
                    >
                      <Feather
                        name="chevron-right"
                        size={24}
                        style={{
                          marginLeft: 10,
                        }}
                      />
                      <Text style={styles.womenClothingMenText}>
                        Women Clothing
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        paddingTop: 15,
                        paddingBottom: 15,
                      }}
                    >
                      <Feather
                        name="chevron-right"
                        size={24}
                        style={{
                          marginLeft: 10,
                        }}
                      />
                      <Text style={styles.womenClothingMenText}>
                        Women Clothing
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        paddingTop: 15,
                        paddingBottom: 15,
                      }}
                    >
                      <Feather
                        name="chevron-right"
                        size={24}
                        style={{
                          marginLeft: 10,
                        }}
                      />
                      <Text style={styles.womenClothingMenText}>
                        Women Clothing
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        paddingTop: 15,
                        paddingBottom: 15,
                      }}
                    >
                      <Feather
                        name="chevron-right"
                        size={24}
                        style={{
                          marginLeft: 10,
                        }}
                      />
                      <Text style={styles.womenClothingMenText}>
                        Women Clothing
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        paddingTop: 15,
                        paddingBottom: 15,
                      }}
                    >
                      <Feather
                        name="chevron-right"
                        size={24}
                        style={{
                          marginLeft: 10,
                        }}
                      />
                      <Text style={styles.womenClothingMenText}>
                        Women Clothing
                      </Text>
                    </View>
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
          <Drawer.Screen name="Screen3" component={Screen3} />
        </Drawer.Navigator>
      </LinearGradient>
    );
  }

  const BottomNav = createBottomTabNavigator();
  function BNav() {
    return (
      <BottomNav.Navigator initialRouteName="Login">
        <BottomNav.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Login",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="md-log-in" />
            ),
          }}
        />
        <BottomNav.Screen
          name="Register"
          component={RegScreen}
          options={{
            title: "Register",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="md-person-add" />
            ),
          }}
        />
      </BottomNav.Navigator>
    );
  }

  function MainNavigation() {
    return (
      <Stack.Navigator initialRouteName="Lang">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          //   component={TScreen}
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
        {/* <Stack.Screen name="Root" component={BNav} options={{ title: "ReKit / Login", headerShown: false, headerStyle: { backgroundColor: "#ddd" } }} /> */}
        <Stack.Screen
          name="BotNav"
          component={DNav}
          //   component={Item}
          options={{
            title: "",
            headerShown: false,
            headerStyle: { backgroundColor: "#ddd" },
          }}
        />
        <Stack.Screen
          name="Lang"
          component={Lang}
          //   component={Item}
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

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "Home Page";
    case "Sc2":
      return "Page 2";
    case "Sc3":
      return "Page 3";
  }
}
