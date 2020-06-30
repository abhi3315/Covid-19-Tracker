import 'date-fns'
import React from 'react'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import { Spinner } from 'react-bootstrap'
import { caseTimeSeries } from './utils/api'
import Chart from './Chart'

class TimeSeries extends React.Component {
    state = {
        data: [],
        dataToShow: [],
        fromDate: '',
        toDate: '',
        minDate: '',
        maxDate: ''
    }

    componentDidMount() {
        caseTimeSeries().then(data => {
            const dataToShow = data
            const fromDate = new Date(data[0].date + ' 2020')
            const toDate = new Date(data[data.length - 1].date + '2020')
            const minDate = new Date(data[0].date + ' 2020')
            const maxDate = new Date(data[data.length - 1].date + '2020')
            this.setState(preState => ({
                ...preState,
                data,
                fromDate,
                toDate,
                dataToShow,
                minDate,
                maxDate
            }))
        })
    }

    changeDataToShow() {
        const { data, toDate, fromDate } = this.state
        const dataToShow = []
        Object.keys(data).forEach(index => {
            const currDate = new Date(data[index].date + ' 2020')
            if (currDate.getTime() >= fromDate.getTime() && currDate.getTime() <= toDate.getTime())
                dataToShow.push(data[index])
        })

        this.setState(preState => ({
            ...preState,
            dataToShow
        }))
    }

    handleDateChange = async (valueObject) => {
        await this.setState((preState) => ({
            ...preState,
            ...valueObject
        }))

        this.changeDataToShow()
    }

    render() {
        const { fromDate, toDate, data, minDate, maxDate, dataToShow } = this.state

        return (
            <React.Fragment>
                {data.length === 0 ?
                    <div className="loading-container">
                        <Spinner animation="grow" variant="secondary" />
                        <Spinner animation="grow" variant="secondary" />
                        <Spinner animation="grow" variant="secondary" />
                    </div> :
                    <React.Fragment>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                    disableToolbar
                                    maxDate={maxDate}
                                    minDate={minDate}
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline1"
                                    label="From"
                                    value={fromDate}
                                    onChange={date => this.handleDateChange({ fromDate: date })}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                                <KeyboardDatePicker
                                    disableToolbar
                                    maxDate={maxDate}
                                    minDate={minDate}
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline2"
                                    label="To"
                                    value={toDate}
                                    onChange={date => this.handleDateChange({ toDate: date })}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                        <div style={{ marginTop: "50px" }}>
                            <Chart data={dataToShow} />
                            <div className="hide"></div>
                        </div>
                    </React.Fragment>}
            </React.Fragment>
        )
    }
}

export default TimeSeries