//
//  AccountWishlist
//  Brandshop
//
//  Created by Abdalrahman S. Valabji.
//  Copyright © 2018 infty. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class AccountWishlist extends React.Component {

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
				<View
					pointerEvents="box-none"
					style={{
						height: 92,
					}}>
					<View
						style={styles.rectangle171View}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 22,
							width: 149,
							top: 39,
							height: 25,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/group-1697.png")}
							style={styles.group1697Image}/>
						<Text
							style={styles.myWishlistText}>MY WISHLIST</Text>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						flex: 1,
						marginTop: 30,
					}}>
					<View
						style={styles.contentView}>
						<View
							style={styles.wishlistItem1View}>
							<Image
								source={require("./../../assets/images/image-7.png")}
								style={styles.imageFiveImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									width: 194,
									marginTop: 12,
									marginBottom: 9,
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.smartBackpackText}>Smart Backpack</Text>
								<Text
									style={styles.kwdThreeText}>150.00 kwd</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.inStockTwoView}>
									<Text
										style={styles.inStockTwoText}>In Stock</Text>
								</View>
							</View>
						</View>
						<View
							style={styles.wishlistItem2View}>
							<Image
								source={require("./../../assets/images/image-9.png")}
								style={styles.imageFourImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "stretch",
									width: 194,
									marginTop: 12,
									marginBottom: 9,
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.electricKettleText}>Electric Kettle</Text>
								<Text
									style={styles.kwdTwoText}>150.00 kwd</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.outOfStockView}>
									<Text
										style={styles.outOfStockText}>Out of Stock</Text>
								</View>
							</View>
						</View>
						<View
							style={styles.wishlistItem3View}>
							<Image
								source={require("./../../assets/images/image-8.png")}
								style={styles.imageThreeImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "stretch",
									width: 194,
									marginTop: 12,
									marginBottom: 9,
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.appleHomepodText}>Apple Homepod</Text>
								<Text
									style={styles.kwdText}>150.00 kwd</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.inStockView}>
									<Text
										style={styles.inStockText}>In Stock</Text>
								</View>
							</View>
						</View>
						<Text
							style={styles.recommendedText}>Recommended</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								height: 317,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<View
								style={styles.cardItem1View}>
								<Image
									source={require("./../../assets/images/image-4.png")}
									style={styles.imageTwoImage}/>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.airpodsText}>Airpods</Text>
								<Text
									style={styles.appleIncText}>Apple Inc</Text>
								<Text
									style={styles.textTwoText}>$65</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.cardItem2View}>
								<Image
									source={require("./../../assets/images/image-6.png")}
									style={styles.imageImage}/>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.beoplayStandSpeakeText}>BeoPlay Stand Speaker</Text>
								<Text
									style={styles.bangAndOlufsenText}>Bang and Olufsen</Text>
								<Text
									style={styles.textText}>$100</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.group1699View}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 31,
								right: 32,
								top: 31,
								bottom: 18,
								flexDirection: "row",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									width: 29,
									alignItems: "flex-start",
								}}>
								<Image
									source={require("./../../assets/images/group-480.png")}
									style={styles.group480Image}/>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.homeText}>Home</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									width: 27,
									marginLeft: 47,
									marginTop: 2,
									alignItems: "flex-start",
								}}>
								<Image
									source={require("./../../assets/images/noun-category-2834364.png")}
									style={styles.nounCategory283436Image}/>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.shopsText}>Shops</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/group-477-2.png")}
								style={styles.group477Image}/>
							<View
								pointerEvents="box-none"
								style={{
									width: 35,
									marginRight: 40,
									alignItems: "flex-end",
								}}>
								<Image
									source={require("./../../assets/images/noun-cart-1363648.png")}
									style={styles.nounCart1363648Image}/>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.myCartText}>My Cart</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									width: 23,
									marginTop: 1,
									alignItems: "flex-end",
								}}>
								<Image
									source={require("./../../assets/images/group-479.png")}
									style={styles.group479Image}/>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.meText}>Me</Text>
							</View>
						</View>
						<Text
							style={styles.dealsText}>Deals</Text>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	rectangle171View: {
		backgroundColor: "black",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 92,
	},
	group1697Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 26,
		height: 17,
		marginTop: 2,
	},
	myWishlistText: {
		color: "rgb(251, 251, 251)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 32,
	},
	contentView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 16,
		right: 16,
		top: 0,
		height: 794,
	},
	wishlistItem1View: {
		backgroundColor: "transparent",
		borderRadius: 4,
		height: 120,
		flexDirection: "row",
	},
	imageFiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 120,
		height: 120,
	},
	smartBackpackText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 194,
	},
	kwdThreeText: {
		backgroundColor: "transparent",
		color: "rgb(234, 172, 80)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 194,
		marginTop: 1,
	},
	inStockTwoView: {
		backgroundColor: "rgb(234, 172, 80)",
		borderRadius: 15,
		width: 80,
		height: 30,
		marginRight: 113,
	},
	inStockTwoText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginLeft: 18,
		marginRight: 17,
		marginTop: 8,
	},
	wishlistItem2View: {
		backgroundColor: "transparent",
		borderRadius: 4,
		height: 120,
		marginTop: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	imageFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 120,
		height: 120,
	},
	electricKettleText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 194,
	},
	kwdTwoText: {
		color: "rgb(234, 172, 80)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 194,
		marginTop: 1,
	},
	outOfStockView: {
		backgroundColor: "black",
		borderRadius: 15,
		width: 90,
		height: 30,
		marginRight: 103,
	},
	outOfStockText: {
		color: "white",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 10,
		marginRight: 9,
		marginTop: 8,
	},
	wishlistItem3View: {
		backgroundColor: "transparent",
		borderRadius: 4,
		height: 120,
		marginTop: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	imageThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 120,
		height: 120,
	},
	appleHomepodText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 194,
	},
	kwdText: {
		color: "rgb(234, 172, 80)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 194,
		marginTop: 1,
	},
	inStockView: {
		backgroundColor: "rgb(234, 172, 80)",
		borderRadius: 15,
		width: 80,
		height: 30,
		marginRight: 113,
	},
	inStockText: {
		color: "white",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 18,
		marginRight: 17,
		marginTop: 8,
	},
	recommendedText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins_700Bold",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		alignSelf: "flex-start",
		marginTop: 31,
	},
	cardItem1View: {
		backgroundColor: "transparent",
		width: 164,
		height: 317,
	},
	imageTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 240,
	},
	airpodsText: {
		color: "black",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginBottom: 5,
	},
	appleIncText: {
		color: "rgb(146, 146, 146)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginBottom: 10,
	},
	textTwoText: {
		color: "rgb(0, 197, 105)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	cardItem2View: {
		backgroundColor: "transparent",
		width: 164,
		height: 317,
	},
	imageImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 240,
	},
	beoplayStandSpeakeText: {
		color: "black",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginBottom: 5,
	},
	bangAndOlufsenText: {
		color: "rgb(146, 146, 146)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginBottom: 10,
	},
	textText: {
		color: "rgb(0, 197, 105)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	group1699View: {
		backgroundColor: "rgb(239, 239, 239)",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 102,
		height: 105,
	},
	group480Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 29,
		height: 28,
	},
	homeText: {
		color: "rgb(171, 171, 171)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 1,
	},
	nounCategory283436Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 27,
		height: 27,
	},
	shopsText: {
		color: "rgb(171, 171, 171)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	group477Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "flex-start",
		width: 16,
		height: 27,
		marginRight: 47,
		marginTop: 1,
	},
	nounCart1363648Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 30,
		height: 28,
		marginRight: 5,
	},
	myCartText: {
		color: "rgb(171, 171, 171)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	group479Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 23,
		height: 28,
	},
	meText: {
		color: "rgb(171, 171, 171)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 4,
	},
	dealsText: {
		color: "rgb(234, 172, 80)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		bottom: 18,
	},
})
