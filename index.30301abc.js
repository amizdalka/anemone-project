(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".menu-container__link-list"),n=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),i=()=>{console.log("click");const t="true"===n.getAttribute("aria-expanded")||!1;n.setAttribute("aria-expanded",!t),e.classList.toggle("is-open")};n.addEventListener("click",i),c.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",(t=>{t.matches&&(e.classList.remove("is-open"),n.setAttribute("aria-expanded",!1))})),t.addEventListener("click",i)})();
//# sourceMappingURL=index.30301abc.js.map
