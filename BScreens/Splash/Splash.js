//
//  Splash
//  Brandshop
//
//  Created by Abdalrahman S. Valabji.
//  Copyright © 2018 infty. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


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
				<View
					style={styles.group1702View}>
					<Image
						source={require("./../../assets/images/group-1701.png")}
						style={styles.group1701Image}/>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.brandShopText}>BRAND SHOP</Text>
					<Text
						style={styles.shoppingMadnessText}>Shopping Madness</Text>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
		justifyContent: "center",
		alignItems: "flex-end",
	},
	group1702View: {
		backgroundColor: "transparent",
		width: 155,
		height: 162,
		marginRight: 106,
		alignItems: "center",
	},
	group1701Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "flex-start",
		width: 103,
		height: 91,
		marginLeft: 22,
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
