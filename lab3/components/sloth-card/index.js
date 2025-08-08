export class SlothCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return `
            <div class="card" style="width: 300px; margin: 15px;">
                <div class="card-img-container" style="height: 200px; overflow: hidden;">
                    <img class="card-img-top" 
                         src="${data.image}" 
                         alt="${data.name}"
                         style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <p class="card-text" style="min-height: 60px;">${data.description}</p>
                    <div class="d-flex justify-content-between">
                        <button class="btn btn-success" 
                                id="click-card-${data.id}" 
                                data-id="${data.id}">
                            Подробнее
                        </button>
                        <button class="btn btn-outline-danger"
                                id="delete-card-${data.id}"
                                data-id="${data.id}">
                            Удалить
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    addListeners(data, { onClick, onDelete }) {
        document.getElementById(`click-card-${data.id}`)
            .addEventListener("click", (e) => onClick(data.id, e));
            
        document.getElementById(`delete-card-${data.id}`)
            .addEventListener("click", (e) => onDelete(data.id, e));
    }

    render(data, listeners = { onClick: () => {}, onDelete: () => {} }) {
        const html = this.getHTML(data);
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListeners(data, listeners);
    }
}