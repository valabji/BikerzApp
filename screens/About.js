import { Feather, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useCallback } from 'react';
import { StackActions } from '@react-navigation/native';
import CustomHeader from '../components/CHeader'

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




  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    result = await ImageManipulator.manipulateAsync(
      result.uri,
      [{ resize: { height: 720 } }, { crop: { originX: 0, originY: 0, height: 720, width: 720 } }],
      { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG, base64: false }
    );

    console.log(result);
    // console.log("Base 64 F Size :"+result.base64.length);

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
  };


  const renderInputs = () => {
    return (
      <View style={{ flex: 1 }}>

        <View style={styles.inputContainer}>
          <Ionicons name="person" size={18} color={Colors.DGray} />
          <TextInput
            value={firstname}
            editable={edit == 1}
            placeholder="Full name"
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
            placeholder="Email Address"
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
            placeholder="Mobile Number"
            style={styles.input}
            placeholderTextColor={Colors.BLACK}
            onChangeText={value => setPhone(value)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={18} color={Colors.DGray} />
          <TextInput
            value={password}
            style={styles.input}
            editable={edit == 1}
            placeholder="Password ( Not Changed )"
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
            placeholder="Re-type Password"
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

      </ScrollView>
    </SafeAreaView>
  );
};