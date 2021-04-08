import { useState, useEffect } from 'react'
import axios from 'axios'
import { API } from "./constant"
function CategoriesAPI(props: any) {
    const [userData, setUserData] = useState([]);
    const [userAuthData, setUserAuthData] = useState([]);
    const [transData, setTransData] = useState([]);
    const [isValid, setIsValid] = useState(false);
    const [isReferValid, setReferValid] = useState(false);
    const [categories, setCategories] = useState([])
    const [callback, setCallback] = useState(false)

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

        }).catch((error: any) => {
            console.log("error", error)
        });

        axios.get(API.auth_user).then((response: any) => {
            if (response.data) {
                setUserAuthData(response.data)
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

    return {

        userData: [userData, setUserData],
        userAuthData: [userAuthData, setUserAuthData],
        transData: [transData, setTransData],
        isValid: [isValid, setIsValid],
        isReferValid: [isReferValid, setReferValid],
        categories: [categories, setCategories],
        callback: [callback, setCallback],
    }
}

export default CategoriesAPI
