// @flow
import { Container } from 'unstated'
import config from '../config'

type ThingState = {
    fetching: boolean,
    fetched: boolean,
    items?: Array<any>,
    error?: any
}

export class ThingsContainer extends Container<ThingState> {
    state = {
        fetching: false,
        fetched: false,
        items: undefined,
        error: undefined
    }

    fetch = () => {
        if (this.state.items) return Promise.resolve()

        this.setState({ fetching: true, fetched: false })
        return fetch(`${config.API_SERVER}/api/thing`)
            .then(response => response.text())
            .then(responseData => rssParser.parse(responseData))
            .then(items => {
                this.setState({ items })
            })
            .catch(err => {
                this.setState({ error: err })
            })
            .finally(() => {
                this.setState({ fetching: false, fetched: true })
            })
    }
}

const container = new ThingsContainer()

export default container
