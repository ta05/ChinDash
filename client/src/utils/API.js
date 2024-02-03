import axios from "axios";

const baseURL = import.meta.env.VITE_SERVER_BASE_URL;

export default {
    getGenres: function (signal) {
        return axios.get(`${baseURL}/api/genre`, {signal: signal});
    },
    getTracks: function () {
        return axios.get(`${baseURL}/api/track`);
    },
    getTopGenreSales: function (limit, signal) {
        return axios.get(`${baseURL}/api/invoiceline/sales/${limit}`, {signal: signal})
    },
    getGenreMonthlySales: function (signal) {
        return axios.get(`${baseURL}/api/invoice/sales`, {signal: signal})
    }
};
