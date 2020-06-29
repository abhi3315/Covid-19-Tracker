import React from 'react';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles } from '@material-ui/core/styles'

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
})

export default function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell align="center" component="th" scope="row">
                    {row.Country}
                </TableCell>
                <TableCell align="center">
                    <img height={40} src={row.flag} alt={row.CountryCode} />
                </TableCell>
                <TableCell align="center">{row.TotalConfirmed}</TableCell>
                <TableCell align="center">{row.TotalRecovered}</TableCell>
                <TableCell align="center">{row.TotalDeaths}</TableCell>
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
                            <Typography variant="h6" align='center' gutterBottom component="div">
                                New Cases
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">New Confirmed</TableCell>
                                        <TableCell align="center">New Recovered</TableCell>
                                        <TableCell align="center">New Deaths</TableCell>
                                        <TableCell align="center">Updated At</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={row.CountryCode}>
                                        <TableCell align="center">{row.NewConfirmed}</TableCell>
                                        <TableCell align="center">{row.NewRecovered}</TableCell>
                                        <TableCell align="center">{row.NewDeaths}</TableCell>
                                        <TableCell align="center">{row.Date}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}