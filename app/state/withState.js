// @flow
import * as React from 'react'
import { Subscribe } from 'unstated'

const withStateHOC = (Component, stateContainers) => {
    class WithStateWrapper extends React.Component {
        render() {
            return (
                <Subscribe to={stateContainers}>
                    {(...states) => {
                        return <Component {...this.props} states={states} />
                    }}
                </Subscribe>
            )
        }
    }

    return WithStateWrapper
}

export default withStateHOC
