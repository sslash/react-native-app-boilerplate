import React from 'react'
import { Provider } from 'unstated'

import createMainNavigator from './nav/navigator'

class App extends React.Component {
    render() {
        const Comp = createMainNavigator()

        return (
            <Provider>
                <Comp />
            </Provider>
        )
    }
}

export default App
