// @flow
import * as React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import images from '../images'
import fonts from '../styles/fonts'
import colors from '../styles/colors'
import LiftScreen from '../screens/lift/LiftScreen'
import SettingsScreen from '../screens/settings/SettingsScreen'

const renderHeaderLeft = ({ navigation }) => (
    <TouchableOpacity onPress={navigation.toggleDrawer}>
        <Image source={images.menu} style={styles.menu} resizeMode="contain" />
    </TouchableOpacity>
)

const defaultHeader = navigation => ({
    headerTitleStyle: fonts.style.navHeader,
    headerStyle: {
        backgroundColor: colors.primary2
    },
    headerLeft: renderHeaderLeft({ navigation })
})
const createMainNavigator = () => {
    const liftNav = createStackNavigator({
        Lift: {
            screen: LiftScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'Mind Pump Lift',
                ...defaultHeader(navigation)
            })
        }
    })

    const settingsNav = createStackNavigator({
        Settings: {
            screen: SettingsScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'Settings',
                ...defaultHeader(navigation),
                headerStyle: {
                    backgroundColor: colors.white
                }
            })
        }
    })

    const drawerNav = createDrawerNavigator(
        {
            Home: {
                screen: liftNav
            },
            Settings: {
                screen: settingsNav
            }
        },
        {
            initialRouteName: 'Home'
        }
    )

    return drawerNav
}

const styles = StyleSheet.create({
    menu: {
        height: 20
    }
})

export default createMainNavigator
