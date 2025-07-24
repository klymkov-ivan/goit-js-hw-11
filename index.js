import{a as m,S as p,i as n}from"./assets/vendor-5YrzWRhu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function h(s){const r="https://pixabay.com/api/?",o=new URLSearchParams({key:"51454782-596154fd852b0fd151dc4a6b5",image_type:"photo",orientation:"horizontal",safesearch:!0,q:s,per_page:"6"});return m(`${r}${o}`).then(a=>a.data)}const c=document.querySelector(".gallery"),f=document.querySelector(".loader"),y=new p(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:i,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img
            class="gallery-image"
            src="${o}"
            alt="${e}"
          />
        </a>
        <div class="description-wrappwer">
            <p class="text-likes text">Likes ${t}</p>
            <p class="text-views text">Views ${i}</p>
            <p class="text-comments text">Comments ${u}</p>
            <p class="text-comments text">Downloads ${d}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function L(){c.innerHTML=""}function x(){f.classList.remove("hidden")}function l(){f.classList.add("hidden")}const b=document.querySelector("form");b.addEventListener("submit",w);function w(s){s.preventDefault(),x();const r=s.target.elements["search-text"].value.trim();if(!r){l(),n.show({message:"Please, Fill the form!",position:"topCenter",color:"#ef4040",messageColor:"#fff",titleColor:"#fff"});return}L(),h(r).then(o=>{if(!o.hits.length){n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",color:"#ef4040",messageColor:"#fff",titleColor:"#fff"});return}g(o.hits)}).catch(o=>{console.log(o)}).finally(()=>l())}
//# sourceMappingURL=index.js.map
