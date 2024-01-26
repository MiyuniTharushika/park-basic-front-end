import { environment } from "../../environment/environment.js";
import HttpInterceptor from "../../services/http-interceptor.js";




const http = new HttpInterceptor();


export const getAllBookings = (id,callback) => async (dispatch) => {
    const endpoint = `${environment.api_base_url}/booking/${id}`;

    try {
        http.get(endpoint)
            .then((response) => {
                callback(response);
            })
            .catch((error) => {
                callback(error.response);

            });
    } catch (error) {
        callback(error.response);
    }
}
export const updateBookings = (id, data,callback) => async (dispatch) => {
    const endpoint = `${environment.api_base_url}/booking/${id}`;

    try {
        http.put(endpoint, data)
            .then((response) => {

                callback(response);
            })
            .catch((error) => {

                callback(error.response);

            });
    } catch (error) {
        alert()
        callback(error.response);
    }
}

