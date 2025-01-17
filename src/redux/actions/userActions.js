import { environment } from "../../environment/environment.js";
import HttpInterceptor from "../../services/http-interceptor.js";
import { userData } from "../reducers/UserSlice.js";



const http = new HttpInterceptor();


export const Login = (body, callback) => async (dispatch) => {
    const endpoint = `${environment.api_base_url}/login`;

    try {
        http.post(endpoint, body)
            .then((response) => {
                dispatch(userData(response.data));
                callback(response);


            })
            .catch((error) => {
                callback(error.response);

            });
    } catch (error) {
        callback(error.response);
    }
}


export const userRegister = (body, callback) => async (dispatch) => {
    const endpoint = `${environment.api_base_url}/register`;

    try {
        http.post(endpoint, body)
            .then((response) => {
                dispatch(userData(response.data));
                callback(response);


            })
            .catch((error) => {
                callback(error.response);

            });
    } catch (error) {
        callback(error.response);
    }
}