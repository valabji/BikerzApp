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
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import styles, { SIZES } from '../constants/Style';
import Ti from '../components/TextInput';
import { post } from '../network';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

  const handleLogin = useCallback(async () => {
    if (!loading) {
      setLoading(true);
      post('/users/login', { phone: phone, password: password }).then(r => {
        if (r.ok) {
          global.fullname = r.data.name
          global.uid = r.data._id
          global.avatar = r.data.avatar
          global.email = r.data.email
          global.phone = r.data.phone
          global.token = r.token
          setTimeout(async () => {
            await AsyncStorage.setItem("@token", "" + global.token)
            await AsyncStorage.setItem("@fullname", "" + global.fullname)
            await AsyncStorage.setItem("@uid", "" + global.uid)
            await AsyncStorage.setItem("@avatar", "" + global.avatar)
            await AsyncStorage.setItem("@email", "" + global.email)
            await AsyncStorage.setItem("@phone", "" + global.phone)
            const test = await AsyncStorage.getItem("@token")
            console.log("TEEEET:" + test)
            navigation.dispatch(StackActions.replace('BotNav'))

          }, 100);

          /*
Object {
  "Request Body": "{\"phone\":\"1234\",\"password\":\"1234\"}",
  "Response": "{\"ok\":true,\"data\":{\"_id\":\"6116223a0685a57e6ede5da1\",\"name\":\"abdalrahman valabji\",\"avatar\":\"/images/1628331759525\",\"phone\":\"1234\",\"password\":\"81dc9bdb52d04dc20036dbd8313ed055\",\"__v\":0},\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTYyMjNhMDY4NWE1N2U2ZWRlNWRhMSIsImlhdCI6MTYyOTI3ODU1OH0.9LnnboizPimVfSd__5h4uj-5CsRIjW67IND9dT2bLAk\"}",
  "Token": "",
  "URL": "http://bikerz.ddns.net/api/users/login",
}
          */
        } else {
          Alert.alert("Error", "Wrong phone / password ")
        }
        setLoading(false);
      })
    }
  });

  const renderInputs = () => {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.inputContainer}>
          <Ionicons name="call" size={18} color={Colors.DGray} />
          <TextInput
            value={phone}
            placeholder="Phone Number"
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
            placeholder="Password"
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
            <Text style={styles.signinLabel}>Sign in</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Alert.alert("", "Go to 'Forgot Password' screen")}
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
            Forgot password ?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
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
            Don't have an account ? <Text style={{ fontWeight: "500" }}>SIGN UP</Text>
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
              fontSize: SIZES.FONT2,
              marginTop: SIZES.PADDING * 2,
            }}>
            <Feather name="chevrons-left" /> skip
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={{ flex: 0.5, justifyContent: 'center' }}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.title2}>TO YOUR ACCOUNT</Text>
        </View>
        {renderInputs()}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};