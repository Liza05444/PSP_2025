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
}