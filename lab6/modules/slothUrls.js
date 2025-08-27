class SlothUrls {
    constructor() {
        this.baseUrl = 'http://localhost:3000';
    }

    getSloths() {
        return `${this.baseUrl}/sloths`;
    }

    slothDetail(id) {
        return `${this.baseUrl}/sloths/${id}`;
    }

    createSloth() {
        return `${this.baseUrl}/sloths`;
    }

    removeSlothById(id) {
        return `${this.baseUrl}/sloths/${id}`;
    }
}

export const slothUrls = new SlothUrls();