import React from 'react'
import { globalData } from './utils/api'
import { Spinner } from 'react-bootstrap'
import Divider from '@material-ui/core/Divider'
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
        const { Countries, Global } = this.state.data

        return (
            <React.Fragment>
                {Object.keys(this.state.data).length === 0 ?
                    <div className="loading-container">
                        <Spinner animation="grow" variant="secondary" />
                        <Spinner animation="grow" variant="secondary" />
                        <Spinner animation="grow" variant="secondary" />
                    </div> :
                    <React.Fragment>
                        <div className="header-data">
                            <h2>Worldwide</h2>
                            <img height={35} src={Global.flag} alt="world-flag" />
                            <Divider />
                            <div className="data">
                                <div>
                                    <h5>Total Confirmed:</h5>
                                    <h6>{Global.TotalConfirmed}</h6>
                                    <p>+ {Global.NewConfirmed} New Confirmed</p>
                                </div>
                                <Divider orientation="vertical" flexItem />
                                <div>
                                    <h5>Total Recovered:</h5>
                                    <h6>{Global.TotalRecovered}</h6>
                                    <p>+ {Global.NewRecovered} New Recovered</p>
                                </div>
                                <Divider orientation="vertical" flexItem />
                                <div>
                                    <h5>Total Deaths:</h5>
                                    <h6>{Global.TotalDeaths}</h6>
                                    <p>+ {Global.NewDeaths} New Deaths</p>
                                </div>
                            </div>
                        </div>
                        <div className="table-container">
                            <Table flag={true} data={Countries} />
                        </div>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

export default World