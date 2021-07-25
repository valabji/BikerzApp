import * as React from 'react';
import CustomHeader from '../components/CHeader'
import { Text, View, SafeAreaView,ScrollView, TextInput } from 'react-native'
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
        <ScrollView style={{ width: "100%" }}>
          <View style={{ paddingLeft: 30, paddingRight: 30 }}>
            <View style={{ flexDirection: "row", width: "100%", height: 64, backgroundColor: Colors.DYellow, borderRadius: 12, alignItems: "center" }}>
              <Ionicons name="grid" size={32} style={{marginLeft:12}} />
              <Text style={{ color: Colors.WHITE, fontSize: 24, marginLeft: 18 }}>Container</Text>
            </View>
          </View>

          <View style={{ paddingLeft: 30, paddingRight: 30,marginTop:10, }}>
            <View style={{ flexDirection: "row", width: "100%", height: 64, backgroundColor: Colors.DYellow, borderRadius: 12, alignItems: "center" }}>
              <Ionicons name="car" size={32} style={{marginLeft:12}} />
              <Text style={{ color: Colors.WHITE, fontSize: 24, marginLeft: 18 }}>Car</Text>
            </View>
          </View>

          <View style={{ paddingLeft: 30, paddingRight: 30,marginTop:10, }}>
            <View style={{ flexDirection: "row", width: "100%", height: 64, backgroundColor: Colors.DYellow, borderRadius: 12, alignItems: "center" }}>
              <Ionicons name="square" size={32} style={{marginLeft:12}} />
              <Text style={{ color: Colors.WHITE, fontSize: 24, marginLeft: 18 }}>Tablia</Text>
            </View>
          </View>

          <View style={{ paddingLeft: 30, paddingRight: 30,marginTop:10, }}>
            <View style={{ flexDirection: "row", width: "100%", height: 64, backgroundColor: Colors.DYellow, borderRadius: 12, alignItems: "center" }}>
              <Ionicons name="home" size={32} style={{marginLeft:12}} />
              <Text style={{ color: Colors.WHITE, fontSize: 24, marginLeft: 18 }}>Tablia</Text>
            </View>
          </View>

          <View style={{ paddingLeft: 30, paddingRight: 30,marginTop:10, }}>
            <View style={{ flexDirection: "row", width: "100%", height: 64, backgroundColor: Colors.DYellow, borderRadius: 12, alignItems: "center" }}>
              <Ionicons name="home" size={32} style={{marginLeft:12}} />
              <Text style={{ color: Colors.WHITE, fontSize: 24, marginLeft: 18 }}>Tablia</Text>
            </View>
          </View>

          <View style={{ paddingLeft: 30, paddingRight: 30,marginTop:10, }}>
            <View style={{ flexDirection: "row", width: "100%", height: 64, backgroundColor: Colors.DYellow, borderRadius: 12, alignItems: "center" }}>
              <Ionicons name="home" size={32} style={{marginLeft:12}} />
              <Text style={{ color: Colors.WHITE, fontSize: 24, marginLeft: 18 }}>Tablia</Text>
            </View>
          </View>

          <View style={{ paddingLeft: 30, paddingRight: 30,marginTop:10, }}>
            <View style={{ flexDirection: "row", width: "100%", height: 64, backgroundColor: Colors.DYellow, borderRadius: 12, alignItems: "center" }}>
              <Ionicons name="home" size={32} style={{marginLeft:12}} />
              <Text style={{ color: Colors.WHITE, fontSize: 24, marginLeft: 18 }}>Tablia</Text>
            </View>
          </View>

          <View style={{ paddingLeft: 30, paddingRight: 30,marginTop:10, }}>
            <View style={{ flexDirection: "row", width: "100%", height: 64, backgroundColor: Colors.DYellow, borderRadius: 12, alignItems: "center" }}>
              <Ionicons name="home" size={32} style={{marginLeft:12}} />
              <Text style={{ color: Colors.WHITE, fontSize: 24, marginLeft: 18 }}>Tablia</Text>
            </View>
          </View>

          <View style={{ paddingLeft: 30, paddingRight: 30,marginTop:10, }}>
            <View style={{ flexDirection: "row", width: "100%", height: 64, backgroundColor: Colors.DYellow, borderRadius: 12, alignItems: "center" }}>
              <Ionicons name="home" size={32} style={{marginLeft:12}} />
              <Text style={{ color: Colors.WHITE, fontSize: 24, marginLeft: 18 }}>Tablia</Text>
            </View>
          </View>

          <View style={{ paddingLeft: 30, paddingRight: 30,marginTop:10, }}>
            <View style={{ flexDirection: "row", width: "100%", height: 64, backgroundColor: Colors.DYellow, borderRadius: 12, alignItems: "center" }}>
              <Ionicons name="home" size={32} style={{marginLeft:12}} />
              <Text style={{ color: Colors.WHITE, fontSize: 24, marginLeft: 18 }}>Tablia</Text>
            </View>
          </View>

        </ScrollView>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
