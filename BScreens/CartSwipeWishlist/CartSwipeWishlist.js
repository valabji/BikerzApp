//
//  CartSwipeWishlist
//  Brandshop
//
//  Created by Abdalrahman S. Valabji.
//  Copyright © 2018 infty. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class CartSwipeWishlist extends React.Component {

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
						right: -53,
						top: 0,
						bottom: 0,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							height: 92,
							marginRight: 53,
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
						pointerEvents="box-none"
						style={{
							flex: 1,
							marginTop: 21,
						}}>
						<View
							style={styles.contentView}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<View
									style={styles.cartItem3View}>
									<Image
										source={require("./../../assets/images/image-9.png")}
										style={styles.imageThreeImage}/>
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
											style={styles.electricKettleText}>Electric Kettle</Text>
										<Text
											style={styles.kwdThreeText}>100.00kwd</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.counterThreeView}>
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
													style={styles.textThreeText}>1</Text>
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
														style={styles.plusThreeImage}/>
													<View
														style={{
															flex: 1,
														}}/>
													<Image
														source={require("./../../assets/images/minus.png")}
														style={styles.minusThreeImage}/>
												</View>
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
									alignItems: "flex-start",
								}}>
								<View
									style={styles.cartItem1View}>
									<Image
										source={require("./../../assets/images/card-item-1-2.png")}
										style={styles.imageFiveImage}/>
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
											style={styles.tagHeuerWristwatchText}>Tag Heuer Wristwatch</Text>
										<Text
											style={styles.kwdFiveText}>100.00kwd</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.counterFiveView}>
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
													style={styles.textFiveText}>3</Text>
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
														style={styles.plusFiveImage}/>
													<View
														style={{
															flex: 1,
														}}/>
													<Image
														source={require("./../../assets/images/minus.png")}
														style={styles.minusFiveImage}/>
												</View>
											</View>
										</View>
									</View>
								</View>
								<View
									style={styles.cartItem2View}>
									<Image
										source={require("./../../assets/images/card-item-1.png")}
										style={styles.imageFourImage}/>
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
											style={styles.beoplaySpeakerText}>BeoPlay Speaker</Text>
										<Text
											style={styles.kwdFourText}>100.00kwd</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.counterFourView}>
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
													style={styles.textFourText}>2</Text>
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
														style={styles.plusFourImage}/>
													<View
														style={{
															flex: 1,
														}}/>
													<Image
														source={require("./../../assets/images/minus.png")}
														style={styles.minusFourImage}/>
												</View>
											</View>
										</View>
									</View>
								</View>
								<View
									style={styles.wishlistView}>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 0,
											top: 0,
											bottom: 0,
											justifyContent: "center",
										}}>
										<Image
											source={require("./../../assets/images/bg-3.png")}
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
												height: 120,
												marginLeft: 32,
												flexDirection: "row",
												alignItems: "center",
											}}>
											<Image
												source={require("./../../assets/images/icon-wishlist.png")}
												style={styles.iconWishlistImage}/>
											<View
												style={{
													flex: 1,
												}}/>
											<View
												style={styles.cartItem4View}>
												<Image
													source={require("./../../assets/images/image-5.png")}
													style={styles.imageTwoImage}/>
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
														style={styles.bangOlufsenCaseText}>Bang & Olufsen Case</Text>
													<Text
														style={styles.kwdTwoText}>100.00kwd</Text>
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
																style={styles.textTwoText}>1</Text>
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
										</View>
									</View>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.cartItem5View}>
									<Image
										source={require("./../../assets/images/image.png")}
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
											style={styles.smartHomeSpeakerText}>Smart Home Speaker</Text>
										<Text
											style={styles.kwdText}>100.00kwd</Text>
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
													style={styles.textText}>3</Text>
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
							</View>
						</View>
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
									style={styles.bgTwoImage}/>
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
									alignItems: "center",
								}}>
								<Text
									style={styles.kwdSixText}>4500.00 kwd</Text>
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
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 105,
							marginRight: 53,
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
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 26,
		height: 17,
		marginTop: 2,
	},
	myCartTwoText: {
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
		left: 0,
		right: 0,
		top: 0,
		height: 664,
	},
	cartItem3View: {
		backgroundColor: "transparent",
		borderRadius: 4,
		width: 343,
		height: 120,
		marginLeft: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	imageThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 120,
		height: 120,
	},
	electricKettleText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 193,
	},
	kwdThreeText: {
		backgroundColor: "transparent",
		color: "rgb(234, 172, 80)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 193,
		marginTop: 2,
	},
	counterThreeView: {
		backgroundColor: "rgba(0, 0, 0, 0.06)",
		borderRadius: 4,
		width: 96,
		height: 30,
		marginRight: 97,
	},
	textThreeText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	plusThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 11,
		height: 11,
	},
	minusThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 11,
		height: 1,
	},
	cartItem1View: {
		backgroundColor: "transparent",
		borderRadius: 4,
		width: 343,
		height: 120,
		marginLeft: 16,
		flexDirection: "row",
	},
	imageFiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 120,
		height: 120,
	},
	tagHeuerWristwatchText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 193,
	},
	kwdFiveText: {
		backgroundColor: "transparent",
		color: "rgb(234, 172, 80)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 193,
		marginTop: 2,
	},
	counterFiveView: {
		backgroundColor: "rgba(0, 0, 0, 0.06)",
		borderRadius: 4,
		width: 96,
		height: 30,
		marginRight: 97,
	},
	textFiveText: {
		color: "black",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	plusFiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 11,
		height: 11,
	},
	minusFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 11,
		height: 1,
	},
	cartItem2View: {
		backgroundColor: "transparent",
		borderRadius: 4,
		width: 343,
		height: 120,
		marginLeft: 16,
		marginTop: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	imageFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 120,
		height: 120,
	},
	beoplaySpeakerText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 193,
	},
	kwdFourText: {
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
	counterFourView: {
		backgroundColor: "rgba(0, 0, 0, 0.06)",
		borderRadius: 4,
		width: 96,
		height: 30,
		marginRight: 97,
	},
	textFourText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	plusFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 11,
		height: 11,
	},
	minusFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 11,
		height: 1,
	},
	wishlistView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 120,
		marginTop: 152,
	},
	bgImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 375,
		height: 120,
	},
	iconWishlistImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 22,
		height: 21,
	},
	cartItem4View: {
		backgroundColor: "white",
		borderRadius: 4,
		width: 343,
		height: 120,
		flexDirection: "row",
		alignItems: "center",
	},
	imageTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 120,
		height: 120,
	},
	bangOlufsenCaseText: {
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
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 11,
		height: 11,
	},
	minusTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 11,
		height: 1,
	},
	cartItem5View: {
		backgroundColor: "transparent",
		borderRadius: 4,
		width: 343,
		height: 120,
		marginLeft: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	imageImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
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
	kwdText: {
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
		textAlign: "left",
		backgroundColor: "transparent",
	},
	plusImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 11,
		height: 11,
	},
	minusImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 11,
		height: 1,
	},
	actionBarView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 53,
		bottom: 0,
		height: 84,
	},
	bgTwoImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(36, 36, 36, 0.1)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: null,
		height: 84,
	},
	kwdSixText: {
		color: "rgb(234, 172, 80)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginTop: 22,
	},
	primaryButtonSmaView: {
		backgroundColor: "black",
		borderRadius: 25,
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
		color: "rgb(146, 146, 146)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
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
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 29,
		height: 28,
		marginBottom: 15,
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
		marginBottom: 14,
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
		marginBottom: 14,
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
})
