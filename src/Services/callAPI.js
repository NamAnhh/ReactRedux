import { url } from './url';
import axios from 'axios';

//end point: /todos
//method: GET/POST/PUT
//body: data
//token: authen
export default function callApi(endPoint, method, body, token) {
    console.log('url', `${url}/${endPoint}`)
    return axios({
        method: method,
        url: `${url}/${endPoint}`,
        data: JSON.stringify(body),
        headers: {
            "Authorization": token,
            "Content-Type": "application/json"
        }
    })
        .catch(err => {
            console.log("API error", err)
        })
}

