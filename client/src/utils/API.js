import axios from "axios";

const baseURL = import.meta.env.VITE_SERVER_BASE_URL;

export default {
    getGenres: function () {
        return axios.get(`${baseURL}/api/genre`);
    },
    getTracks: function () {
        return axios.get(`${baseURL}/api/track`);
    }
};
