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
import { TouchableOpacity } from 'react-native';
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

	render() {

		return <View
			style={styles.viewView}>
			<CustomHeader title="Home" isHome={true} navigation={this.props.navigation} />
			<ScrollView>
				<View
					style={{
						width: "100%"
					}}>
					<View
						pointerEvents="box-none"
						style={{
							height: 184,
							// marginRight: 106,
							marginTop: 25,
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
						this.props.navigation.navigate('item')
						}}
							style={{
								width: 150,
								// height: 205,
							}}>
							<Image
								source={require("./../../assets/images/portrait-elegant-brutal-man-wool-suit-149155-478.png")}
								style={styles.portraitElegantBruImage} />
							<View
								style={styles.rectangle121View} >
								<View
									style={{
										marginLeft: 11,
										// width: 84,
										marginTop: 10,
										// height: 72,
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.blueShirtForMen2Text}>Blue Shirt for Men</Text>
									<Text style={styles.blueShirtForMen2TextBold}>250 KWD</Text>
									<View
										// pointerEvents="box-none"
										style={{
											width: 81,
											height: 19,
											marginTop: 10,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<ShopingCartAdd />
										<View style={{ width: 10 }} />
										<Ic_nounheart />
										<View style={{ width: 10 }} />
										<Ic_nounshare />
									</View>
								</View>

							</View>

						</TouchableOpacity>
					</ScrollView>
				</View>
			</ScrollView>
		</View>
	}
}
