import { Platform } from 'react-native'
const type = {
    regular: 'VarelaRound-Regular',
    fat: 'BalooBhai-Regular',
    bold: 'BalooBhai-Regular',
    base: 'VarelaRound-Regular',
    emphasis: 'VarelaRound-Regular',
    light: 'VarelaRound-Regular',
    ultraLight: 'VarelaRound-Regular',
    headings: 'BalooBhai-Regular'
}

const size = {
    h1: 28,

    h2: 34,
    h3: 32,
    h4: 22,
    h5: 20,
    h6: 18,
    regular: 16,
    input: 15,
    medium: 14,
    small: 13,
    tiny: 10
}

const style = {
    h1: {
        fontFamily: type.headings,
        fontSize: size.h1
    },
    h2: {
        fontFamily: type.fat,
        fontSize: size.h2
    },
    h3: {
        fontFamily: type.bold,
        fontSize: size.h3
    },
    h4: {
        fontFamily: type.bold,
        fontSize: size.h4
    },
    h5: {
        fontFamily: type.base,
        fontSize: size.h5
    },
    h6: {
        // fontFamily: type.emphasis,
        fontSize: size.h6
    },
    normal: {
        fontFamily: type.base,
        fontSize: size.regular
    },
    strong: {
        fontSize: size.regular,
        fontFamily: type.bold,
        fontWeight: 'bold'
    },
    small: {
        fontSize: size.small,
        fontFamily: type.regular
    },
    description: {
        fontFamily: type.base,
        fontSize: size.medium
    },
    comment: {
        fontFamily: type.emphasis,
        fontSize: size.small,
        lineHeight: Platform.OS === 'ios' ? size.small * 1.5 : undefined
    },
    navHeader: {
        fontFamily: type.headings
    }
}

export default {
    type,
    size,
    style
}
