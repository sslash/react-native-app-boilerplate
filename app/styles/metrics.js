import { Dimensions, Platform } from 'react-native'
import { Header } from 'react-navigation'

const { width, height } = Dimensions.get('window')
const screenWidth = width < height ? width : height
const screenHeight = width < height ? height : width

// Used via Metrics.baseMargin
const metrics = {
    screenWidth,
    screenHeight,
    headerHeight: Header.HEIGHT,
    drawerWidth: screenWidth * 0.8
}

export default metrics
