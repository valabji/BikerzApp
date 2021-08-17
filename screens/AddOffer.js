import * as React from 'react';
import CustomHeader from '../components/CHeader'
import { Text, ActivityIndicator, View, Dimensions, TouchableOpacity, Image, SafeAreaView, ScrollView, TextInput } from 'react-native'
import { StackActions } from '@react-navigation/native';
import Fonts from '../constants/Fonts';
import styles, { SIZES } from '../constants/Style';
import { Feather, Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import { upload } from '../network';

const { width, height } = Dimensions.get("screen");

export default function HomeScreen({ navigation }) {
  const [images, setImages] = React.useState([]);
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
          source={{ uri: item }}
          style={{ width: 64, height: 64, backgroundColor: Colors.DGreen, resizeMode: "cover" }} />
      );
    });
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      let imgs = images
      let fdata = new FormData()
      var photo = {
        uri: result.uri,
        type: result.type,
        name: "photo",
      };
      fdata.append("image", photo)
      await upload("/upload", fdata).then(r => {

      })
      imgs.push(result.uri)
      setImages(imgs);
    }
  };

  const RenderPics = ({ index, uri }) => {
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
        false ?
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
              }}
            >
              <Feather name="x-circle" size={19} />
            </TouchableOpacity>
          </View>

      }
      <Image
        source={{ uri: uri }}
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
      <View style={{ flex: 1, alignItems: 'center', }}>
        <ScrollView
          style={{ width: "100%", flex: 1, paddingLeft: 30, borderRadius: 12, paddingRight: 30 }}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 200, paddingTop: 100, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ width: "100%", fontSize: 24, color: Colors.BGreen, fontFamily: "Poppins_400Regular" }}>Add New Offer</Text>
          <TextInput
            multiline={true}
            placeholder="Price"
            placeholderTextColor="#000"
            style={{ width: "100%", marginTop: 20, backgroundColor: Colors.BGray, borderRadius: 24, paddingRight: 20, paddingTop: 20, paddingBottom: 20, paddingLeft: 20 }}
          />
          <TextInput
            multiline={true}
            placeholder="Currency"
            placeholderTextColor="#000"
            style={{ width: "100%", marginTop: 20, backgroundColor: Colors.BGray, borderRadius: 24, paddingRight: 20, paddingTop: 20, paddingBottom: 20, paddingLeft: 20 }}
          />
          <TextInput
            multiline={true}
            placeholder="Description"
            placeholderTextColor="#000"
            style={{ width: "100%", marginTop: 20, marginBottom: 20, height: 200, backgroundColor: Colors.BGray, borderRadius: 24, paddingRight: 20, paddingTop: 20, paddingLeft: 20 }}
          />
          <ScrollView horizontal style={{ zIndex: 3 }} contentContainerStyle={{ height: images.length > 0 ? 100 : 0, width: width * 0.8 }}>
            {images.map((item, index) => {
              console.log("ITEM : " + index)
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
            <Text style={{ marginLeft: 12, color: "#fff", fontSize: 24 }}>Attach Photos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {

            }}
            style={{ flexDirection: "row", height: 64, marginTop: 20, backgroundColor: Colors.BGreen, width: "100%", borderRadius: 12, justifyContent: "center", alignItems: "center" }}>
            <Feather name="check" size={24} color="#fff" />
            <Text style={{ marginLeft: 12, color: "#fff", fontSize: 24 }}>Send</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
