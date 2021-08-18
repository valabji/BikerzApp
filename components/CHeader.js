import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { Feather, FontAwesome, FontAwesome5, Ionicons, AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import i18n from 'i18n-js';
import Colors from '../constants/Colors';
import { Ic_nounshoppingcart, Ic_noun_menu_1812743 } from './SVG';

export default function CustomHeader({ title, logo, isHome,filter, left, navigation }) {
  return (
    <View style={{ flexDirection: 'row', height: 64, backgroundColor: Colors.WHITE }}>
      <View style={{ justifyContent: 'center', alignItems: "center" }}>
        {/* <Text style={{ textAlign: 'center', fontFamily: "Cairo_400Regular", fontWeight: "500", fontSize: 18 }}>{title}</Text> */}
        <Image
          // source={require("../assets/images/Logo.png")}
          source={require("../assets/images/LogoType.png")}
          style={{
            width: 140,
            height: 50,
            resizeMode: "contain",
            // backgroundColor:"red",
          }}
        />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: "flex-end" }}>
        {
          left == "filter" ?
            <TouchableOpacity
              onPress={filter}
              style={{ paddingRight: 20 }}
            >
              <Feather name="filter" size={24} />
            </TouchableOpacity>
            : left == "back" ?
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack()
                }}
                style={{ paddingRight: 20 }}
              >
                <Feather name="arrow-left" size={24} />
              </TouchableOpacity>
              :
              <View />
        }
      </View>
    </View>
  )
}
