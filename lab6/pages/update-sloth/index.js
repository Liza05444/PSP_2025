import { Api } from "../../modules/api.js";
import { slothUrls } from "../../modules/slothUrls.js";
import { HeaderComponent } from "../../components/header/index.js";
import { MainPage } from "../main/index.js";

export class UpdateSlothPage {
    constructor(parent) {
        this.parent = parent;
        this.slothId = null;
    }

    goHome() {
        const main = new MainPage(this.parent);
        main.render();
    }

    getHTML() {
        return `
            <div id="update-sloth-page" class="container mt-4" style="max-width: 600px;">
                <h2 class="text-center mb-4">Редактировать карточку ленивца</h2>
                <form id="sloth-form" class="mx-auto">
                    <div class="mb-3">
                        <label for="name" class="form-label">Название</label>
                        <input type="text" class="form-control form-control-sm" id="name" required>
                    </div>
                    <div class="mb-3">
                        <label for="image" class="form-label">URL изображения</label>
                        <input type="text" class="form-control form-control-sm" id="image" required>
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">Описание</label>
                        <textarea class="form-control form-control-sm" id="description" rows="2" required></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="habitat" class="form-label">Среда обитания</label>
                        <input type="text" class="form-control form-control-sm" id="habitat" required>
                    </div>
                    <div class="mb-3">
                        <label for="diet" class="form-label">Рацион</label>
                        <input type="text" class="form-control form-control-sm" id="diet" required>
                    </div>
                    <div class="mb-3">
                        <label for="facts" class="form-label">Факты (каждый с новой строки)</label>
                        <textarea class="form-control form-control-sm" id="facts" rows="3"></textarea>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-success btn-sm">Редактировать</button>
                    </div>
                </form>
                <div id="message" class="mt-3 text-center"></div>
            </div>
        `;
    }

    async loadSlothData(slothId) {
        try {
            const sloth = await Api.get(slothUrls.slothDetail(slothId));
            document.getElementById('name').value = sloth.name;
            document.getElementById('image').value = sloth.image;
            document.getElementById('description').value = sloth.description;
            document.getElementById('habitat').value = sloth.habitat;
            document.getElementById('diet').value = sloth.diet;
            document.getElementById('facts').value = sloth.facts.join('\n');
        } catch (error) {
            console.error('Error loading sloth data:', error);
            const messageEl = document.getElementById('message');
            messageEl.textContent = `Ошибка при загрузке данных ленивца: ${error.message || 'Не удалось загрузить данные'}`;
            messageEl.className = 'mt-3 alert alert-danger';
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const messageEl = document.getElementById('message');
        messageEl.textContent = 'Отправка данных...';
        messageEl.className = 'mt-3 alert alert-info';

        const updatedSloth = {
            name: document.getElementById('name').value,
            image: document.getElementById('image').value,
            description: document.getElementById('description').value,
            habitat: document.getElementById('habitat').value,
            diet: document.getElementById('diet').value,
            facts: document.getElementById('facts').value.split('\n').filter(f => f.trim() !== '')
        };

        try {
            const response = await Api.patch(slothUrls.slothDetail(this.slothId), updatedSloth);
            
            messageEl.textContent = 'Карточка успешно обновлена!';
            messageEl.className = 'mt-3 alert alert-success';

            setTimeout(() => this.goHome(), 2000);
        } catch (error) {
            console.error('Error updating sloth:', error);
            messageEl.textContent = `Ошибка: ${error.message || 'Не удалось обновить карточку'}`;
            messageEl.className = 'mt-3 alert alert-danger';
        }
    }

    render(slothId) {
        this.slothId = slothId;
        this.parent.innerHTML = '';

        const header = new HeaderComponent(this.parent);
        header.render(this.goHome.bind(this));

        this.parent.insertAdjacentHTML('beforeend', this.getHTML());
        
        if (this.slothId) {
            this.loadSlothData(this.slothId);
        }

        const form = document.getElementById('sloth-form');
        form.addEventListener('submit', this.handleSubmit.bind(this));
    }
}
