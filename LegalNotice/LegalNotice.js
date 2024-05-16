import { goHome, openLegalNotice } from "/Utils/Utils.js";


function init()
{
  let logo = document.getElementById("logo");
  logo.style.marginLeft = document.documentElement.scrollWidth / 2 + "px";
  initHTML();
}

function initHTML()
{
    document.getElementById("c_title").addEventListener("click", goHome);
    document.getElementById("logo").addEventListener("click", goHome);
    document.getElementById("btnLegaleNotice").addEventListener("click", openLegalNotice);
}

init();
