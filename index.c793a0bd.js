var navigationLinks=document.querySelectorAll("nav a");navigationLinks.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=this.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth"})}))}));
//# sourceMappingURL=index.c793a0bd.js.map
