const BASE_URL = 'https://4100.api.green-api.com';

export const greenApi = {
    async getData(id, token, method) {
        const response = await fetch(`${BASE_URL}/waInstance${id}/${method}/${token}`);
        return response.json();
    },
    
    async postData(id, token, method, body) {
        const response = await fetch(`${BASE_URL}/waInstance${id}/${method}/${token}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        return response.json();
    },

    
};