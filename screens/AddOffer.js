import * as React from 'react';
import CustomHeader from '../components/CHeader'
import { Text, ActivityIndicator, View, Dimensions, TouchableOpacity, Image, SafeAreaView, ScrollView, TextInput, Alert, I18nManager } from 'react-native'
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
import DropDownPicker from 'react-native-dropdown-picker'

const { width, height } = Dimensions.get("screen");

export default function HomeScreen({ navigation }) {

  const [images, setImages] = React.useState([]);

  const [list1, setList1] = React.useState([
    { label: t('SAR'), value: 'SAR' },
  ])
  const [open1, setOpen1] = React.useState(false)
  const [value1, setValue1] = React.useState("SAR")

  const [list2, setList2] = React.useState([
    { label: 'TOYOTA', value: 'TOYOTA' },
    { label: 'XYZ', value: 'XYZ' },
    { label: 'HONDA', value: 'HONDA' },
  ])
  const [open2, setOpen2] = React.useState(false)
  const [value2, setValue2] = React.useState(null)

  const curyear = new Date().getFullYear()
  console.log(curyear)
  let years = []
  for (let i = curyear; i >= 1990; i--) {
    years.push({ label: '' + i, value: '' + i })
  }

  const [list3, setList3] = React.useState(years)

  const [open3, setOpen3] = React.useState(false)
  const [value3, setValue3] = React.useState(null)

  const [list4, setList4] = React.useState([
    { label: t('blue'), value: 'blue' },
    { label: t('green'), value: 'green' },
    { label: t('red'), value: 'red' },
    { label: t('blackcolor'), value: 'blackcolor' },
    { label: t('white'), value: 'white' },
    { label: t('other'), value: 'other' }
  ])
  const [open4, setOpen4] = React.useState(false)
  const [value4, setValue4] = React.useState(null)



  const [rand, setRand] = React.useState(0)
  const [price, setPrice] = React.useState("")
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
      <CustomHeader title="Home" isHome={true} navigation={navigation} />
      <View style={{ flex: 1, paddingLeft: 30, borderRadius: 12, paddingRight: 30, }}>
        <ScrollView
          style={{ flex: 1, }}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 200, paddingTop: 100, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={styles.pagetitle}>{t("newoffer")}</Text>
          <TextInput
            value={price}
            multiline={false}
            placeholder={t("price")}
            placeholderTextColor="#000"
            onChangeText={r => { setPrice(r) }}
            style={styles.normalInput}
            returnKeyLabel={()=>{return(<View style={{width:60,height:60,}} />)}}
          />

          <View
            style={{ height: open1 ? 200 : 0, marginTop: 20, }}
          >
            <DropDownPicker
              items={list1}
              open={open1}
              value={value1}
              setOpen={(open1) => {
                setOpen1(open1)
              }}
              placeholder={t("cur")}
              style={{display:"none"}}
              placeholderStyle={{ fontFamily: t("regular"), writingDirection: I18nManager.isRTL ? "rtl" : "ltr" }}
              textStyle={{ fontFamily: t("regular"), writingDirection: I18nManager.isRTL ? "rtl" : "ltr" }}
              labelStyle={{ fontFamily: t("regular"), writingDirection: I18nManager.isRTL ? "rtl" : "ltr" }}
              listItemLabelStyle={{ fontFamily: t("regular"), writingDirection: I18nManager.isRTL ? "rtl" : "ltr" }}
              customItemLabelStyle={{ fontFamily: t("regular"), writingDirection: I18nManager.isRTL ? "rtl" : "ltr" }}
              setValue={(v) => { setValue1(v) }}
              dropDownContainerStyle={{ height: 140 }}
              listMode="SCROLLVIEW"
              onChangeItem={item => console.log(item.label, item.value)}
            />
          </View>

          <View
            style={{ height: open2 ? 200 : 60, marginTop: 20, }}
          >
            <DropDownPicker
              items={list2}
              open={open2}
              value={value2}
              searchable={true}
              setOpen={(open2) => {
                setOpen2(open2)
              }}
              placeholder={t("manufacture")}
              placeholderStyle={{ fontFamily: t("regular"), writingDirection: I18nManager.isRTL ? "rtl" : "ltr" }}
              textStyle={{ fontFamily: t("regular"), writingDirection: I18nManager.isRTL ? "rtl" : "ltr" }}
              labelStyle={{ fontFamily: t("regular"), writingDirection: I18nManager.isRTL ? "rtl" : "ltr" }}
              listItemLabelStyle={{ fontFamily: t("regular"), writingDirection: I18nManager.isRTL ? "rtl" : "ltr" }}
              customItemLabelStyle={{ fontFamily: t("regular"), writingDirection: I18nManager.isRTL ? "rtl" : "ltr" }}
              setValue={(v) => { setValue2(v) }}
              dropDownContainerStyle={{ height: 140 }}
              listMode="SCROLLVIEW"
              onChangeItem={item => console.log(item.label, item.value)}
            />
          </View>

          <View
            style={{ height: open3 ? 200 : 60, marginTop: 20, }}
          >
            <DropDownPicker
              items={list3}
              open={open3}
              value={value3}
              setOpen={(open3) => {
                setOpen3(open3)
              }}
              placeholder={t("year")}
              placeholderStyle={{ fontFamily: t("regular"), writingDirection: I18nManager.isRTL ? "rtl" : "ltr" }}
              textStyle={{ fontFamily: t("regular"), writingDirection: I18nManager.isRTL ? "rtl" : "ltr" }}
              labelStyle={{ fontFamily: t("regular"), writingDirection: I18nManager.isRTL ? "rtl" : "ltr" }}
              listItemLabelStyle={{ fontFamily: t("regular"), writingDirection: I18nManager.isRTL ? "rtl" : "ltr" }}
              customItemLabelStyle={{ fontFamily: t("regular"), writingDirection: I18nManager.isRTL ? "rtl" : "ltr" }}
              setValue={(v) => { setValue3(v) }}
              dropDownContainerStyle={{ height: 140 }}
              listMode="SCROLLVIEW"
              onChangeItem={item => console.log(item.label, item.value)}
            />
          </View>

          <View
            style={{ height: open4 ? 200 : 60, marginTop: 20, }}
          >
            <DropDownPicker
              items={list4}
              open={open4}
              value={value4}
              setOpen={(open4) => {
                setOpen4(open4)
              }}
              placeholder={t("color")}
              placeholderStyle={{ fontFamily: t("regular"), writingDirection: I18nManager.isRTL ? "rtl" : "ltr" }}
              textStyle={{ fontFamily: t("regular"), writingDirection: I18nManager.isRTL ? "rtl" : "ltr" }}
              labelStyle={{ fontFamily: t("regular"), writingDirection: I18nManager.isRTL ? "rtl" : "ltr" }}
              listItemLabelStyle={{ fontFamily: t("regular"), writingDirection: I18nManager.isRTL ? "rtl" : "ltr" }}
              customItemLabelStyle={{ fontFamily: t("regular"), writingDirection: I18nManager.isRTL ? "rtl" : "ltr" }}
              setValue={(v) => { setValue4(v) }}
              dropDownContainerStyle={{ height: 140 }}
              listMode="SCROLLVIEW"
              onChangeItem={item => console.log(item.label, item.value)}
            />
          </View>

          <TextInput
            value={desc}
            multiline={true}
            placeholder={t("moredesc")}
            onChangeText={r => { setDesc(r) }}
            placeholderTextColor="#000"
            height={70}
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
              if (price == "") {
                Alert.alert(t("er"), t("erprice"))
                return
              }

              if (desc == "") {
                setDesc("-")
              }
              if (images.length == 0) {
                Alert.alert(t("er"), t("erphoto"))
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
              post("/offers", {
                price: price,
                cur: value1,
                manufacture: value2,
                year: value3,
                color: value4,
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
              })

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
