//
//  CheckoutDelivery
//  Brandshop
//
//  Created by Abdalrahman S. Valabji.
//  Copyright © 2018 infty. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class CheckoutDelivery extends React.Component {

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
						style={styles.processDeliveryView}>
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
										source={require("./../../assets/images/process-1-2.png")}
										style={styles.process1Image}/>
									<View
										style={{
											flex: 1,
										}}/>
									<Image
										source={require("./../../assets/images/process-3.png")}
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
									height: 14,
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
								width: 43,
								top: 0,
								bottom: 0,
								alignItems: "center",
							}}>
							<Image
								source={require("./../../assets/images/process-3.png")}
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
						style={styles.standardView}>
						<Text
							style={styles.standardDeliveryText}>Standard Delivery</Text>
						<View
							pointerEvents="box-none"
							style={{
								height: 50,
								marginTop: 8,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.orderWillBeDeliveText}>Order will be delivered between 3 - 5 business days</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/radio-button-2.png")}
								style={styles.radioButtonTwoImage}/>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.nextDayView}>
						<Text
							style={styles.nextDayDeliveryText}>Next Day Delivery</Text>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 48,
								marginTop: 10,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.placeYourOrderBefText}>Place your order before 6pm and your items will be delivered the next day</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/radio-button.png")}
								style={styles.radioButtonImage}/>
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
							right: 0,
							top: 0,
							bottom: 0,
							justifyContent: "center",
						}}>
						<View
							style={styles.primaryButtonSmaView}>
							<Text
								style={styles.nextText}>NEXT</Text>
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
		height: 323,
		marginLeft: 16,
		marginRight: 15,
		marginTop: 70,
	},
	processDeliveryView: {
		backgroundColor: "transparent",
		height: 57,
	},
	scrubberView: {
		backgroundColor: "white",
		borderRadius: 0.5,
		borderWidth: 0.5,
		borderColor: "rgb(221, 221, 221)",
		borderStyle: "solid",
		position: "absolute",
		left: 15,
		width: 298,
		top: 15,
		height: 1,
	},
	process1Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 30,
		height: 30,
	},
	process3Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 30,
		height: 30,
	},
	deliveryText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	paymentsText: {
		color: "black",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		opacity: 0.5,
	},
	process2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 30,
		height: 30,
	},
	addressText: {
		backgroundColor: "transparent",
		opacity: 0.5,
		color: "black",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	standardView: {
		backgroundColor: "transparent",
		height: 85,
		marginRight: 1,
		marginTop: 50,
	},
	standardDeliveryText: {
		color: "black",
		fontFamily: "Poppins_700Bold",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
	},
	orderWillBeDeliveText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 285,
		marginTop: 7,
	},
	radioButtonTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
	},
	nextDayView: {
		backgroundColor: "transparent",
		height: 85,
		marginRight: 1,
		alignItems: "flex-start",
	},
	nextDayDeliveryText: {
		color: "black",
		fontFamily: "Poppins_700Bold",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	placeYourOrderBefText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 285,
		marginTop: 5,
	},
	radioButtonImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 20,
		height: 20,
	},
	bottomView: {
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
	primaryButtonSmaView: {
		backgroundColor: "black",
		borderRadius: 25,
		width: 146,
		height: 50,
		marginRight: 30,
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
