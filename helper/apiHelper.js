import { LiveTv } from "@mui/icons-material";
import axios from "axios";
import { useRouter } from "next/dist/client/router";

let url = "https://86olsy8spl.execute-api.us-east-2.amazonaws.com/dev/";
let live = "https://web.5writer.com/"

export const apiHelper = (api, method, data, headers) => {
    const apiUrl = live + api;

    function logout() {
        localStorage.clear();
        window.location.href = '/login'
    }
    
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: apiUrl,
            data: data,
            headers: headers
        })
            .then(res => resolve(res))
            .catch(error => {
                if (error.response && error.response.status === 401) {
                    logout()
                } else {
                    reject(error);
                }
            });
    });
}

export const externalApiHelper = (api, method, data, headers) => {

    function logout() {
        localStorage.clear();
        window.location.href = '/login'
    }
    
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: api,
            data: data,
            headers: headers
        })
            .then(res => resolve(res))
            .catch(error => {
                if (error.response && error.response.status === 401) {
                    logout()
                } else {
                    reject(error);
                }
            });
    });
}