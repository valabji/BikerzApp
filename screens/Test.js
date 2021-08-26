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
			<Text>Testing 123</Text>
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
