//
//  CheckoutAddress
//  Brandshop
//
//  Created by Abdalrahman S. Valabji.
//  Copyright © 2018 infty. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class CheckoutAddress extends React.Component {

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
						style={styles.processAddressView}>
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
										left: 22,
										right: 0,
										top: 0,
										height: 30,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<View
										style={styles.scrubberTwoView}/>
									<View
										style={{
											flex: 1,
										}}/>
									<Image
										source={require("./../../assets/images/process-3.png")}
										style={styles.process3Image}/>
								</View>
								<Image
									source={require("./../../assets/images/process-2.png")}
									style={styles.process1Image}/>
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
								source={require("./../../assets/images/process-1-2.png")}
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
						pointerEvents="box-none"
						style={{
							height: 24,
							marginRight: 1,
							marginTop: 44,
							flexDirection: "row",
							alignItems: "flex-start",
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
							style={styles.billingAddressIsTText}>Billing address is the same as delivery address</Text>
					</View>
					<View
						style={styles.street1View}>
						<Text
							style={styles.street1Text}>Street 1</Text>
						<Text
							style={styles.streetNameBuiText}>21, street name, building number</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.fieldFiveView}/>
					</View>
					<View
						style={styles.street2View}>
						<Text
							style={styles.street2Text}>Street 2</Text>
						<Text
							style={styles.districtNameLandmText}>District Name, Landmark</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.fieldFourView}/>
					</View>
					<View
						style={styles.cityView}>
						<Text
							style={styles.cityText}>City</Text>
						<Text
							style={styles.kuwaitCityText}>Kuwait City</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.fieldThreeView}/>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						pointerEvents="box-none"
						style={{
							height: 67,
							marginRight: 1,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<View
							style={styles.stateView}>
							<Text
								style={styles.zipcodeText}>Zipcode</Text>
							<Text
								style={styles.textText}>254125</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.fieldTwoView}/>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.countryView}>
							<Text
								style={styles.countryText}>Country</Text>
							<Text
								style={styles.kuwaitText}>Kuwait</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.fieldView}/>
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
		height: 552,
		marginLeft: 16,
		marginRight: 15,
		marginTop: 70,
	},
	processAddressView: {
		backgroundColor: "transparent",
		height: 62,
	},
	scrubberView: {
		backgroundColor: "white",
		borderRadius: 0.5,
		borderWidth: 0.5,
		borderColor: "rgb(221, 221, 221)",
		borderStyle: "solid",
		position: "absolute",
		left: 22,
		width: 283,
		top: 15,
		height: 1,
	},
	scrubberTwoView: {
		backgroundColor: "rgb(234, 172, 80)",
		borderRadius: 0.5,
		borderWidth: 1,
		borderColor: "rgb(234, 172, 80)",
		borderStyle: "solid",
		width: 143,
		height: 1,
		marginTop: 15,
	},
	process3Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 30,
		height: 30,
	},
	process1Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 0,
		width: 30,
		top: 0,
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
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
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
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	radioButtonView: {
		backgroundColor: "rgb(234, 172, 80)",
		borderRadius: 12,
		width: 24,
		height: 24,
		justifyContent: "center",
	},
	iconCheckImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 11,
		marginLeft: 5,
		marginRight: 5,
	},
	billingAddressIsTText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 305,
		marginTop: 3,
	},
	street1View: {
		backgroundColor: "transparent",
		height: 67,
		marginRight: 1,
		marginTop: 31,
		alignItems: "flex-start",
	},
	street1Text: {
		backgroundColor: "transparent",
		opacity: 0.5,
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	streetNameBuiText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 19,
	},
	fieldFiveView: {
		backgroundColor: "transparent",
		borderRadius: 0.5,
		borderWidth: 0.5,
		borderColor: "rgb(221, 221, 221)",
		borderStyle: "solid",
		alignSelf: "stretch",
		height: 1,
	},
	street2View: {
		backgroundColor: "transparent",
		height: 67,
		marginRight: 1,
		marginTop: 41,
		alignItems: "flex-start",
	},
	street2Text: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		opacity: 0.5,
	},
	districtNameLandmText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 19,
	},
	fieldFourView: {
		backgroundColor: "transparent",
		borderRadius: 0.5,
		borderWidth: 0.5,
		borderColor: "rgb(221, 221, 221)",
		borderStyle: "solid",
		alignSelf: "stretch",
		height: 1,
	},
	cityView: {
		backgroundColor: "transparent",
		height: 67,
		marginRight: 1,
		marginTop: 41,
		alignItems: "flex-start",
	},
	cityText: {
		backgroundColor: "transparent",
		opacity: 0.5,
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	kuwaitCityText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 19,
	},
	fieldThreeView: {
		backgroundColor: "transparent",
		borderRadius: 0.5,
		borderWidth: 0.5,
		borderColor: "rgb(221, 221, 221)",
		borderStyle: "solid",
		alignSelf: "stretch",
		height: 1,
	},
	stateView: {
		backgroundColor: "transparent",
		width: 153,
		height: 67,
		alignItems: "flex-start",
	},
	zipcodeText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		opacity: 0.5,
	},
	textText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 19,
	},
	fieldTwoView: {
		backgroundColor: "transparent",
		borderRadius: 0.5,
		borderWidth: 0.5,
		borderColor: "rgb(221, 221, 221)",
		borderStyle: "solid",
		alignSelf: "stretch",
		height: 1,
	},
	countryView: {
		backgroundColor: "transparent",
		width: 153,
		height: 67,
		alignItems: "flex-start",
	},
	countryText: {
		backgroundColor: "transparent",
		opacity: 0.5,
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	kuwaitText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 19,
	},
	fieldView: {
		backgroundColor: "transparent",
		borderRadius: 0.5,
		borderWidth: 0.5,
		borderColor: "rgb(221, 221, 221)",
		borderStyle: "solid",
		alignSelf: "stretch",
		height: 1,
	},
	bottomView: {
		backgroundColor: "transparent",
		height: 84,
	},
	bgImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
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
