console.disableYellowBox = true
global.DEBUG_LOG = __DEV__ ? (...args) => console.log(...args) : () => {}

const IS_DEV = !__DEV__

const config = {
    API_SERVER: IS_DEV ? 'http://127.0.0.1:3000' : 'https://prodserver.com',
}

export default config
