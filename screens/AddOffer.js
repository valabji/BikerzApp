import * as React from 'react';
import CustomHeader from '../components/CHeader'
import { Text, ActivityIndicator, View, Dimensions, TouchableOpacity, Image, SafeAreaView, ScrollView, TextInput, Alert } from 'react-native'
import { StackActions } from '@react-navigation/native';
import Fonts from '../constants/Fonts';
import styles, { SIZES } from '../constants/Style';
import { Feather, Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import { baseurl, post, upload } from '../network';

const { width, height } = Dimensions.get("screen");

export default function HomeScreen({ navigation }) {

  const [images, setImages] = React.useState([]);
  const [rand, setRand] = React.useState(0)
  const [price, setPrice] = React.useState(0)
  const [cur, setCur] = React.useState("")
  const [desc, setDesc] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  console.log(price)
  console.log(cur)
  console.log(desc)

  /* 
    React.useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);
   */
  const renderImages = (images) => {
    return images.map((item) => {
      return (
        <Image
          source={{ uri: item }}
          style={{ width: 64, height: 64, backgroundColor: Colors.DGreen, resizeMode: "cover" }} />
      );
    });
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      let imgs = images
      let fdata = new FormData()
      var photo = {
        uri: result.uri,
        type: result.type,
        name: "photo",
      };
      fdata.append("image", photo)
      imgs.push({ local: result.uri, remote: "" })
      setImages(imgs);
      setRand(Date.now())
      await upload("/upload", fdata).then(r => {
        const imgs = images
        const nimgs = []
        imgs.forEach(e => {
          if (e.local != result.uri) {
            nimgs.push(e)
          }
        });
        if (r.ok) {
          nimgs.push({ local: result.uri, remote: r.path })
          setImages(nimgs);
          setRand(Date.now())
        } else {
          Alert.alert("Alert", "One of the images couldn't reach the server, please try again.")
          setImages(nimgs);
          setRand(Date.now())
        }
      })
    }
  };

  const RenderPics = ({ index, uri }) => {
    const loading = uri.remote == ""
    return <View
      style={{
        overflow: "hidden",
        borderRadius: 10,
        width: 100,
        height: 100,
        elevation: 1,
        marginRight: 10
      }}
    >
      {
        loading ?
          <View style={{
            position: "absolute",
            left: 5,
            top: 5,
            backgroundColor: Colors.WHITE,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            width: 20,
            height: 20,
            zIndex: 1
          }}>
            <ActivityIndicator color={Colors.BLACK} size={18} />
          </View>
          :
          <View style={{
            position: "absolute",
            left: 5,
            top: 5,
            backgroundColor: Colors.WHITE,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            width: 20,
            height: 20,
            zIndex: 1
          }}>
            <TouchableOpacity
              onPress={() => {
                const nar = images
                nar.splice(index, 1)
                setImages(nar)
                setRand(Date.now())
              }}
            >
              <Feather name="x-circle" size={19} />
            </TouchableOpacity>
          </View>

      }
      <Image
        source={{ uri: uri.local }}
        style={{
          backgroundColor: Colors.DGray,
          resizeMode: "contain",
          overflow: "hidden",
          borderRadius: 10,
          width: 100,
          height: 100,
        }}
      />
    </View>
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
      <CustomHeader title="Home" isHome={true} navigation={navigation} />
      <View style={{ flex: 1, alignItems: 'center', }}>
        <ScrollView
          style={{ width: "100%", flex: 1, paddingLeft: 30, borderRadius: 12, paddingRight: 30 }}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 200, paddingTop: 100, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{ width: "100%", fontSize: 24, color: Colors.BGreen, fontFamily: "Poppins_400Regular" }}>Add New Offer</Text>
          <TextInput
            value={price}
            multiline={false}
            placeholder="Price"
            placeholderTextColor="#000"
            onChangeText={r => { setPrice(r) }}
            style={{ width: "100%", marginTop: 20, backgroundColor: Colors.BGray, borderRadius: 24, paddingRight: 20, paddingTop: 20, paddingBottom: 20, paddingLeft: 20 }}
          />
          <TextInput
            value={cur}
            multiline={false}
            placeholder="Currency ( e.g: USD )"
            onChangeText={r => { setCur(r) }}
            placeholderTextColor="#000"
            style={{ width: "100%", marginTop: 20, backgroundColor: Colors.BGray, borderRadius: 24, paddingRight: 20, paddingTop: 20, paddingBottom: 20, paddingLeft: 20 }}
          />
          <TextInput
            value={desc}
            multiline={true}
            placeholder="Description"
            onChangeText={r => { setDesc(r) }}
            placeholderTextColor="#000"
            style={{ width: "100%", marginTop: 20, marginBottom: 20, height: 200, backgroundColor: Colors.BGray, borderRadius: 24, paddingRight: 20, paddingTop: 20, paddingLeft: 20 }}
          />
          <ScrollView horizontal style={{ zIndex: 3 }} contentContainerStyle={{ height: images.length > 0 ? 100 : 0 }}>
            {images.map((item, index) => {
              console.log("ITEM : " + index)
              // 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
              return (
                <RenderPics
                  index={index}
                  uri={item}
                />
              );
            })}
            {/* <View style={{ width: 100, height: 40 }} /> */}
          </ScrollView>
          <TouchableOpacity
            onPress={pickImage}
            style={{ flexDirection: "row", height: 64, marginTop: 20, backgroundColor: Colors.BGreen, width: "100%", borderRadius: 12, justifyContent: "center", alignItems: "center" }}>
            <Feather name="image" size={24} color="#fff" />
            <Text style={{ marginLeft: 12, color: "#fff", fontSize: 24 }}>{images.length > 0 ? "Add Photos" : "Attach Photos"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (price == "") {
                Alert.alert("Error", "please enter price")
                return
              }
              if (cur == "") {
                Alert.alert("Error", "please enter currency")
                return
              }
              if (desc == "") {
                Alert.alert("Error", "please enter description")
                return
              }
              if (images.length == 0) {
                Alert.alert("Error", "please add some photos")
                return
              }

              if (loading) {
                Alert.alert("Error", "please wait!")
                return
              }
              let ok = true
              const photos = []
              images.forEach(e => {
                if (e.remote == "") {
                  ok = false
                } else {
                  photos.push(e.remote)
                }
              })

              if (!ok) {
                Alert.alert("Error", "please wait for photos to load")
                return
              }
              setLoading(true)
              post("/offers", {
                price: price,
                cur: cur,
                desc: desc,
                images: photos
              }).then(r => {
                setLoading(false)
                if (r.ok) {
                  setPrice("")
                  setCur("")
                  setDesc("")
                  setImages([])
                  setRand(Date.now())
                  navigation.navigate("Main")
                } else {
                  Alert.alert("Error", "please try again")
                }
              })

            }}
            style={{ flexDirection: "row", height: 64, marginTop: 20, backgroundColor: Colors.BGreen, width: "100%", borderRadius: 12, justifyContent: "center", alignItems: "center" }}>
            {loading ? <ActivityIndicator size={24} color={Colors.WHITE} /> : <Feather name="check" size={24} color={Colors.WHITE} />}
            <Text style={{ marginLeft: 12, color: Colors.WHITE, fontSize: 24 }}>Send</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
