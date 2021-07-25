//
//  LOGIN
//  Brandshop
//
//  Created by Abdalrahman S. Valabji.
//  Copyright © 2018 infty. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class LOGIN extends React.Component {

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
						left: 39,
						right: 36,
						top: 117,
						bottom: 77,
						alignItems: "flex-start",
					}}>
					<Text
						style={styles.loginText}>Login </Text>
					<Text
						style={styles.toYourAccountText}>to your account</Text>
					<View
						pointerEvents="box-none"
						style={{
							width: 300,
							height: 51,
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
								style={styles.usernameText}>Username</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							width: 300,
							height: 51,
							marginTop: 15,
						}}>
						<View
							style={styles.rectangle92View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 14,
								width: 83,
								top: 16,
								height: 20,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/union-7.png")}
								style={styles.union7Image}/>
							<Text
								style={styles.passwordText}>Password</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "center",
							width: 300,
							height: 51,
							marginTop: 21,
						}}>
						<View
							style={styles.rectangle14View}/>
						<Text
							style={styles.loginTwoText}>LOGIN</Text>
					</View>
					<Text
						style={styles.forgotPasswordText}>Forgot Password ?</Text>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 20,
							marginLeft: 46,
							marginRight: 50,
							marginTop: 34,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.donTHaveAnAccounText}>Don't Have an Account ?</Text>
						<View
							style={{
								flex: 1,
							}}/>
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
							height: 1,
							marginLeft: 11,
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
						style={styles.signUpWithSocialText}>Sign up with Social Networks</Text>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 34,
							marginLeft: 102,
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
							source={require("./../../assets/images/google-512.png")}
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
	loginText: {
		color: "rgb(234, 169, 73)",
		fontSize: 48,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 4,
	},
	toYourAccountText: {
		color: "rgb(17, 17, 17)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 4,
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
	usernameText: {
		backgroundColor: "transparent",
		color: "rgb(49, 49, 49)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.18,
		marginLeft: 10,
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
		backgroundColor: "transparent",
		resizeMode: "center",
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
		textAlign: "center",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		marginLeft: 15,
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
	loginTwoText: {
		color: "white",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		top: 15,
	},
	forgotPasswordText: {
		color: "rgb(70, 70, 70)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
		marginTop: 18,
	},
	donTHaveAnAccounText: {
		color: "rgb(70, 70, 70)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.24,
		backgroundColor: "transparent",
	},
	signUpText: {
		color: "rgb(70, 70, 70)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.24,
		backgroundColor: "transparent",
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
	signUpWithSocialText: {
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
		color: "rgb(70, 70, 70)",
		fontFamily: "Poppins_200ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.27,
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		bottom: 173,
	},
})
