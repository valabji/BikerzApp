import { Feather, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useCallback } from 'react';
import { StackActions } from '@react-navigation/native';
import CustomHeader from '../components/CHeader'
import { t } from '../language';

import Colors from '../constants/Colors';
import {
  Text,
  TextInput,
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  Dimensions,
} from 'react-native';
import styles, { SIZES } from '../constants/Style';
import Ti from '../components/TextInput';
import { post, baseurl, patch, upload } from '../network';

import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import AsyncStorage from '@react-native-async-storage/async-storage';
/* const Colors = {
  BLACK: '#000',
  BLACK: '#FFF',
  BLUE: '#ddd',
  PURPLE: '#FFF',
}; */
const width = Dimensions.get("screen").width

export default function Main({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [firstname, setFirstname] = useState(global.fullname);
  const [email, setEmail] = useState(global.email);
  const [avatar, setAvatar] = useState(baseurl + global.avatar);
  const [phone, setPhone] = useState(global.phone);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [edit, setEdit] = useState("0");
  const [rand, setRand] = React.useState(0)




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
      let fdata = new FormData()
      var photo = {
        uri: result.uri,
        name: 'photo.jpg',
        type: 'image/jpg'
        // type: result.type,
        // name: "photo",
      };
      fdata.append("image", photo)
      setLoading(1)
      setAvatar(result.uri);
      setRand(Date.now())
      await upload("/upload", fdata).then(r => {
        if (r.ok) {
          const ravatar = r.path
          patch('/users/123', { avatar: r.path }).then(r => {
            console.log(r.ok)
            if (r.ok) {
              global.avatar = ravatar
              let usr = {}
              Object.keys(global.user).forEach(e => {
                usr[e] = global.user[e]
              });
              usr.avatar = ravatar
              global.user = usr
              console.log(usr)
              setTimeout(async () => {
                await AsyncStorage.setItem("@avatar", "" + global.avatar)
                setAvatar(baseurl + ravatar);
                setRand(Date.now())
                setLoading(2)
                setTimeout(() => {
                  setLoading(0)
                }, 1500);
              }, 100);
            } else {
              Alert.alert(t("er"), t("try"))
              setAvatar(baseurl + global.avatar);
              setRand(Date.now())
              setLoading(0)
            }
          })
        } else {
          Alert.alert(t("alert"), t("noupload"))
          setAvatar(baseurl + global.avatar);
          setRand(Date.now())
          setLoading(0)
        }
      })
    }
  }

  const pickImage = async () => {

    let result = await getImage();

  };



  const renderInputs = () => {
    return (
      <View style={{ flex: 1 }}>

        <View style={styles.inputContainer}>
          <Ionicons name="person" size={18} color={Colors.DGray} />
          <TextInput
            value={firstname}
            editable={edit == 1}
            placeholder={t("fullname")}
            style={styles.input}
            placeholderTextColor={Colors.BLACK}
            onChangeText={value => setFirstname(value)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="mail" size={18} color={Colors.DGray} />
          <TextInput
            value={email}
            editable={edit == 1}
            placeholder={t("email")}
            style={styles.input}
            placeholderTextColor={Colors.BLACK}
            onChangeText={value => setEmail(value)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="phone-portrait" size={18} color={Colors.DGray} />
          <TextInput
            value={phone}
            editable={false}
            placeholder={t("phone")}
            style={styles.input}
            placeholderTextColor={Colors.BLACK}
            onChangeText={value => setPhone(value)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="logo-whatsapp" size={18} color={Colors.DGray} />
          <TextInput
            // value={phone}
            editable={false}
            placeholder={t("whats")}
            style={styles.input}
            placeholderTextColor={Colors.BLACK}
            // onChangeText={value => setPhone(value)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={18} color={Colors.DGray} />
          <TextInput
            value={password}
            style={styles.input}
            editable={edit == 1}
            placeholder={t("password3")}
            placeholderTextColor={Colors.BLACK}
            secureTextEntry={!showPassword}
            onChangeText={value => setPassword(value)}
          />
          <TouchableOpacity
            style={{
              right: 10,
              // top: SIZES.BASE+7,
              position: 'absolute',
              justifyContent: "center",
              width: 18,
              height: 30,
            }}
            onPress={() => setShowPassword(!showPassword)}>
            <Feather
              color={Colors.BLACK}
              size={18}
              name={!showPassword ? 'eye' : 'eye-off'}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.inputContainer, { display: password == "" ? "none" : "flex" }]}>
          <Ionicons name="lock-closed-outline" size={18} color={Colors.DGray} />
          <TextInput
            value={password2}
            editable={edit == 1}
            style={styles.input}
            placeholder={t("password2")}
            placeholderTextColor={Colors.BLACK}
            secureTextEntry={!showPassword}
            onChangeText={value => setPassword2(value)}
          />
          <TouchableOpacity
            style={{
              right: 10,
              // top: SIZES.BASE+7,
              position: 'absolute',
              justifyContent: "center",
              width: 18,
              height: 30,
            }}
            onPress={() => setShowPassword(!showPassword)}>
            <Feather
              color={Colors.BLACK}
              size={18}
              name={!showPassword ? 'eye' : 'eye-off'}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Home" left="back" navigation={navigation} />
      <ScrollView style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            pickImage()
          }}
          style={{ alignItems: "center" }}>
          <View style={{ width: 128, height: 128 }}>
            <Image
              source={{ uri: avatar }}
              style={{ width: 128, height: 128, borderWidth: 0.5, resizeMode: "cover", borderRadius: 64 }} />
            <View style={{ position: "absolute", borderWidth: 0.5, bottom: 0, right: 10, backgroundColor: Colors.BGray, borderRadius: 12, width: 30, height: 30, justifyContent: "center", alignItems: "center" }}>
              {
                loading == 1 ?
                  <ActivityIndicator color={Colors.BLACK} size={24} />
                  :
                  loading == 2 ?
                    <Feather name="check-circle" size={24} />
                    :
                    <Feather name="edit" size={24} />
              }
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (edit == 0) {
              setEdit(1)
            }
            if (edit == 1) {
              if (firstname == "") {
                Alert.alert(t("er"), t("ername"))
                return null
              }
              if (email == "") {
                Alert.alert(t("er"), t("eremail"))
                return null
              }
              if (phone == "") {
                Alert.alert(t("er"), t("erphone"))
                return null
              }
              if (password != password2) {
                Alert.alert(t("er"), t("erpass2"))
                return null
              }
              setEdit(2)
              let altered = {
                email: email,
                name: firstname
              }
              if (password != "") {
                altered.password = password
              }
              console.log(altered)

              patch('/users/123', altered).then(r => {
                console.log(r.ok)
                if (r.ok) {
                  global.fullname = firstname
                  // global.uid = r.data._id
                  // global.avatar = r.data.avatar
                  global.email = email
                  global.phone = phone
                  // global.token = r.token
                  let usr = {}
                  Object.keys(global.user).forEach(e => {
                    usr[e] = global.user[e]
                  });
                  usr.name = firstname
                  usr.email = email
                  usr.phone = phone
                  global.user = usr
                  console.log(usr)
                  setTimeout(async () => {
                    // await AsyncStorage.setItem("@token", "" + global.token)
                    await AsyncStorage.setItem("@fullname", "" + global.fullname)
                    // await AsyncStorage.setItem("@uid", "" + global.uid)
                    // await AsyncStorage.setItem("@avatar", "" + global.avatar)
                    await AsyncStorage.setItem("@email", "" + global.email)
                    await AsyncStorage.setItem("@user", "" + global.user)
                    await AsyncStorage.setItem("@phone", "" + global.phone)
                    // const test = await AsyncStorage.getItem("@token")
                    // console.log("TEEEET:" + test)
                    // navigation.dispatch(StackActions.replace('BotNav'))
                  }, 100);
                  setEdit(3)
                  setTimeout(() => {
                    setEdit(0)
                  }, 1500);
                } else {
                  Alert.alert(t("er"), t("try"))
                  setEdit(1)
                }
              })
            }
            if (edit == 2) {
              setEdit(0)
              Alert.alert(t("loading"), t("wait"))
            }

          }}
          style={{ flex: 0.5, justifyContent: 'center', marginTop: 40, marginBottom: 40 }}>
          {
            edit == 0 ?
              <Text style={{ fontSize: 24, marginTop: 10 }}>  <Feather name="edit" size={24} /> {t("edit")}</Text>
              : edit == 1 ?
                <Text style={{ fontSize: 24, marginTop: 10 }}>  <Feather name="check-circle" size={24} /> {t("save")}</Text>
                : edit == 3 ?
                  <Text style={{ fontSize: 24, marginTop: 10 }}>  <Feather name="check-circle" size={24} /> {t("saved")}</Text>
                  :
                  <Text style={{ fontSize: 24, marginTop: 10 }}>  <ActivityIndicator color={Colors.BLACK} size={24} /> {t("saving")}</Text>
          }
        </TouchableOpacity>
        {renderInputs()}
      </ScrollView>
    </SafeAreaView>
  );
};