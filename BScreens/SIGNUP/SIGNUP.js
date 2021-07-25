//
//  SIGNUP
//  Brandshop
//
//  Created by Abdalrahman S. Valabji.
//  Copyright © 2018 infty. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class SIGNUP extends React.Component {

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
						position: "absolute",
						left: 38,
						right: 36,
						top: 117,
						bottom: 79,
						alignItems: "flex-start",
					}}>
					<Text
						style={styles.createText}>Create</Text>
					<Text
						style={styles.aNewAccountText}>a new account</Text>
					<View
						pointerEvents="box-none"
						style={{
							width: 300,
							height: 51,
							marginLeft: 1,
							marginTop: 108,
						}}>
						<View
							style={styles.rectangle93View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 12,
								width: 87,
								top: 18,
								height: 20,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/group-2.png")}
								style={styles.group2Image}/>
							<Text
								style={styles.firstNameText}>First Name</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							width: 300,
							height: 51,
							marginLeft: 1,
							marginTop: 17,
						}}>
						<View
							style={styles.rectangle144View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 12,
								width: 87,
								top: 18,
								height: 20,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/group-2.png")}
								style={styles.group1690Image}/>
							<Text
								style={styles.lastNameText}>Last Name</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							width: 300,
							height: 51,
							marginTop: 17,
						}}>
						<View
							style={styles.rectangle145View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 13,
								width: 107,
								top: 18,
								height: 20,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/noun-mail-3126126.png")}
								style={styles.nounMail3126126Image}/>
							<Text
								style={styles.emailAddressText}>Email Address</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							width: 300,
							height: 51,
							marginTop: 17,
						}}>
						<View
							style={styles.rectangle146View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 15,
								width: 112,
								top: 18,
								height: 20,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/group-1693.png")}
								style={styles.group1693Image}/>
							<Text
								style={styles.mobileNumberText}>Mobile Number</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							width: 300,
							height: 51,
							marginTop: 17,
						}}>
						<View
							style={styles.rectangle147View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 14,
								width: 82,
								top: 16,
								height: 20,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/union-7.png")}
								style={styles.union9Image}/>
							<Text
								style={styles.passwordText}>Password</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							width: 300,
							height: 51,
							marginTop: 16,
						}}>
						<View
							style={styles.rectangle92View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 14,
								width: 137,
								top: 16,
								height: 20,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/union-7.png")}
								style={styles.union7Image}/>
							<Text
								style={styles.reTypePasswordText}>Re- type Password</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "center",
							width: 300,
							height: 51,
							marginTop: 28,
						}}>
						<View
							style={styles.rectangle14View}/>
						<Text
							style={styles.signUpText}>SIGN UP</Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 20,
							marginLeft: 72,
							marginRight: 72,
							marginBottom: 35,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<Text
							style={styles.haveAnAccountText}>Have an Account ?</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.loginText}>LOGIN</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 1,
							marginLeft: 12,
							marginRight: 14,
							marginBottom: 29,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<View
							style={styles.line22View}/>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.line21View}/>
					</View>
					<Text
						style={styles.signInWithSocialText}>Sign in with Social Networks</Text>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 34,
							marginLeft: 103,
							marginRight: 105,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<Image
							source={require("./../../assets/images/facebook-1.png")}
							style={styles.facebook1Image}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/google-512-2.png")}
							style={styles.google512Image}/>
					</View>
				</View>
				<Text
					style={styles.orText}>OR</Text>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	createText: {
		backgroundColor: "transparent",
		color: "rgb(234, 169, 73)",
		fontSize: 48,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 5,
	},
	aNewAccountText: {
		color: "rgb(17, 17, 17)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 5,
		marginTop: 11,
	},
	rectangle93View: {
		backgroundColor: "rgb(242, 242, 242)",
		borderRadius: 25,
		position: "absolute",
		alignSelf: "center",
		width: 300,
		top: 0,
		height: 51,
	},
	group2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 13,
		height: 12,
		marginTop: 2,
	},
	firstNameText: {
		backgroundColor: "transparent",
		color: "rgb(49, 49, 49)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		marginLeft: 9,
	},
	rectangle144View: {
		backgroundColor: "rgb(242, 242, 242)",
		borderRadius: 25,
		position: "absolute",
		alignSelf: "center",
		width: 300,
		top: 0,
		height: 51,
	},
	group1690Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 13,
		height: 12,
		marginTop: 2,
	},
	lastNameText: {
		color: "rgb(49, 49, 49)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		marginLeft: 9,
	},
	rectangle145View: {
		backgroundColor: "rgb(242, 242, 242)",
		borderRadius: 25,
		position: "absolute",
		alignSelf: "center",
		width: 300,
		top: 0,
		height: 51,
	},
	nounMail3126126Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 15,
		height: 11,
		marginTop: 3,
	},
	emailAddressText: {
		color: "rgb(49, 49, 49)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		marginLeft: 6,
	},
	rectangle146View: {
		backgroundColor: "rgb(242, 242, 242)",
		borderRadius: 25,
		position: "absolute",
		alignSelf: "center",
		width: 300,
		top: 0,
		height: 51,
	},
	group1693Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 10,
		height: 17,
	},
	mobileNumberText: {
		color: "rgb(49, 49, 49)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		marginLeft: 9,
	},
	rectangle147View: {
		backgroundColor: "rgb(242, 242, 242)",
		borderRadius: 25,
		position: "absolute",
		alignSelf: "center",
		width: 300,
		top: 0,
		height: 51,
	},
	union9Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 9,
		height: 12,
		marginTop: 2,
	},
	passwordText: {
		color: "rgb(49, 49, 49)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		marginLeft: 14,
	},
	rectangle92View: {
		backgroundColor: "rgb(242, 242, 242)",
		borderRadius: 25,
		position: "absolute",
		alignSelf: "center",
		width: 300,
		top: 0,
		height: 51,
	},
	union7Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 9,
		height: 12,
		marginTop: 2,
	},
	reTypePasswordText: {
		color: "rgb(49, 49, 49)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		marginLeft: 14,
	},
	rectangle14View: {
		backgroundColor: "black",
		borderRadius: 25,
		position: "absolute",
		alignSelf: "center",
		width: 300,
		top: 0,
		height: 51,
	},
	signUpText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		alignSelf: "center",
		top: 15,
	},
	haveAnAccountText: {
		backgroundColor: "transparent",
		color: "rgb(70, 70, 70)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.24,
	},
	loginText: {
		backgroundColor: "transparent",
		color: "rgb(70, 70, 70)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.24,
	},
	line22View: {
		backgroundColor: "rgb(123, 123, 123)",
		width: 117,
		height: 1,
	},
	line21View: {
		backgroundColor: "rgb(123, 123, 123)",
		width: 117,
		height: 1,
	},
	signInWithSocialText: {
		color: "rgb(70, 70, 70)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.26,
		backgroundColor: "transparent",
		alignSelf: "center",
		marginBottom: 25,
	},
	facebook1Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 34,
		height: 34,
	},
	google512Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 33,
		height: 33,
		marginBottom: 1,
	},
	orText: {
		backgroundColor: "transparent",
		color: "rgb(70, 70, 70)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.27,
		position: "absolute",
		alignSelf: "center",
		bottom: 175,
	},
})
