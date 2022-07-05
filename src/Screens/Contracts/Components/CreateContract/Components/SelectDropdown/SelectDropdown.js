import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'

export const SelectDropdownCompo = ({
	setDepartamentName,
	name,
	handleChange,
	label,
	arrayData,
	defaultButtonText
}) => {
	return (
		<View style={{ marginTop: 7 }}>
			<View style={{ marginHorizontal: 23, marginTop: 7 }}>
				<Text style={styles.txtTime}>{label}</Text>
			</View>
			<SelectDropdown
				data={arrayData}
				onSelect={(selectedItem, i) => {
					if (setDepartamentName) {
						setDepartamentName(selectedItem)
					}
					handleChange(name, selectedItem)
				}}
				defaultButtonText={defaultButtonText}
				buttonStyle={styles.contentInput}
				buttonTextStyle={styles.input}
				buttonTextAfterSelection={(selectedItem, index) => selectedItem}
				rowTextForSelection={(item, index) => item}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	contentInput: {
		marginTop: 7,
		marginHorizontal: 20,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#1A051D',
		height: 48,
		width: '90%',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 16
	},
	input: {
		textAlign: 'left',
		fontSize: 15,
		padding: 0,
		margin: 0
	},
	txtTime: {
		fontSize: 15,
		color: '#1A051D'
	}
})
