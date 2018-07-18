/**
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import KeepAwake from 'react-native-keep-awake'

import App from './app/index'

type Props = {}
export default class Main extends Component<Props> {
    componentDidMount() {
        KeepAwake.activate()
    }
    render() {
        return <App />
    }
}
