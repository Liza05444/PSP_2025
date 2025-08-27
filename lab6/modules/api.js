export class Api {
    static async get(url) {
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            console.error('Error in GET request:', error);
            throw error;
        }
    }

    static async post(url, data) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data),
            });
            return await response.json();
        } catch (error) {
            console.error('Error in POST request:', error);
            throw error;
        }
    }

    static async delete(url) {
        try {
            const response = await fetch(url, {
                method: 'DELETE',
            });
            return await response.json();
        } catch (error) {
            console.error('Error in DELETE request:', error);
            throw error;
        }
    }

    static async patch(url, data) {
        try {
            const response = await fetch(url, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    return await response.json();
                } else {
                    return {};
                }
            } else {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        } catch (error) {
            console.error('Error in PATCH request:', error);
            throw error;
        }
    }
}