import * as React from 'react';
import CustomHeader from '../components/CHeader'
import { Text, View, SafeAreaView,TouchableOpacity, TextInput } from 'react-native'
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
        <View style={{ width: "100%" }}>
          <View style={{ flexDirection: "row", alignContent: "space-around"}}>
            <TouchableOpacity 
            onPress={() => {
            navigation.navigate("Sc2")
            }}
            style={{ width: 150, height: 200, backgroundColor: Colors.DYellow,marginLeft:30, borderRadius: 12 }}>
              <View style={{ flex: 1 }} />
              <Text style={{ color: Colors.WHITE, fontSize: 24, marginBottom: 12, marginLeft: 12 }}>Costume Broking</Text>
            </TouchableOpacity>
            <View style={{ flex: 1 }} />
            <View style={{ width: 150, height: 200, backgroundColor: Colors.DGreen,marginRight:30, borderRadius: 12 }}>
              <View style={{ flex: 1 }} />
              <Text style={{ color: Colors.WHITE, fontSize: 24, marginBottom: 12, marginLeft: 12 }}>Costume Broking</Text>
            </View>

          </View>


          <View style={{ width: 150, height: 200,marginTop:20,marginLeft:30, backgroundColor: Colors.DGray, borderRadius: 12 }}>
            <View style={{ flex: 1 }} />
            <Text style={{ color: Colors.WHITE, fontSize: 24, marginBottom: 12, marginLeft: 12 }}>Costume Broking</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
