//
//  Item
//  Brandshop
//
//  Created by Abdalrahman S. Valabji.
//  Copyright © 2018 infty. All rights reserved.
//

import React from "react"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { Feather } from '@expo/vector-icons';
import { Ic_iconwishlist } from "../../components/SVG";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Item extends React.Component {

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

	OLD = () => {

		return <View
			style={styles.viewView}>
			<View
				pointerEvents="box-none"
				style={{
					position: "absolute",
					left: 0,
					right: 0,
					top: 0,
					bottom: -5,
				}}>
				<View
					pointerEvents="box-none"
					style={{
						flex: 1,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 0,
							bottom: 61,
						}}>
						<Image
							source={require("./../../assets/images/massimo-dutti-navy-floral-print-shirtdress-orig-2.png")}
							style={styles.massimoDuttiNavyFImage} />
						<View
							style={{
								flex: 1,
							}} />
						<View
							pointerEvents="box-none"
							style={{
								height: 18,
								marginLeft: 44,
								marginRight: 118,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<Image
								source={require("./../../assets/images/group-493.png")}
								style={styles.group493Image} />
							<Image
								source={require("./../../assets/images/noun-heart-3104971.png")}
								style={styles.nounHeart3104971Image} />
							<View
								style={{
									flex: 1,
								}} />
							<Image
								source={require("./../../assets/images/group-493.png")}
								style={styles.group493TwoImage} />
							<Image
								source={require("./../../assets/images/noun-heart-3104971-2.png")}
								style={styles.nounHeart3104971TwoImage} />
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 45,
							height: 1397,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 40,
								marginLeft: 15,
								marginRight: 16,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/icon-arrow-left.png")}
								style={styles.iconArrowLeftImage} />
							<View
								style={{
									flex: 1,
								}} />
							<View
								style={styles.wishlistView}>
								<Image
									source={require("./../../assets/images/icon-wishlist-2.png")}
									style={styles.iconWishlistImage} />
							</View>
						</View>
						<View
							style={styles.rectangle168View} />
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 16,
							right: 15,
							top: 515,
							bottom: 14,
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.floralBlueDressFoText}>Floral Blue Dress For Women</Text>
						<Text
							style={styles.kwdText}>250.00 KWD</Text>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 40,
								marginRight: 1,
								marginTop: 34,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								style={styles.tabSizeView}>
								<Text
									style={styles.sizeText}>Size</Text>
								<View
									style={{
										flex: 1,
									}} />
								<Text
									style={styles.xlText}>XL</Text>
							</View>
							<View
								style={{
									flex: 1,
								}} />
							<View
								style={styles.tabColourView}>
								<Text
									style={styles.colourText}>Colour</Text>
								<View
									style={{
										flex: 1,
									}} />
								<View
									style={styles.color1View} />
							</View>
						</View>
						<Text
							style={styles.detailsText}>Details</Text>
						<Text
							style={styles.readMoreText}>Read More</Text>
						<View
							style={styles.line27View} />
						<Text
							style={styles.youMayAlsoLikeText}>You may also like</Text>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 205,
								marginLeft: 17,
								marginRight: 18,
								marginTop: 20,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/pretty-blonde-inlong-ink-dress-spinning-132075-1080.png")}
								style={styles.prettyBlondeInlongImage} />
							<View
								style={{
									flex: 1,
								}} />
							<Image
								source={require("./../../assets/images/cute-teenage-girl-fashion-jacket-color-glasses-149155-2490-2.png")}
								style={styles.cuteTeenageGirlFaImage} />
						</View>
						<View
							style={{
								flex: 1,
							}} />
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 205,
								marginLeft: 17,
								marginRight: 18,
								marginBottom: 26,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<Image
								source={require("./../../assets/images/pretty-blonde-inlong-ink-dress-spinning-132075-1080.png")}
								style={styles.prettyBlondeInlongTwoImage} />
							<View
								style={{
									flex: 1,
								}} />
							<Image
								source={require("./../../assets/images/cute-teenage-girl-fashion-jacket-color-glasses-149155-2490-2.png")}
								style={styles.cuteTeenageGirlFaTwoImage} />
						</View>
						<View
							style={styles.rectangle14View} />
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 33,
							right: 33,
							top: 1031,
							height: 89,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							style={styles.rectangle118View} />
						<View
							style={{
								flex: 1,
							}} />
						<View
							style={styles.rectangle119View} />
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 44,
							width: 111,
							top: 1037,
							height: 72,
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.shortDressForWomeText}>Short Dress for women{"\n"}</Text>
						<View
							pointerEvents="box-none"
							style={{
								width: 81,
								height: 19,
								marginTop: 10,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/group-493.png")}
								style={styles.group493ThreeImage} />
							<Image
								source={require("./../../assets/images/noun-heart-3104971-2.png")}
								style={styles.nounHeart3104971ThreeImage} />
							<View
								style={styles.group492View}>
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
											height: 17,
											flexDirection: "row",
											alignItems: "center",
										}}>
										<Image
											source={require("./../../assets/images/group-481.png")}
											style={styles.group481Image} />
										<View
											style={styles.group487View}>
											<Image
												source={require("./../../assets/images/group-483.png")}
												style={styles.group483Image} />
											<View
												style={{
													flex: 1,
												}} />
											<Image
												source={require("./../../assets/images/group-485.png")}
												style={styles.group485Image} />
										</View>
									</View>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 4,
										right: 4,
										top: 3,
										height: 11,
									}}>
									<Image
										source={require("./../../assets/images/group-488.png")}
										style={styles.group488Image} />
									<Image
										source={require("./../../assets/images/group-490.png")}
										style={styles.group490Image} />
								</View>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							right: 61,
							width: 111,
							top: 1037,
							height: 72,
							alignItems: "flex-end",
						}}>
						<Text
							style={styles.shortDressForWomeTwoText}>Short Dress for women{"\n"}</Text>
						<View
							pointerEvents="box-none"
							style={{
								width: 81,
								height: 19,
								marginRight: 30,
								marginTop: 10,
								flexDirection: "row",
								justifyContent: "flex-end",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/group-493.png")}
								style={styles.group493FourImage} />
							<Image
								source={require("./../../assets/images/noun-heart-3104971-2.png")}
								style={styles.nounHeart3104971FourImage} />
							<View
								style={styles.group492TwoView}>
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
											height: 17,
											flexDirection: "row",
											alignItems: "center",
										}}>
										<Image
											source={require("./../../assets/images/group-481.png")}
											style={styles.group481TwoImage} />
										<View
											style={styles.group487TwoView}>
											<Image
												source={require("./../../assets/images/group-483.png")}
												style={styles.group483TwoImage} />
											<View
												style={{
													flex: 1,
												}} />
											<Image
												source={require("./../../assets/images/group-485.png")}
												style={styles.group485TwoImage} />
										</View>
									</View>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 4,
										right: 4,
										top: 3,
										height: 11,
									}}>
									<Image
										source={require("./../../assets/images/group-488.png")}
										style={styles.group488TwoImage} />
									<Image
										source={require("./../../assets/images/group-490.png")}
										style={styles.group490TwoImage} />
								</View>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 33,
							right: 33,
							bottom: 91,
							height: 89,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<View
							style={styles.rectangle169View} />
						<View
							style={{
								flex: 1,
							}} />
						<View
							style={styles.rectangle170View} />
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 44,
							width: 111,
							bottom: 102,
							height: 72,
							justifyContent: "flex-end",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.shortDressForWomeThreeText}>Short Dress for women{"\n"}</Text>
						<View
							pointerEvents="box-none"
							style={{
								width: 81,
								height: 19,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<Image
								source={require("./../../assets/images/group-493.png")}
								style={styles.group493FiveImage} />
							<Image
								source={require("./../../assets/images/noun-heart-3104971-2.png")}
								style={styles.nounHeart3104971FiveImage} />
							<View
								style={styles.group492ThreeView}>
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
											height: 17,
											flexDirection: "row",
											alignItems: "center",
										}}>
										<Image
											source={require("./../../assets/images/group-481.png")}
											style={styles.group481ThreeImage} />
										<View
											style={styles.group487ThreeView}>
											<Image
												source={require("./../../assets/images/group-483.png")}
												style={styles.group483ThreeImage} />
											<View
												style={{
													flex: 1,
												}} />
											<Image
												source={require("./../../assets/images/group-485.png")}
												style={styles.group485ThreeImage} />
										</View>
									</View>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 4,
										right: 4,
										top: 3,
										height: 11,
									}}>
									<Image
										source={require("./../../assets/images/group-488.png")}
										style={styles.group488ThreeImage} />
									<Image
										source={require("./../../assets/images/group-490.png")}
										style={styles.group490ThreeImage} />
								</View>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							right: 61,
							width: 111,
							bottom: 102,
							height: 72,
							justifyContent: "flex-end",
							alignItems: "flex-end",
						}}>
						<Text
							style={styles.shortDressForWomeFourText}>Short Dress for women{"\n"}</Text>
						<View
							pointerEvents="box-none"
							style={{
								width: 81,
								height: 19,
								marginRight: 30,
								flexDirection: "row",
								justifyContent: "flex-end",
								alignItems: "flex-end",
							}}>
							<Image
								source={require("./../../assets/images/group-493.png")}
								style={styles.group493SixImage} />
							<Image
								source={require("./../../assets/images/noun-heart-3104971-2.png")}
								style={styles.nounHeart3104971SixImage} />
							<View
								style={styles.group492FourView}>
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
											height: 17,
											flexDirection: "row",
											alignItems: "center",
										}}>
										<Image
											source={require("./../../assets/images/group-481.png")}
											style={styles.group481FourImage} />
										<View
											style={styles.group487FourView}>
											<Image
												source={require("./../../assets/images/group-483.png")}
												style={styles.group483FourImage} />
											<View
												style={{
													flex: 1,
												}} />
											<Image
												source={require("./../../assets/images/group-485.png")}
												style={styles.group485FourImage} />
										</View>
									</View>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 4,
										right: 4,
										top: 3,
										height: 11,
									}}>
									<Image
										source={require("./../../assets/images/group-488.png")}
										style={styles.group488FourImage} />
									<Image
										source={require("./../../assets/images/group-490.png")}
										style={styles.group490FourImage} />
								</View>
							</View>
						</View>
					</View>
					<Text
						style={styles.addToCartText}>ADD TO CART</Text>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						height: 105,
					}}>
					<View
						style={styles.rectangle113View} />
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
								style={styles.group480Image} />
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
								style={styles.nounCategory283436Image} />
							<Text
								style={styles.shopsText}>Shops</Text>
						</View>
						<View
							style={{
								flex: 1,
							}} />
						<Image
							source={require("./../../assets/images/group-477.png")}
							style={styles.group477Image} />
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
								style={styles.nounCart1363648Image} />
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
								style={styles.group479Image} />
							<Text
								style={styles.meText}>Me</Text>
						</View>
					</View>
				</View>
			</View>
			<View
				pointerEvents="box-none"
				style={{
					position: "absolute",
					left: 16,
					right: 16,
					bottom: 13,
					height: 797,
					alignItems: "center",
				}}>
				<Text
					style={styles.nikeDriFitIsAPoText}>Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer.{"\n"}</Text>
				<View
					style={{
						flex: 1,
					}} />
				<Text
					style={styles.dealsText}>Deals</Text>
			</View>
		</View>

	}

	Main = () => {
		const [navop, setNavOp] = React.useState(1)
		return <View
			style={styles.viewView}>
			<Image
				source={require("./../../assets/images/massimo-dutti-navy-floral-print-shirtdress-orig.png")}
				style={styles.massimoDuttiNavyFImage} />
			<View style={{
				position: "absolute",
				top: 0,
				// backgroundColor: "grey",
				alignItems: "center",
				zIndex:1,
				width: "100%", opacity: navop, flexDirection: "row", marginTop: 32
			}}>
				<TouchableOpacity
					// style={{ zIndex: 1 }}
					onPress={() => {
						this.props.navigation.goBack()
					}}
				>
					<Feather name="chevron-left" size={32} style={{ padding: 24 }} />
				</TouchableOpacity>
				<View style={{ flex: 1 }} />
				<View style={{
					shadowColor: "rgba(0, 0, 0, 0.16)",
					shadowRadius: 6,
					shadowOpacity: 1,
					elevation: 1,
					backgroundColor: "white", justifyContent: "center", alignItems: "center", borderRadius: 24, width: 48, height: 48, marginRight: 24
				}}>
					<Feather name="star" size={24} />
				</View>
			</View>
			<ScrollView
				scrollEventThrottle={10}
				onScroll={(event) => {
					const v = event.nativeEvent.contentOffset.y
					console.log(v)
					if (v >= 120 && v <= 220) {
						setNavOp(((((v - 120) / 100) - 1) * -1))
					}
				}}
			>
				<View style={{
					shadowColor: "rgba(0, 0, 0, 0.16)",
					shadowRadius: 6,
					shadowOpacity: 1,
					elevation: 1,
					backgroundColor: "white", width: "100%", marginTop: 360, borderRadius: 50, height: 1500,
				}} >

				</View>
			</ScrollView>

		</View>

	}
	render() {
		return <this.Main />
	}

}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	massimoDuttiNavyFImage: {
		position: "absolute",
		top: 0,
		// backgroundColor: "cyan",
		resizeMode: "cover",
		width: "100%",
		height: 514,
	},
	group493Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 18,
	},
	nounHeart3104971Image: {
		backgroundColor: "transparent",
		opacity: 0.41,
		resizeMode: "center",
		width: 20,
		height: 17,
		marginLeft: 10,
	},
	group493TwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 18,
		marginRight: 10,
	},
	nounHeart3104971TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.41,
		width: 20,
		height: 17,
	},
	iconArrowLeftImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 8,
		height: 14,
		marginTop: 12,
	},
	wishlistView: {
		backgroundColor: "white",
		borderRadius: 20,
		width: 40,
		height: 40,
		justifyContent: "center",
	},
	iconWishlistImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 17,
		marginLeft: 11,
		marginRight: 11,
	},
	rectangle168View: {
		backgroundColor: "white",
		borderRadius: 50,
		height: 989,
		marginTop: 368,
	},
	floralBlueDressFoText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	kwdText: {
		color: "rgb(234, 169, 73)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 9,
	},
	tabSizeView: {
		backgroundColor: "transparent",
		borderRadius: 20,
		borderWidth: 1,
		borderColor: "rgb(235, 235, 235)",
		borderStyle: "solid",
		width: 160,
		height: 40,
		flexDirection: "row",
		alignItems: "center",
	},
	sizeText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 20,
	},
	xlText: {
		color: "black",
		fontFamily: "Poppins_700Bold",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		marginRight: 19,
	},
	tabColourView: {
		backgroundColor: "transparent",
		borderRadius: 20,
		borderWidth: 1,
		borderColor: "rgb(235, 235, 235)",
		borderStyle: "solid",
		width: 160,
		height: 40,
		flexDirection: "row",
		alignItems: "center",
	},
	colourText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 20,
	},
	color1View: {
		backgroundColor: "rgb(0, 19, 93)",
		borderRadius: 8,
		width: 22,
		height: 23,
		marginRight: 20,
	},
	detailsText: {
		color: "black",
		fontFamily: "Poppins_700Bold",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 41,
	},
	readMoreText: {
		color: "rgb(234, 169, 73)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 84,
		marginTop: 89,
	},
	line27View: {
		backgroundColor: "rgb(112, 112, 112)",
		opacity: 0.44,
		alignSelf: "stretch",
		height: 1,
		marginTop: 14,
	},
	youMayAlsoLikeText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins_700Bold",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		marginTop: 25,
	},
	prettyBlondeInlongImage: {
		resizeMode: "center",
		backgroundColor: "pink",
		width: 150,
		height: 205,
	},
	cuteTeenageGirlFaImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 150,
		height: 205,
	},
	prettyBlondeInlongTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 150,
		height: 205,
	},
	cuteTeenageGirlFaTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 150,
		height: 205,
	},
	rectangle14View: {
		backgroundColor: "black",
		borderRadius: 25,
		alignSelf: "center",
		width: 300,
		height: 51,
	},
	rectangle118View: {
		backgroundColor: "white",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 150,
		height: 89,
	},
	rectangle119View: {
		backgroundColor: "white",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 150,
		height: 89,
	},
	shortDressForWomeText: {
		color: "rgb(20, 20, 20)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
		backgroundColor: "transparent",
	},
	group493ThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 18,
		marginTop: 1,
	},
	nounHeart3104971ThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.41,
		width: 20,
		height: 17,
		marginLeft: 10,
		marginTop: 2,
	},
	group492View: {
		backgroundColor: "transparent",
		width: 16,
		height: 17,
		marginLeft: 11,
	},
	group481Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		flex: 1,
		height: 6,
		marginRight: 3,
	},
	group487View: {
		backgroundColor: "transparent",
		flex: 1,
		height: 17,
		marginLeft: 3,
	},
	group483Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 6,
		marginRight: 1,
	},
	group485Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 6,
		marginLeft: 1,
	},
	group488Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 5,
	},
	group490Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 5,
		marginTop: 1,
	},
	shortDressForWomeTwoText: {
		backgroundColor: "transparent",
		color: "rgb(20, 20, 20)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
	},
	group493FourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 18,
		marginRight: 10,
		marginTop: 1,
	},
	nounHeart3104971FourImage: {
		backgroundColor: "transparent",
		opacity: 0.41,
		resizeMode: "center",
		width: 20,
		height: 17,
		marginRight: 11,
		marginTop: 2,
	},
	group492TwoView: {
		backgroundColor: "transparent",
		width: 16,
		height: 17,
	},
	group481TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		flex: 1,
		height: 6,
		marginRight: 3,
	},
	group487TwoView: {
		backgroundColor: "transparent",
		flex: 1,
		height: 17,
		marginLeft: 3,
	},
	group483TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 6,
		marginRight: 1,
	},
	group485TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 6,
		marginLeft: 1,
	},
	group488TwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 5,
	},
	group490TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 5,
		marginTop: 1,
	},
	rectangle169View: {
		backgroundColor: "white",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 150,
		height: 89,
	},
	rectangle170View: {
		backgroundColor: "white",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 150,
		height: 89,
	},
	shortDressForWomeThreeText: {
		backgroundColor: "transparent",
		color: "rgb(20, 20, 20)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
		marginBottom: 10,
	},
	group493FiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 18,
	},
	nounHeart3104971FiveImage: {
		backgroundColor: "transparent",
		opacity: 0.41,
		resizeMode: "center",
		width: 20,
		height: 17,
		marginLeft: 10,
	},
	group492ThreeView: {
		backgroundColor: "transparent",
		width: 16,
		height: 17,
		marginLeft: 11,
		marginBottom: 2,
	},
	group481ThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		flex: 1,
		height: 6,
		marginRight: 3,
	},
	group487ThreeView: {
		backgroundColor: "transparent",
		flex: 1,
		height: 17,
		marginLeft: 3,
	},
	group483ThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 6,
		marginRight: 1,
	},
	group485ThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 6,
		marginLeft: 1,
	},
	group488ThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 5,
	},
	group490ThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 5,
		marginTop: 1,
	},
	shortDressForWomeFourText: {
		backgroundColor: "transparent",
		color: "rgb(20, 20, 20)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
		marginBottom: 10,
	},
	group493SixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 18,
		marginRight: 10,
	},
	nounHeart3104971SixImage: {
		backgroundColor: "transparent",
		opacity: 0.41,
		resizeMode: "center",
		width: 20,
		height: 17,
		marginRight: 11,
	},
	group492FourView: {
		backgroundColor: "transparent",
		width: 16,
		height: 17,
		marginBottom: 2,
	},
	group481FourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		flex: 1,
		height: 6,
		marginRight: 3,
	},
	group487FourView: {
		backgroundColor: "transparent",
		flex: 1,
		height: 17,
		marginLeft: 3,
	},
	group483FourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 6,
		marginRight: 1,
	},
	group485FourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 6,
		marginLeft: 1,
	},
	group488FourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 5,
	},
	group490FourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 5,
		marginTop: 1,
	},
	addToCartText: {
		color: "white",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		bottom: 24,
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
		width: 16,
		height: 27,
		marginRight: 47,
		marginBottom: 28,
	},
	nounCart1363648Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
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
		color: "rgb(171, 171, 171)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 4,
	},
	nikeDriFitIsAPoText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 18,
		paddingTop: 2,
		alignSelf: "stretch",
	},
	dealsText: {
		backgroundColor: "transparent",
		color: "rgb(234, 169, 73)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
})
