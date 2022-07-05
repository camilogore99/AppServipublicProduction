import {
	Stack,
	ROUTERS,
	Navigator,
	navigationRef,
	PROTECTEDROUTES,
	NavigationContainer
} from '../utils/navigation'
import Purse from '../Screens/Purse'
import Fuec from '../Screens/Fuec'
import SigIn from '../Screens/SigIn'
import Routes from '../Screens/Routes'
import Contracts from '../Screens/Contracts'
import { Profile } from '../Screens/Profile'
import LeftMenu from '../Screens/LeftMenu'
import Incidents from '../Screens/Incidents'
import React, { useEffect, useRef } from 'react'
import { MyLicense } from '../Screens/MyLicense'
import { ForgotPass } from '../Screens/ForgotPass'
import { Notification } from '../Screens/Notification'
import { Walkthroughs } from '../Screens/Walkthroughs'
import ScalingDrawer from 'react-native-scaling-drawer'
import StaticsHealth from '../Screens/StaticsHealth'
import { CreateRoutes } from '../Screens/Routes/CreateRoutes'
import { MoreInfomationPurse } from '../Screens/Purse/Components/MoreInfomationPurse'
import CreateContracts from '../Screens/Contracts/Components/CreateContract'
import { fetchToken } from '../redux/actions/actionGlobal'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'

const optionNavigator = {
	headerShown: false,
	gesturesEnabled: false
}

const defaultScalingDrawerConfig = {
	scalingFactor: 0.8,
	minimizeFactor: 0.8,
	swipeOffset: 30,
	frontStyle: {
		shadowOffset: {
			width: 0,
			height: 0
		},
		shadowColor: '#FFF',
		shadowOpacity: 0,
		shadowRadius: 0
	}
}

const MainNavigation = ({ tokenAuth, actions }) => {
	const drawer = useRef()

	const onClose = () => {
		drawer.current?.close()
	}

	const onOpen = () => {
		drawer.current?.open()
	}

	useEffect(() => {
		actions.fetchTokenAction()
	}, [])

	if (tokenAuth.token === null) {
		return (
			<View
				style={{
					width: '100%',
					height: '100%',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Text style={{ fontSize: 20 }}> cargandoo .....</Text>
			</View>
		)
	}

	return (
		<ScalingDrawer
			ref={drawer}
			content={<LeftMenu onClose={onClose} onOpen={onOpen} />}
			{...defaultScalingDrawerConfig}
		>
			<NavigationContainer
				onReady={() => RNBootSplash.hide({ fade: true })}
				ref={navigationRef}
			>
				<Navigator
					screenOptions={{
						headerShown: false,
						gestureEnabled: false
					}}
				>
					{tokenAuth?.token === undefined ? (
						<>
							<Stack.Screen
								name={ROUTERS.Onboarding}
								component={Walkthroughs}
								options={optionNavigator}
							/>
							<Stack.Screen
								name={ROUTERS.SigIn}
								component={SigIn}
								options={optionNavigator}
							/>
						</>
					) : (
						<>
							<Stack.Screen
								name={PROTECTEDROUTES.Dashboard}
								component={StaticsHealth}
								options={optionNavigator}
							/>
							<Stack.Screen
								options={optionNavigator}
								name={PROTECTEDROUTES.Fuec}
							>
								{() => <Fuec onOpen={onOpen} />}
							</Stack.Screen>

							<Stack.Screen
								options={optionNavigator}
								name={PROTECTEDROUTES.Contracts}
							>
								{() => <Contracts onOpen={onOpen} />}
							</Stack.Screen>
							<Stack.Screen
								options={optionNavigator}
								name={PROTECTEDROUTES.Purse}
							>
								{() => <Purse onOpen={onOpen} />}
							</Stack.Screen>
							<Stack.Screen
								options={optionNavigator}
								name={PROTECTEDROUTES.MoreInfomationPurse}
							>
								{() => <MoreInfomationPurse onOpen={onOpen} />}
							</Stack.Screen>
							<Stack.Screen
								options={optionNavigator}
								name={PROTECTEDROUTES.Incidents}
							>
								{() => <Incidents onOpen={onOpen} />}
							</Stack.Screen>
							<Stack.Screen
								options={optionNavigator}
								name={PROTECTEDROUTES.Routes}
							>
								{() => <Routes onOpen={onOpen} />}
							</Stack.Screen>
							<Stack.Screen
								options={optionNavigator}
								name={PROTECTEDROUTES.CreateRoutes}
							>
								{() => <CreateRoutes onOpen={onOpen} />}
							</Stack.Screen>
							<Stack.Screen
								name={ROUTERS.ForgotPassword}
								component={ForgotPass}
								options={optionNavigator}
							/>
							<Stack.Screen
								name={PROTECTEDROUTES.Profile}
								component={Profile}
								options={optionNavigator}
							/>
							<Stack.Screen
								name={PROTECTEDROUTES.Notification}
								component={Notification}
								options={optionNavigator}
							/>
							<Stack.Screen
								name={PROTECTEDROUTES.MyLicense}
								component={MyLicense}
								options={optionNavigator}
							/>
							<Stack.Screen
								options={optionNavigator}
								name={PROTECTEDROUTES.CreateContracts}
							>
								{() => <CreateContracts onOpen={onOpen} />}
							</Stack.Screen>
						</>
					)}
				</Navigator>
			</NavigationContainer>
		</ScalingDrawer>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: { fetchTokenAction: fetchToken(dispatch) }
	}
}
function mapStateToProps(state) {
	return {
		tokenAuth: state.globalReducer.tokenAuth
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigation)
