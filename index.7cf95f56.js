function e(e,t){let n=t=t.filter((e=>{var t;return null!=(null===(t=e.image)||void 0===t?void 0:t.url)}));for(let t=0;t<n.length;t++){const r=n[t];let o=document.createElement("option");r.image&&(o.value=t,o.innerHTML=`${r.name}`,e.appendChild(o))}return n}const t=document.querySelector(".breed-select"),n=(document.querySelector(".loader"),document.querySelector(".error")),r=document.querySelector(".breed-image"),o=document.querySelector(".breed-description"),d=document.querySelector(".breed-temperament");function c(c){fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_iTXFzPkHdC4oTgN59kH3GxZuT9eSiCYByP1BBv24lnnQqDZPMjk0iJuaj0bMHA4W"}}).then((e=>e.json())).then((l=>{n.classList.add("hidden");let i=e(t,l),a="load"===c.type?0:t.value;r.src=i[a].image.url,o.textContent=i[a].description,d.textContent=i[a].temperament})).catch((function(e){n.classList.remove("hidden"),console.log(e)}))}window.addEventListener("load",c),t.addEventListener("change",c);
//# sourceMappingURL=index.7cf95f56.js.map
