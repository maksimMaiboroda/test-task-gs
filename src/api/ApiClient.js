import queryString from 'query-string';

const STATUS_CODES = {
    UNAUTHORIZED_CODE: 401
};

const LOGIN_OPTION_URL = '/api/loginoptions';

export default class ApiClient {
    constructor({
        apiUrl
    } = {}) {
        this.apiUrl = apiUrl;
        this.token = '';
        this.middlewares = [];
    }

    async get(url, params) {
        return this.request({
            url,
            params,
            method: 'GET'
        });
    }

    async post(url, payload = {}) {
        return this.request({
            url,
            method: 'POST',
            body: payload
        });
    }


    async put(url, payload = {}) {
        return this.request({
            url,
            method: 'PUT',
            body: payload
        });
    }

    async patch(url, payload = {}) {
        return this.request({
            url,
            method: 'PATCH',
            body: payload
        });
    }

    async delete(url, payload = {}) {
        return this.request({
            url,
            method: 'DELETE',
            body: payload
        });
    }

    async request({
        url,
        method,
        params = {},
        body
    }) {
        const query = Object.keys(params).length ? `?${queryString.stringify(params)}` : '';
        const token = await getValidToken();

        const headers = {};

        const fetchParameters = [
            `${this.apiUrl}${url}${query}`,
            {
                method,
                headers,
                body: method !== 'GET' ? JSON.stringify(body) : undefined
            }
        ];

        const response = await fetch(...fetchParameters);
        const json = await response.json();
        if (!response.ok) throw json;

        return json;
    }
}