//
//  Splash
//  Brandshop
//
//  Created by Abdalrahman S. Valabji.
//  Copyright © 2018 infty. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, TouchableOpacity, Text, View, Alert } from "react-native"
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Restart } from 'fiction-expo-restart';
import { t } from "../language";
import CustomHeader from '../components/CHeader'

export default class Splash extends React.Component {

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
			<CustomHeader title="Home"
				filter={() => {
					
				}}
				left="back" navigation={this.props.navigation} />
			<View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
			<View
				style={styles.group1702View}>
				<Animatable.View
					animation="zoomInUp">
					<Animatable.View
						animation="pulse"
						iterationCount={2}
						delay={300}
						duration={300}
						style={{
							backgroundColor: "#fff",
							width: 150,
							height: 150,
							borderRadius: 75,
							borderWidth: 0.5,
							alignItems: "center",
							justifyContent: "center"
						}}>
						<Image
							source={require("./../assets/images/bikerz.png")}
							style={styles.group1701Image} />
					</Animatable.View>
				</Animatable.View>
				<Animatable.View
					animation="zoomInRight"
					delay={300}>
					<TouchableOpacity
						onPress={() => {
							AsyncStorage.setItem('@lang', "ar")
							Restart()
							// this.props.navigation.navigate('BotNav')
						}}
						style={{ flexDirection: "row-reverse", marginTop: 96, }} >
						<View style={{ backgroundColor: "#888", borderTopRightRadius: 12, borderBottomRightRadius: 12, width: 64, justifyContent: "center", alignItems: "center", height: 64 }}>
							<Text style={{ fontSize: 48, includeFontPadding: false, color: "white", fontFamily: "Tajawal_400Regular" }}>ع</Text>
						</View>
						<View style={{ backgroundColor: "#444", borderTopLeftRadius: 12, borderBottomLeftRadius: 12, width: 200, justifyContent: "center", height: 64 }}>
							<Text style={{ fontSize: 48, includeFontPadding: false, lineHeight: 48, textAlign: "center", paddingRight: 10, color: "white", fontFamily: "Tajawal_400Regular" }}>عربي</Text>
						</View>
					</TouchableOpacity>
				</Animatable.View>

				<Animatable.View
					animation="zoomInLeft"
					delay={600}>
					<TouchableOpacity
						onPress={() => {
							AsyncStorage.setItem('@lang', "en")
							Restart()
							// this.props.navigation.navigate('BotNav')
						}}
						style={{ flexDirection: "row-reverse", marginTop: 32, }} >
						<View style={{ backgroundColor: "#444", borderTopRightRadius: 12, borderBottomRightRadius: 12, width: 200, justifyContent: "center", height: 64 }}>
							<Text style={{ fontSize: 48, includeFontPadding: false, textAlign: "center", paddingRight: 10, color: "white", fontFamily: "Poppins_400Regular" }}>English</Text>
						</View>
						<View style={{ backgroundColor: "#888", borderTopLeftRadius: 12, borderBottomLeftRadius: 12, width: 64, justifyContent: "center", alignItems: "center", height: 64 }}>
							<Text style={{ fontSize: 48, includeFontPadding: false, color: "white", fontFamily: "Poppins_400Regular" }}>E</Text>
						</View>
					</TouchableOpacity>
				</Animatable.View>
			</View>
			</View>
			</View >
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "#fff",
		flex: 1,
	},
	group1702View: {
		backgroundColor: "transparent",
		alignItems: "center",
	},
	group1701Image: {
		// backgroundColor: "blue",
		resizeMode: "cover",
		borderRadius: 60,
		// marginTop: -15,
		// marginLeft: -15,
		width: 120,
		height: 120,
	},
	brandShopText: {
		backgroundColor: "transparent",
		color: "rgb(45, 45, 45)",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		alignSelf: "stretch",
		marginBottom: 7,
	},
	shoppingMadnessText: {
		color: "rgb(45, 45, 45)",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
	},
})
