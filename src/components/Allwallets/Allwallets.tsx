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
        refDet: any

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
            date_match_modal: false,
            refDet: {}
        }

    }

    componentDidMount = () => {
        this.setState({ refDet: this.context.userData[0] })

    }

    render() {


        return (
            <div className="max-width-in">
                <>

                    <TableContainer component={Paper}>
                        <Table className="" aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>UserId</b></TableCell>
                                    <TableCell align="left"><b>Name</b></TableCell>
                                    <TableCell align="left"><b>Phone</b></TableCell>
                                    <TableCell align="left"><b>Balance</b></TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.context.userData[0]?.length !== undefined
                                    ? (<> {this.context.userData[0].map((row: any, i: any) => (
                                        <TableRow key={row._id}>
                                            <TableCell component="th" scope="row">
                                                User{i + 1}
                                            </TableCell>
                                            <TableCell align="left">{row.name}</TableCell>
                                            <TableCell align="left">{row.phone}</TableCell>
                                            <TableCell align="left">{row.amount} ₹</TableCell>
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