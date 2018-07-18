import { StyleSheet } from 'react-native'
import colors from './colors'

const styles = StyleSheet.create({
    mainScreenCentered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary
    },
    mainScreen: {
        flex: 1,
        backgroundColor: colors.primary
    },
    ac: {
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row'
    },
    rowAc: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rowAcJc: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default styles
