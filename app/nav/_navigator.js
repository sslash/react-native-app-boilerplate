// @flow
import React from 'react'
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native'
import {
    createSwitchNavigator,
    createStackNavigator,
    createDrawerNavigator,
    createTabNavigator
} from 'react-navigation'

import images from '../images'
import colors from '../styles/colors'
import metrics from '../styles/metrics'

const Onboarding = () => <Text>Onboarding</Text>
const Login = () => <Text>Login</Text>
const SignUp = () => <Text>Signup</Text>
const Drawer = () => <Text>Drawer</Text>
const Tab1 = () => <Text>Tab 1 screen</Text>
const Tab2 = () => <Text>Tab 2 screen</Text>
const Tab3 = () => <Text>Tab 3 screen</Text>

const Hamburger = ({ navigation }) => (
    <TouchableOpacity onPress={navigation.toggleDrawer} style={styles.menu}>
        <Image source={images.burger} />
    </TouchableOpacity>
)

export const tab1Stack = createStackNavigator({
    Tab1,
    Item: { screen: () => <Text>Tab1 other</Text> }
})

export const tab2Stack = createStackNavigator({
    Tab2,
    Item: { screen: () => <Text>Discover other</Text> }
})

const tab3Stack = createStackNavigator({
    Tab3,
    Item: { screen: () => <Text>Tab 3 other</Text> }
})

const tabs = createTabNavigator(
    {
        Tab1: { screen: tab1Stack },
        Tab2: { screen: tab2Stack },
        Tab3: { screen: tab3Stack }
    },
    {
        initialRouteName: 'Tab1',
        navigationOptions: ({
            navigation: {
                state: { routeName }
            }
        }) => ({
            tabBarIcon: ({ focused }) => {
                let source
                if (routeName === 'Tab1') {
                    source = focused ? images.tab1Sel : images.tab1
                } else if (routeName === 'Tab2') {
                    source = focused ? images.tab2Sel : images.tab2
                } else if (routeName === 'Tab3') {
                    source = focused ? images.tab3Sel : images.tab3
                } else {
                    throw new Error('Illegal tab name')
                }
                return <Image source={source} />
            }
        }),
        tabBarOptions: {
            activeTintColor: colors.fmzNavyL2,
            inactiveTintColor: colors.fmzFrostNav
        }
    }
)

const main = createDrawerNavigator(
    {
        Tabs: { screen: tabs },
        SomeOtherThing: { screen: () => <Text>Some other</Text> }
    },
    {
        contentComponent: Drawer,
        drawerWidth: metrics.drawerWidth
    }
)

const login = createStackNavigator({
    Onboarding,
    Login,
    SignUp
})

export const createMainNav = (isLoggedIn: boolean) => {
    return createSwitchNavigator(
        {
            Home: main,
            Initial: login
        },
        {
            initialRouteName: isLoggedIn ? 'Home' : 'Initial'
        }
    )
}

Tab1.navigationOptions = ({ navigation }) => ({
    title: 'Tab 1',
    headerLeft: <Hamburger navigation={navigation} />
})

Tab2.navigationOptions = ({ navigation }) => ({
    title: 'Tab 2',
    headerLeft: <Hamburger navigation={navigation} />
})

Tab3.navigationOptions = ({ navigation }) => ({
    title: 'Tab 3',
    headerLeft: <Hamburger navigation={navigation} />
})

const styles = StyleSheet.create({
    menu: {
        height: 20
    }
})
