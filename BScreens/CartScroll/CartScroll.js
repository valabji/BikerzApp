//
//  CartScroll
//  Brandshop
//
//  Created by Abdalrahman S. Valabji.
//  Copyright © 2018 infty. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class CartScroll extends React.Component {

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
				<Text
					style={styles.dealsText}>Deals</Text>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
					}}>
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
								width: 124,
								top: 39,
								height: 25,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/group-1697.png")}
								style={styles.group1697Image}/>
							<Text
								style={styles.myCartTwoText}>MY CART</Text>
						</View>
					</View>
					<View
						style={styles.contentView}>
						<View
							style={styles.cartItem5View}>
							<Image
								source={require("./../../assets/images/image.png")}
								style={styles.imageTwoImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									width: 193,
									marginTop: 15,
									marginBottom: 14,
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.smartHomeSpeakerText}>Smart Home Speaker</Text>
								<Text
									style={styles.kwdThreeText}>100.00kwd</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.counterTwoView}>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											alignSelf: "center",
											top: 0,
											bottom: 0,
											justifyContent: "center",
										}}>
										<Text
											style={styles.textTwoText}>2</Text>
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
										<View
											pointerEvents="box-none"
											style={{
												height: 11,
												marginLeft: 10,
												marginRight: 11,
												flexDirection: "row",
												alignItems: "center",
											}}>
											<Image
												source={require("./../../assets/images/plus.png")}
												style={styles.plusTwoImage}/>
											<View
												style={{
													flex: 1,
												}}/>
											<Image
												source={require("./../../assets/images/minus.png")}
												style={styles.minusTwoImage}/>
										</View>
									</View>
								</View>
							</View>
						</View>
						<View
							style={styles.cartItem6View}>
							<Image
								source={require("./../../assets/images/image-7.png")}
								style={styles.imageImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "stretch",
									width: 193,
									marginTop: 15,
									marginBottom: 14,
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.backpackText}>BackPack</Text>
								<Text
									style={styles.kwdTwoText}>100.00kwd</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.counterView}>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											alignSelf: "center",
											top: 0,
											bottom: 0,
											justifyContent: "center",
										}}>
										<Text
											style={styles.textText}>2</Text>
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
										<View
											pointerEvents="box-none"
											style={{
												height: 11,
												marginLeft: 10,
												marginRight: 11,
												flexDirection: "row",
												alignItems: "center",
											}}>
											<Image
												source={require("./../../assets/images/plus.png")}
												style={styles.plusImage}/>
											<View
												style={{
													flex: 1,
												}}/>
											<Image
												source={require("./../../assets/images/minus.png")}
												style={styles.minusImage}/>
										</View>
									</View>
								</View>
							</View>
						</View>
						<View
							style={styles.dividerTwoView}/>
						<View
							style={styles.subtototalView}>
							<Text
								style={styles.subTotalText}>Sub Total</Text>
							<View
								style={styles.lineView}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.kwdText}>300.00kwd</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.dividerView}/>
						<View
							style={styles.fieldVoucherView}>
							<Text
								style={styles.enterVoucherCodeText}>Enter Voucher Code</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.buttonApplyView}>
								<Text
									style={styles.applyText}>APPLY</Text>
							</View>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.actionBarView}>
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
								source={require("./../../assets/images/bg-2.png")}
								style={styles.bgImage}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 30,
								right: 30,
								top: 17,
								height: 50,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.kwdFourText}>4500.00 kwd</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.primaryButtonSmaView}>
								<Text
									style={styles.checkoutText}>CHECKOUT</Text>
							</View>
						</View>
						<Text
							style={styles.totalText}>TOTAL</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 105,
						}}>
						<View
							style={styles.rectangle113View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 31,
								right: 32,
								bottom: 18,
								height: 56,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									width: 29,
									height: 56,
									justifyContent: "flex-end",
									alignItems: "flex-start",
								}}>
								<Image
									source={require("./../../assets/images/group-480.png")}
									style={styles.group480Image}/>
								<Text
									style={styles.homeText}>Home</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									width: 27,
									height: 54,
									marginLeft: 47,
									justifyContent: "flex-end",
									alignItems: "flex-start",
								}}>
								<Image
									source={require("./../../assets/images/noun-category-2834364.png")}
									style={styles.nounCategory283436Image}/>
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
									height: 56,
									marginRight: 40,
									justifyContent: "flex-end",
									alignItems: "flex-end",
								}}>
								<Image
									source={require("./../../assets/images/noun-cart-1363648.png")}
									style={styles.nounCart1363648Image}/>
								<Text
									style={styles.myCartText}>My Cart</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									width: 23,
									height: 55,
									justifyContent: "flex-end",
									alignItems: "flex-end",
								}}>
								<Image
									source={require("./../../assets/images/group-479.png")}
									style={styles.group479Image}/>
								<Text
									style={styles.meText}>Me</Text>
							</View>
						</View>
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
	myCartTwoText: {
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
		height: 500,
		marginTop: 21,
	},
	cartItem5View: {
		backgroundColor: "transparent",
		borderRadius: 4,
		height: 120,
		marginLeft: 16,
		marginRight: 16,
		flexDirection: "row",
	},
	imageTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "center",
		width: 120,
		height: 120,
	},
	smartHomeSpeakerText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 193,
	},
	kwdThreeText: {
		color: "rgb(234, 172, 80)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 193,
		marginTop: 2,
	},
	counterTwoView: {
		backgroundColor: "rgba(0, 0, 0, 0.06)",
		borderRadius: 4,
		width: 96,
		height: 30,
		marginRight: 97,
	},
	textTwoText: {
		color: "black",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	plusTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 11,
		height: 11,
	},
	minusTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 11,
		height: 1,
	},
	cartItem6View: {
		backgroundColor: "transparent",
		borderRadius: 4,
		height: 120,
		marginLeft: 16,
		marginRight: 16,
		marginTop: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	imageImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 120,
		height: 120,
	},
	backpackText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 193,
	},
	kwdTwoText: {
		color: "rgb(234, 172, 80)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 193,
		marginTop: 2,
	},
	counterView: {
		backgroundColor: "rgba(0, 0, 0, 0.06)",
		borderRadius: 4,
		width: 96,
		height: 30,
		marginRight: 97,
	},
	textText: {
		color: "black",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	plusImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 11,
		height: 11,
	},
	minusImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 11,
		height: 1,
	},
	dividerTwoView: {
		backgroundColor: "transparent",
		borderRadius: 0.5,
		borderWidth: 0.5,
		borderColor: "rgb(221, 221, 221)",
		borderStyle: "solid",
		height: 1,
		marginTop: 16,
	},
	subtototalView: {
		backgroundColor: "transparent",
		height: 50,
		marginLeft: 16,
		marginRight: 15,
		marginTop: 20,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	subTotalText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 17,
	},
	lineView: {
		backgroundColor: "rgb(221, 221, 221)",
		alignSelf: "center",
		width: 151,
		height: 1,
		marginLeft: 20,
	},
	kwdText: {
		color: "black",
		fontFamily: "Poppins_700Bold",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		marginTop: 18,
	},
	dividerView: {
		backgroundColor: "transparent",
		borderRadius: 0.5,
		borderWidth: 0.5,
		borderColor: "rgb(221, 221, 221)",
		borderStyle: "solid",
		height: 1,
		marginBottom: 30,
	},
	fieldVoucherView: {
		backgroundColor: "transparent",
		borderRadius: 4,
		borderWidth: 1,
		borderColor: "rgba(0, 0, 0, 0.15)",
		borderStyle: "solid",
		height: 50,
		marginLeft: 16,
		marginRight: 15,
		flexDirection: "row",
		alignItems: "center",
	},
	enterVoucherCodeText: {
		color: "rgb(112, 112, 112)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		opacity: 0.6,
		alignSelf: "flex-start",
		marginLeft: 10,
		marginTop: 17,
	},
	buttonApplyView: {
		backgroundColor: "transparent",
		borderRadius: 4,
		borderWidth: 2,
		borderColor: "transparent",
		borderStyle: "solid",
		width: 111,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	applyText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	actionBarView: {
		backgroundColor: "transparent",
		height: 84,
	},
	bgImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(36, 36, 36, 0.1)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: null,
		height: 84,
	},
	kwdFourText: {
		color: "rgb(234, 172, 80)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 22,
	},
	primaryButtonSmaView: {
		backgroundColor: "black",
		borderRadius: 25,
		alignSelf: "center",
		width: 146,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	checkoutText: {
		color: "white",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	totalText: {
		backgroundColor: "transparent",
		color: "rgb(146, 146, 146)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 30,
		top: 22,
	},
	rectangle113View: {
		backgroundColor: "rgb(239, 239, 239)",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 105,
	},
	group480Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 29,
		height: 28,
		marginBottom: 15,
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
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 27,
		height: 27,
		marginBottom: 14,
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
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 16,
		height: 27,
		marginRight: 47,
		marginBottom: 28,
	},
	nounCart1363648Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 30,
		height: 28,
		marginRight: 5,
		marginBottom: 15,
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
		marginBottom: 14,
	},
	meText: {
		backgroundColor: "transparent",
		color: "rgb(171, 171, 171)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 4,
	},
})
