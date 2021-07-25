import * as React from 'react';
import CustomHeader from '../components/CHeader'
import { Text, View, SafeAreaView, ScrollView, TextInput } from 'react-native'
import { StackActions } from '@react-navigation/native';
import Fonts from '../constants/Fonts';
import styles, { SIZES } from '../constants/Style';
import { Feather, Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
      <CustomHeader title="Home" isHome={true} navigation={navigation} />
      <View style={{ flex: 1, alignItems: 'center', }}>
        <View style={styles.searchContainer}>
          <Feather name="search" size={18} color={Colors.DGray} />
          <TextInput
            // value={email}
            placeholder="Start searching for real brands"
            style={styles.search}
            placeholderTextColor={Colors.DGray}
          // onChangeText={value => setEmail(value)}
          />
        </View>
        <View style={{ width: "100%", flex: 1, paddingLeft: 30, borderRadius: 12, paddingRight: 30, justifyContent: "center", alignItems: "center" }}>
          <TextInput
            multiline={true}
            placeholder="Please write your idea"
            placeholderTextColor="#000"
            style={{ width: "100%", height: 200, backgroundColor: Colors.BGray, borderRadius: 24, paddingRight: 20, paddingTop: 20, paddingLeft: 20 }}
          />

          <View style={{ flexDirection: "row", height: 64, marginTop: 20, backgroundColor: Colors.DYellow, width: "100%", borderRadius: 12, justifyContent: "center", alignItems: "center" }}>
            <Feather name="check" size={24} color="#fff" />
            <Text style={{ marginLeft: 12, color: "#fff", fontSize: 24 }}>Send</Text>
          </View>
          <View style={{ flexDirection: "row", height: 64, marginTop: 20, backgroundColor: Colors.DYellow, width: "100%", borderRadius: 12, justifyContent: "center", alignItems: "center" }}>
            <Feather name="image" size={24} color="#fff" />
            <Text style={{ marginLeft: 12, color: "#fff", fontSize: 24 }}>Attach Photos</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
