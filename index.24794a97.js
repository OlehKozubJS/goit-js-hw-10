const e=document.querySelector(".breed-select"),t=document.querySelector(".loader"),n=document.querySelector(".error"),d=document.querySelector(".breed-image"),i=document.querySelector(".breed-description"),r=document.querySelector(".breed-temperament");window.addEventListener("load",(()=>{return o=e,a=t,c=n,s=d,l=i,m=r,void fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_iTXFzPkHdC4oTgN59kH3GxZuT9eSiCYByP1BBv24lnnQqDZPMjk0iJuaj0bMHA4W"}}).then((e=>(a.classList.remove("hidden"),e.json()))).then((e=>{a.classList.add("hidden"),c.classList.add("hidden");let t=e.filter((e=>{var t;return null!=(null===(t=e.image)||void 0===t?void 0:t.url)}));t.forEach((e=>{let t=document.createElement("option");e.image&&(t.value=e.id,t.innerHTML=`${e.name}`,o.append(t))}));const n=t[0];s.src=n.image.url,l.textContent=n.description,m.textContent=n.temperament})).catch((function(e){c.classList.remove("hidden"),console.log(e)}));var o,a,c,s,l,m})),e.addEventListener("change",(function(){fetch("https://api.thecatapi.com/v1/images/search?breed_ids="+e.value,{headers:{"x-api-key":"live_iTXFzPkHdC4oTgN59kH3GxZuT9eSiCYByP1BBv24lnnQqDZPMjk0iJuaj0bMHA4W"}}).then((e=>(t.classList.remove("hidden"),e.json()))).then((e=>{var o;t.classList.add("hidden"),n.classList.add("hidden"),console.log(e[0].breeds[0]),o=e[0].breeds[0],d.src=`https://cdn2.thecatapi.com/images/${o.reference_image_id}.jpg`,i.textContent=o.description,r.textContent=o.temperament})).catch((function(e){n.classList.remove("hidden"),console.log(e)}))}));
//# sourceMappingURL=index.24794a97.js.map
