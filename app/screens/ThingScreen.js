// @flow
// libs
import * as React from 'react'
import { Image, View, Modal, StyleSheet } from 'react-native'
import mapProps from 'recompose/mapProps'
import get from 'lodash/get'

// components
import LText from '../components/LText'

// state
import withState from '../state/withState'
import ThingState from '../state/ThingState'

// styles
import images from '../images'
import colors from '../colors'
import layouts from '../styles/layouts'

type Props = {}

class ThingScreen extends React.Component<Props> {
    render() {
        return (
            <View style={[layouts.mainScreenCentered, styles.container]}>
                <LText>ThingScreen</LText>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})

export default withState(
    mapProps(({ states, ...rest }) => ({
        thingState: states[0],
        ...rest
    }))(ThingScreen),
    [ThingState]
)
