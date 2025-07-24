import{a as p,S as y,i as l}from"./assets/vendor-5YrzWRhu.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function c(r){const o="https://pixabay.com/api/?",s=new URLSearchParams({key:"51454782-596154fd852b0fd151dc4a6b5",image_type:"photo",orientation:"horizontal",safesearch:!0,q:r,per_page:"6"});return p(`${o}${s}`).then(a=>a.data)}const f=document.querySelector(".gallery"),u=document.querySelector(".loader"),g=new y(".gallery a",{captionsData:"alt",captionDelay:250});function m(r){const o=r.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:d,downloads:h})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img
            class="gallery-image"
            src="${s}"
            alt="${e}"
          />
        </a>
        <div class="description-wrappwer">
            <p class="text-likes text">Likes ${t}</p>
            <p class="text-views text">Views ${i}</p>
            <p class="text-comments text">Comments ${d}</p>
            <p class="text-comments text">Downloads ${h}</p>
        </div>
      </li>`).join("");f.insertAdjacentHTML("beforeend",o),g.refresh()}function L(){f.innerHTML=""}function x(){u.classList.remove("hidden")}function n(){u.classList.add("hidden")}const b=document.querySelector("form");b.addEventListener("submit",w);function w(r){r.preventDefault(),x();const o=r.target.elements["search-text"].value.trim();if(!o){n();return}L(),c(o).then(s=>{m(s.hits),s.hits.length||l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",color:"#ef4040",messageColor:"#fff",titleColor:"#fff"})}).catch(s=>{console.log(s)}).finally(()=>n())}c(searchQuery).then(r=>{if(!r.hits.length){l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",color:"#ef4040",messageColor:"#fff",titleColor:"#fff"});return}m(r.hits)}).catch(r=>{console.log(r)}).finally(()=>n());
//# sourceMappingURL=index.js.map
