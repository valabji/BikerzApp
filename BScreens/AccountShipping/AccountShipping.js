//
//  AccountShipping
//  Brandshop
//
//  Created by Abdalrahman S. Valabji.
//  Copyright © 2018 infty. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class AccountShipping extends React.Component {

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
							width: 197,
							top: 39,
							height: 25,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/group-1697.png")}
							style={styles.group1697Image}/>
						<Text
							style={styles.shippingAddressText}>SHIPPING ADDRESS</Text>
					</View>
				</View>
				<View
					style={styles.contentView}>
					<View
						style={styles.homeAddressView}>
						<Text
							style={styles.homeAddressText}>Home Address</Text>
						<View
							pointerEvents="box-none"
							style={{
								height: 89,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.streetAddressTwoText}>21, Street Address, Building number{"\n"}District Name, City, {"\n"}21524, Kuwait</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.checkboxView}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										right: 0,
										top: 0,
										bottom: 0,
										justifyContent: "center",
									}}>
									<Image
										source={require("./../../assets/images/dot-2.png")}
										style={styles.dot2Image}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										right: 0,
										top: 0,
										bottom: 0,
										justifyContent: "center",
									}}>
									<Image
										source={require("./../../assets/images/checkmark.png")}
										style={styles.checkmarkImage}/>
								</View>
							</View>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.workAddressView}>
						<Text
							style={styles.workAddressText}>Work Address</Text>
						<View
							pointerEvents="box-none"
							style={{
								height: 89,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.streetAddressText}>21, Street Address, Building number{"\n"}District Name, City, {"\n"}21524, Kuwait</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/checkbox.png")}
								style={styles.checkboxImage}/>
						</View>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					pointerEvents="box-none"
					style={{
						height: 84,
						marginBottom: 11,
					}}>
					<Image
						source={require("./../../assets/images/action-bar.png")}
						style={styles.actionBarImage}/>
					<View
						style={styles.primaryButtonSmaView}>
						<Text
							style={styles.nextText}>NEXT</Text>
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
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 26,
		height: 17,
		marginTop: 2,
	},
	shippingAddressText: {
		backgroundColor: "transparent",
		color: "rgb(251, 251, 251)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 32,
	},
	contentView: {
		backgroundColor: "transparent",
		height: 282,
		marginLeft: 16,
		marginRight: 16,
		marginTop: 39,
	},
	homeAddressView: {
		backgroundColor: "transparent",
		height: 116,
	},
	homeAddressText: {
		color: "black",
		fontFamily: "Poppins_700Bold",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
	},
	streetAddressTwoText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 23,
		width: 285,
		marginTop: 15,
	},
	checkboxView: {
		backgroundColor: "transparent",
		width: 24,
		height: 24,
	},
	dot2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 24,
	},
	checkmarkImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 11,
		marginLeft: 5,
		marginRight: 5,
	},
	workAddressView: {
		backgroundColor: "transparent",
		height: 116,
	},
	workAddressText: {
		color: "black",
		fontFamily: "Poppins_700Bold",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
	},
	streetAddressText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 23,
		width: 285,
		marginTop: 15,
	},
	checkboxImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
	},
	actionBarImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 84,
	},
	primaryButtonSmaView: {
		backgroundColor: "black",
		borderRadius: 25,
		position: "absolute",
		right: 30,
		width: 146,
		bottom: 17,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	nextText: {
		color: "white",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	group1699View: {
		backgroundColor: "rgb(239, 239, 239)",
		height: 105,
	},
	group480Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 29,
		height: 28,
	},
	homeText: {
		backgroundColor: "transparent",
		color: "rgb(171, 171, 171)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 1,
	},
	nounCategory283436Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 27,
		height: 27,
	},
	shopsText: {
		backgroundColor: "transparent",
		color: "rgb(171, 171, 171)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	group477Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 16,
		height: 27,
		marginRight: 47,
		marginTop: 1,
	},
	nounCart1363648Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 30,
		height: 28,
		marginRight: 5,
	},
	myCartText: {
		backgroundColor: "transparent",
		color: "rgb(171, 171, 171)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
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
		backgroundColor: "transparent",
		color: "rgb(234, 172, 80)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		alignSelf: "center",
		bottom: 18,
	},
})
