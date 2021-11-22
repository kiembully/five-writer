import axios from "axios";

let url = "https://86olsy8spl.execute-api.us-east-2.amazonaws.com/dev/";
let dev = "https://web.5writer.com/"

export const apiHelper = (api, method, data, headers) => {
    const apiUrl = url + api;
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
                    Router.push('/login');
                } else {
                    reject(error);
                }
            });
    });
}