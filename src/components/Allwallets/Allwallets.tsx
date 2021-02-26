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
        const rows = [
            {
                "UserId": "usr1", "Name": "Malay", "Phone": "31231231", "Balance": "31"
            },
            {
                "UserId": "usr1", "Name": "Malay", "Phone": "31231231", "Balance": "31"
            }
        ];
        // const {
        //     amount, amountErrorLabel, amountError, saveDetailsEnable, date_match_modal
        // } = this.state;

        return (
            <div className="max-width-in">
                <>
                    {console.log("hii", this.context)}
                    <TableContainer component={Paper}>
                        <Table className="" aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>UserId</b></TableCell>
                                    <TableCell align="right"><b>Name</b></TableCell>
                                    <TableCell align="right"><b>Phone</b></TableCell>
                                    <TableCell align="right"><b>Balance</b></TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.context.length !== undefined
                                    ? (<> {this.context.map((row: any) => (
                                        <TableRow key={row.UserId}>
                                            <TableCell component="th" scope="row">
                                                {row.UserId}
                                            </TableCell>
                                            <TableCell align="right">{row.Name}</TableCell>
                                            <TableCell align="right">{row.Phone}</TableCell>
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