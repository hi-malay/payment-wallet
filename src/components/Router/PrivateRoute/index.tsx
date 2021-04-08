import { Card, CardContent } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import {
    Route,
    Redirect,
    withRouter
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Drawer from "../../common/Drawer/Drawer";
import "../../style.css"
import { ContextMain } from "./../../common/Drawer/ContextMain"
import axios from "axios"
import { API } from '../../common/Drawer/constant';
import CircularProgress from "@material-ui/core/CircularProgress";
import CommonApi from "../../common/Drawer/commonApi"

const Privateroute = withRouter((props: any) => {
    const state = CommonApi(props)

    const validationDynamic = () => {
        localStorage.removeItem("AuthToken");
        props.history.push('/')
    }
    console.log("keysssbyr", state.isValid[0])
    console.log("keysss", state.userData[0])
    if (localStorage.getItem("AuthToken") != undefined && localStorage.getItem("AuthToken") != null) {
        if (Object.keys(state.userAuthData[0]).length > 0) {
            return (
                <Route render={() =>
                    <div className="bg-grey full-len mt-3" >
                        <ContextMain.Provider value={{ userData: [state.userData[0], "null"] }}>
                            <div className="max-width max-width-padd mt-4">
                                <Card className="custom-card card-dashboard">
                                    <CardContent >
                                        <h2>{props.location.pathname.split("/")[1]}</h2>
                                        <Button variant="contained" color="primary" className="btn-class mt-4" onClick={validationDynamic}>Logout</Button>
                                        <div className="col-md-4">
                                            <Drawer />
                                        </div>
                                        <div className="col-md-8 mt-5">
                                            <props.component value={state.transData[0]} />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </ContextMain.Provider>
                    </ div>} />
            )
        }
        else {
            if (state.isReferValid[0]) {
                return (
                    <Redirect to={{
                        pathname: `/`,
                    }} />
                )
            } else {
                return (
                    <div className="Circular-Progress">
                        <CircularProgress color="inherit" />
                    </div>
                )
            }
        }
    }
    else {
        return (
            <Redirect to={{
                pathname: `/`,
            }} />
        )
    }


})
export default Privateroute;
