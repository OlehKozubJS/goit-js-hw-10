const e=document.querySelector(".breed-select"),t=document.querySelector(".loader"),d=document.querySelector(".error"),s=document.querySelector(".cat-info");window.addEventListener("load",(()=>{return s=e,a=t,i=d,void fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_iTXFzPkHdC4oTgN59kH3GxZuT9eSiCYByP1BBv24lnnQqDZPMjk0iJuaj0bMHA4W"}}).then((e=>(a.classList.remove("hidden"),e.json()))).then((e=>{a.classList.add("hidden"),i.classList.add("hidden"),e.forEach((e=>{let t=document.createElement("option");t.value=e.id,t.textContent=e.name,s.append(t)}))})).catch((()=>{i.classList.remove("hidden")}));var s,a,i})),e.addEventListener("change",(()=>{return a=e.value,void fetch("https://api.thecatapi.com/v1/images/search?breed_ids="+a,{headers:{"x-api-key":"live_iTXFzPkHdC4oTgN59kH3GxZuT9eSiCYByP1BBv24lnnQqDZPMjk0iJuaj0bMHA4W"}}).then((e=>(s.classList.add("hidden"),d.classList.add("hidden"),t.classList.remove("hidden"),e.json()))).then((e=>{t.classList.add("hidden"),s.classList.remove("hidden");const d=e[0].breeds[0];s.innerHTML=`\n            <div class="cat-info-content">\n            <img class="breed-image" src="https://cdn2.thecatapi.com/images/${d.reference_image_id}.jpg" alt="Cat Image">\n            <div class="breed-text-info">\n               <p class="breed-description">${d.description}</p>\n               <p class="breed-temperament">${d.temperament}</p>\n            </div>\n         `})).catch((()=>{s.classList.add("hidden"),d.classList.remove("hidden")}));var a}));
//# sourceMappingURL=index.5dfcce8d.js.map
