const BASE_URL = 'http://localhost:3000/api';

const fetchWithConfig = async (url: string, method: string, data?: object) => {
    const config: RequestInit = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (method !== 'GET') {
        config.body = data ? JSON.stringify(data) : ""
    }

    console.log("combined url: ", `${BASE_URL}${url}`)
    const response = await fetch(`${BASE_URL}${url}`, config);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};

const apiClient = {
    get: (url: string) => fetchWithConfig(url, 'GET'),
    post: (url: string, data: object) => fetchWithConfig(url, 'POST', data),
    put: (url: string, data: object) => fetchWithConfig(url, 'PUT', data),
    delete: (url: string) => fetchWithConfig(url, 'DELETE'),
};

export default apiClient;

