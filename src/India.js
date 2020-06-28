import React from 'react'
import * as API from './utils/api'

class India extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        API.stateWiseData().then(data => {
            this.setState(() => ({
                data
            }))
        })
    }

    render() {
        return (
            <h1>{JSON.stringify(this.state)}</h1>
        )
    }
}

export default India