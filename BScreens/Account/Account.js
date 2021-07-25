//
//  Account
//  Brandshop
//
//  Created by Abdalrahman S. Valabji.
//  Copyright © 2018 infty. All rights reserved.
//

import { Feather, Ionicons } from "@expo/vector-icons"
import React from "react"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { Ic_iconeditprofile, Ic_iconexit, Ic_iconhistory, Ic_iconlocation, Ic_iconorder, Ic_iconpayment, Ic_iconwishlistprofile } from "../../components/SVG"
import Icons from "../../screens/Icons"

export default class Account extends React.Component {

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
		if (!global.logedin) {
			this.props.navigation.navigate('Login')
		}
		return <View
			style={styles.viewView}>
			<View style={{ backgroundColor: "black", width: "100%", height: 72, justifyContent: "center" }}>
				<View
					style={{
						marginLeft: 22,
						width: 161,
						flexDirection: "row",
					}}>
					<Feather name='arrow-left' color="white" size={24} />
					<Text
						style={styles.myAccountText}>MY ACCOUNT</Text>
				</View>
			</View>

			<ScrollView>
				<View style={{ backgroundColor: "white", padding: 20 }} >
					<View
						pointerEvents="box-none"
						style={{
							height: 120,
							marginRight: 68,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/avatar.png")}
							style={styles.avatarImage} />
						<View
							style={{
								flex: 1,
							}} />
						<View
							pointerEvents="box-none"
							style={{
								width: 125,
								height: 46,
								marginTop: 41,
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.solimanAhmedText}>Soliman Ahmed</Text>
							<Text
								style={styles.solimanGmailComText}>soliman@gmail.com</Text>
						</View>
					</View>
					<View
						style={styles.editProfileView}>
						<View
							style={styles.iconEditProfileView}>
							<Ic_iconeditprofile />
						</View>
						<Text
							style={styles.editProfileText}>Edit Profile</Text>
						<View
							style={{
								flex: 1,
							}} />
						<Feather name="chevron-right" size={20} style={{ marginRight: 10 }} />
					</View>
					<View
						style={styles.editProfileView}>
						<View
							style={styles.iconEditProfileView}>
							<Ic_iconlocation />

						</View>
						<Text
							style={styles.editProfileText}>Shipping Address</Text>
						<View
							style={{
								flex: 1,
							}} />
						<Feather name="chevron-right" size={20} style={{ marginRight: 10 }} />
					</View>
					<View
						style={styles.editProfileView}>
						<View
							style={styles.iconEditProfileView}>
							<Ic_iconwishlistprofile />
						</View>
						<Text
							style={styles.editProfileText}>Wishlist</Text>
						<View
							style={styles.iconNewView}>
							<Text
								style={styles.newText}>New</Text>
						</View>
						<View
							style={{
								flex: 1,
							}} />
						<Feather name="chevron-right" size={20} style={{ marginRight: 10 }} />
					</View>
					<View
						style={styles.editProfileView}>
						<View
							style={styles.iconEditProfileView}>
							<Ic_iconhistory />
						</View>
						<Text
							style={styles.editProfileText}>Order History</Text>
						<View
							style={{
								flex: 1,
							}} />
						<Feather name="chevron-right" size={20} style={{ marginRight: 10 }} />
					</View>
					<View
						style={styles.editProfileView}>
						<View
							style={styles.iconEditProfileView}>
							<Ic_iconorder />
						</View>
						<Text
							style={styles.editProfileText}>Track Order</Text>
						<View
							style={{
								flex: 1,
							}} />
						<Feather name="chevron-right" size={20} style={{ marginRight: 10 }} />
					</View>
					<View
						style={styles.editProfileView}>
						<View
							style={styles.iconEditProfileView}>
							<Ic_iconpayment />
						</View>
						<Text
							style={styles.editProfileText}>Cards</Text>
						<View
							style={{
								flex: 1,
							}} />
						<Feather name="chevron-right" size={20} style={{ marginRight: 10 }} />
					</View>
					<View
						style={styles.editProfileView}>
						<View
							style={styles.iconEditProfileView}>
							<Ic_iconexit />
						</View>
						<Text
							style={styles.editProfileText}>Log Out</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	contentView: {
		backgroundColor: "transparent",
		height: 607,
		marginLeft: 16,
		marginRight: 16,
	},
	wishlistView: {
		backgroundColor: "transparent",
		height: 50,
		flexDirection: "row",
		alignItems: "center",
	},
	iconWishlistView: {
		backgroundColor: "rgba(0, 197, 105, 0.07)",
		borderRadius: 4,
		width: 40,
		height: 40,
		justifyContent: "center",
	},
	group189Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 18,
		marginLeft: 10,
		marginRight: 9,
	},
	wishlistText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 15,
		marginTop: 14,
	},
	iconNewView: {
		width: 49,
		height: 24,
		marginLeft: 21,
		borderRadius: 5,
		backgroundColor: "#eaac50",
		alignContent: "center",
		justifyContent: "center",
	},
	path729Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 24,
	},
	newText: {
		color: "white",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 13,
		marginRight: 12,
	},
	iconArrowRightFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 6,
		height: 11,
		marginRight: 23,
	},
	avatarImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 120,
		height: 120,
	},
	solimanAhmedText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	solimanGmailComText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 24,
		marginTop: 4,
	},
	editProfileView: {
		backgroundColor: "transparent",
		height: 50,
		marginTop: 20,
		flexDirection: "row",
		alignItems: "center",
	},
	iconEditProfileView: {
		backgroundColor: "transparent",
		width: 40,
		height: 40,
	},
	path696Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 40,
	},
	group188View: {
		backgroundColor: "transparent",
		height: 21,
		marginLeft: 12,
		marginRight: 12,
	},
	group186Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 18,
		marginLeft: 1,
	},
	group187Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 1,
		bottom: 0,
		height: 3,
	},
	editProfileText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 15,
		marginTop: 14,
	},
	iconArrowRightSixImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 6,
		height: 11,
		marginRight: 23,
	},
	shippingAddressView: {
		backgroundColor: "transparent",
		height: 50,
		marginTop: 20,
		flexDirection: "row",
		alignItems: "center",
	},
	iconLocationView: {
		backgroundColor: "rgba(40, 126, 226, 0.07)",
		borderRadius: 4,
		width: 40,
		height: 40,
		justifyContent: "center",
	},
	group185Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 21,
		marginLeft: 13,
		marginRight: 12,
	},
	shippingAddressText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-start",
		marginLeft: 15,
		marginTop: 14,
	},
	iconArrowRightFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 6,
		height: 11,
		marginRight: 23,
	},
	orderHistoryView: {
		backgroundColor: "transparent",
		height: 50,
		marginTop: 20,
		flexDirection: "row",
		alignItems: "center",
	},
	iconHistoryView: {
		backgroundColor: "rgba(40, 126, 226, 0.07)",
		borderRadius: 4,
		width: 40,
		height: 40,
		justifyContent: "center",
	},
	group194View: {
		backgroundColor: "transparent",
		height: 21,
		marginLeft: 9,
		marginRight: 10,
	},
	group190Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 5,
		marginLeft: 10,
		marginRight: 4,
	},
	group193View: {
		backgroundColor: "transparent",
		height: 21,
	},
	group191Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 21,
	},
	group192Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 7,
		marginLeft: 6,
		marginRight: 8,
	},
	orderHistoryText: {
		color: "rgb(49, 49, 49)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 15,
		marginTop: 14,
	},
	iconArrowRightThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 6,
		height: 11,
		marginRight: 23,
	},
	trackOrderView: {
		backgroundColor: "transparent",
		height: 50,
		marginTop: 20,
		flexDirection: "row",
		alignItems: "center",
	},
	iconOrderView: {
		backgroundColor: "rgba(0, 197, 105, 0.07)",
		borderRadius: 4,
		width: 40,
		height: 40,
		justifyContent: "center",
	},
	group196View: {
		backgroundColor: "transparent",
		height: 21,
		marginLeft: 9,
		marginRight: 10,
	},
	group195Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 21,
	},
	path19Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 2,
		marginLeft: 7,
		marginRight: 6,
	},
	trackOrderText: {
		color: "rgb(19, 19, 19)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 15,
		marginTop: 14,
	},
	iconArrowRightTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 6,
		height: 11,
		marginRight: 23,
	},
	paymentOptionsView: {
		backgroundColor: "transparent",
		height: 50,
		marginBottom: 17,
		flexDirection: "row",
		alignItems: "center",
	},
	iconPaymentView: {
		backgroundColor: "transparent",
		width: 40,
		height: 40,
	},
	path697Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 40,
	},
	group197Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 19,
		marginLeft: 10,
		marginRight: 9,
	},
	cardsText: {
		color: "rgb(1, 1, 1)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 15,
		marginTop: 14,
	},
	iconArrowRightImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 6,
		height: 11,
		marginRight: 23,
	},
	logOutView: {
		backgroundColor: "transparent",
		height: 50,
		flexDirection: "row",
		alignItems: "center",
	},
	iconExitView: {
		backgroundColor: "transparent",
		width: 40,
		height: 40,
	},
	path698Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 40,
	},
	group200View: {
		backgroundColor: "transparent",
		height: 21,
		marginLeft: 9,
		marginRight: 10,
	},
	group199Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 21,
	},
	path26Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 11,
		right: 6,
		top: 13,
		height: 4,
	},
	logOutText: {
		color: "black",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 15,
		marginTop: 14,
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
	myAccountText: {
		color: "rgb(251, 251, 251)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 20,
		marginTop: 3,
	},
	group1698View: {
		backgroundColor: "rgb(239, 239, 239)",
		height: 105,
	},
	group480Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
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
		resizeMode: "center",
		backgroundColor: "transparent",
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
})
