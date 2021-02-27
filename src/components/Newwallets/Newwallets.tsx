import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { PAGE_TWO_ERROR_TEXT } from './../common/Drawer/constant';
import { isMobileValidNumber } from './../common/Drawer/Helperfunction';

class PartnerReferral extends React.Component<any,
    {
        name: string,
        nameError: boolean,
        nameErrorLabel: string,
        mobileNumber: string,
        mobileNumberError: boolean,
        mobileNumberErrorLabel: string,
        amount: string,
        amountError: boolean,
        amountErrorLabel: string,
        saveDetailsEnable: boolean,
        date_match_modal: boolean

    }> {
    myRef: any;
    inputRef: any;
    scrollRef: any;
    numberOfEmpRef: any;
    emailRef: any;
    nameRef: any;
    phoneRef: any;
    companyNameRef: any;
    constructor(props: any) {
        super(props);
        this.state =
        {
            name: '',
            nameError: false,
            nameErrorLabel: '',
            mobileNumber: '',
            mobileNumberError: false,
            mobileNumberErrorLabel: '',
            amount: '',
            amountError: false,
            amountErrorLabel: '',
            saveDetailsEnable: true,
            date_match_modal: false
        }

    }

    validationDynamic = () => {
        if (this.state.name === "") {
            this.setState({ nameError: true, nameErrorLabel: PAGE_TWO_ERROR_TEXT.firstNameLabel, saveDetailsEnable: false })
            return;
        } else if (!isMobileValidNumber(this.state.mobileNumber)) {
            this.setState({ mobileNumberError: true, mobileNumberErrorLabel: PAGE_TWO_ERROR_TEXT.mobileNumberLabel, saveDetailsEnable: false })
            return;
        } else if (this.state.amount?.length === 0) {
            this.setState({ amountError: true, amountErrorLabel: PAGE_TWO_ERROR_TEXT.amountLabel, saveDetailsEnable: false })
            return;
        }
        this.setState({ date_match_modal: true })
    }


    handleInputChange = (event: any, key: any) => {
        const value: any = event.target.value;
        const setObj: any = {};
        setObj[key] = value;
        this.setState(setObj)
        this.setState({
            nameError: false,
            nameErrorLabel: '',
            mobileNumberError: false,
            mobileNumberErrorLabel: '',
            amountError: false,
            amountErrorLabel: "",
            saveDetailsEnable: true
        })
    }
    handleCloseSub = () => {
        this.setState({ date_match_modal: false, name: "", mobileNumber: "", amount: "" })
    };

    render() {
        const { name,
            nameError, nameErrorLabel,
            mobileNumber, mobileNumberError, mobileNumberErrorLabel,
            amount, amountErrorLabel, amountError, saveDetailsEnable, date_match_modal
        } = this.state;

        return (
            <div className="max-width-in">
                <form noValidate autoComplete="off">
                    <div className="row mt-3" >
                        <div className="col-md-4 mt-3">
                            <TextField id="standard-basic" label="Name"
                                value={name}
                                error={nameError}
                                helperText={nameErrorLabel}
                                type="text"
                                margin="normal"
                                variant="outlined"
                                className="custom-input"
                                //  disabled={isAccountDetailsDisabled}
                                name="name"
                                data-id="name"
                                onChange={(event) =>
                                    this.handleInputChange(event, "name")
                                }

                            />
                        </div>
                        <div className="col-md-4 mt-3">
                            <TextField id="standard-basic" label="Phone"
                                value={(mobileNumber === null) ? ("") : (mobileNumber)}
                                error={mobileNumberError}
                                helperText={mobileNumberErrorLabel}
                                type="text"
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                className="custom-input"
                                // disabled={isAccountDetailsDisabled}
                                name="mobileNumber"
                                data-id="mobileNumber"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                                }}
                                onChange={(event) =>
                                    this.handleInputChange(event, "mobileNumber")
                                }
                            />
                        </div>
                        <div className="col-md-4 mt-3">
                            <TextField id="standard-basic" label="Amount"
                                value={(amount === null) ? ("") : (amount)}
                                error={amountError}
                                helperText={amountErrorLabel}
                                type="text"
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                className="custom-input"
                                // disabled={isAccountDetailsDisabled}
                                name="amount"
                                data-id="amount"
                                onChange={(event) =>
                                    this.handleInputChange(event, "amount")
                                }
                            />
                        </div>
                        <div className="col-md-4 mt-3">
                            <Button variant="contained" color="primary" className={(saveDetailsEnable === true) ? ("btn-class mt-4") : ("btn-class-default mt-4")} onClick={() => this.validationDynamic()}>Submit</Button>
                        </div>

                    </div>

                </form>
                <Dialog
                    open={date_match_modal}
                    onClose={this.handleCloseSub}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <h3 className="modal-title">Hi, </h3>
                    <h3 className="modal-subtitle">Data successfully submitted <br />(Please don't take this serious)</h3>

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

export default PartnerReferral;