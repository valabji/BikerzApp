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
import Swiper from 'react-native-swiper'

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
					<Swiper style={{height: 184}} showsButtons={false}>
						<View
							pointerEvents="box-none"
							style={{
								height: 184,
							}}>
							<Image
								source={require("./../../assets/images/02-campaign02-ban-01.png")}
								style={styles.campaign02Ban01Image} />
							<Text
								style={styles.wowDealsText}>wow{"\n"}Deals</Text>
						</View>
						<View style={{backgroundColor:"red",height: 184}} />
						<View style={{backgroundColor:"cyan",height: 184}} />

					</Swiper>

					<View
						pointerEvents="box-none"
						style={{
							height: 22,
							marginLeft: 13,
							marginRight: 26,
							marginTop: 26,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.shopByCategoryText}>Shop By Category</Text>
						<View
							style={{
								flex: 1,
							}} />
						<Text
							style={styles.seeAllText}>See All</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 176,
							marginLeft: 13,
							marginRight: 20,
							marginTop: 23,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 147,
								height: 176,
							}}>
							<Image
								source={require("./../../assets/images/young-man-woman-sitting-stairs-holding-bouquet-adorable-flowers-130488-2233.png")}
								style={styles.youngManWomanSittImage} />
							<Text
								style={styles.shopFashionText}>Shop{"\n"}Fashion</Text>
						</View>
						<View
							style={{
								flex: 1,
							}} />
						<View
							pointerEvents="box-none"
							style={{
								width: 90,
								height: 176,
								marginRight: 11,
								alignItems: "flex-end",
							}}>
							<Image
								source={require("./../../assets/images/bright-yellow-accessories-blue-shoes-girls-women-urban-fashion-beauty-blog-concept-72402-914.png")}
								style={styles.brightYellowAccessImage} />
							<Image
								source={require("./../../assets/images/horizontal-fancy-mulatto-woman-with-colorful-makeup-curly-hair-bun-gesturing-camera-with-fashion-look-isolated-blue-wall-171337-2444.png")}
								style={styles.horizontalFancyMulImage} />
						</View>
						<View
							pointerEvents="box-none"
							style={{
								width: 90,
								height: 176,
								alignItems: "flex-end",
							}}>
							<Image
								source={require("./../../assets/images/two-elegant-glamor-hipster-twin-girls-fashion-neon-green-dresses-149155-3333.png")}
								style={styles.twoElegantGlamorHImage} />
							<Image
								source={require("./../../assets/images/set-luxury-perfume-bottles-isolated-127657-10745.png")}
								style={styles.setLuxuryPerfumeBImage} />
						</View>
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
						<View
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

						</View>
					</ScrollView>
				</View>
			</ScrollView>
		</View>
	}
}
