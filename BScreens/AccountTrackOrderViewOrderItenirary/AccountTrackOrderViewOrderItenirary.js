//
//  AccountTrackOrderViewOrderItenirary
//  Brandshop
//
//  Created by Abdalrahman S. Valabji.
//  Copyright © 2018 infty. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class AccountTrackOrderViewOrderItenirary extends React.Component {

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
							right: 23,
							top: 29,
							height: 41,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/group-1697.png")}
							style={styles.group1697Image}/>
						<Text
							style={styles.trackOrderText}>TRACK ORDER</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.itineraryViewView}>
							<View
								style={styles.group334View}>
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
										source={require("./../../assets/images/group-333.png")}
										style={styles.group333Image}/>
								</View>
								<Image
									source={require("./../../assets/images/path-91.png")}
									style={styles.path91Image}/>
							</View>
						</View>
					</View>
				</View>
				<View
					style={styles.contentView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							alignSelf: "center",
							top: 0,
							bottom: 0,
							justifyContent: "center",
						}}>
						<Image
							source={require("./../../assets/images/process-3-2.png")}
							style={styles.process3Image}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 6,
							bottom: 8,
							alignItems: "center",
						}}>
						<Image
							source={require("./../../assets/images/process-2-2.png")}
							style={styles.process1Image}/>
						<Image
							source={require("./../../assets/images/process-2-2.png")}
							style={styles.process2Image}/>
						<View
							style={styles.scrubberView}/>
						<Image
							source={require("./../../assets/images/process-5.png")}
							style={styles.process4Image}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/process-5.png")}
							style={styles.process5Image}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 121,
							right: 56,
							top: 0,
							bottom: 0,
							alignItems: "flex-end",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 44,
								marginLeft: 35,
								marginRight: 28,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									width: 48,
									height: 35,
									marginTop: 5,
								}}>
								<Text
									style={styles.amThreeText}>10:00 AM</Text>
								<Text
									style={styles.textThreeText}>20/18</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									width: 103,
									height: 44,
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.orderSignedText}>Order Signed</Text>
								<Text
									style={styles.dubaiUaeThreeText}>Dubai, UAE</Text>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 44,
								marginTop: 72,
							}}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: 65,
									top: 2,
									height: 42,
								}}>
								<View
									style={styles.scrubberTwoView}/>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 35,
										right: 5,
										top: 16,
										height: 26,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.amTwoText}>10:00 AM</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.dubaiUaeTwoText}>Dubai, UAE</Text>
								</View>
								<Text
									style={styles.textTwoText}>20/18</Text>
							</View>
							<Text
								style={styles.orderProcessedText}>Order Processed</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 44,
								marginLeft: 35,
								marginRight: 61,
								marginTop: 88,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									width: 48,
									height: 35,
									marginTop: 4,
								}}>
								<Text
									style={styles.amText}>10:00 AM</Text>
								<Text
									style={styles.textText}>21/18</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									width: 70,
									height: 44,
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.shippedText}>Shipped </Text>
								<Text
									style={styles.dubaiUaeText}>Dubai, UAE</Text>
							</View>
						</View>
						<Text
							style={styles.outForDeliveryText}>Out for delivery</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.kuwaitKuwaitTwoText}>Kuwait, Kuwait</Text>
						<Text
							style={styles.deliveredText}>Delivered</Text>
						<Text
							style={styles.kuwaitKuwaitText}>Kuwait, Kuwait</Text>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
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
		marginTop: 12,
	},
	trackOrderText: {
		color: "rgb(251, 251, 251)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 32,
		marginTop: 10,
	},
	itineraryViewView: {
		backgroundColor: "rgb(254, 254, 254)",
		borderRadius: 20,
		width: 40,
		height: 41,
		justifyContent: "center",
	},
	group334View: {
		backgroundColor: "transparent",
		height: 17,
		marginLeft: 11,
		marginRight: 12,
	},
	group333Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 17,
	},
	path91Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 4,
		right: 5,
		bottom: 3,
		height: 2,
	},
	contentView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 485,
		height: 535,
		marginTop: 72,
	},
	process3Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 30,
		height: 30,
	},
	process1Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 30,
		height: 30,
	},
	process2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 30,
		height: 30,
		marginTop: 86,
	},
	scrubberView: {
		backgroundColor: "white",
		borderRadius: 0.5,
		borderWidth: 0.5,
		borderColor: "rgb(221, 221, 221)",
		borderStyle: "solid",
		alignSelf: "stretch",
		height: 1,
	},
	process4Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 30,
		height: 30,
		marginTop: 107,
	},
	process5Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 30,
		height: 30,
	},
	amThreeText: {
		color: "rgb(146, 146, 146)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		top: 16,
	},
	textThreeText: {
		backgroundColor: "transparent",
		color: "rgb(146, 146, 146)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 0,
		top: 0,
	},
	orderSignedText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	dubaiUaeThreeText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		opacity: 0.87,
		marginRight: 42,
	},
	scrubberTwoView: {
		backgroundColor: "rgb(234, 172, 80)",
		borderRadius: 1,
		borderWidth: 1,
		borderColor: "rgb(234, 172, 80)",
		borderStyle: "solid",
		position: "absolute",
		alignSelf: "center",
		width: 243,
		top: 29,
		height: 2,
	},
	amTwoText: {
		color: "rgb(146, 146, 146)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	dubaiUaeTwoText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		opacity: 0.87,
		marginTop: 7,
	},
	textTwoText: {
		color: "rgb(146, 146, 146)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 35,
		top: 0,
	},
	orderProcessedText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		right: 0,
		top: 0,
	},
	amText: {
		color: "rgb(146, 146, 146)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		top: 16,
	},
	textText: {
		backgroundColor: "transparent",
		color: "rgb(146, 146, 146)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 0,
		top: 0,
	},
	shippedText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	dubaiUaeText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		opacity: 0.87,
		marginRight: 9,
	},
	outForDeliveryText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 12,
		marginTop: 79,
	},
	kuwaitKuwaitTwoText: {
		backgroundColor: "transparent",
		opacity: 0.87,
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 49,
		marginBottom: 76,
	},
	deliveredText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 58,
	},
	kuwaitKuwaitText: {
		backgroundColor: "transparent",
		opacity: 0.87,
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 49,
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
		backgroundColor: "transparent",
		resizeMode: "center",
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
		backgroundColor: "transparent",
		resizeMode: "center",
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
