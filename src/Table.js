import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Row from './Row'
import StateRow from './StateRow'
import DistrictRow from './DistrictRow'

export default function CollapsibleTable(props) {
    const { data, flag, district } = props

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                {flag ?
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Country</TableCell>
                            <TableCell align="center">Flag</TableCell>
                            <TableCell align="center">Total Confirmed</TableCell>
                            <TableCell align="center">Total Recovered</TableCell>
                            <TableCell align="center">Total Death</TableCell>
                            <TableCell />
                        </TableRow>
                    </TableHead> :
                    <React.Fragment>
                        {district ?
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">District</TableCell>
                                    <TableCell align="center">Active</TableCell>
                                    <TableCell align="center">Total Confirmed</TableCell>
                                    <TableCell align="center">Total Recovered</TableCell>
                                    <TableCell align="center">Total Death</TableCell>
                                    <TableCell />
                                </TableRow>
                            </TableHead> :
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">State</TableCell>
                                    <TableCell align="center">Total Confirmed</TableCell>
                                    <TableCell align="center">Total Recovered</TableCell>
                                    <TableCell align="center">Total Death</TableCell>
                                    <TableCell />
                                </TableRow>
                            </TableHead>}
                    </React.Fragment>}
                <TableBody>
                    {flag ?
                        Object.keys(data).map(index => (
                            <Row key={index} row={data[index]} />
                        )) :
                        (district &&
                            (Object.keys(data).map((district, index) => (
                                <DistrictRow key={index} district={district} row={data[district]} />
                            )))) ||
                        (data.map(state => (
                            <StateRow key={state.statecode} row={state} />
                        )))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}