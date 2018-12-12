import axios from 'axios'
import config from "../config";

export function getJobsAutocomplete(contains) {
    return axios.get(config.apiBaseUrl + 'jobs/autocomplete?contains=' + contains);
}
export function getJobDetail(parent_uuid) {
    return axios.get(config.apiBaseUrl + 'jobs/' + parent_uuid);
}