import { ajax } from "../../modules/ajax.js";
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

    getData() {
        ajax.get(slothUrls.getSlothById(this.id), (data) => {
            this.renderData(data);
        });
    }

    renderData(sloth) {
        if (!sloth) {
            this.parent.innerHTML = '<div class="p-3">Не найден</div>';
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