import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ContextMain } from "./../common/Drawer/ContextMain"
import CircularProgress from '@material-ui/core/CircularProgress';

class Allwallets extends React.Component<any,
    {
        name: string,
        nameError: boolean,
        amount: string,
        amountError: boolean,
        nameErrorLabel: string,
        amountErrorLabel: string,
        saveDetailsEnable: boolean,
        date_match_modal: boolean,

    }> {

    constructor(props: any) {
        super(props);
        this.state =
        {

            name: '',
            nameError: false,
            nameErrorLabel: '',
            amount: '',
            amountError: false,
            amountErrorLabel: '',
            saveDetailsEnable: true,
            date_match_modal: false
        }

    }



    render() {

        return (
            <div className="max-width-in">
                <>

                    <TableContainer component={Paper}>
                        <Table className="" aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>Name</b></TableCell>
                                    <TableCell align="right"><b>Date</b></TableCell>
                                    <TableCell align="right"><b>Amount (Rs)</b></TableCell>
                                    <TableCell align="right"><b>Balance (Rs)</b></TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.value.length !== undefined
                                    ? (<> {this.props.value.map((row: any) => (
                                        <TableRow key={row.Name}>
                                            <TableCell component="th" scope="row">
                                                {row.Name}
                                            </TableCell>
                                            <TableCell align="right">{row.Date}</TableCell>
                                            <TableCell align="right">{row.Amount}</TableCell>
                                            <TableCell align="right">{row.Balance}</TableCell>
                                        </TableRow>
                                    ))}</>)
                                    : (<> <CircularProgress color="inherit" size={30} className="table-loader" /></>)
                                }

                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            </div>
        );
    }
}
Allwallets.contextType = ContextMain
export default Allwallets;