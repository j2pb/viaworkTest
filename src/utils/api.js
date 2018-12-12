import axios from 'axios'
import config from "../config";

export function getAutocomplete(contains) {
    return axios.get(config.apiBaseUrl + '/jobs/autocomplete?contains=' + contains);
}