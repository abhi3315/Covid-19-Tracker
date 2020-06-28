import React from 'react'
import { globalData } from './utils/api'
import Table from './Table'

class World extends React.Component {
    state = {
        data: {}
    }

    componentDidMount() {
        globalData().then(data => {
            this.setState({ data })
        })
    }

    render() {
        const { Countries } = this.state.data

        return (
            <div>
                {Object.keys(this.state.data).length === 0 ?
                    '' :
                    <Table flag={true} data={Countries} />}
            </div>
        )
    }
}

export default World