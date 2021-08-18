import * as React from 'react';
import CustomHeader from '../components/CHeader'
import { Text, View, SafeAreaView, Linking, Image, ActivityIndicator, TouchableOpacity, TextInput, Dimensions, ScrollView } from 'react-native'
import { StackActions } from '@react-navigation/native';
import Fonts from '../constants/Fonts';
import styles, { SIZES } from '../constants/Style';
import { Feather, Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { get, post, remove, patch, baseurl } from '../network';
import Swiper from 'react-native-swiper'
import { FlatGrid } from 'react-native-super-grid';

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
        <Item name={item.user.name} avatar={item.user.avatar} fav={true} desc={item.desc} price={item.price} images={item.images} />
      );
    });
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
      <CustomHeader title="Home" left="back" navigation={navigation} />
      <View style={{ flex: 1, alignItems: 'center', }}>
        {
          loading ?
            <ActivityIndicator color="black" size={64} />
            :
            <ScrollView >
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
                  backgroundColor: Colors.WHITE
                }}>
                  <Image
                    source={{ uri: baseurl + user.avatar }}
                    style={{ width: 48, height: 48, resizeMode: "cover", borderRadius: 24, marginLeft: 15 }} />
                  <Text style={{ fontSize: 16, marginLeft: 15, textAlign: "left", flex: 1 }}>{user.name}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      Linking.openURL(`tel:${user.phone}`)
                    }}
                  >
                    {
                      true ?
                        <Ionicons name="call-outline" size={32} style={{ borderRadius: 24, transform: [{ scaleX: -1 }], marginRight: 15 }} />
                        :
                        <Ionicons name="heart-outline" size={32} style={{ borderRadius: 24, marginRight: 15 }} />

                    }
                  </TouchableOpacity>
                </View>
                <FlatGrid
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