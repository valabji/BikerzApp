//
//  CheckoutOrderSummary
//  Brandshop
//
//  Created by Abdalrahman S. Valabji.
//  Copyright © 2018 infty. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class CheckoutOrderSummary extends React.Component {

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
							width: 141,
							top: 39,
							height: 25,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/group-1697.png")}
							style={styles.group1697Image}/>
						<Text
							style={styles.checkoutText}>CHECKOUT</Text>
					</View>
				</View>
				<View
					style={styles.contentView}>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 177,
							marginLeft: 16,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							style={styles.group221ThreeView}>
							<Image
								source={require("./../../assets/images/card-item-1-2.png")}
								style={styles.cardItem1ThreeImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.group220ThreeView}>
								<Text
									style={styles.tagHeuerText}>Tag Heuer...</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.kwdThreeText}>100.00 KWD</Text>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.group221TwoView}>
							<Image
								source={require("./../../assets/images/card-item-1.png")}
								style={styles.cardItem1TwoImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.group220TwoView}>
								<Text
									style={styles.beoplaySpeakerText}>BeoPlay Speaker</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.kwdTwoText}>100.00 KWD</Text>
							</View>
						</View>
						<View
							style={styles.group221View}>
							<Image
								source={require("./../../assets/images/image-9.png")}
								style={styles.cardItem1Image}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.group220View}>
								<Text
									style={styles.electricKettleText}>Electric Kettle</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.kwdText}>100.00 KWD</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.dividerTwoView}/>
					<Text
						style={styles.shippingAddressText}>Shipping Address</Text>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 83,
							marginLeft: 16,
							marginRight: 47,
							marginTop: 15,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.streetAddressText}>21, Street Address, Building number{"\n"}District Name, City, {"\n"}21524, Kuwait</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.checkboxTwoView}>
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
									style={styles.dot2TwoImage}/>
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
									style={styles.checkmarkTwoImage}/>
							</View>
						</View>
					</View>
					<Text
						style={styles.changeText}>Change</Text>
					<View
						style={styles.dividerView}/>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.paymentText}>Payment</Text>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 50,
							marginLeft: 16,
							marginRight: 47,
							marginBottom: 10,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<View
							style={styles.paymentMethodView}>
							<Image
								source={require("./../../assets/images/icon-mastercard.png")}
								style={styles.iconMastercardImage}/>
							<View
								pointerEvents="box-none"
								style={{
									flex: 1,
									height: 36,
									marginLeft: 19,
									marginRight: 65,
									marginTop: 6,
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.masterCardText}>Master Card</Text>
								<Text
									style={styles.textText}>****  ****  ****  4543</Text>
							</View>
						</View>
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
					<Text
						style={styles.changeTwoText}>Change</Text>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					pointerEvents="box-none"
					style={{
						height: 84,
					}}>
					<View
						style={styles.bottomView}>
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
								source={require("./../../assets/images/bg.png")}
								style={styles.bgImage}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								right: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<View
								style={styles.primaryButtonSmaView}>
								<Text
									style={styles.payText}>PAY</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.secondaryButtonSView}>
						<Text
							style={styles.backText}>BACK</Text>
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
	checkoutText: {
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
		height: 541,
		marginTop: 70,
		alignItems: "flex-start",
	},
	group221ThreeView: {
		backgroundColor: "transparent",
		width: 120,
		height: 177,
	},
	cardItem1ThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 120,
	},
	group220ThreeView: {
		backgroundColor: "transparent",
		height: 47,
	},
	tagHeuerText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	kwdThreeText: {
		color: "rgb(234, 172, 80)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	group221TwoView: {
		backgroundColor: "transparent",
		width: 120,
		height: 177,
		marginRight: 15,
	},
	cardItem1TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 120,
	},
	group220TwoView: {
		backgroundColor: "transparent",
		height: 47,
	},
	beoplaySpeakerText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	kwdTwoText: {
		color: "rgb(234, 172, 80)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	group221View: {
		backgroundColor: "transparent",
		width: 120,
		height: 177,
	},
	cardItem1Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 120,
	},
	group220View: {
		backgroundColor: "transparent",
		height: 47,
	},
	electricKettleText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	kwdText: {
		backgroundColor: "transparent",
		color: "rgb(234, 172, 80)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	dividerTwoView: {
		backgroundColor: "transparent",
		borderRadius: 0.5,
		borderWidth: 1,
		borderColor: "rgb(235, 235, 235)",
		borderStyle: "solid",
		width: 375,
		height: 1,
		marginTop: 24,
	},
	shippingAddressText: {
		color: "black",
		fontFamily: "Poppins_700Bold",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 16,
		marginTop: 23,
	},
	streetAddressText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 26,
		backgroundColor: "transparent",
		width: 286,
	},
	checkboxTwoView: {
		backgroundColor: "transparent",
		width: 24,
		height: 24,
		marginTop: 27,
	},
	dot2TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 24,
	},
	checkmarkTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 11,
		marginLeft: 5,
		marginRight: 5,
	},
	changeText: {
		color: "rgb(234, 172, 80)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 60,
		marginLeft: 16,
		marginTop: 5,
	},
	dividerView: {
		backgroundColor: "transparent",
		borderRadius: 0.5,
		borderWidth: 1,
		borderColor: "rgb(235, 235, 235)",
		borderStyle: "solid",
		width: 375,
		height: 1,
		marginTop: 22,
	},
	paymentText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins_700Bold",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		marginLeft: 16,
		marginBottom: 15,
	},
	paymentMethodView: {
		backgroundColor: "transparent",
		borderRadius: 4,
		borderWidth: 1,
		borderColor: "transparent",
		borderStyle: "solid",
		width: 286,
		height: 50,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	iconMastercardImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "center",
		width: 61,
		height: 44,
	},
	masterCardText: {
		backgroundColor: "transparent",
		color: "rgb(146, 146, 146)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	textText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-end",
		marginTop: 3,
	},
	checkboxView: {
		backgroundColor: "transparent",
		width: 24,
		height: 24,
		marginBottom: 13,
	},
	dot2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 24,
	},
	checkmarkImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 11,
		marginLeft: 5,
		marginRight: 5,
	},
	changeTwoText: {
		backgroundColor: "transparent",
		color: "rgb(234, 172, 80)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 60,
		marginLeft: 16,
	},
	bottomView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 84,
	},
	bgImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 84,
	},
	primaryButtonSmaView: {
		backgroundColor: "black",
		borderRadius: 25,
		width: 146,
		height: 50,
		marginRight: 30,
		justifyContent: "center",
		alignItems: "center",
	},
	payText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	secondaryButtonSView: {
		backgroundColor: "transparent",
		borderRadius: 25,
		borderWidth: 1,
		borderColor: "black",
		borderStyle: "solid",
		position: "absolute",
		left: 30,
		width: 146,
		bottom: 17,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	backText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
})
