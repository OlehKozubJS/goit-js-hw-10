!function(){var e=document.querySelector(".breed-select"),t=(document.querySelector(".loader"),document.querySelector(".error"),document.querySelector(".cat-info")),n=[];fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_iTXFzPkHdC4oTgN59kH3GxZuT9eSiCYByP1BBv24lnnQqDZPMjk0iJuaj0bMHA4W"}}).then((function(e){return e.json()})).then((function(o){o=o.filter((function(e){var t;return null!=(null===(t=e.image)||void 0===t?void 0:t.url)})),n=o;for(var r=0;r<n.length;r++){var c=n[r],a=document.createElement("option");c.image&&(a.value=r,a.innerHTML="".concat(c.name),e.appendChild(a))}var u;u=0,t.textContent=n[u].temperament})).catch((function(e){console.log(e)}))}();
//# sourceMappingURL=index.1334ccbd.js.map
