class SlothUrls {
    constructor() {
        this.baseUrl = 'http://localhost:3000';
    }

    getSloths() {
        return `${this.baseUrl}/sloths`;
    }

    getSlothById(id) {
        return `${this.baseUrl}/sloths/${id}`;
    }

    createSloth() {
        return `${this.baseUrl}/sloths`;
    }

    removeSlothById(id) {
        return `${this.baseUrl}/sloths/${id}`;
    }

    updateSlothById(id) {
        return `${this.baseUrl}/sloths/${id}`;
    }
}

export const slothUrls = new SlothUrls();