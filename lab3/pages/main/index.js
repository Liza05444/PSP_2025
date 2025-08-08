import { slothsData } from "../../api/mockData.js";
import { SlothCardComponent } from "../../components/sloth-card/index.js";
import { HeaderComponent } from "../../components/header/index.js";
import { SlothPage } from "../sloth/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
        this.filteredData = [...slothsData];
    }
    
    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return `
            <div id="main-page" class="container">
                <div id="filters" class="mb-3"></div>
                <div id="sloths-container" class="row mt-3"></div>
                <div id="actions" class="mt-3 mb-3"></div>
            </div>
        `;
    }
        
    goHome() {
        this.filteredData = [...slothsData];
        this.render();
    }
    
    render() {
        this.parent.innerHTML = '';

        const header = new HeaderComponent(this.parent);
        header.render(this.goHome.bind(this));

        this.parent.insertAdjacentHTML('beforeend', this.getHTML());

        this.renderFilters();

        const container = document.getElementById('sloths-container');
        container.innerHTML = '';
        this.filteredData.forEach(sloth => {
            const card = new SlothCardComponent(container);
            card.render(sloth, {
                onClick: this.showDetails.bind(this),
                onDelete: this.deleteCard.bind(this)
            });
        });

        this.renderAddButton();
    }

    filterByHabitat(habitat) {
        this.filteredData = slothsData.filter(sloth => 
            habitat === 'all' || sloth.habitat === habitat
        );
        this.render();
    }

    deleteCard(id) {
        this.filteredData = this.filteredData.filter(sloth => sloth.id !== id);
        this.render();
    }

    addCard() {
        if (this.filteredData.length === 0) return;
        const newCard = { ...this.filteredData[0], id: Date.now() };
        this.filteredData.push(newCard);
        this.render();
    }

    renderFilters() {
        const filtersRoot = document.getElementById('filters');
        if (!filtersRoot) return;

        const uniqueHabitats = Array.from(new Set(slothsData.map(s => s.habitat)));
        
        let currentFilter = 'all';
        if (this.filteredData.length !== slothsData.length) {
            currentFilter = this.filteredData[0]?.habitat || 'all';
        }

        const options = ['all', ...uniqueHabitats]
            .map(h => `<option value="${h}" ${h === currentFilter ? 'selected' : ''}>${h === 'all' ? 'Все места обитания' : h}</option>
            `).join('');

        filtersRoot.innerHTML = `
            <label class="form-label me-2">Фильтр по среде обитания:</label>
            <select id="habitat-filter" class="form-select w-auto d-inline-block">${options}</select>
        `;

        const select = document.getElementById('habitat-filter');
        select.addEventListener('change', (e) => this.filterByHabitat(e.target.value));
    }

    renderAddButton() {
        const actionsRoot = document.getElementById('actions');
        if (!actionsRoot) return;
        actionsRoot.innerHTML = '';
        const buttonHtml = `<button id="add-card" class="btn btn-success">Добавить карточку</button>`;
        actionsRoot.insertAdjacentHTML('beforeend', buttonHtml);
        document.getElementById('add-card').addEventListener('click', () => this.addCard());
    }

    showDetails(id) {
        const slothPage = new SlothPage(this.parent, id);
        slothPage.render();
    }
}