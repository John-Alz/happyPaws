import axios from "axios";


const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const api = {
    get: async (endPonit) => {
        try {
            let response = await apiClient.get(endPonit)
            return response.data;
        } catch (error) {
            console.log(`Error en la peticion get ${error}`);
            throw error;

        }
    },
    post: async (endPonit, data, credentials) => {
        try {
            let response = await apiClient.post(endPonit, data, credentials);
            return response;
        } catch (error) {
            console.log(`Error en la petiicon POST: ${error}`);
            throw error;
        }
    },
    put: async (endPonit, data) => {
        try {
            let response = await apiClient.put(endPonit, data);
            return response;
        } catch (error) {
            console.log(`Error en la petiicon PUT: ${error}`);
            throw error;
        }
    },
    patch: async (endPonit, data) => {
        try {
            let response = await apiClient.patch(endPonit, data);
            return response;
        } catch (error) {
            console.log(`Error en la petiicon PUT: ${error}`);
            throw error;
        }
    },
    delete: async (endPonit) => {
        try {
            let response = await apiClient.delete(endPonit);
            return response.data;
        } catch (error) {
            console.log(`Error en la petiicon DELETE: ${error}`);
            throw error;
        }
    }
};