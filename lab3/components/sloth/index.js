export class SlothComponent {
    constructor(parent) {
        this.parent = parent
    }

    getHTML(data) {
        return `
            <div class="d-flex justify-content-center">
                <div class="card mb-3" style="max-width: 720px;">
                    <div class="row g-0">
                        <div class="col-md-5">
                            <img src="${data.image}" class="img-fluid" alt="${data.name}">
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <h5 class="card-title">${data.name}</h5>
                                <p class="card-text">${data.description}</p>
                                <p class="card-text mb-0"><strong>Среда обитания:</strong> ${data.habitat}</p>
                                <p class="card-text"><strong>Питание:</strong> ${data.diet}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    render(data) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}