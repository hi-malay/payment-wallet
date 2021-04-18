import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { PAGE_TWO_ERROR_TEXT } from './../common/Drawer/constant';
import { isMobileValidNumber } from './../common/Drawer/Helperfunction';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ContextMain } from "./../common/Drawer/ContextMain"
import axios from "axios"
import { API } from './../common/Drawer/constant';
import ReactGA from 'react-ga'

class SpendFunds extends React.Component<any,
    {
        name: string,
        nameError: boolean,
        amount: string,
        amountError: boolean,
        nameErrorLabel: string,
        amountErrorLabel: string,
        saveDetailsEnable: boolean,
        date_match_modal: boolean,
        matchData: any

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
            matchData: ""
        }

    }
    handleChange = (event: any) => {
        this.setState({ name: event.target.value });
        this.setState({
            nameError: false,
            nameErrorLabel: '',
            amountError: false,
            amountErrorLabel: "",
            saveDetailsEnable: true
        })
    };
    handleCloseSub = () => {
        this.setState({ date_match_modal: false, name: "", amount: "" })
    };
    validationDynamic = () => {
        if (this.state.name === "") {
            this.setState({ nameError: true, nameErrorLabel: PAGE_TWO_ERROR_TEXT.selectErrorLabel, saveDetailsEnable: false })
            return
        }
        else if (this.state.amount?.length === 0) {
            this.setState({ amountError: true, amountErrorLabel: PAGE_TWO_ERROR_TEXT.amountLabel, saveDetailsEnable: false })
            return;
        }

        const matchData = this.context.userData[0].map((data: any) => {
            if (data._id === this.state.name) {
                return data.name
            }
            return null
        })
        this.setState({ matchData: matchData, date_match_modal: true })

        let data: any = {
            amount: this.state.amount
        }
        ReactGA.event({
            category: `Spend Funds Clicked`,
            action: 'Spend Funds Clicked',
            label: 'Spend Funds Clicked'
        });
        axios.patch(API.spend_funds + "/" + this.state.name, data, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('AuthToken')}`
            },
        }).then((response: any) => {
            console.log("ok")
        }).catch((error: any) => {
            console.log("error", error)
        });

    }


    handleInputChange = (event: any, key: any) => {
        const value: any = event.target.value;
        const setObj: any = {};
        setObj[key] = value;
        this.setState(setObj)
        this.setState({
            nameError: false,
            nameErrorLabel: '',
            amountError: false,
            amountErrorLabel: "",
            saveDetailsEnable: true
        })
    }


    render() {
        const {
            amount, amountErrorLabel, name, matchData, amountError, saveDetailsEnable, date_match_modal
        } = this.state;

        return (
            <div className="max-width-in">
                <form noValidate autoComplete="off">
                    <div className="row mt-3" >
                        <div className="col-md-6 mt-4">
                            <div className="check-funds">
                                <FormControl >
                                    <InputLabel id="demo-simple-select-helper-label">User Name</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={this.state.name}
                                        onChange={this.handleChange}>
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {this.context.userData[0]?.length !== undefined
                                            ? this.context.userData[0].map((row: any, i: any) => (
                                                <MenuItem value={row._id}>{row.name}</MenuItem>
                                            ))
                                            : (<CircularProgress color="inherit" size={30} className="table-loader" />)
                                        }

                                    </Select>
                                    {this.state.nameError ?
                                        (<FormHelperText>{this.state.nameErrorLabel}</FormHelperText>
                                        ) : ""
                                    }
                                </FormControl>
                            </div>
                        </div>


                        <div className="col-md-6 mt-3">
                            <TextField id="standard-basic" label="Amount"
                                value={(amount === null) ? ("") : (amount)}
                                error={amountError}
                                helperText={amountErrorLabel}
                                type="text"
                                margin="normal"
                                variant="outlined"

                                className="custom-input"
                                // disabled={isAccountDetailsDisabled}
                                name="amount"
                                data-id="amount"
                                onChange={(event) =>
                                    this.handleInputChange(event, "amount")
                                }
                            />
                        </div>
                        <div className=" mt-3">
                            <Button variant="contained" color="primary" className={(saveDetailsEnable === true) ? ("btn-class mt-4") : ("btn-class-default mt-4")} onClick={() => this.validationDynamic()}>Submit</Button>
                        </div>

                    </div>

                </form>
                <Dialog
                    open={date_match_modal}
                    onClose={this.handleCloseSub}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <h3 className="modal-title">Success </h3>
                    <h3 className="modal-subtitle"> Amount <b>{amount}</b> ₹ debited from <b>{matchData}'s</b> wallet</h3>

                    <DialogActions>
                        <Button onClick={this.handleCloseSub} color="primary">
                            Close
                            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
SpendFunds.contextType = ContextMain
export default SpendFunds;