(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();class h{constructor(){this.baseUrl="http://localhost:3000"}getSloths(){return`${this.baseUrl}/sloths`}getSlothById(t){return`${this.baseUrl}/sloths/${t}`}createSloth(){return`${this.baseUrl}/sloths`}removeSlothById(t){return`${this.baseUrl}/sloths/${t}`}updateSlothById(t){return`${this.baseUrl}/sloths/${t}`}}const o=new h;class l{static async get(t){try{return await(await fetch(t)).json()}catch(e){throw console.error("Error in GET request:",e),e}}static async post(t,e){try{return await(await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()}catch(a){throw console.error("Error in POST request:",a),a}}static async delete(t){try{return await(await fetch(t,{method:"DELETE"})).json()}catch(e){throw console.error("Error in DELETE request:",e),e}}}class m{constructor(t){this.parent=t}getHTML(t){return`
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
        `}addListeners(t,{onClick:e,onDelete:a}){document.getElementById(`click-card-${t.id}`).addEventListener("click",r=>e(t.id,r)),document.getElementById(`delete-card-${t.id}`).addEventListener("click",r=>a(t.id,r))}render(t,e={onClick:()=>{},onDelete:()=>{}}){const a=this.getHTML(t);this.parent.insertAdjacentHTML("beforeend",a),this.addListeners(t,e)}}class c{constructor(t){this.parent=t}getHTML(){return`
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
                    ${t.map((e,a)=>`
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="heading${a}">
                        <button class="accordion-button ${a===0?"":"collapsed"}" 
                            type="button" data-bs-toggle="collapse" 
                            data-bs-target="#collapse${a}" aria-expanded="${a===0?"true":"false"}" 
                            aria-controls="collapse${a}">
                            ${e.title}
                        </button>
                        </h2>
                        <div id="collapse${a}" class="accordion-collapse collapse ${a===0?"show":""}" 
                        aria-labelledby="heading${a}" data-bs-parent="#slothAccordion">
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
        `}render(t){const e=this.getHTML(t);this.parent.insertAdjacentHTML("beforeend",e)}}class g{constructor(t,e){this.parent=t,this.id=e}goHome(){new d(this.parent).render()}async getData(){try{const t=await l.get(o.getSlothById(this.id));this.renderData(t)}catch(t){console.error("Error fetching sloth data:",t),this.parent.innerHTML='<div class="p-3">Ошибка при загрузке данных</div>'}}renderData(t){if(!t){this.parent.innerHTML='<div class="p-3">Ленивец не найден</div>';return}new f(this.parent).render({image:t.image,name:t.name,description:t.description,habitat:t.habitat,diet:t.diet,facts:t.facts}),new u(this.parent).render([{title:"Интересные факты",content:t.facts.map(r=>`• ${r}`).join("<br>")}])}render(){this.parent.innerHTML="",new c(this.parent).render(this.goHome.bind(this)),this.getData()}}class p{constructor(t){this.parent=t}goHome(){new d(this.parent).render()}getHTML(){return`
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
        `}async handleSubmit(t){t.preventDefault();const e=document.getElementById("message");e.textContent="Отправка данных...",e.className="mt-3 alert alert-info";const a={name:document.getElementById("name").value,image:document.getElementById("image").value,description:document.getElementById("description").value,habitat:document.getElementById("habitat").value,diet:document.getElementById("diet").value,facts:document.getElementById("facts").value.split(`
`).filter(r=>r.trim()!=="")};try{const r=await l.post(o.createSloth(),a);e.textContent="Карточка успешно создана!",e.className="mt-3 alert alert-success",document.getElementById("sloth-form").reset(),setTimeout(()=>this.goHome(),2e3)}catch(r){console.error("Error creating sloth:",r),e.textContent=`Ошибка: ${r.message||"Не удалось создать карточку"}`,e.className="mt-3 alert alert-danger"}}render(){this.parent.innerHTML="",new c(this.parent).render(this.goHome.bind(this)),this.parent.insertAdjacentHTML("beforeend",this.getHTML()),document.getElementById("sloth-form").addEventListener("submit",this.handleSubmit.bind(this))}}class d{constructor(t){this.parent=t,this.filteredData=[],this.originalData=[]}get pageRoot(){return document.getElementById("main-page")}getHTML(){return`
            <div id="main-page" class="container">
                <div id="filters" class="mb-3"></div>
                <div id="sloths-container" class="row mt-3"></div>
                <div id="actions" class="mt-3 mb-3"></div>
            </div>
        `}async getData(){try{const t=await l.get(o.getSloths());this.originalData=[...t],this.filteredData=[...t],this.renderFilters(),this.renderAddButton(),this.renderData()}catch(t){console.error("Error fetching sloths:",t),alert("Не удалось загрузить данные о ленивцах")}}renderData(){const t=document.getElementById("sloths-container");t&&(t.innerHTML="",this.filteredData.forEach(e=>{new m(t).render(e,{onClick:this.showDetails.bind(this),onDelete:this.deleteCard.bind(this)})}))}goHome(){this.filteredData=[...this.originalData],this.renderData()}render(){this.parent.innerHTML="",new c(this.parent).render(this.goHome.bind(this)),this.parent.insertAdjacentHTML("beforeend",this.getHTML()),this.getData()}filterByHabitat(t){this.filteredData=this.originalData.filter(e=>t==="all"||e.habitat===t),this.renderData()}async deleteCard(t){if(confirm("Вы уверены, что хотите удалить эту карточку?"))try{await l.delete(o.removeSlothById(t)),this.filteredData=this.filteredData.filter(e=>e.id!==t),this.originalData=this.originalData.filter(e=>e.id!==t),this.renderData()}catch(e){console.error("Ошибка при удалении:",e),alert("Не удалось удалить карточку")}}renderFilters(){const t=document.getElementById("filters");if(!t||this.originalData.length===0)return;const e=Array.from(new Set(this.originalData.map(i=>i.habitat)));let a="all";this.filteredData.length!==this.originalData.length&&(a=this.filteredData[0]?.habitat||"all");const r=["all",...e].map(i=>`<option value="${i}" ${i===a?"selected":""}>${i==="all"?"Все места обитания":i}</option>
            `).join("");t.innerHTML=`
            <label class="form-label me-2">Фильтр по среде обитания:</label>
            <select id="habitat-filter" class="form-select w-auto d-inline-block">${r}</select>
        `,document.getElementById("habitat-filter").addEventListener("change",i=>this.filterByHabitat(i.target.value))}renderAddButton(){const t=document.getElementById("actions");t&&(t.innerHTML=`
            <button id="create-card" class="btn btn-success">Добавить карточку</button>
        `,document.getElementById("create-card").addEventListener("click",()=>this.goToCreate()))}goToCreate(){new p(this.parent).render()}showDetails(t){new g(this.parent,t).render()}}const b=document.getElementById("root"),v=new d(b);v.render();
