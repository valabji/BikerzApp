import * as React from 'react';
import CustomHeader from '../components/CHeader'
import { Text, View, SafeAreaView,RefreshControl, Linking, Image, ActivityIndicator, TouchableOpacity, TextInput, Dimensions, ScrollView } from 'react-native'
import { StackActions } from '@react-navigation/native';
import Fonts from '../constants/Fonts';
import styles, { SIZES } from '../constants/Style';
import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { get, post, remove, patch, baseurl } from '../network';
import Swiper from 'react-native-swiper'
import { FlatGrid } from 'react-native-super-grid';
import { rdate } from '../components/Methods';
import { mystore } from '../components/Redux';
import { t } from '../language';

const width = Dimensions.get("screen").width

const renderImages = (images) => {
  return images.map((item) => {
    console.log(baseurl + item)
    return (
      <Image
      key={Math.random()}
        source={{ uri: baseurl + item }}
        style={{ width, height: width, backgroundColor: Colors.WHITE, resizeMode: "cover" }} />
    );
  });
}

const Item = ({ name, avatar, id, desc, price, fav, images }) => {

}

export default function Offer({ route, navigation }) {
  const user = route.params.user
  const [data, setData] = React.useState([])
  const [ft, setFt] = React.useState(true)
  const [loading, setLoading] = React.useState(true)
  const [fave, setFav] = React.useState(false)

  if (ft) {
    setFt(false)
    mystore.subscribe(() => {
      setLoading(true)
      setFt(true)
    })
    get('/offers/user/' + user._id)
      .then((res) => {
        if(res.data){
          setData(res.data)
        }
        setLoading(false)
        console.log(data)
      })
  } else {
    // setFt(true)
  }

  const renderItems = () => {
    return data.map((item) => {
      return (
        <Item key={Math.random()} name={item.user.name} avatar={item.user.avatar} fav={true} desc={item.desc} price={item.price} images={item.images} />
      );
    });
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
      <CustomHeader title="Home" left="back" navigation={navigation} />
      <View style={{ flex: 1, alignItems: 'center', }}>
          <View style={{ width: "100%",flex:1 }}>
            <View style={{
              width,
              height: 72,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              borderColor: Colors.BGray,
              borderTopWidth: 1,
              borderBottomWidth: 1,
              backgroundColor: Colors.WHITE
            }}>
              <Image
                source={{ uri: baseurl + user.avatar }}
                style={{ width: 48, height: 48, resizeMode: "cover", borderRadius: 24, marginLeft: 15 }} />
              <View style={{ flex: 1, marginLeft: 15 }}>

                <Text style={{ fontSize: 16, textAlign: "left" }}>{user.name} <Text style={{ fontSize: 12, color: Colors.DGray, textAlign: "left" }}>{user.vip ? <FontAwesome5 name="crown" /> : ""}{user.vip ? " VIP" : ""} </Text></Text>
                <Text style={{ fontSize: 12, color: Colors.DGray, textAlign: "left" }}>{"Member since : "}{rdate(Number.parseInt(user.created))} </Text>
              </View>
            </View>
            <View style={{
              width,
              height: 72,
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "row",
              borderColor: Colors.BGray,
              borderTopWidth: 1,
              borderBottomWidth: 1,
              backgroundColor: Colors.WHITE
            }}>
              <TouchableOpacity
                onPress={() => {
                  console.log(user)
                  Linking.openURL(`tel:${user.phone}`)
                }}
                style={{ backgroundColor: Colors.BGreen, width: 140, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5, flexDirection: "row", justifyContent: "center", alignItems: "center" }}
              >
                <Ionicons name="call-outline" color={Colors.WHITE} size={32} style={{ borderRadius: 24, marginRight: 15 }} />
                <Text style={{ fontSize: 16, color: Colors.WHITE, textAlign: "left" }}>{t("call")}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  console.log(user)
                  Linking.openURL(`https://wa.me/${user.phone}`)
                }}
                style={{ backgroundColor: Colors.BGreen, width: 140, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5, flexDirection: "row", justifyContent: "center", alignItems: "center" }}
              >
                <Ionicons name="logo-whatsapp" color={Colors.WHITE} size={32} style={{ borderRadius: 24, marginRight: 15 }} />
                <Text style={{ fontSize: 16, color: Colors.WHITE, textAlign: "left" }}>{t("whatsapp")}</Text>
              </TouchableOpacity>
            </View>
            {
              loading ?
                <ActivityIndicator color="black" size={64} />
                : data.length > 0 ?
                  <FlatGrid
                    refreshControl={<RefreshControl refreshing={false} onRefresh={() => { setLoading(true); setFt(true) }} />}
                    itemDimension={(width / 3) - 15}
                    data={data}
                    itemContainerStyle={{ justifyContent: "center", alignItems: "center" }}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate("Offer", { offer: item })
                        }}
                      >
                        {
                          item.images.length > 0 ?
                            <Image
                              source={{ uri: baseurl + item.images[0] }}
                              style={{
                                width: (width / 3) - 15,
                                height: (width / 3) - 15,
                                backgroundColor: Colors.BGray
                              }} />
                            :
                            <View
                              style={{
                                width: (width / 3) - 15,
                                height: (width / 3) - 15,
                                backgroundColor: Colors.BGray,
                                justifyContent: "center",
                                alignItems: "center"
                              }}
                            >
                              <Text style={{ fontSize: 18 }}>
                                {item.price + "$ Item"}
                              </Text>
                            </View>
                        }
                      </TouchableOpacity>

                    )}
                  />
                  : <ScrollView refreshControl={<RefreshControl refreshing={false} onRefresh={() => { setLoading(true); setFt(true) }} />} contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }} style={{ flex: 1 }}>
                    <Feather name="alert-triangle" color="black" size={64} />
                    <Text>{t("nooffers")}</Text>
                  </ScrollView>
            }

          </View>
          < View style={{ height: 100 }} />
      </View>
    </View>
  );
}

Offer.navigationOptions = {
  header: null,
};