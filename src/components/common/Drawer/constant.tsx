
const HEAD_URL = process.env.REACT_APP_URL
export const PAGE_TWO_ERROR_TEXT = {
    'firstNameLabel': "Invalid First Name.",
    'amountLabel': "Invalid Company Name.",
    'mobileNumberLabel': "Invalid Mobile Number.",
    "selectErrorLabel": "No name selected",
    "emailLabel": "Invalid email",
    "passwordLabel": "Invalid password"

}
console.log("data", process.env.REACT_URL)
export const API = {
    "main_url": HEAD_URL + "/api/user/fullList",
    "add_funds": HEAD_URL + "/api/user/addFunds",
    "spend_funds": HEAD_URL + "/api/user/spendFunds",
    "get_funds_id": HEAD_URL + "/api/user",
    "add_user": HEAD_URL + "/api/user/add",
    "trans_url": "https://my-json-server.typicode.com/hi-malay/trans/db",
    "signup_url": HEAD_URL + "/api/auth/signup",
    "login_url": HEAD_URL + "/api/auth/login",
    "auth_user": HEAD_URL + "/api/auth"
}