//
//  Home
//  Brandshop
//
//  Created by Abdalrahman S. Valabji.
//  Copyright © 2018 infty. All rights reserved.
//

import { Feather } from "@expo/vector-icons";
import React from "react"
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { Ic_group_1703, Ic_nounheart, Ic_nounshare, Ic_nounshoppingcart, Ic_nounshoppingcartO, Ic_noun_menu_1812743, ShopingCartAdd } from "../../components/SVG"
import Colors from "../../constants/Colors";
import styles from '../../constants/Style';
import CustomHeader from '../../components/CHeader';
import { TouchableOpacity } from "react-native-gesture-handler";
export default class Home extends React.Component {

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

	// sum two numbers function

	render() {

		return <View
			style={styles.viewView}>
			<CustomHeader title="Home" isHome={true} navigation={this.props.navigation} />
			<ScrollView>
				<View
					style={{
						width: "100%"
					}}>
					<View
						pointerEvents="box-none"
						style={{
							height: 160,
							backgroundColor: "orange",
							alignItems: "center",
							flexDirection: "row"
						}}>
						<Feather name="cloud" size={48} style={{ marginLeft: 24, marginRight: 24 }} />
						<Text
							style={styles.wowDealsText2}>Perfumes</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 160,
							backgroundColor: "grey",
							alignItems: "center",
							flexDirection: "row"
						}}>
						<Feather name="airplay" size={48} style={{ marginLeft: 24, marginRight: 24 }} />
						<Text
							style={styles.wowDealsText2}>Oud Sticks</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 160,
							backgroundColor: "orange",
							alignItems: "center",
							flexDirection: "row"
						}}>
						<Feather name="cloud" size={48} style={{ marginLeft: 24, marginRight: 24 }} />
						<Text
							style={styles.wowDealsText2}>Perfumes</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 160,
							backgroundColor: "grey",
							alignItems: "center",
							flexDirection: "row"
						}}>
						<Feather name="airplay" size={48} style={{ marginLeft: 24, marginRight: 24 }} />
						<Text
							style={styles.wowDealsText2}>Oud Sticks</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 160,
							backgroundColor: "orange",
							alignItems: "center",
							flexDirection: "row"
						}}>
						<Feather name="cloud" size={48} style={{ marginLeft: 24, marginRight: 24 }} />
						<Text
							style={styles.wowDealsText2}>Perfumes</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 160,
							backgroundColor: "grey",
							alignItems: "center",
							flexDirection: "row"
						}}>
						<Feather name="airplay" size={48} style={{ marginLeft: 24, marginRight: 24 }} />
						<Text
							style={styles.wowDealsText2}>Oud Sticks</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 160,
							backgroundColor: "orange",
							alignItems: "center",
							flexDirection: "row"
						}}>
						<Feather name="cloud" size={48} style={{ marginLeft: 24, marginRight: 24 }} />
						<Text
							style={styles.wowDealsText2}>Perfumes</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 160,
							backgroundColor: "grey",
							alignItems: "center",
							flexDirection: "row"
						}}>
						<Feather name="airplay" size={48} style={{ marginLeft: 24, marginRight: 24 }} />
						<Text
							style={styles.wowDealsText2}>Oud Sticks</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	}
}
