import { LiveTv } from "@mui/icons-material";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
// jwt 
import jwt_decode from "jwt-decode";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

let url = "https://86olsy8spl.execute-api.us-east-2.amazonaws.com/dev/";
let live = "https://web.5writer.com/"

export const apiHelper = (api, method, data, headers) => {
    // toast config 
    const notify = () => toast.warn('Your session has expired!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: logout()
    });
    
    const apiUrl = live + api;

    function logout() {
        localStorage.clear();
        window.location.href = '/login'
    }

    function checkTokenExpiration() {
        const user_token = typeof window !== 'undefined' ? localStorage.getItem('user_token') : null;
        if (!!user_token) {
        let exp = jwt_decode(user_token).exp;
        if (Date.now() >= exp * 1000) {
            // expired token 
            console.log('expired!')
            notify();
            localStorage.clear();
            router.push('/login')
        }
      }
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
                    notify();
                } else {
                    reject(error);
                }
            });
    });
}

export const externalApiHelper = (api, method, data, headers) => {

    function logout() {
        localStorage.clear();
        router.push('/login')
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