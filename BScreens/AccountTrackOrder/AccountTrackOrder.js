//
//  AccountTrackOrder
//  Brandshop
//
//  Created by Abdalrahman S. Valabji.
//  Copyright © 2018 infty. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class AccountTrackOrder extends React.Component {

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
					pointerEvents="box-none"
					style={{
						flex: 1,
						marginTop: 26,
					}}>
					<View
						style={styles.contentView}>
						<Text
							style={styles.sept232020TwoText}>Sept 23, 2020</Text>
						<View
							style={styles.order1View}>
							<View
								pointerEvents="box-none"
								style={{
									width: 105,
									height: 50,
									marginRight: 26,
									marginTop: 18,
									flexDirection: "row",
									justifyContent: "flex-end",
									alignItems: "flex-start",
								}}>
								<Image
									source={require("./../../assets/images/image-1-3.png")}
									style={styles.image1FourImage}/>
								<Image
									source={require("./../../assets/images/image-2-2.png")}
									style={styles.image2FourImage}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "flex-start",
									width: 149,
									height: 52,
									marginLeft: 20,
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.od424923192NThreeText}>OD - 424923192 - N</Text>
								<Text
									style={styles.kwdThreeText}>370.00 kwd</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									flex: 1,
									alignSelf: "stretch",
									marginLeft: 21,
									marginRight: 26,
									marginTop: 2,
									marginBottom: 17,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<View
									style={styles.transitView}>
									<Text
										style={styles.inTransitText}>In Transit</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("./../../assets/images/image-3.png")}
									style={styles.image3FourImage}/>
								<View
									style={styles.moreFourView}>
									<Text
										style={styles.textFiveText}>+4</Text>
								</View>
							</View>
						</View>
						<Text
							style={styles.sept232020Text}>Sept 23, 2020</Text>
						<View
							pointerEvents="box-none"
							style={{
								height: 294,
								marginTop: 17,
							}}>
							<View
								style={styles.order3View}>
								<View
									style={styles.deliveredTwoView}>
									<Text
										style={styles.deliveredTwoText}>Delivered</Text>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										flex: 1,
										alignSelf: "stretch",
										marginTop: 31,
									}}>
									<View
										style={styles.bgView}/>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 20,
											right: 26,
											top: 20,
											bottom: 15,
											flexDirection: "row",
										}}>
										<View
											pointerEvents="box-none"
											style={{
												alignSelf: "flex-start",
												width: 149,
												height: 52,
												marginTop: 1,
												alignItems: "flex-start",
											}}>
											<Text
												style={styles.od424923192NText}>OD - 424923192 - N</Text>
											<Text
												style={styles.kwdText}>370.00 kwd</Text>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											pointerEvents="box-none"
											style={{
												width: 50,
												marginRight: 5,
												alignItems: "flex-end",
											}}>
											<Image
												source={require("./../../assets/images/image-1-2.png")}
												style={styles.image1TwoImage}/>
											<View
												style={{
													flex: 1,
												}}/>
											<Image
												source={require("./../../assets/images/image-3-3.png")}
												style={styles.image3TwoImage}/>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												width: 50,
												alignItems: "flex-end",
											}}>
											<Image
												source={require("./../../assets/images/image-2.png")}
												style={styles.image2TwoImage}/>
											<View
												style={{
													flex: 1,
												}}/>
											<View
												style={styles.moreTwoView}>
												<Text
													style={styles.textThreeText}>+4</Text>
											</View>
										</View>
									</View>
								</View>
							</View>
							<View
								style={styles.order2View}>
								<View
									style={styles.bgTwoView}/>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 20,
										right: 26,
										top: 18,
										height: 252,
									}}>
									<View
										pointerEvents="box-none"
										style={{
											alignSelf: "flex-end",
											width: 105,
											height: 50,
											flexDirection: "row",
											justifyContent: "flex-end",
											alignItems: "flex-start",
										}}>
										<Image
											source={require("./../../assets/images/image-1.png")}
											style={styles.image1ThreeImage}/>
										<Image
											source={require("./../../assets/images/image-2-3.png")}
											style={styles.image2ThreeImage}/>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											alignSelf: "flex-start",
											width: 149,
											height: 52,
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.od424923192NTwoText}>OD - 424923192 - N</Text>
										<Text
											style={styles.kwdTwoText}>370.00 kwd</Text>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											height: 197,
											marginLeft: 1,
											marginTop: 2,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<View
											style={styles.deliveredThreeView}>
											<View
												pointerEvents="box-none"
												style={{
													height: 30,
												}}>
												<View
													style={styles.bgThreeView}/>
												<Text
													style={styles.deliveredThreeText}>Delivered</Text>
											</View>
											<View
												style={{
													flex: 1,
												}}/>
											<View
												pointerEvents="box-none"
												style={{
													height: 30,
												}}>
												<View
													style={styles.bgFourView}/>
												<Text
													style={styles.deliveredFourText}>Delivered</Text>
											</View>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
										<Image
											source={require("./../../assets/images/image-3-2.png")}
											style={styles.image3ThreeImage}/>
										<View
											style={styles.moreThreeView}>
											<Text
												style={styles.textFourText}>+4</Text>
										</View>
									</View>
								</View>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.order4View}>
							<View
								pointerEvents="box-none"
								style={{
									height: 51,
									marginLeft: 20,
									marginRight: 26,
									marginTop: 17,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										width: 129,
										height: 47,
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.order42992NText}>Order 42992 - N</Text>
									<Text
										style={styles.textTwoText}>$4500</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("./../../assets/images/image-1-3.png")}
									style={styles.image1Image}/>
								<Image
									source={require("./../../assets/images/image-2-2.png")}
									style={styles.image2Image}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									flex: 1,
									marginLeft: 21,
									marginRight: 26,
									marginTop: 5,
									marginBottom: 17,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<View
									style={styles.deliveredView}>
									<Text
										style={styles.deliveredText}>Delivered</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("./../../assets/images/image-3.png")}
									style={styles.image3Image}/>
								<View
									style={styles.moreView}>
									<Text
										style={styles.textText}>+4</Text>
								</View>
							</View>
						</View>
					</View>
					<View
						style={styles.group1700View}>
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
		marginTop: 12,
	},
	trackOrderText: {
		backgroundColor: "transparent",
		color: "rgb(251, 251, 251)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
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
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 17,
	},
	path91Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 4,
		right: 5,
		bottom: 3,
		height: 2,
	},
	contentView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 16,
		right: 16,
		top: 0,
		height: 689,
	},
	sept232020TwoText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
	},
	order1View: {
		backgroundColor: "white",
		borderRadius: 4,
		shadowColor: "rgba(36, 36, 36, 0.05)",
		shadowRadius: 15,
		shadowOpacity: 1,
		height: 140,
		marginTop: 11,
		alignItems: "flex-end",
	},
	image1FourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 50,
		height: 50,
		marginRight: 5,
	},
	image2FourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 50,
		height: 50,
	},
	od424923192NThreeText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	kwdThreeText: {
		backgroundColor: "transparent",
		color: "rgb(234, 172, 80)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 1,
		marginTop: 2,
	},
	transitView: {
		backgroundColor: "rgb(234, 172, 80)",
		borderRadius: 15,
		alignSelf: "flex-end",
		width: 80,
		height: 30,
	},
	inTransitText: {
		color: "white",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 14,
		marginRight: 13,
		marginTop: 8,
	},
	image3FourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 50,
		height: 50,
		marginRight: 5,
	},
	moreFourView: {
		backgroundColor: "transparent",
		borderRadius: 4,
		borderWidth: 1,
		borderColor: "rgb(225, 225, 225)",
		borderStyle: "solid",
		width: 50,
		height: 50,
		justifyContent: "center",
	},
	textFiveText: {
		color: "black",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 17,
		marginRight: 16,
	},
	sept232020Text: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-start",
		marginTop: 31,
	},
	order3View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 93,
		height: 201,
		alignItems: "flex-start",
	},
	deliveredTwoView: {
		backgroundColor: "black",
		borderRadius: 15,
		width: 80,
		height: 30,
		marginLeft: 21,
	},
	deliveredTwoText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginLeft: 13,
		marginRight: 12,
		marginTop: 8,
	},
	bgView: {
		backgroundColor: "white",
		borderRadius: 4,
		shadowColor: "rgba(36, 36, 36, 0.05)",
		shadowRadius: 15,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 140,
	},
	od424923192NText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	kwdText: {
		color: "rgb(234, 172, 80)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 1,
		marginTop: 2,
	},
	image1TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 50,
		height: 50,
	},
	image3TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 50,
		height: 50,
	},
	image2TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 50,
		height: 50,
	},
	moreTwoView: {
		backgroundColor: "transparent",
		borderRadius: 4,
		borderWidth: 1,
		borderColor: "rgb(225, 225, 225)",
		borderStyle: "solid",
		width: 50,
		height: 50,
		justifyContent: "center",
	},
	textThreeText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginLeft: 17,
		marginRight: 16,
	},
	order2View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 270,
	},
	bgTwoView: {
		backgroundColor: "white",
		borderRadius: 4,
		shadowColor: "rgba(36, 36, 36, 0.05)",
		shadowRadius: 15,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 140,
	},
	image1ThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 50,
		height: 50,
		marginRight: 5,
	},
	image2ThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 50,
		height: 50,
	},
	od424923192NTwoText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	kwdTwoText: {
		backgroundColor: "transparent",
		color: "rgb(234, 172, 80)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 1,
		marginTop: 2,
	},
	deliveredThreeView: {
		backgroundColor: "transparent",
		width: 80,
		height: 177,
		marginTop: 20,
	},
	bgThreeView: {
		backgroundColor: "black",
		borderRadius: 15,
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 30,
	},
	deliveredThreeText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		left: 13,
		right: 12,
		top: 8,
	},
	bgFourView: {
		backgroundColor: "rgb(234, 172, 80)",
		borderRadius: 15,
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 30,
	},
	deliveredFourText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		left: 13,
		right: 12,
		bottom: 3,
	},
	image3ThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 50,
		height: 50,
		marginRight: 5,
	},
	moreThreeView: {
		backgroundColor: "transparent",
		borderRadius: 4,
		borderWidth: 1,
		borderColor: "rgb(225, 225, 225)",
		borderStyle: "solid",
		width: 50,
		height: 50,
		justifyContent: "center",
	},
	textFourText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginLeft: 17,
		marginRight: 16,
	},
	order4View: {
		backgroundColor: "white",
		borderRadius: 4,
		shadowColor: "rgba(36, 36, 36, 0.05)",
		shadowRadius: 15,
		shadowOpacity: 1,
		height: 140,
	},
	order42992NText: {
		color: "black",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	textTwoText: {
		color: "rgb(0, 197, 105)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 1,
		marginTop: 10,
	},
	image1Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 50,
		height: 50,
		marginRight: 5,
		marginTop: 1,
	},
	image2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 50,
		height: 50,
		marginTop: 1,
	},
	deliveredView: {
		backgroundColor: "rgb(0, 197, 105)",
		borderRadius: 4,
		alignSelf: "flex-end",
		width: 80,
		height: 30,
		justifyContent: "center",
	},
	deliveredText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginLeft: 13,
		marginRight: 12,
	},
	image3Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 50,
		height: 50,
		marginRight: 5,
	},
	moreView: {
		backgroundColor: "transparent",
		borderRadius: 4,
		borderWidth: 1,
		borderColor: "rgb(225, 225, 225)",
		borderStyle: "solid",
		width: 50,
		height: 50,
		justifyContent: "center",
	},
	textText: {
		color: "black",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 17,
		marginRight: 16,
	},
	group1700View: {
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
		backgroundColor: "transparent",
		color: "rgb(171, 171, 171)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
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
