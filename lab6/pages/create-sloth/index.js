import { Api } from "../../modules/api.js";
import { slothUrls } from "../../modules/slothUrls.js";
import { HeaderComponent } from "../../components/header/index.js";
import { MainPage } from "../main/index.js";

export class CreateSlothPage {
    constructor(parent) {
        this.parent = parent;
    }

    goHome() {
        const main = new MainPage(this.parent);
        main.render();
    }

    getHTML() {
        return `
            <div id="create-sloth-page" class="container mt-4" style="max-width: 600px;">
                <h2 class="text-center mb-4">Создать нового ленивца</h2>
                <form id="sloth-form" class="mx-auto">
                    <div class="mb-3">
                        <label for="name" class="form-label">Название</label>
                        <input type="text" class="form-control form-control-sm" id="name" required>
                    </div>
                    <div class="mb-3">
                        <label for="image" class="form-label">URL изображения</label>
                        <input type="url" class="form-control form-control-sm" id="image" required>
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
                        <button type="submit" class="btn btn-success btn-sm">Создать</button>
                    </div>
                </form>
                <div id="message" class="mt-3 text-center"></div>
            </div>
        `;
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const messageEl = document.getElementById('message');
        messageEl.textContent = 'Отправка данных...';
        messageEl.className = 'mt-3 alert alert-info';

        const newSloth = {
            name: document.getElementById('name').value,
            image: document.getElementById('image').value,
            description: document.getElementById('description').value,
            habitat: document.getElementById('habitat').value,
            diet: document.getElementById('diet').value,
            facts: document.getElementById('facts').value.split('\n').filter(f => f.trim() !== '')
        };

        try {
            const response = await Api.post(slothUrls.createSloth(), newSloth);
            
            messageEl.textContent = 'Карточка успешно создана!';
            messageEl.className = 'mt-3 alert alert-success';

            document.getElementById('sloth-form').reset();

            setTimeout(() => this.goHome(), 2000);
        } catch (error) {
            console.error('Error creating sloth:', error);
            messageEl.textContent = `Ошибка: ${error.message || 'Не удалось создать карточку'}`;
            messageEl.className = 'mt-3 alert alert-danger';
        }
    }

    render() {
        this.parent.innerHTML = '';

        const header = new HeaderComponent(this.parent);
        header.render(this.goHome.bind(this));

        this.parent.insertAdjacentHTML('beforeend', this.getHTML());
        
        const form = document.getElementById('sloth-form');
        form.addEventListener('submit', this.handleSubmit.bind(this));
    }
}