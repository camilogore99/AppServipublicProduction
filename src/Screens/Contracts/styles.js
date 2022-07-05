import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F7F8F9'
	},
	header: {
		backgroundColor: '#6979F8',
		borderBottomLeftRadius: 24,
		borderBottomRightRadius: 24,
		height: '10%',
		paddingTop: getStatusBarHeight(),
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontSize: 17,
		color: '#fff'
	},
	txtBalance: {
		fontSize: 14,
		color: '#969696',

		fontWeight: '600',
		textTransform: 'uppercase',
		marginTop: 2
	},
	txtName: {
		fontSize: 18,
		color: '#131313',

		fontWeight: '600',
		textTransform: 'uppercase',
		marginTop: 9
	},
	name: {
		fontWeight: '600',
		fontSize: 16,
		color: '#1A051D'
	},
	item: {
		marginHorizontal: 16,
		marginTop: 16,
		backgroundColor: '#FFF',
		paddingLeft: 17,
		paddingTop: 20,
		paddingBottom: 13,
		borderRadius: 16
	},
	des: {
		fontWeight: '500',
		color: '#1A051D'
	},
	time: {
		fontSize: 14,
		color: '#2D88B3',

		marginTop: 4
	},
	total: {
		fontSize: 14,
		color: 'black',
		marginTop: 4
	},
	btnUpdate: {
		width: 160,
		height: 40,
		borderRadius: 20,
		backgroundColor: '#0084F4',
		marginTop: 10,
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center'
	},
	txtUpdate: {
		fontSize: 13,
		color: '#FFF'
	},
	btnClose: {
		position: 'absolute',
		bottom: 20,
		left: 16
	},
	btnOption: {
		position: 'absolute',
		bottom: 20,
		right: 16
	},
	containerTime: {
		flexDirection: 'row',
		height: 48,
		margin: 16,
		borderRadius: 24,
		backgroundColor: '#FFF'
	},
	btnTime: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	txtTime: {
		fontSize: 12,
		color: '#1A051D'
	},
	svgHover: {
		position: 'absolute',
		bottom: 0
	},
	boxStatus: {
		margin: 16,
		backgroundColor: '#FFA26B',
		borderRadius: 16,
		paddingTop: 20,
		paddingLeft: 24,
		paddingBottom: 23
	},
	txtGood: {
		fontSize: 20,
		color: '#FFF',

		fontWeight: '500'
	},
	txtFlow: {
		color: 'white',
		fontSize: 15
	},

	txtKeep: {
		fontSize: 16,
		color: '#FFF'
	},
	boxHeader: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	containerChart: {
		borderRadius: 16,
		backgroundColor: '#FFF',
		paddingHorizontal: 16,
		paddingTop: 16,
		marginHorizontal: 16,
		marginBottom: 16
	},
	txtTitle: {
		marginLeft: 8,

		fontSize: 14,
		color: '#1A051D',
		flex: 1
	},
	line: {
		height: 1,
		backgroundColor: '#F7F8F9',
		borderRadius: 16
	},
	boxBottom: {
		flexDirection: 'row'
	},
	btnBottom: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 12
	},
	txtBtnBottom: {
		fontSize: 14,
		color: '#ABA4AC'
	},
	txtBtnBottomActive: {
		fontSize: 14,
		color: '#0084F4'
	},
	lineVertical: {
		width: 1,
		backgroundColor: '#F7F8F9',
		borderRadius: 16
	},
	btnFlow: {
		width: 150,
		height: 35,
		borderRadius: 20,
		backgroundColor: '#0084F4',
		justifyContent: 'center',
		alignItems: 'center'
	}
})
