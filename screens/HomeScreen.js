import * as React from 'react';
import CustomHeader from '../components/CHeader'
import { Text, View, SafeAreaView, Image as OldImage, RefreshControl, ActivityIndicator, TouchableOpacity, TextInput, Dimensions, ScrollView, Alert, Share } from 'react-native'
import { StackActions } from '@react-navigation/native';
import Fonts from '../constants/Fonts';
import styles, { SIZES } from '../constants/Style';
import { Feather, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { get, post, remove, patch, baseurl } from '../network';
import Swiper from 'react-native-swiper'
import { rdate } from '../components/Methods';
import { Image } from "react-native-expo-image-cache";
import { mystore } from '../components/Redux';
import { t } from '../language';
import * as Linking from 'expo-linking';
import * as Sharing from 'expo-sharing';

const width = Dimensions.get("screen").width


export default function HomeScreen({ navigation }) {
  const [fulldata, setFullData] = React.useState([])
  const [data, setData] = React.useState([])
  const [ft, setFt] = React.useState(true)
  const [srch, setSrch] = React.useState("")
  const [loading, setLoading] = React.useState(true)
  if (ft) {
    setFt(false)
    mystore.subscribe(() => {
      setLoading(true)
      setFt(true)
    })
    if (global.token != "") {
      get('/offers/likes')
        .then((res) => {
          let mar = []
          if (res.ok) {
            if (res.data.length > 0) {
              res.data.forEach(e => {
                let fav = false
                res.likes.forEach(x => {
                  if (x.offer == e._id) {
                    fav = true
                  }
                });
                e.fav = fav
                mar.push(e)
              });
              setData(mar)
              setFullData(mar)
            } else {

            }
          }
          setLoading(false)
          // console.log(data)
        })
    } else {
      get('/offers')
        .then((res) => {
          if (res.data.length > 0) {
            setData(res.data)
            setFullData(res.data)
          }
          setLoading(false)
          // console.log(data)
        })
    }

  } else {
    // setFt(true)
  }

  const renderImages = (offer) => {
    return offer.images.map((item) => {
      const preview = { uri: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" };
      const uri = baseurl + item
      // console.log(uri)
      return (
        <View
          key={Math.random()}
        >
          <TouchableOpacity
            onPress={() => {
              // Linking.openURL("http://facebook.com")
              navigation.navigate("Offer", { offer: offer })
            }}
            style={{
              width,
              height: width
            }}
          >
            <Image
              // progressiveRenderingEnabled={true}
              // defaultSource={{ uri: baseurl + item+".mini" }}
              // source={{ uri: baseurl + item }}
              style={{ width, height: width, backgroundColor: Colors.DGray, resizeMode: "cover" }}
              {...{ preview, uri }}
            />
          </TouchableOpacity>
        </View>

      );
    });
  }

  const Item = ({ offer, navigation, name, avatar, id, desc, price, fav, images }) => {
    const [fave, setFav] = React.useState(offer.fav ? 1 : 0)
    // console.log("avatar " + baseurl + avatar)
    const preview = { uri: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" };
    const uri = baseurl + avatar
    return (
      <View style={{ width: "100%" }}>
        <View style={{
          width,
          height: 72,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          borderColor: Colors.BGray,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          paddingLeft: global.token == "" ? 0 : 0,
          paddingRight: 15,
          backgroundColor: Colors.WHITE
        }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Profile", { user: offer.user })
            }}
            style={{
              // flex:1,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}>
            <Image
              // progressiveRenderingEnabled={true}
              // defaultSource={{ uri: baseurl + item+".mini" }}
              // source={{ uri: baseurl + item }}

              style={{ width: 48, height: 48, backgroundColor: "#fff", resizeMode: "cover", borderRadius: 24, marginLeft: 15 }}
              {...{ preview, uri }}
            />
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text style={{ fontSize: 12, color: Colors.DGray, textAlign: "left" }}>{rdate(offer.created)} {offer.user.vip ? <FontAwesome5 name="crown" /> : ""}{offer.user.vip ? " 🇺🇸" : ""} </Text>
              <Text style={{ fontSize: 16, textAlign: "left", fontFamily: t("regular"), marginTop: 5 }}>{offer.user.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Offer", { offer: offer })
          }}
          style={{
            width,
            height: images.length > 0 ? width : 0,
          }}>
          <Swiper style={{
            height: images.length > 0 ? width : 0,
          }}
            dotColor={Colors.BGray}
            dotStyle={{ width: 7, height: 7 }}
            activeDotStyle={{ width: 10, height: 10 }}
            activeDotColor={Colors.BGreen}
            showsButtons={false}>
            {renderImages(offer)}
          </Swiper>
        </TouchableOpacity>
        <View style={{
          width,
          // height: 72,
          // justifyContent: "center",
          // alignItems: "center",
          // flexDirection: "row",
          backgroundColor: Colors.WHITE,
          borderColor: Colors.BGray,
          borderTopWidth: 1,
        }}>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <TouchableOpacity
              onPress={() => {
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
              }}
              style={{ display: global.token == "" ? "none" : "flex" }}
            >
              {
                fave == 1 ?
                  <Ionicons name="heart" size={32} style={{ borderRadius: 24, marginLeft: 10 }} />
                  : fave == 2 ?
                    <ActivityIndicator size={32} style={{ borderRadius: 24, marginLeft: 10 }} />
                    :
                    <Ionicons name="heart-outline" size={32} style={{ borderRadius: 24, marginLeft: 10 }} />
              }
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                const link = Linking.createURL('/Offer', {
                  queryParams: { id: '' + offer._id },
                })
                console.log(link)
                Share.share({message:`Offer link: ${link} \n App link: ${"APP LINK"}`})
                // Linking.openURL(link)
              }}
              style={{}}
            >
              <Feather name="share-2" size={32} style={{ borderRadius: 24, marginLeft: 15 }} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Offer", { offer: offer })
              }}
              style={{ display: "none" }}
            >
              <MaterialCommunityIcons name="message-text-outline" size={32} style={{ borderRadius: 24, marginLeft: 15 }} />
            </TouchableOpacity>
            <View />
          </View>
          <Text style={{ fontSize: 20, marginLeft: 10, marginRight: 10, marginTop: 5, flex: 1, fontFamily: t("regular") }}>{price + " " + t(offer.cur)}</Text>
          <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 5, flex: 1, fontFamily: t("regular") }}>{desc}</Text>
        </View>
      </View>
    )
  }


  const renderItems = () => {
    return data.map((item) => {
      return (
        <Item key={Math.random()} offer={item} navigation={navigation} name={item.user.name} avatar={item.user.avatar} fav={false} desc={item.desc} price={item.price} images={item.images} />
      );
    });
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
      <CustomHeader title="Home"
        filter={() => {
          setLoading(true)
          setFt(true)
        }}
        left="none" navigation={navigation} />
      <View style={{ flex: 1, alignItems: 'center', }}>
        <View style={styles.searchContainer}>
          <Feather name="search" size={18} color={Colors.DGray} />
          <TextInput
            // value={email}
            placeholder={t("search")}
            onChangeText={r => {
              // setSrch(r)
              let dt = []
              fulldata.forEach(e => {
                // console.log(e)
                if (r == "") {
                  dt.push(e)
                } else {
                  if (e.desc.includes(r)) {
                    dt.push(e)
                  }
                }
              });
              // console.log(dt)
              setData(dt)
            }}
            onSubmitEditing={() => {

            }}
            style={styles.search}
            placeholderTextColor={Colors.DGray}
          // onChangeText={value => setEmail(value)}
          />
        </View>
        {
          loading ?
            <ActivityIndicator color="black" size={64} />
            : data.length > 0 ?
              <ScrollView
                keyboardShouldPersistTaps="always"
                refreshControl={<RefreshControl refreshing={false} onRefresh={() => { setLoading(true); setFt(true) }} />} >
                {
                  renderItems()
                }
                < View style={{ height: 100 }} />
              </ScrollView>
              : <ScrollView refreshControl={<RefreshControl refreshing={false} onRefresh={() => { setLoading(true); setFt(true) }} />} contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }} style={{ flex: 1 }}>
                <Feather name="alert-triangle" color="black" size={64} />
                <Text>{t("nodata")}</Text>
              </ScrollView>
        }

      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};