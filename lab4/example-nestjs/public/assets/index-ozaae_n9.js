(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=e(a);fetch(a.href,r)}})();class m{constructor(){this.baseUrl="http://localhost:3000"}getSloths(){return`${this.baseUrl}/sloths`}slothDetail(t){return`${this.baseUrl}/sloths/${t}`}createSloth(){return`${this.baseUrl}/sloths`}removeSlothById(t){return`${this.baseUrl}/sloths/${t}`}}const o=new m;class l{static async get(t){try{return await(await fetch(t)).json()}catch(e){throw console.error("Error in GET request:",e),e}}static async post(t,e){try{return await(await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()}catch(s){throw console.error("Error in POST request:",s),s}}static async delete(t){try{return await(await fetch(t,{method:"DELETE"})).json()}catch(e){throw console.error("Error in DELETE request:",e),e}}static async patch(t,e){try{const s=await fetch(t,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(s.ok){const a=s.headers.get("content-type");return a&&a.includes("application/json")?await s.json():{}}else throw new Error(`HTTP error! status: ${s.status}`)}catch(s){throw console.error("Error in PATCH request:",s),s}}}class h{constructor(t){this.parent=t}getHTML(t){return`
            <div class="card" style="width: 300px; margin: 15px;">
                <div class="card-img-container" style="height: 200px; overflow: hidden;">
                    <img class="card-img-top" 
                         src="${t.image}" 
                         alt="${t.name}"
                         style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${t.name}</h5>
                    <p class="card-text" style="min-height: 60px;">${t.description}</p>
                    <div class="d-flex justify-content-between">
                        <button class="btn btn-success" 
                                id="click-card-${t.id}" 
                                data-id="${t.id}">
                            Подробнее
                        </button>
                        <button class="btn btn-outline-danger"
                                id="delete-card-${t.id}"
                                data-id="${t.id}">
                            Удалить
                        </button>
                    </div>
                </div>
            </div>
        `}addListeners(t,{onClick:e,onDelete:s}){document.getElementById(`click-card-${t.id}`).addEventListener("click",a=>e(t.id,a)),document.getElementById(`delete-card-${t.id}`).addEventListener("click",a=>s(t.id,a))}render(t,e={onClick:()=>{},onDelete:()=>{}}){const s=this.getHTML(t);this.parent.insertAdjacentHTML("beforeend",s),this.addListeners(t,e)}}class c{constructor(t){this.parent=t}getHTML(){return`
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
        `}render(){this.parent.insertAdjacentHTML("beforeend",this.getHTML())}}class u{constructor(t){this.parent=t}getHTML(t){return`
            <div class="d-flex justify-content-center">
                <div class="accordion" id="slothAccordion">
                    ${t.map((e,s)=>`
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="heading${s}">
                        <button class="accordion-button ${s===0?"":"collapsed"}" 
                            type="button" data-bs-toggle="collapse" 
                            data-bs-target="#collapse${s}" aria-expanded="${s===0?"true":"false"}" 
                            aria-controls="collapse${s}">
                            ${e.title}
                        </button>
                        </h2>
                        <div id="collapse${s}" class="accordion-collapse collapse ${s===0?"show":""}" 
                        aria-labelledby="heading${s}" data-bs-parent="#slothAccordion">
                        <div class="accordion-body">
                            ${e.content}
                        </div>
                        </div>
                    </div>
                    `).join("")}
                </div>
            </div>
        `}render(t){this.parent.insertAdjacentHTML("beforeend",this.getHTML(t))}}class f{constructor(t){this.parent=t}getHTML(t){return`
            <div class="d-flex justify-content-center">
                <div class="card mb-3" style="max-width: 720px;">
                    <div class="row g-0">
                        <div class="col-md-5">
                            <img src="${t.image}" class="img-fluid" alt="${t.name}">
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <h5 class="card-title">${t.name}</h5>
                                <p class="card-text">${t.description}</p>
                                <p class="card-text mb-0"><strong>Среда обитания:</strong> ${t.habitat}</p>
                                <p class="card-text"><strong>Питание:</strong> ${t.diet}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `}render(t){const e=this.getHTML(t);this.parent.insertAdjacentHTML("beforeend",e)}}class p{constructor(t){this.parent=t,this.slothId=null}goHome(){new d(this.parent).render()}getHTML(){return`
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
        `}async loadSlothData(t){try{const e=await l.get(o.slothDetail(t));document.getElementById("name").value=e.name,document.getElementById("image").value=e.image,document.getElementById("description").value=e.description,document.getElementById("habitat").value=e.habitat,document.getElementById("diet").value=e.diet,document.getElementById("facts").value=e.facts.join(`
`)}catch(e){console.error("Error loading sloth data:",e);const s=document.getElementById("message");s.textContent=`Ошибка при загрузке данных ленивца: ${e.message||"Не удалось загрузить данные"}`,s.className="mt-3 alert alert-danger"}}async handleSubmit(t){t.preventDefault();const e=document.getElementById("message");e.textContent="Отправка данных...",e.className="mt-3 alert alert-info";const s={name:document.getElementById("name").value,image:document.getElementById("image").value,description:document.getElementById("description").value,habitat:document.getElementById("habitat").value,diet:document.getElementById("diet").value,facts:document.getElementById("facts").value.split(`
`).filter(a=>a.trim()!=="")};try{const a=await l.patch(o.slothDetail(this.slothId),s);e.textContent="Карточка успешно обновлена!",e.className="mt-3 alert alert-success",setTimeout(()=>this.goHome(),2e3)}catch(a){console.error("Error updating sloth:",a),e.textContent=`Ошибка: ${a.message||"Не удалось обновить карточку"}`,e.className="mt-3 alert alert-danger"}}render(t){this.slothId=t,this.parent.innerHTML="",new c(this.parent).render(this.goHome.bind(this)),this.parent.insertAdjacentHTML("beforeend",this.getHTML()),this.slothId&&this.loadSlothData(this.slothId),document.getElementById("sloth-form").addEventListener("submit",this.handleSubmit.bind(this))}}class g{constructor(t,e){this.parent=t,this.id=e}goHome(){new d(this.parent).render()}async getData(){try{const t=await l.get(o.slothDetail(this.id));this.renderData(t)}catch(t){console.error("Error fetching sloth data:",t),this.parent.innerHTML='<div class="p-3">Ошибка при загрузке данных</div>'}}renderData(t){if(!t){this.parent.innerHTML='<div class="p-3">Ленивец не найден</div>';return}new f(this.parent).render({image:t.image,name:t.name,description:t.description,habitat:t.habitat,diet:t.diet,facts:t.facts}),new u(this.parent).render([{title:"Интересные факты",content:t.facts.map(n=>`• ${n}`).join("<br>")}]);const a=document.createElement("button");a.className="btn btn-success mt-3",a.textContent="Редактировать",a.addEventListener("click",()=>this.goToUpdate(t.id));const r=document.createElement("div");r.className="d-flex justify-content-center",r.appendChild(a),this.parent.appendChild(r)}goToUpdate(t){new p(this.parent).render(t)}render(){this.parent.innerHTML="",new c(this.parent).render(this.goHome.bind(this)),this.getData()}}class b{constructor(t){this.parent=t}goHome(){new d(this.parent).render()}getHTML(){return`
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
        `}async handleSubmit(t){t.preventDefault();const e=document.getElementById("message");e.textContent="Отправка данных...",e.className="mt-3 alert alert-info";const s={name:document.getElementById("name").value,image:document.getElementById("image").value,description:document.getElementById("description").value,habitat:document.getElementById("habitat").value,diet:document.getElementById("diet").value,facts:document.getElementById("facts").value.split(`
`).filter(a=>a.trim()!=="")};try{const a=await l.post(o.createSloth(),s);e.textContent="Карточка успешно создана!",e.className="mt-3 alert alert-success",document.getElementById("sloth-form").reset(),setTimeout(()=>this.goHome(),2e3)}catch(a){console.error("Error creating sloth:",a),e.textContent=`Ошибка: ${a.message||"Не удалось создать карточку"}`,e.className="mt-3 alert alert-danger"}}render(){this.parent.innerHTML="",new c(this.parent).render(this.goHome.bind(this)),this.parent.insertAdjacentHTML("beforeend",this.getHTML()),document.getElementById("sloth-form").addEventListener("submit",this.handleSubmit.bind(this))}}class d{constructor(t){this.parent=t,this.filteredData=[],this.originalData=[]}get pageRoot(){return document.getElementById("main-page")}getHTML(){return`
            <div id="main-page" class="container">
                <div id="filters" class="mb-3"></div>
                <div id="sloths-container" class="row mt-3"></div>
                <div id="actions" class="mt-3 mb-3"></div>
            </div>
        `}async getData(){try{const t=await l.get(o.getSloths());this.originalData=[...t],this.filteredData=[...t],this.renderFilters(),this.renderAddButton(),this.renderData()}catch(t){console.error("Error fetching sloths:",t),alert("Не удалось загрузить данные о ленивцах")}}renderData(){const t=document.getElementById("sloths-container");t&&(t.innerHTML="",this.filteredData.forEach(e=>{new h(t).render(e,{onClick:this.showDetails.bind(this),onDelete:this.deleteCard.bind(this)})}))}goHome(){this.filteredData=[...this.originalData],this.renderData()}render(){this.parent.innerHTML="",new c(this.parent).render(this.goHome.bind(this)),this.parent.insertAdjacentHTML("beforeend",this.getHTML()),this.getData()}filterByHabitat(t){this.filteredData=this.originalData.filter(e=>t==="all"||e.habitat===t),this.renderData()}async deleteCard(t){if(confirm("Вы уверены, что хотите удалить эту карточку?"))try{await l.delete(o.removeSlothById(t)),this.filteredData=this.filteredData.filter(e=>e.id!==t),this.originalData=this.originalData.filter(e=>e.id!==t),this.renderData()}catch(e){console.error("Ошибка при удалении:",e),alert("Не удалось удалить карточку")}}renderFilters(){const t=document.getElementById("filters");if(!t||this.originalData.length===0)return;const e=Array.from(new Set(this.originalData.map(n=>n.habitat)));let s="all";this.filteredData.length!==this.originalData.length&&(s=this.filteredData[0]?.habitat||"all");const a=["all",...e].map(n=>`<option value="${n}" ${n===s?"selected":""}>${n==="all"?"Все места обитания":n}</option>
            `).join("");t.innerHTML=`
            <label class="form-label me-2">Фильтр по среде обитания:</label>
            <select id="habitat-filter" class="form-select w-auto d-inline-block">${a}</select>
        `,document.getElementById("habitat-filter").addEventListener("change",n=>this.filterByHabitat(n.target.value))}renderAddButton(){const t=document.getElementById("actions");t&&(t.innerHTML=`
            <button id="create-card" class="btn btn-success">Добавить карточку</button>
        `,document.getElementById("create-card").addEventListener("click",()=>this.goToCreate()))}goToCreate(){new b(this.parent).render()}showDetails(t){new g(this.parent,t).render()}}const v=document.getElementById("root"),y=new d(v);y.render();
