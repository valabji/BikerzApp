import * as React from 'react';
import CustomHeader from '../components/CHeader'
import { Text, View, SafeAreaView, Image, ActivityIndicator, RefreshControl, TouchableOpacity, TextInput, Dimensions, ScrollView, Alert } from 'react-native'
import { StackActions } from '@react-navigation/native';
import Fonts from '../constants/Fonts';
import styles, { SIZES } from '../constants/Style';
import { Feather, Ionicons, AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { get, post, remove, patch, baseurl } from '../network';
import Swiper from 'react-native-swiper'
import { rdate } from '../components/Methods';
import { set } from 'react-native-reanimated';
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
        style={{ width, height: width, backgroundColor: Colors.WHITE, resizeMode: "contain" }} />
    );
  });
}


export default function Offer({ route, navigation }) {
  const offer = route.params.offer
  const [data, setData] = React.useState([])
  const [ft, setFt] = React.useState(true)
  const [loading, setLoading] = React.useState(true)
  const [loading2, setLoading2] = React.useState(false)
  const [fave, setFav] = React.useState(offer.fav ? 1 : 0)
  const [msg, setMsg] = React.useState("")

  if (ft) {
    setFt(false)
    get('/comments/offer/' + offer._id)
      .then((res) => {
        if (res.data.length > 0) {
          setData(res.data)
        } else {
          setData([])
        }
        setLoading(false)
        console.log(data)
      })
  } else {
    // setFt(true)
  }


  const Item = ({ item }) => {
    const [loading3, setLoading3] = React.useState(false)

    return (
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
            source={{ uri: baseurl + item.user.avatar }}
            style={{ width: 48, height: 48, resizeMode: "cover", borderRadius: 24 }} />
          <View style={{ flex: 1, marginLeft: 15 }}>
            <Text style={{ fontSize: 12, color: Colors.DGray, textAlign: "left" }}>{rdate(item.created)} {item.user._id == offer.user._id ? <Feather name="check-circle" /> : ""}{item.user._id == offer.user._id ? " Owner" : ""} </Text>
            <Text style={{ fontSize: 16, textAlign: "left" }}>{item.user.name}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              Alert.alert("", t("delcmt"), [
                {
                  text: t("yes"),
                  onPress: () => {
                    setLoading3(true)
                    console.log(item._id)
                    remove("/comments/" + item._id).then(r => {
                      if (r.ok) {
                        setLoading(true)
                        setFt(true)
                        // mystore.dispatch({ type: 'change', "obj": { "RandNoti": "" + Date.now() } })
                        // navigation.goBack()
                      } else {
                        Alert.alert("", t("try"))
                      }
                      setLoading3(false)
                    })
                  }
                },
                { text: t("no") }
              ])
            }}
            style={{ display: global.uid == item.user._id ? "flex" : "none" }}
          >
            {loading3 ?
              <ActivityIndicator color={Colors.BLACK} size={32} style={{ borderRadius: 24, marginRight: 15 }} />
              :
              <AntDesign name="delete" size={32} style={{ borderRadius: 24, marginRight: 15 }} />
            }
          </TouchableOpacity>

        </View>
        <Text style={{ fontSize: 14, marginLeft: 15, textAlign: "left", flex: 1 }}>{'\t'}{'\t'}{item.msg}</Text>
      </View>
    );
  }

  const renderItems = () => {
    return data.map((item) => {
      return <Item key={Math.random()} item={item} />
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
            if (global.uid == offer.user._id) {
              Alert.alert("", t("delpst"), [
                {
                  text: t("yes"),
                  onPress: () => {
                    const fv = fave
                    setFav(2)

                    remove("/offers/" + offer._id).then(r => {
                      if (r.ok) {
                        mystore.dispatch({ type: 'change', "obj": { "RandNoti": "" + Date.now() } })
                        navigation.goBack()
                      } else {
                        Alert.alert("", t("try"))
                      }
                      setFav(fv)

                    })
                  }
                },
                { text: t("no") }
              ])
            } else {
              if (fave == 1) {
                setFav(2)
                remove("/likes/" + offer._id).then(r => {
                  if (r.ok == true) {
                    setFav(0)
                    offer.fav = false
                  } else {
                    setFav(1)
                  }
                })
              }
              if (fave == 0) {
                setFav(2)
                post("/likes", { offer: offer._id }).then(r => {
                  if (r.ok == true) {
                    setFav(1)
                    offer.fav = true
                  } else {
                    setFav(0)
                  }
                })
              }
            }
          }}
          style={{ display: global.token == "" ? "none" : "flex" }}
        >
          {
            (global.uid == offer.user._id) && fave != 2 ?
              <AntDesign name="delete" size={32} style={{ borderRadius: 24, marginRight: 15 }} />
              :
              fave == 1 ?
                <Ionicons name="heart" size={32} style={{ borderRadius: 24, marginRight: 15 }} />
                : fave == 2 ?
                  <ActivityIndicator size={32} style={{ borderRadius: 24, marginRight: 15 }} />
                  :
                  <Ionicons name="heart-outline" size={32} style={{ borderRadius: 24, marginRight: 15 }} />
          }
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: 'center', }}>
        <ScrollView
          refreshControl={<RefreshControl refreshing={false} onRefresh={() => { setLoading(true); setFt(true) }} />}  >
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
              // height: 72,
              // justifyContent: "center",
              // alignItems: "center",
              // flexDirection: "row",
              backgroundColor: Colors.WHITE,
              borderColor: Colors.BGray,
              paddingTop: 10,
              paddingBottom: 10,
              borderTopWidth: 1,
              borderBottomWidth: 1,
            }}>
              <Text style={{ fontSize: 20, marginLeft: 10, marginRight: 10, marginTop: 5, flex: 1 }}>{offer.price + " " + offer.cur}</Text>
              <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 5, flex: 1 }}>{offer.desc}</Text>
            </View>
            {
              loading ?
                <ActivityIndicator color="black" size={64} />
                :
                <View>
                  {data.length > 0 ? renderItems() : <View><Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 5, }}>{t("nocmts")}</Text></View>}
                </View>
            }
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
                  flexDirection: "row",
                }}>
                <Image
                  source={{ uri: baseurl + global.avatar }}
                  style={{ width: 48, height: 48, resizeMode: "cover", borderRadius: 24 }} />
                <View style={{ flex: 1, marginLeft: 15, justifyContent: "flex-end", marginRight: 15 }}>
                  <TextInput
                    multiline
                    value={msg}
                    placeholder={t("cmt")}
                    onChangeText={r => { setMsg(r) }}
                    style={{ borderBottomWidth: 1, borderColor: Colors.DGray }}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    // setLoading2(false)

                    if (!loading2) {
                      setLoading2(true)
                      post("/comments", { offer: offer._id, msg: msg }).then(r => {
                        try {
                          if (r.ok) {
                            setMsg("")
                            setLoading(true)
                            setFt(true)
                          } else {
                            Alert(t("er"), t("try"))
                          }
                        } catch (e) {
                          Alert(t("er"), t("try"))

                        }

                        setLoading2(false)
                      })
                    }
                  }}
                  style={{ alignSelf: "flex-end" }}
                >
                  {loading2 ?
                    <ActivityIndicator size={32} /> :
                    <MaterialCommunityIcons name="send-circle-outline" size={32} />
                  }
                </TouchableOpacity>
              </View>
            </View>

          </View>
          < View style={{ height: 100 }} />
        </ScrollView>


      </View>
    </View>
  );
}

Offer.navigationOptions = {
  header: null,
};