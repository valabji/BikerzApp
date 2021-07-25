//
//  Home
//  Brandshop
//
//  Created by Abdalrahman S. Valabji.
//  Copyright © 2018 infty. All rights reserved.
//

import { Feather } from "@expo/vector-icons";
import React from "react"
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { Ic_group_1703, Ic_nounheart, Ic_nounshare, Ic_nounshoppingcart, Ic_nounshoppingcartO, Ic_noun_menu_1812743, ShopingCartAdd } from "../../components/SVG"
import Colors from "../../constants/Colors";
import styles from '../../constants/Style';
import CustomHeader from '../../components/CHeader';
import { TouchableOpacity } from "react-native-gesture-handler";
export default class Home extends React.Component {

	static navigationOptions = ({ navigation }) => {

		const { params = {} } = navigation.state
		return {
			header: null,
			headerLeft: null,
			headerRight: null,
		}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	// sum two numbers function

	render() {

		return <View
			style={styles.viewView}>
			<CustomHeader title="Home" isHome={true} navigation={this.props.navigation} />
			<ScrollView>
				<View
					style={{
						width: "100%"
					}}>
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
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 184,
							// marginRight: 106,
							// marginTop: 25,
							// display: "none",
						}}>
						<Image
							source={require("./../../assets/images/02-campaign02-ban-01.png")}
							style={styles.campaign02Ban01Image} />
						<Text
							style={styles.wowDealsText}>wow{"\n"}Deals</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 22,
							marginLeft: 13,
							marginRight: 26,
							marginTop: 27,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.forHimText}>For Him</Text>
						<View
							style={{
								flex: 1,
							}} />
						<Text
							style={styles.shopNowTwoText}>Shop Now</Text>
					</View>
					<ScrollView
						horizontal={true}
						style={{
							// height: 205,
							marginLeft: 13,
							marginTop: 23,
							marginBottom: 100,
							flexDirection: "row",
							// alignItems: "flex-start",
						}}>
						<TouchableOpacity
							onPress={() => {
								this.props.navigation.navigate('shop')
							}}
							style={{
								width: 150,
								// height: 205,
							}}>
							<Image
								source={require("./../../assets/images/portrait-elegant-brutal-man-wool-suit-149155-478.png")}
								style={styles.portraitElegantBruImage} />
							<View
								style={{
									backgroundColor: "white",
									shadowColor: "rgba(0, 0, 0, 0.16)",
									shadowRadius: 6,
									shadowOpacity: 1,
									width: 150,
									marginBottom: 10,
									// paddingBottom: 20,
									marginLeft: 5,
									marginRight: 5,
									borderBottomLeftRadius: 25,
									borderBottomRightRadius: 25,
								}}>
								<View
									// pointerEvents="box-none"
									style={{
										backgroundColor: Colors.SOrange,
										width: "100%",
										height: 40,
										// marginTop: 10,
										// flexDirection: "row",
										alignItems: "center",
										alignContent: "center",
										justifyContent: "center",
										borderBottomLeftRadius: 25,
										borderBottomRightRadius: 25,
									}}>
									<Text style={{ color: "#fff" }}>SHOP NOW</Text>
								</View>

							</View>

						</TouchableOpacity>
					</ScrollView>
				</View>
			</ScrollView>
		</View>
	}
}
