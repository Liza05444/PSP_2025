import { ajax } from "../../modules/ajax.js";
import { slothUrls } from "../../modules/slothUrls.js";
import { SlothCardComponent } from "../../components/sloth-card/index.js";
import { HeaderComponent } from "../../components/header/index.js";
import { SlothPage } from "../sloth/index.js";
import { CreateSlothPage } from "../create-sloth/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
        this.filteredData = [];
        this.originalData = [];
    }
    
    get pageRoot() {
        return document.getElementById('main-page');
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
    
    getData() {
        ajax.get(slothUrls.getSloths(), (data) => {
            this.originalData = [...data];
            this.filteredData = [...data];
            
            this.renderFilters();
            this.renderAddButton();
            this.renderData();
        });
    }
    
    renderData() {
        const container = document.getElementById('sloths-container');
        if (!container) return;
        
        container.innerHTML = '';
        
        this.filteredData.forEach(sloth => {
            const card = new SlothCardComponent(container);
            card.render(sloth, {
                onClick: this.showDetails.bind(this),
                onDelete: this.deleteCard.bind(this)
            });
        });
    }
        
    goHome() {
        this.filteredData = [...this.originalData];
        this.renderData();
    }
    
    render() {
        this.parent.innerHTML = '';

        const header = new HeaderComponent(this.parent);
        header.render(this.goHome.bind(this));

        this.parent.insertAdjacentHTML('beforeend', this.getHTML());
        
        this.getData();
    }

    filterByHabitat(habitat) {
        this.filteredData = this.originalData.filter(sloth => 
            habitat === 'all' || sloth.habitat === habitat
        );
        this.renderData();
    }

    deleteCard(id) {
        if (!confirm('Вы уверены, что хотите удалить эту карточку?')) {
            return;
        }
        
        ajax.delete(slothUrls.removeSlothById(id), 
            () => {
                this.filteredData = this.filteredData.filter(sloth => sloth.id !== id);
                this.originalData = this.originalData.filter(sloth => sloth.id !== id);
                this.renderData();
            },
            (error) => {
                console.error('Ошибка при удалении:', error);
                alert('Не удалось удалить карточку');
            }
        );
    }

    renderFilters() {
        const filtersRoot = document.getElementById('filters');
        if (!filtersRoot || this.originalData.length === 0) return;

        const uniqueHabitats = Array.from(new Set(this.originalData.map(s => s.habitat)));
        
        let currentFilter = 'all';
        if (this.filteredData.length !== this.originalData.length) {
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
        actionsRoot.innerHTML = `
            <button id="create-card" class="btn btn-success">Добавить карточку</button>
        `;
        document.getElementById('create-card').addEventListener('click', () => this.goToCreate());
    }

    goToCreate() {
        const createPage = new CreateSlothPage(this.parent);
        createPage.render();
    }

    showDetails(id) {
        const slothPage = new SlothPage(this.parent, id);
        slothPage.render();
    }
}