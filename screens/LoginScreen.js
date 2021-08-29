import { Feather, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useCallback, useEffect } from 'react';
import { StackActions } from '@react-navigation/native';
import Colors from '../constants/Colors';
import PhoneInput from "react-native-phone-number-input";

import {
  Text,
  TextInput,
  StyleSheet,
  View,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  I18nManager,
} from 'react-native';
import styles, { SIZES } from '../constants/Style';
import Ti from '../components/TextInput';
import { post } from '../network';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { t } from '../language';
import { mystore } from '../components/Redux';
/* const Colors = {
  BLACK: '#000',
  BLACK: '#FFF',
  BLUE: '#ddd',
  PURPLE: '#FFF',
}; */

export default function Main({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState(false)

  useEffect(() => {
    mystore.subscribe(() => {
      setPhone(global.tphone)
    })
  }, [])

  const handleLogin = useCallback(async () => {
    if (!loading) {
      setLoading(true);
      if (!otp) {
        post('/users/sendotp', { phone: phone }).then(r => {
          if (r.ok) {
            setOtp(true)
          } else {
            Alert.alert("", t("er"))
          }
          setLoading(false);
        })
      } else {
        post('/users/login', { phone: phone, otp: password }).then(r => {
          // setOtp(false)
          if (r.ok) {
            global.fullname = r.data.name
            global.uid = r.data._id
            global.avatar = r.data.avatar
            global.email = r.data.email
            global.phone = r.data.phone
            global.user = JSON.stringify(r.data)
            global.token = r.token
            setTimeout(async () => {
              await AsyncStorage.setItem("@token", "" + global.token)
              await AsyncStorage.setItem("@fullname", "" + global.fullname)
              await AsyncStorage.setItem("@uid", "" + global.uid)
              await AsyncStorage.setItem("@avatar", "" + global.avatar)
              await AsyncStorage.setItem("@email", "" + global.email)
              await AsyncStorage.setItem("@user", "" + global.user)
              await AsyncStorage.setItem("@phone", "" + global.phone)
              const test = await AsyncStorage.getItem("@token")
              // console.log("TEEEET:" + test)
              navigation.dispatch(StackActions.replace('BotNav'))

            }, 100);
          } else {
            Alert.alert(t("er"), t("erlogin"))
          }
          setLoading(false);
        })
      }
    }
  });

  const renderInputs = () => {
    return (
      <View style={{ flex: 1 }}>
        <PhoneInput
          // ref={phoneInput}
          defaultValue={phone}
          defaultCode="SA"
          layout="first"
          placeholder={t("phone")}
          disabled={otp}
          onChangeFormattedText={(text) => {
            setPhone(text);
          }}

          containerStyle={styles.PhoneContainer}
          textContainerStyle={{ backgroundColor: "transparent", flexDirection: I18nManager.isRTL ? "row-reverse" : "row" }}
          codeTextStyle={{ fontFamily: t("regular") }}
          textInputStyle={{ paddingLeft: 10, paddingRight: 10, fontFamily: t("regular") }}
        />
        <View style={[styles.inputContainer, { display: otp ? "flex" : "none" }]}>
          <Ionicons name="lock-closed-outline" size={18} color={Colors.DGray} />
          <TextInput
            value={password}
            style={styles.input}
            placeholder={t("verfcode")}
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

        <TouchableOpacity activeOpacity={0.8} style={styles.signin} onPress={() => handleLogin()}>
          {loading ? (
            <ActivityIndicator size={SIZES.FONT2} color={Colors.WHITE} />
          ) : (
            <Text style={styles.signinLabel}>{otp ? t("login") : t("sendverfcode")}</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} style={[styles.signin, { display: otp ? "flex" : "none", marginTop: 10 }]} onPress={() => setOtp(false)}>
          <Text style={styles.signinLabel}>{t("editPhone")}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={{ alignSelf: "center" }}
        >
          <Text
            style={{
              textAlign: 'right',
              fontWeight: '300',
              fontFamily: t("regular"),
              color: Colors.BLACK,
              fontSize: SIZES.FONT2,
              marginTop: SIZES.PADDING * 2,
            }}>
            {t("noacc")} <Text style={{ fontFamily: t("bold") }}>{t("register")}</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{ alignSelf: "center" }}
        >
          <Text
            style={{
              textAlign: 'right',
              fontWeight: '300',
              color: Colors.DGray,
              fontFamily: t("regular"),
              fontSize: SIZES.FONT2,
              marginTop: SIZES.PADDING * 2,
            }}>
            <Feather name="chevrons-left" /> {t("skip")}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={{ flex: 0.5, justifyContent: 'center' }}>
          <Text style={styles.title}>{t("login")}</Text>
          <Text style={styles.title2}>{t("toacc")}</Text>
        </View>
        {renderInputs()}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};