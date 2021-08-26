import { Feather, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useCallback } from 'react';
import { StackActions } from '@react-navigation/native';
import Colors from '../constants/Colors';
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

  const handleLogin = useCallback(async () => {
    // setLoading(false);

    if (!loading) {
      if (firstname == "") {
        Alert.alert((t("er")), t("erfname"))
        return null
      }
      if (lastname == "") {
        Alert.alert(t("er"), t("erlname"))
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
      if (password == "") {
        Alert.alert(t("er"), t("erpass"))
        return null
      }

      if (password != password2) {
        Alert.alert(t("er"), t("erpass2"))
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
          navigation.navigate("Login")
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

        <View style={styles.inputContainer}>
          <Ionicons name="phone-portrait" size={18} color={Colors.DGray} />
          <TextInput
            value={phone}
            placeholder={t("phone")}
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
            placeholder={t("password")}
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
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={18} color={Colors.DGray} />
          <TextInput
            value={password2}
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
              fontSize: SIZES.FONT2,
              marginTop: SIZES.PADDING * 2,
            }}>
            {t("haveacc")} <Text style={{ fontWeight: "500" }}>{t("login")}</Text>
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
      <ScrollView style={styles.container}>
        <View style={{ flex: 0.5, justifyContent: 'center', marginTop: 40, marginBottom: 40 }}>
          <Text style={styles.title}>{t("register")}</Text>
          <Text style={styles.title2}>{t("newacc")}</Text>
        </View>
        {renderInputs()}
      </ScrollView>
    </SafeAreaView>
  );
};