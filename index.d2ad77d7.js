!function(){var e="https://api.thecatapi.com/v1/images/search?breed_ids=",n="live_iTXFzPkHdC4oTgN59kH3GxZuT9eSiCYByP1BBv24lnnQqDZPMjk0iJuaj0bMHA4W",t=document.querySelector(".breed-select"),i=document.querySelector(".loader"),a=document.querySelector(".error"),c=document.querySelector(".cat-info");window.addEventListener("load",(function(){return e=t,n=i,c=a,void fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_iTXFzPkHdC4oTgN59kH3GxZuT9eSiCYByP1BBv24lnnQqDZPMjk0iJuaj0bMHA4W"}}).then((function(e){return n.classList.remove("hidden"),e.json()})).then((function(t){n.classList.add("hidden"),c.classList.add("hidden"),t.forEach((function(n){var t=document.createElement("option");t.value=n.id,t.textContent=n.name,e.append(t)}))})).catch((function(){c.classList.remove("hidden")}));var e,n,c})),t.addEventListener("change",(function(){return d=t.value,void fetch(e+d,{headers:{"x-api-key":n}}).then((function(e){return i.classList.remove("hidden"),e.json()})).then((function(e){i.classList.add("hidden"),a.classList.add("hidden");var n=e[0].breeds[0];c.innerHTML='\n         <div class="cat-info">\n         <img class="breed-image" src="https://cdn2.thecatapi.com/images/'.concat(n.reference_image_id,'.jpg" alt="Cat Image">\n         <div class="breed-text-info">\n            <p class="breed-description">').concat(n.description,'</p>\n            <p class="breed-temperament">').concat(n.temperament,"</p>\n         </div>\n         ")})).catch((function(){a.classList.remove("hidden")}));var d}))}();
//# sourceMappingURL=index.d2ad77d7.js.map
