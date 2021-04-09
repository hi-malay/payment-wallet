import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { PAGE_TWO_ERROR_TEXT } from './../common/Drawer/constant';
import { isMobileValidNumber } from './../common/Drawer/Helperfunction';
import axios from "axios"
import { API } from './../common/Drawer/constant';
import { Redirect } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

class PartnerReferral extends React.Component<any,
    {
        name: string,
        nameError: boolean,
        nameErrorLabel: string,
        email: string,
        emailError: boolean,
        emailErrorLabel: string,
        password: string,
        passwordError: boolean,
        passwordErrorLabel: string,
        saveDetailsEnable: boolean,
        date_match_modal: boolean,
        action: string,
        islogin: boolean

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
            email: '',
            emailError: false,
            emailErrorLabel: '',
            password: '',
            passwordError: false,
            passwordErrorLabel: '',
            saveDetailsEnable: true,
            date_match_modal: false,
            action: "",
            islogin: false
        }

    }

    validationDynamic = () => {
        if (this.state.name === "" && this.state.islogin === false) {
            this.setState({ nameError: true, nameErrorLabel: PAGE_TWO_ERROR_TEXT.firstNameLabel, saveDetailsEnable: false })
            return;
        } else if (this.state.email === "") {
            this.setState({ emailError: true, emailErrorLabel: PAGE_TWO_ERROR_TEXT.emailLabel, saveDetailsEnable: false })
            return;
        } else if (this.state.password?.length === 0) {
            this.setState({ passwordError: true, passwordErrorLabel: PAGE_TWO_ERROR_TEXT.passwordLabel, saveDetailsEnable: false })
            return;
        }

        let data: any = {
            "name": this.state.name,
            "email": this.state.email,
            "password": this.state.password
        };
        console.log("login", this.state.islogin)
        if (!this.state.islogin) {
            axios.post(API.signup_url, data).then((response: any) => {
                localStorage.setItem("AuthToken", response.data.token)
                this.setState({ action: "home" })
            }).catch((error: any) => {
                this.setState({ date_match_modal: true })
            });
        }
        else {
            axios.post(API.login_url, data).then((response: any) => {
                localStorage.setItem("AuthToken", response.data.token)
                this.setState({ action: "home" })
            }).catch((error: any) => {
                this.setState({ date_match_modal: true })
            });
        }

    }


    handleInputChange = (event: any, key: any) => {
        const value: any = event.target.value;
        const setObj: any = {};
        setObj[key] = value;
        this.setState(setObj)
        this.setState({
            nameError: false,
            nameErrorLabel: '',
            emailError: false,
            emailErrorLabel: '',
            passwordError: false,
            passwordErrorLabel: "",
            saveDetailsEnable: true
        })
    }
    handleCloseSub = () => {
        this.setState({ date_match_modal: false, name: "", email: "", password: "" })
    };

    renderFormSign = () => {
        const { name,
            nameError, nameErrorLabel,
            email, emailError, emailErrorLabel,
            password, passwordErrorLabel, passwordError, saveDetailsEnable, date_match_modal
        } = this.state;
        console.log("process", process.env)
        return (
            <Card className="" variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2" className="main-title mb-3">
                        Payment Wallet
         </Typography>

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
                                <TextField id="standard-basic" label="Email"
                                    value={(email === null) ? ("") : (email)}
                                    error={emailError}
                                    helperText={emailErrorLabel}
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    className="custom-input"
                                    // disabled={isAccountDetailsDisabled}
                                    name="email"
                                    data-id="email"
                                    onChange={(event) =>
                                        this.handleInputChange(event, "email")
                                    }
                                />
                            </div>
                            <div className="col-md-4 mt-3">
                                <TextField id="standard-basic" label="Password"
                                    value={(password === null) ? ("") : (password)}
                                    error={passwordError}
                                    helperText={passwordErrorLabel}
                                    type="password"
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    className="custom-input"
                                    // disabled={isAccountDetailsDisabled}
                                    name="password"
                                    data-id="password"
                                    onChange={(event) =>
                                        this.handleInputChange(event, "password")
                                    }
                                />
                            </div>
                            <div className="col-md-4 mt-3">
                                <Button variant="contained" color="primary" className={(saveDetailsEnable === true) ? ("btn-class mt-4") : ("btn-class-default mt-4")} onClick={() => this.validationDynamic()}>Sign Up</Button>
                            </div>
                            <div className="col-md-7 text-right mt-5">
                                <p className="login-style" onClick={() => this.setState({ islogin: true })}>Already a member? Login</p>
                            </div>

                        </div>

                    </form>
                </CardContent>
                <CardActions>
                    <Button size="small">By: Malay Mishra</Button><br />
                    <Button size="small">{process.env.REACT_APP_ENV}</Button>
                </CardActions>
            </Card>
        )
    }

    renderFormLog = () => {
        const { name,
            nameError, nameErrorLabel,
            email, emailError, emailErrorLabel,
            password, passwordErrorLabel, passwordError, saveDetailsEnable, date_match_modal
        } = this.state;
        return (
            <Card className="" variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2" className="main-title mb-3">
                        Obuhi Assignment
         </Typography>

                    <form noValidate autoComplete="off">
                        <div className="row mt-3" >
                            <div className="col-md-4 mt-3">
                                <TextField id="standard-basic" label="Email"
                                    value={(email === null) ? ("") : (email)}
                                    error={emailError}
                                    helperText={emailErrorLabel}
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    className="custom-input"
                                    // disabled={isAccountDetailsDisabled}
                                    name="email"
                                    data-id="email"
                                    onChange={(event) =>
                                        this.handleInputChange(event, "email")
                                    }
                                />
                            </div>
                            <div className="col-md-4 mt-3">
                                <TextField id="standard-basic" label="Password"
                                    value={(password === null) ? ("") : (password)}
                                    error={passwordError}
                                    helperText={passwordErrorLabel}
                                    type="password"
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    className="custom-input"
                                    // disabled={isAccountDetailsDisabled}
                                    name="password"
                                    data-id="password"
                                    onChange={(event) =>
                                        this.handleInputChange(event, "password")
                                    }
                                />
                            </div>
                            <div className="col-md-4 mt-3">

                            </div>
                            <div className="col-md-4 mt-3">
                                <Button variant="contained" color="primary" className={(saveDetailsEnable === true) ? ("btn-class mt-4") : ("btn-class-default mt-4")} onClick={() => this.validationDynamic()}>Login</Button>
                            </div>
                            <div className="col-md-7 text-right mt-5">
                                <p className="login-style" onClick={() => this.setState({ islogin: false })}>New Member? Sign Up</p>
                            </div>

                        </div>

                    </form>
                </CardContent>
                <CardActions>
                    <Button size="small">By: Malay Mishra</Button><br />
                    <Button size="small">{process.env.REACT_APP_ENV}</Button>
                </CardActions>
            </Card>
        )
    }
    renderDialog = () => {
        const { date_match_modal
        } = this.state;
        return (
            <Dialog
                open={date_match_modal}
                onClose={this.handleCloseSub}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <h3 className="modal-title">Hi, </h3>
                <h3 className="modal-subtitle">Wrong Credentials </h3>

                <DialogActions>
                    <Button onClick={this.handleCloseSub} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
    render() {


        if (this.state.action === 'home') {
            return (
                <Redirect to={{
                    pathname: `/all-wallet`
                }} />
            )
        }

        return (
            <div className="max-width-in">
                {this.state.islogin
                    ? <this.renderFormLog /> :
                    <this.renderFormSign />
                }
                <this.renderDialog />

            </div>
        );
    }
}

export default PartnerReferral;