export class AccordionComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(items) {
        return `
            <div class="d-flex justify-content-center">
                <div class="accordion" id="slothAccordion">
                    ${items.map((item, index) => `
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" 
                            type="button" data-bs-toggle="collapse" 
                            data-bs-target="#collapse${index}" aria-expanded="${index === 0 ? 'true' : 'false'}" 
                            aria-controls="collapse${index}">
                            ${item.title}
                        </button>
                        </h2>
                        <div id="collapse${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" 
                        aria-labelledby="heading${index}" data-bs-parent="#slothAccordion">
                        <div class="accordion-body">
                            ${item.content}
                        </div>
                        </div>
                    </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    render(items) {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML(items));
    }
}