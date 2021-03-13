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

const Privateroute = withRouter((props: any) => {
    const [userData, setUserData] = useState([]);
    const [transData, setTransData] = useState([]);
    const [isValid, setIsValid] = useState(false);
    const [isReferValid, setReferValid] = React.useState(false);

    const mainApi = () => {
        axios.get(API.main_url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('AuthToken')}`
            },
        }).then((response: any) => {
            if (response.data) {
                setUserData(response.data.user)
                setIsValid(true)
                console.log("byr2", userData)
            }
            else {
                setReferValid(true)
            }
        }).catch((error: any) => {
            console.log("error", error)
        });

        axios.get(API.trans_url).then((response: any) => {
            if (response.data) {
                setTransData(response.data.data)

            }
        }).catch((error: any) => {
            console.log("error", error)

        });
    }

    useEffect(() => {
        mainApi()
    }, [props.location.pathname])

    const validationDynamic = () => {
        localStorage.removeItem("AuthToken");
        props.history.push('/')
    }
    console.log("keysssbyr", isValid)
    console.log("keysss", userData)
    if (localStorage.getItem("AuthToken") != undefined && localStorage.getItem("AuthToken") != null) {
        if (Object.keys(userData).length > 0) {
            return (
                <Route render={() =>
                    <div className="bg-grey full-len mt-3" >
                        <ContextMain.Provider value={{ userData: [userData, setUserData] }}>
                            <div className="max-width max-width-padd mt-4">
                                <Card className="custom-card card-dashboard">
                                    <CardContent >
                                        <h2>{props.location.pathname.split("/")[1]}</h2>
                                        <Button variant="contained" color="primary" className="btn-class mt-4" onClick={validationDynamic}>Logout</Button>
                                        <div className="col-md-4">
                                            <Drawer />
                                        </div>
                                        <div className="col-md-8 mt-5">
                                            <props.component value={transData} />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </ContextMain.Provider>
                    </ div>} />
            )
        }
        else {
            if (isReferValid) {
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
