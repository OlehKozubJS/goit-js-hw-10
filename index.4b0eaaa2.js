!function(){document.querySelector(".breed-select"),document.querySelector(".loader"),document.querySelector(".error"),document.querySelector(".cat-info");var e=document.querySelector(".breed-select"),i=document.querySelector(".loader"),c=document.querySelector(".error"),s=document.querySelector(".cat-info");window.addEventListener("load",(function(){return s=e,n=i,t=c,void fetch(breedUrl,{headers:{"x-api-key":api_key}}).then((function(e){return s.classList.replace("visible","hidden"),n.classList.replace("hidden","visible"),t.classList.replace("visible","hidden"),e.json()})).then((function(e){s.classList.replace("hidden","visible"),n.classList.replace("visible","hidden"),t.classList.replace("visible","hidden"),e.forEach((function(e){var i=document.createElement("option");i.value=e.id,i.textContent=e.name,s.append(i)}))})).catch((function(){s.classList.replace("visible","hidden"),n.classList.replace("visible","hidden"),t.classList.replace("hidden","visible")}));var s,n,t})),e.addEventListener("change",(function(){return n=e.value,void fetch(catUrl+n,{headers:{"x-api-key":api_key}}).then((function(e){return s.classList.replace("visible","hidden"),i.classList.replace("hidden","visible"),c.classList.replace("visible","hidden"),e.json()})).then((function(e){s.classList.replace("hidden","visible"),i.classList.replace("visible","hidden"),c.classList.replace("visible","hidden");var n=e[0].breeds[0];s.innerHTML='\n             <div class="cat-info-content">\n             <img class="breed-image" src="https://cdn2.thecatapi.com/images/'.concat(n.reference_image_id,'.jpg" alt="Cat Image">\n             <div class="breed-text-info">\n                <p class="breed-description">').concat(n.description,'</p>\n                <p class="breed-temperament">').concat(n.temperament,"</p>\n             </div>\n          ")})).catch((function(){s.classList.replace("visible","hidden"),i.classList.replace("visible","hidden"),c.classList.replace("hidden","visible")}));var n}))}();
//# sourceMappingURL=index.4b0eaaa2.js.map
