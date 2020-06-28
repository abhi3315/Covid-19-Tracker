import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Row from './Row'

export default function CollapsibleTable(props) {
    const { data, flag } = props

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Country</TableCell>
                        {flag ? <TableCell align="center">Flag</TableCell> : ''}
                        <TableCell align="center">Total Confirmed</TableCell>
                        <TableCell align="center">Total Recovered</TableCell>
                        <TableCell align="center">Total Death</TableCell>
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.keys(data).map(index => (
                        <Row key={index} row={data[index]} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}