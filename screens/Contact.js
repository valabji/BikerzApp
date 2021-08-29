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
import * as ImageManipulator from 'expo-image-manipulator';
import { mystore } from '../components/Redux';
import { t } from '../language';

const { width, height } = Dimensions.get("screen");

export default function HomeScreen({ navigation }) {

  const [images, setImages] = React.useState([]);
  const [rand, setRand] = React.useState(0)
  const [price, setPrice] = React.useState("")
  const [cur, setCur] = React.useState("")
  const [desc, setDesc] = React.useState("")
  const [loading, setLoading] = React.useState(false)

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
          key={Math.random()}
          source={{ uri: item }}
          style={{ width: 64, height: 64, backgroundColor: Colors.DGreen, resizeMode: "cover" }} />
      );
    });
  }

  const getImage = async () => {
    let img = null
    await Alert.alert("", t("slcsrc"), [
      {
        text: t("gal"), onPress: async () => {
          img = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
          })
          doImage(img)
        }
      },
      {
        text: t("cam"), onPress: async () => {
          img = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
          })
          doImage(img)
        }
      },
    ])
  }

  const doImage = async (result) => {

    result = await ImageManipulator.manipulateAsync(
      result.uri,
      [{ resize: { height: 720 } }, { crop: { originX: 0, originY: 0, height: 720, width: 720 } }],
      { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG, base64: false }
    );

    if (!result.cancelled) {
      let imgs = images
      let fdata = new FormData()
      var photo = {
        uri: result.uri,
        name: 'photo.jpg',
        type: 'image/jpg'
        // type: result.type,
        // name: "photo",
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
          Alert.alert(t("alert"), t("noupone"))
          setImages(nimgs);
          setRand(Date.now())
        }
      })
    }
  }

  const pickImage = async () => {

    let result = await getImage();

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
      <CustomHeader title="Home" left="back" isHome={true} navigation={navigation} />
      <View style={{ flex: 1, alignItems: 'center', paddingLeft: 30, borderRadius: 12, paddingRight: 30 }}>
        <ScrollView
          style={{ width: "100%", flex: 1 }}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 200, paddingTop: 100, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={styles.pagetitle}>{t("contact")}</Text>

          <TextInput
            value={cur}
            multiline={false}
            placeholder={t("title")}
            onChangeText={r => { setCur(r) }}
            placeholderTextColor="#000"
            style={styles.normalInput}
          />
          <TextInput
            value={desc}
            multiline={true}
            placeholder={t("msg")}
            onChangeText={r => { setDesc(r) }}
            placeholderTextColor="#000"
            height={200}
            style={styles.normalInput}
          />
          <ScrollView horizontal style={{ zIndex: 3 }} contentContainerStyle={{ height: images.length > 0 ? 100 : 0 }}>
            {images.map((item, index) => {
              return (
                <RenderPics
                  index={index}
                  uri={item}
                />
              );
            })}
          </ScrollView>
          <TouchableOpacity
            onPress={pickImage}
            style={{ flexDirection: "row", height: 64, marginTop: 20, backgroundColor: Colors.BGreen, width: "100%", borderRadius: 12, justifyContent: "center", alignItems: "center" }}>
            <Feather name="image" size={24} color="#fff" />
            <Text style={styles.buttonTitle}>{images.length > 0 ? t("addphotos") : t("attphotos")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (cur == "") {
                Alert.alert(t("er"), t("ertitle"))
                return
              }
              if (desc == "") {
                Alert.alert(t("er"), t("ermsg"))
                return
              }

              if (loading) {
                Alert.alert(t("er"), t("wait"))
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
                Alert.alert(t("er"), t("waitphoto"))
                return
              }
              setLoading(true)
              setTimeout(() => {
                setLoading(false)
                Alert.alert("", t("tanksout"))
                navigation.goBack()
              }, 1500);
              /* 
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
                  mystore.dispatch({ type: 'change', "obj": { "RandNoti": "" + Date.now() } })
                  navigation.navigate("Main")
                } else {
                  Alert.alert(t("er"), t("try"))
                }
              }) */

            }}
            style={{ flexDirection: "row", height: 64, marginTop: 20, backgroundColor: Colors.BGreen, width: "100%", borderRadius: 12, justifyContent: "center", alignItems: "center" }}>
            {loading ? <ActivityIndicator size={24} color={Colors.WHITE} /> : <Feather name="check" size={24} color={Colors.WHITE} />}
            <Text style={styles.buttonTitle}>{t("send")}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
