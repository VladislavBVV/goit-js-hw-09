const e=document.querySelector("[data-start]");console.log(e);const o=document.querySelector("[data-stop]");console.log(o);const t=document.querySelector("body");console.log(t);let l=null;function n(){t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}e.disabled=!1,o.disabled=!0,e.addEventListener("click",(function(){l=setInterval((()=>{n()}),1e3),e.disabled=!0,o.disabled=!1})),o.addEventListener("click",(function(t){clearInterval(l),e.disabled=!1,o.disabled=!0})),console.log(o);
//# sourceMappingURL=01-color-switcher.220236ba.js.map