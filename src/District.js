import React from 'react'
import { districtWiseData } from './utils/api'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Divider from '@material-ui/core/Divider'
import Alert from '@material-ui/lab/Alert'
import { Spinner } from 'react-bootstrap'
import Table from './Table'

class District extends React.Component {
    state = {
        data: {},
        selectedState: ''
    }

    componentDidMount() {
        districtWiseData().then(data => {
            this.setState((preState) => ({
                ...preState,
                data
            }))
        })
    }

    handleChange = (value) => {
        this.setState((preState) => ({
            ...preState,
            selectedState: value
        }))
    }

    render() {
        const { data, selectedState } = this.state

        return (
            <React.Fragment>
                {Object.keys(data).length === 0 ?
                    <div className="loading-container">
                        <Spinner animation="grow" variant="secondary" />
                        <Spinner animation="grow" variant="secondary" />
                        <Spinner animation="grow" variant="secondary" />
                    </div> :
                    <FormControl className="form-control">
                        <InputLabel id="demo-simple-select-label">State</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedState}
                            onChange={(event) => this.handleChange(event.target.value)}
                        >
                            {Object.keys(data).map((state, index) => (
                                <MenuItem key={index} value={state}>{state}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>}
                {selectedState === '' ?
                    '' :
                    <React.Fragment>
                        {selectedState !== 'State Unassigned' ?
                            <div className="table-container">
                                <Table district={true} flag={false} data={data[selectedState].districtData} />
                            </div> :
                            <div className="table-container">
                                <div style={{ marginTop: "50px", marginBottom: "30px" }} className="header-data">
                                    <h2>{selectedState}</h2>
                                    <Divider />
                                    <div className="data">
                                        <div>
                                            <h5>Active</h5>
                                            <h6>{data[selectedState].districtData.Unassigned.active}</h6>
                                        </div>
                                        <Divider orientation="vertical" flexItem />
                                        <div>
                                            <h5>Confirmed</h5>
                                            <h6>{data[selectedState].districtData.Unassigned.confirmed}</h6>
                                        </div>
                                        <Divider orientation="vertical" flexItem />
                                        <div>
                                            <h5>Recovered</h5>
                                            <h6>{data[selectedState].districtData.Unassigned.recovered}</h6>
                                        </div>
                                        <Divider orientation="vertical" flexItem />
                                        <div>
                                            <h5>Deaths</h5>
                                            <h6>{data[selectedState].districtData.Unassigned.deceased}</h6>
                                        </div>
                                    </div>
                                </div>
                                <Alert severity="info">MoHFW website reports that these are the 'cases that are being reassigned to states'. 554 cases were decreased in this category today by MoHFW. We have removed these cases from this category</Alert>
                            </div>}
                    </React.Fragment>}
            </React.Fragment>
        )
    }
}

export default District