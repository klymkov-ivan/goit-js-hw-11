import{a as f,S as u,i as m}from"./assets/vendor-5YrzWRhu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function p(s){const r="https://pixabay.com/api/?",o=new URLSearchParams({key:"51454782-596154fd852b0fd151dc4a6b5",image_type:"photo",orientation:"horizontal",safesearch:!0,q:s,per_page:"6"});return f(`${r}${o}`)}const n=document.querySelector(".gallery"),d=new u(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:a,comments:c,downloads:l})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <img
            class="gallery-image"
            src="${o}"
            alt="${e}"
          />
        </a>
        <div class="description-wrappwer">
            <p class="text-likes text">Likes ${t}</p>
            <p class="text-views text">Views ${a}</p>
            <p class="text-comments text">Comments ${c}</p>
            <p class="text-comments text">Downloads ${l}</p>
        </div>
      </li>`).join("");n.insertAdjacentHTML("beforeend",r),d.refresh()}function g(){n.innerHTML=""}const h=document.querySelector("form");h.addEventListener("submit",x);function x(s){s.preventDefault();const r=s.target.elements["search-text"].value.trim();r&&(g(),p(r).then(o=>{y(o.data.hits),!o.data.hits.length>0&&m.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",color:"#ef4040",messageColor:"#fff",titleColor:"#fff"})}).catch(o=>{console.log(o)}))}
//# sourceMappingURL=index.js.map
