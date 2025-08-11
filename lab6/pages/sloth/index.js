import { Api } from "../../modules/api.js";
import { slothUrls } from "../../modules/slothUrls.js";
import { HeaderComponent } from "../../components/header/index.js";
import { AccordionComponent } from "../../components/accordion/index.js";
import { SlothComponent } from "../../components/sloth/index.js";
import { MainPage } from "../main/index.js";

export class SlothPage {
    constructor(parent, id) {
        this.parent = parent;
        this.id = id;
    }

    goHome() {
        const main = new MainPage(this.parent);
        main.render();
    }

    async getData() {
        try {
            const data = await Api.get(slothUrls.getSlothById(this.id));
            this.renderData(data);
        } catch (error) {
            console.error('Error fetching sloth data:', error);
            this.parent.innerHTML = '<div class="p-3">Ошибка при загрузке данных</div>';
        }
    }

    renderData(sloth) {
        if (!sloth) {
            this.parent.innerHTML = '<div class="p-3">Ленивец не найден</div>';
            return;
        }

        const details = new SlothComponent(this.parent);
        details.render({
            image: sloth.image,
            name: sloth.name,
            description: sloth.description,
            habitat: sloth.habitat,
            diet: sloth.diet,
            facts: sloth.facts
        });

        const accordion = new AccordionComponent(this.parent);
        accordion.render([
            {
                title: "Интересные факты",
                content: sloth.facts.map(f => `• ${f}`).join('<br>')
            }
        ]);
    }

    render() {
        this.parent.innerHTML = '';

        const header = new HeaderComponent(this.parent);
        header.render(this.goHome.bind(this));

        this.getData();
    }
}