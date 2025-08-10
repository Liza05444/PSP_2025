export class HeaderComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML() {
        return `
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">  <!-- Добавлен класс mb-3 -->
                    <div class="container-fluid">
                        <a class="navbar-brand" href="index.html">
                            <img src="../../images/zoo.png" class="d-inline-block align-top" style="height: 50px;">
                        </a>
                        
                        <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
                            <ul class="navbar-nav w-100 d-flex justify-content-between">
                                <li class="nav-item"><a class="nav-link text-white" href="https://kldzoo.ru/visit-and-tickets/">Посещения и билеты</a></li>
                                <li class="nav-item"><a class="nav-link text-white" href="https://kldzoo.ru/affiche/">Афиша</a></li>
                                <li class="nav-item"><a class="nav-link text-white" href="https://kldzoo.ru/animals-and-park/">Животные</a></li>
                                <li class="nav-item"><a class="nav-link text-white" href="pages/calculator/calculator.html">Калькулятор</a></li>
                                <li class="nav-item"><a class="nav-link text-white" href="index.html">Домой</a></li>
                                <li class="nav-item"><a class="nav-link text-white" href="https://github.com/Liza05444/PSP_2025">Об авторе</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="mb-3"></div>
            </div>
        `;
    }

    render() {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML());
    }
}