import React from 'react'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Divider from '@material-ui/core/Divider'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
})

export default function StateRow(props) {
    const { row } = props
    const [open, setOpen] = React.useState(false)
    const classes = useRowStyles()

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell align="center" component="th" scope="row">
                    {row.state}
                </TableCell>
                <TableCell align="center">{row.active}</TableCell>
                <TableCell align="center">{row.confirmed}</TableCell>
                <TableCell align="center">{row.recovered}</TableCell>
                <TableCell align="center">{row.deaths}</TableCell>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <div style={{marginBottom:"10px"}} className="data">
                                <div>
                                    <h6>Active Cases</h6>
                                    <h6>{row.active}</h6>
                                </div>
                                <Divider orientation="vertical" flexItem />
                                <div>
                                    <h6>Migrated</h6>
                                    <h6>{row.migratedother}</h6>
                                </div>
                                <Divider orientation="vertical" flexItem />
                                <div>
                                    <h6>Last Updated At</h6>
                                    <h6>{row.lastupdatedtime}</h6>
                                </div>
                            </div>
                            {row.statenotes !== '' ?
                                <Alert severity="info">{row.statenotes}</Alert>
                                : ''}
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}