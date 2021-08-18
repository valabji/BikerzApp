import * as React from 'react';
import CustomHeader from '../components/CHeader'
import { Text, View, SafeAreaView, Image, ActivityIndicator, TouchableOpacity, TextInput, Dimensions, ScrollView } from 'react-native'
import { StackActions } from '@react-navigation/native';
import Fonts from '../constants/Fonts';
import styles, { SIZES } from '../constants/Style';
import { Feather, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { get, post, remove, patch, baseurl } from '../network';
import Swiper from 'react-native-swiper'
import rdate from '../components/rdate';

const width = Dimensions.get("screen").width

const renderImages = (images) => {
  return images.map((item) => {
    console.log(baseurl + item)
    return (
      <Image
        source={{ uri: baseurl + item }}
        style={{ width, height: width, backgroundColor: Colors.WHITE, resizeMode: "contain" }} />
    );
  });
}

const Item = ({ name, avatar, id, desc, price, fav, images }) => {

}

export default function Offer({ route, navigation }) {
  const offer = route.params.offer
  const [data, setData] = React.useState([])
  const [ft, setFt] = React.useState(true)
  const [loading, setLoading] = React.useState(true)
  const [fave, setFav] = React.useState(false)

  if (ft) {
    setFt(false)
    get('/offers')
      .then((res) => {
        res.data.forEach(e => {
          console.log(e)
          e.images.forEach(x => {
            console.log(x)
          });
        });
        setData(res.data)
        setLoading(false)
        console.log(data)
      })
  } else {
    // setFt(true)
  }

  const renderItems = () => {
    return data.map((item) => {
      return (
        <Item name={item.user.name} avatar={item.user.avatar} fav={true} desc={item.desc} price={item.price} images={item.images} />
      );
    });
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
      <CustomHeader title="Home" left="back" navigation={navigation} />
      <View style={{
        width,
        height: 72,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderColor: Colors.BGray,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingLeft: global.token == "" ? 0 : 15,
        paddingRight: 15,
        backgroundColor: Colors.WHITE
      }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile", { user: offer.user })
          }}
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}>
          <Image
            source={{ uri: baseurl + offer.user.avatar }}
            style={{ width: 48, height: 48, resizeMode: "cover", borderRadius: 24, marginLeft: 15 }} />
          <View style={{ flex: 1, marginLeft: 15 }}>
            <Text style={{ fontSize: 12, color: Colors.DGray, textAlign: "left" }}>{rdate(offer.created)} {offer.user.vip ? <FontAwesome5 name="crown" /> : ""}{offer.user.vip ? " VIP" : ""} </Text>
            <Text style={{ fontSize: 16, textAlign: "left" }}>{offer.user.name}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFav(!fave)
          }}
          style={{ display: global.token == "" ? "none" : "flex" }}
        >
          {
            fave ?
              <Ionicons name="heart" size={32} style={{ borderRadius: 24, marginRight: 15 }} />
              :
              <Ionicons name="heart-outline" size={32} style={{ borderRadius: 24, marginRight: 15 }} />

          }
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: 'center', }}>
        {
          loading ?
            <ActivityIndicator color="black" size={64} />
            :
            <ScrollView >
              <View style={{ width: "100%" }}>

                <View style={{
                  width,
                  height: offer.images.length > 0 ? width : 0,
                }}>
                  <Swiper style={{
                    height: offer.images.length > 0 ? width : 0,
                  }}
                    dotColor={Colors.BGray}
                    dotStyle={{ width: 7, height: 7 }}
                    activeDotStyle={{ width: 10, height: 10 }}
                    activeDotColor={Colors.BGreen}
                    showsButtons={false}>
                    {renderImages(offer.images)}
                  </Swiper>
                </View>
                <View style={{
                  width,
                  height: 72,
                  // justifyContent: "center",
                  // alignItems: "center",
                  // flexDirection: "row",
                  backgroundColor: Colors.WHITE,
                  borderColor: Colors.BGray,
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                }}>
                  <Text style={{ fontSize: 20, marginLeft: 10, marginRight: 10, marginTop: 5, flex: 1 }}>{offer.price + "$"}</Text>
                  <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 5, flex: 1 }}>{offer.desc}</Text>
                </View>

                <View style={{
                  width,
                  // height: 72,
                  borderColor: Colors.BGray,
                  borderWidth: 1,
                  marginTop: 4,
                  borderRadius: 15,
                  paddingBottom: 10,
                  paddingTop: 10,
                  paddingLeft: 10,
                  paddingRight: 10,
                  backgroundColor: Colors.WHITE
                }}>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "row",
                    }}>
                    <Image
                      source={{ uri: baseurl + offer.user.avatar }}
                      style={{ width: 48, height: 48, resizeMode: "cover", borderRadius: 24 }} />
                    <View style={{ flex: 1, marginLeft: 15 }}>
                      <Text style={{ fontSize: 12, color: Colors.DGray, textAlign: "left" }}>2021-08-18 14:05</Text>
                      <Text style={{ fontSize: 16, textAlign: "left" }}>{offer.user.name}</Text>
                    </View>
                  </View>
                  <Text style={{ fontSize: 14, marginLeft: 15, textAlign: "left", flex: 1 }}>{'\t'}{'\t'}{"Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text "}</Text>

                </View>

              </View>
              < View style={{ height: 100 }} />
            </ScrollView>
        }

      </View>
    </View>
  );
}

Offer.navigationOptions = {
  header: null,
};