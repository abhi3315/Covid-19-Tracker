import React from 'react'
import { stateWiseData } from './utils/api'
import { Spinner } from 'react-bootstrap'
import Divider from '@material-ui/core/Divider'
import Alert from '@material-ui/lab/Alert'
import Table from './Table'

class India extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        stateWiseData().then(data => {
            this.setState(() => ({
                data
            }))
        })
    }

    render() {
        const india = this.state.data[0]
        const state = this.state.data.slice(1)

        return (
            <React.Fragment>
                {this.state.data.length === 0 ?
                    <div className="loading-container">
                        <Spinner animation="grow" variant="secondary" />
                        <Spinner animation="grow" variant="secondary" />
                        <Spinner animation="grow" variant="secondary" />
                    </div> :
                    <React.Fragment>
                        <div className="header-data">
                            <h2>India</h2>
                            <img height={35} src="https://www.countryflags.io/in/shiny/64.png" alt="india-flag" />
                            <Divider />
                            <div className="data">
                                <div>
                                    <h5>Total Confirmed:</h5>
                                    <h6>{india.confirmed}</h6>
                                    <p>+ {india.deltaconfirmed} New Confirmed</p>
                                </div>
                                <Divider orientation="vertical" flexItem />
                                <div>
                                    <h5>Total Recovered:</h5>
                                    <h6>{india.recovered}</h6>
                                    <p>+ {india.deltarecovered} New Recovered</p>
                                </div>
                                <Divider orientation="vertical" flexItem />
                                <div>
                                    <h5>Total Deaths:</h5>
                                    <h6>{india.deaths}</h6>
                                    <p>+ {india.deltadeaths} New Deaths</p>
                                </div>
                            </div>
                            <div style={{ marginBottom: "25px" }}>
                                <Spinner size="sm" animation="grow" variant="danger" />
                                <span style={{ transform: "translateY(2px)", display: "inline-block", marginLeft: "10px" }}>
                                    Total Active Cases: {india.active}
                                </span>
                            </div>
                            <Alert severity="info">There can be a minor conflict in Indian data of this page and global page because the resources are different.</Alert>
                        </div>
                        <div className="table-container">
                            <Table flag={false} data={state} />
                        </div>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

export default India