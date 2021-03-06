import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { PAGE_TWO_ERROR_TEXT } from './../common/Drawer/constant';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ContextMain } from "./../common/Drawer/ContextMain"

class Checkbalance extends React.Component<any,
    {

        name: string,
        nameError: boolean,
        nameErrorLabel: string,
        saveDetailsEnable: any,
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
            saveDetailsEnable: true
        })
    };
    handleCloseSub = () => {
        this.setState({ date_match_modal: false, name: "" })
    };
    validationDynamic = () => {
        if (this.state.name === "") {
            this.setState({ nameError: true, nameErrorLabel: PAGE_TWO_ERROR_TEXT.selectErrorLabel, saveDetailsEnable: false })
            return
        }

        const matchData = this.context.map((data: any) => {
            if (data._id === this.state.name) {
                return data.amount
            }
            return null
        })
        this.setState({ matchData: matchData, date_match_modal: true })
    }

    render() {
        console.log("hi", localStorage.getItem('AuthToken'))
        return (
            <div className="check-funds">
                <div className="row menu-tab">
                    <div className="col-12">
                        <FormControl >
                            <InputLabel id="demo-simple-select-helper-label">User Name</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={this.state.name}
                                onChange={this.handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {this.context.length !== undefined
                                    ? this.context.map((row: any, i: any) => (
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
                    <div className="col-4">

                        <Button variant="contained" color="primary" className={(this.state.saveDetailsEnable === true) ? ("btn-class mt-4") : ("btn-class-default mt-4")} onClick={() => this.validationDynamic()}>Check Balance</Button>
                    </div>
                </div>
                <Dialog
                    open={this.state.date_match_modal}
                    onClose={this.handleCloseSub}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <h3 className="modal-title">Hi, </h3>
                    <h3 className="modal-subtitle"> Your balance is: <b>{this.state.matchData}</b></h3>

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
Checkbalance.contextType = ContextMain
export default Checkbalance;