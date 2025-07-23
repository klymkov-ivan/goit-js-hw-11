import{a as i,S as c}from"./assets/vendor-D3cdi7O1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function l(a){const r="https://pixabay.com/api/?",o=new URLSearchParams({key:"51454782-596154fd852b0fd151dc4a6b5",image_type:"photo",orientation:"horizontal",safesearch:!0,q:a});return i(`${r}${o}`)}const u=document.querySelector(".gallery"),f=new c(".gallery a",{captionsData:"alt",captionDelay:250});function d(a){const r=a.map(({webformatURL:o,largeImageURL:s,tags:e})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img
            class="gallery-image"
            src="${o}"
            alt="${e}"
          />
        </a>
      </li>`).join("");u.insertAdjacentHTML("beforeend",r),f.refresh()}const m=document.querySelector("form");m.addEventListener("submit",p);function p(a){a.preventDefault();const r=a.target.elements["search-text"].value.trim();r&&l(r).then(o=>{d(o.data.hits)}).catch(o=>{console.log(o)})}
//# sourceMappingURL=index.js.map
