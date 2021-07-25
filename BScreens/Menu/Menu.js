//
//  Menu
//  Brandshop
//
//  Created by Abdalrahman S. Valabji.
//  Copyright © 2018 infty. All rights reserved.
//

import React from "react"
import { Image, Text, View } from "react-native"
import { ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../../constants/Style';

export default class Menu extends React.Component {

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
			pointerEvents="box-none"
			style={{
				// position: "absolute",
				// backgroundColor:"pink",
				marginLeft: -44,
				marginRight: 0,
				marginTop: -166,
				marginBottom: -521,
			}}>
			<View
				pointerEvents="box-none"
				style={{
					// position: "absolute",
					marginLeft: 44,
					width: 315,
					marginTop: 165,
					// marginBottom: 497,
					alignItems: "flex-start",
				}}>
				<View
					style={{ backgroundColor: "black", width: "100%" }} >
					<View
						pointerEvents="box-none"
						style={{
							// position: "absolute",
							marginLeft: 25,
							// marginRight: 115,
							marginTop: 35,
							// height: 188,
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.brandShopText}>BRAND {"\n"}SHOP</Text>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 90,
								marginTop: 40,
								marginBottom: 20,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/avatar-2.png")}
								style={styles.avatarImage} />
							<View style={{
								marginLeft: 15,
								paddingTop: 15, paddingBottom: 15,
								// marginRight: 20,
							}}>
								<Text
									style={styles.solimanAhmedText}>Soliman Ahmed</Text>
								<Text
									style={styles.solimanGmailComText}>Soliman@gmail.com</Text>
							</View>
						</View>
					</View>
				</View>
				<View style={{ flexDirection: "row", paddingTop: 15, paddingBottom: 15, }}>
					<Feather
						name="chevron-right"
						size={24}
						style={{
							marginLeft: 10,
						}} />
					<Text
						style={styles.womenClothingMenText}>Women Clothing</Text>
				</View>
				<View style={{ flexDirection: "row", paddingTop: 15, paddingBottom: 15, }}>
					<Feather
						name="chevron-right"
						size={24}
						style={{
							marginLeft: 10,
						}} />
					<Text
						style={styles.womenClothingMenText}>Women Clothing</Text>
				</View>
				<View style={{ flexDirection: "row", paddingTop: 15, paddingBottom: 15, }}>
					<Feather
						name="chevron-right"
						size={24}
						style={{
							marginLeft: 10,
						}} />
					<Text
						style={styles.womenClothingMenText}>Women Clothing</Text>
				</View>
				<View style={{ flexDirection: "row", paddingTop: 15, paddingBottom: 15, }}>
					<Feather
						name="chevron-right"
						size={24}
						style={{
							marginLeft: 10,
						}} />
					<Text
						style={styles.womenClothingMenText}>Women Clothing</Text>
				</View>
				<View style={{ flexDirection: "row", paddingTop: 15, paddingBottom: 15, }}>
					<Feather
						name="chevron-right"
						size={24}
						style={{
							marginLeft: 10,
						}} />
					<Text
						style={styles.womenClothingMenText}>Women Clothing</Text>
				</View>
				<View style={{ flexDirection: "row", paddingTop: 15, paddingBottom: 15, }}>
					<Feather
						name="chevron-right"
						size={24}
						style={{
							marginLeft: 10,
						}} />
					<Text
						style={styles.womenClothingMenText}>Women Clothing</Text>
				</View>
				<View style={{ flexDirection: "row", paddingTop: 15, paddingBottom: 15, }}>
					<Feather
						name="chevron-right"
						size={24}
						style={{
							marginLeft: 10,
						}} />
					<Text
						style={styles.womenClothingMenText}>Women Clothing</Text>
				</View>

			</View>
			<Image
				source={require("./../../assets/images/group-1701-3.png")}
				style={styles.group1701Image} />
		</View>
	}
}
