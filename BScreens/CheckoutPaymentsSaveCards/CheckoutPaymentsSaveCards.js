//
//  CheckoutPaymentsSaveCards
//  Brandshop
//
//  Created by Abdalrahman S. Valabji.
//  Copyright © 2018 infty. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class CheckoutPaymentsSaveCards extends React.Component {

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
								height: 60,
								marginRight: 1,
								flexDirection: "row",
								alignItems: "center",
							}}>
							<View
								style={styles.paypalView}>
								<Image
									source={require("./../../assets/images/knet.png")}
									style={styles.knetImage}/>
							</View>
							<View
								style={styles.creditCardView}>
								<Image
									source={require("./../../assets/images/group-329.png")}
									style={styles.group329Image}/>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.savedCardView}>
								<View
									style={styles.iconSavedCardsView}>
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
											source={require("./../../assets/images/path-84.png")}
											style={styles.path84Image}/>
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
											source={require("./../../assets/images/group-330.png")}
											style={styles.group330Image}/>
									</View>
								</View>
							</View>
						</View>
					</View>
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
							style={styles.proceessPaymentView}>
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
										height: 30,
										marginLeft: 5,
										marginRight: 11,
									}}>
									<View
										style={styles.scrubberView}/>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 0,
											right: 0,
											top: 0,
											height: 30,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<Image
											source={require("./../../assets/images/process-1.png")}
											style={styles.process1Image}/>
										<View
											style={{
												flex: 1,
											}}/>
										<Image
											source={require("./../../assets/images/process-1-2.png")}
											style={styles.process3Image}/>
									</View>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									pointerEvents="box-none"
									style={{
										height: 19,
										flexDirection: "row",
										alignItems: "flex-end",
									}}>
									<Text
										style={styles.deliveryText}>Delivery</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.paymentsText}>Payments</Text>
								</View>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									alignSelf: "center",
									width: 49,
									top: 0,
									bottom: 0,
									alignItems: "center",
								}}>
								<Image
									source={require("./../../assets/images/process-2.png")}
									style={styles.process2Image}/>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.addressText}>Address</Text>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								height: 24,
								marginRight: 1,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<View
								style={styles.radioButtonView}>
								<Image
									source={require("./../../assets/images/checkmark.png")}
									style={styles.iconCheckImage}/>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.saveThisCardDetaiText}>Save this card details</Text>
						</View>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
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
							left: 0,
							right: 0,
							top: 0,
							bottom: 0,
							justifyContent: "center",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 50,
								marginLeft: 30,
								marginRight: 30,
								flexDirection: "row",
								alignItems: "center",
							}}>
							<View
								style={styles.secondaryButtonSView}>
								<Text
									style={styles.backText}>BACK</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.primaryButtonSmaView}>
								<Text
									style={styles.nextText}>NEXT</Text>
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
		height: 244,
		marginLeft: 17,
		marginRight: 14,
		marginTop: 70,
	},
	paypalView: {
		backgroundColor: "transparent",
		borderRadius: 4,
		borderWidth: 1,
		borderColor: "rgb(235, 235, 235)",
		borderStyle: "solid",
		width: 105,
		height: 60,
		justifyContent: "center",
		alignItems: "center",
	},
	knetImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 32,
		height: 32,
	},
	creditCardView: {
		backgroundColor: "rgb(234, 172, 80)",
		borderRadius: 4,
		width: 105,
		height: 60,
		justifyContent: "center",
		alignItems: "center",
	},
	group329Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 20,
		height: 18,
	},
	savedCardView: {
		backgroundColor: "transparent",
		borderRadius: 4,
		borderWidth: 1,
		borderColor: "rgb(235, 235, 235)",
		borderStyle: "solid",
		width: 105,
		height: 60,
		justifyContent: "center",
		alignItems: "center",
	},
	iconSavedCardsView: {
		backgroundColor: "transparent",
		width: 19,
		height: 17,
	},
	path84Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 17,
		marginRight: 2,
	},
	group330Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 7,
		marginLeft: 9,
	},
	proceessPaymentView: {
		backgroundColor: "transparent",
		height: 62,
	},
	scrubberView: {
		backgroundColor: "rgb(234, 172, 80)",
		borderRadius: 0.5,
		borderWidth: 1,
		borderColor: "rgb(234, 172, 80)",
		borderStyle: "solid",
		position: "absolute",
		left: 22,
		width: 283,
		top: 15,
		height: 1,
	},
	process1Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 30,
		height: 30,
	},
	process3Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 30,
		height: 30,
	},
	deliveryText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	paymentsText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
	},
	process2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 30,
		height: 30,
	},
	addressText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	radioButtonView: {
		backgroundColor: "rgb(234, 172, 80)",
		borderRadius: 12,
		width: 24,
		height: 24,
		justifyContent: "center",
	},
	iconCheckImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 11,
		marginLeft: 5,
		marginRight: 5,
	},
	saveThisCardDetaiText: {
		color: "black",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 306,
		marginBottom: 5,
	},
	bottomView: {
		backgroundColor: "transparent",
		height: 84,
	},
	bgImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 84,
	},
	secondaryButtonSView: {
		backgroundColor: "transparent",
		borderRadius: 25,
		borderWidth: 1,
		borderColor: "black",
		borderStyle: "solid",
		width: 146,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	backText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	primaryButtonSmaView: {
		backgroundColor: "black",
		borderRadius: 25,
		width: 146,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	nextText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
})
