import { Feather, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useRef, useCallback } from 'react';
import { StackActions } from '@react-navigation/native';
import Colors from '../constants/Colors';
import PhoneInput from "react-native-phone-number-input";
import { mystore } from '../components/Redux';

import {
  Text,
  TextInput,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  I18nManager,
} from 'react-native';
import styles, { SIZES } from '../constants/Style';
import Ti from '../components/TextInput';
import { post } from '../network';
import { t } from '../language';

/* const Colors = {
  BLACK: '#000',
  BLACK: '#FFF',
  BLUE: '#ddd',
  PURPLE: '#FFF',
}; */

export default function Main({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // const phoneInput = useRef < PhoneInput > (null);

  const handleLogin = useCallback(async () => {
    // setLoading(false);

    if (!loading) {
      if (firstname == "") {
        Alert.alert((t("er")), t("erfname"))
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

      setLoading(true);
      post('/users', {
        phone: phone,
        password: password,
        email: email,
        name: firstname + " " + lastname
      }).then(r => {
        console.log(r.ok)
        if (r.ok) {
          Alert.alert(t("success"), t("usercr"))
          mystore.dispatch({ type: 'change', "obj": { "RandNoti": "" + Date.now() } })
          navigation.navigate("Login")
          mystore.dispatch({ type: 'change', "obj": { "RandNoti": "" + Date.now() } })
        } else {
          Alert.alert(t("er"), t("erphone2"))
        }
        setLoading(false);
      })
    }
  });

  const renderInputs = () => {
    return (
      <View style={{ flex: 1 }}>

        <View style={styles.inputContainer}>
          <Ionicons name="person" size={18} color={Colors.DGray} />
          <TextInput
            value={firstname}
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
            placeholder={t("email")}
            style={styles.input}
            placeholderTextColor={Colors.BLACK}
            onChangeText={value => setEmail(value)}
          />
        </View>

        <PhoneInput
          // ref={phoneInput}
          defaultValue={phone}
          defaultCode="SA"
          layout="first"
          placeholder={t("phone")}
          onChangeFormattedText={(text) => {
            setPhone(text);
            global.tphone = global.tphone = text
            console.log(text)

          }}

          containerStyle={styles.PhoneContainer}
          textContainerStyle={{ backgroundColor: "transparent", flexDirection: I18nManager.isRTL ? "row-reverse" : "row" }}
          codeTextStyle={{ fontFamily: t("regular") }}
          textInputStyle={{ paddingLeft: 10, paddingRight: 10, fontFamily: t("regular") }}
        />

        <TouchableOpacity activeOpacity={0.8} style={styles.signin} onPress={() => handleLogin()}>
          {loading ? (
            <ActivityIndicator size={SIZES.FONT2} color={Colors.WHITE} />
          ) : (
            <Text style={styles.signinLabel}>{t("register")}</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{ alignSelf: "center" }}
        >
          <Text
            style={{
              textAlign: 'right',
              fontWeight: '300',
              color: Colors.BLACK,
              fontFamily: t("regular"),
              fontSize: SIZES.FONT2,
              marginTop: SIZES.PADDING * 2,
            }}>
            {t("haveacc")} <Text style={{ fontFamily: t("bold") }}>{t("login")}</Text>
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
              marginBottom: 200,
              fontFamily: t("regular"),
              color: Colors.DGray,
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
      <View style={styles.container}>
        <ScrollView >
          <View style={{ flex: 0.5, justifyContent: 'center', marginTop: 40, marginBottom: 40 }}>
            <Text style={styles.title}>{t("register")}</Text>
            <Text style={styles.title2}>{t("newacc")}</Text>
          </View>
          {renderInputs()}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};