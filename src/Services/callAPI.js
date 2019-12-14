import { url } from './url';
import axios from 'axios';

export default function callApi(endPoint, method, body, token) {
    console.log('url',`${url}/${endPoint}`)
    return axios({
        method: method,
        url: `${url}/${endPoint}`,
        data: JSON.stringify(body),
        headers: {
            "Authorization": token,
            "Content-Type": "application/json"
        }
    })
    .catch(err=>{
        console.log("API error",err)
    })
}

