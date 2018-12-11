import axios from 'axios'
import config from "../config";

export function getOrder(orderId) {
    return axios.get(config.apiBaseUrl + 'getorder/' + orderId);
}