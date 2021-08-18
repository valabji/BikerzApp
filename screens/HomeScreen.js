import * as React from 'react';
import CustomHeader from '../components/CHeader'
import { Text, View, SafeAreaView, Image, RefreshControl, ActivityIndicator, TouchableOpacity, TextInput, Dimensions, ScrollView, Alert } from 'react-native'
import { StackActions } from '@react-navigation/native';
import Fonts from '../constants/Fonts';
import styles, { SIZES } from '../constants/Style';
import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
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
        style={{ width, height: width, backgroundColor: Colors.WHITE, resizeMode: "cover" }} />
    );
  });
}

const Item = ({ offer, navigation, name, avatar, id, desc, price, fav, images }) => {
  const [fave, setFav] = React.useState(fav ? 1 : 0)
  console.log(baseurl + avatar)
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
        paddingLeft: global.token == "" ? 0 : 15,
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
            source={{ uri: baseurl + avatar }}
            style={{ width: 48, height: 48, resizeMode: "cover", borderRadius: 24, marginLeft: 15 }} />
          <View style={{ flex: 1, marginLeft: 15 }}>
            <Text style={{ fontSize: 12, color: Colors.DGray, textAlign: "left" }}>{rdate(offer.created)} {offer.user.vip ? <FontAwesome5 name="crown" /> : ""}{offer.user.vip ? " VIP" : ""} </Text>
            <Text style={{ fontSize: 16, textAlign: "left" }}>{offer.user.name}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (fav == 1) {
              setFav(2)
              remove("/likes/likeID").then(r => {
                if (r.ok == true) {
                  setFav(0)
                } else {
                  setFav(1)
                }
              })
            }
            if (fav == 0) {
              setFav(2)
              post("/likes", { offer: offer.id }).then(r => {
                if (r.ok == true) {
                  setFav(1)
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
              <Ionicons name="heart" size={32} style={{ borderRadius: 24, marginRight: 15 }} />
              : fave == 2 ?
                <ActivityIndicator size={32} style={{ borderRadius: 24, marginRight: 15 }} />
                :
                <Ionicons name="heart-outline" size={32} style={{ borderRadius: 24, marginRight: 15 }} />
          }
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
          {renderImages(images)}
        </Swiper>
      </TouchableOpacity>
      <View style={{
        width,
        height: 72,
        // justifyContent: "center",
        // alignItems: "center",
        // flexDirection: "row",
        backgroundColor: Colors.WHITE,
        borderColor: Colors.BGray,
        borderTopWidth: 1,
      }}>
        <Text style={{ fontSize: 20, marginLeft: 10, marginRight: 10, marginTop: 5, flex: 1 }}>{price + "$"}</Text>
        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 5, flex: 1 }}>{desc}</Text>
      </View>
    </View>
  )
}

export default function HomeScreen({ navigation }) {
  const [data, setData] = React.useState([])
  const [ft, setFt] = React.useState(true)
  const [loading, setLoading] = React.useState(true)
  if (ft) {
    setFt(false)
    get('/offers')
      .then((res) => {
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
        <Item offer={item} navigation={navigation} name={item.user.name} avatar={item.user.avatar} fav={false} desc={item.desc} price={item.price} images={item.images} />
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
        left="filter" navigation={navigation} />
      <View style={{ flex: 1, alignItems: 'center', }}>
        <View style={styles.searchContainer}>
          <Feather name="search" size={18} color={Colors.DGray} />
          <TextInput
            // value={email}
            placeholder="Start searching for real brands"
            style={styles.search}
            placeholderTextColor={Colors.DGray}
          // onChangeText={value => setEmail(value)}
          />
        </View>
        {
          loading ?
            <ActivityIndicator color="black" size={64} />
            : data.length > 0 ?
              <ScrollView refreshControl={<RefreshControl refreshing={false} onRefresh={() => { setLoading(true); setFt(true) }} />} >
                {
                  renderItems()
                }
                < View style={{ height: 100 }} />
              </ScrollView>
              : <ScrollView refreshControl={<RefreshControl refreshing={false} onRefresh={() => { setLoading(true); setFt(true) }} />} contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }} style={{ flex: 1 }}>
                <Feather name="alert-triangle" color="black" size={64} />
                <Text>No Data, try again later</Text>
              </ScrollView>
        }

      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};