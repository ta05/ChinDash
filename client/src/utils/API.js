import axios from "axios";

const baseURL = import.meta.env.VITE_SERVER_BASE_URL;

export default {
    getGenres: function (signal) {
        return axios.get(`${baseURL}/api/genre`, {signal});
    },
    getTracks: function (signal) {
        return axios.get(`${baseURL}/api/track`, {signal});
    },
    getTopGenreSales: function (limit, signal) {
        return axios.get(`${baseURL}/api/invoiceline/sales/${limit}`, {signal})
    },
    getGenreMonthlySales: function (signal) {
        return axios.get(`${baseURL}/api/invoice/sales`, {signal})
    },
    addInvoice: function (invoiceData) {
        return axios.post(`${baseURL}/api/invoice`, invoiceData)
    },
    addInvoiceLine: function (invoiceLineData) {
        return axios.post(`${baseURL}/api/invoiceline`, invoiceLineData)
    },
};
