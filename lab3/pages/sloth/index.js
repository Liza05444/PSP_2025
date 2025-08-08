import { slothsData } from "../../api/mockData.js";
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

    render() {
        const sloth = slothsData.find(item => item.id === Number(this.id));

        if (!sloth) {
            this.parent.innerHTML = '<div class="p-3">Не найдено</div>';
            return;
        }

        this.parent.innerHTML = '';

        const header = new HeaderComponent(this.parent);
        header.render(this.goHome.bind(this));

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
}