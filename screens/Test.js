//
//  Splash
//  Brandshop
//
//  Created by Abdalrahman S. Valabji.
//  Copyright © 2018 infty. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, TouchableOpacity, Text, View, Alert } from "react-native"
import DropDownPicker from 'react-native-dropdown-picker'

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
		this.state = {
			open: false,
			value: null,
			items: [
				{ label: 'English', value: 'en' },
				{ label: 'Deutsch', value: 'de' },
				{ label: 'French', value: 'fr' },
			]
		}
	}

	componentDidMount() {


	}

	render() {
		const { open, value, items } = this.state;

		return (
			<DropDownPicker
				open={open}
				value={value}
				items={items}
				setOpen={(open) => {
					this.setState({
						open
					});
				}}
				setValue={(callback) => {
					this.setState(state => ({
						value: callback(state.value)
					}));
				}}
				setItems={(callback) => {
					this.setState(state => ({
						items: callback(state.items)
					}));
				}}
			/>
		);

		return <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>
			<Text>Testing 123</Text>

			<DropDownPicker
				items={this.state.list}
				containerStyle={{ height: 40 }}
				onChangeItem={item => console.log(item.label, item.value)}
			/>
		</View >
	}
}
