import { moveFooter, openLegalNotice, goHome, detectChrome} from "/Utils/Utils.js";
import { saveCurrentMenuDisplayed } from "/Utils/Global.js";

var firstMenu = "LeProjet";
var logo = "Assets/Images/logoFFF_round_small.png";

// Dark theme
export function setDarkTheme()
{
    var checkboxChangeTheme = document.getElementById('changeTheme');
    checkboxChangeTheme.addEventListener('change', function() {
        if (this.checked) {
            document.body.style.color = 'white';
            document.body.style.backgroundColor = 'black';
            logo = "Assets/Images/logoFFF_round_small.png";
            document.getElementById("logo").src = logo;
        } else { 
            document.body.style.color = 'black';
            document.body.style.backgroundColor = 'white';
            logo = "Assets/Images/logoFFF_round_small_white.png";
            document.getElementById("logo").src = logo;

        }
    });
}

export function changeFont(){
    var checkboxChangeFont = document.getElementById('changeFont');
    checkboxChangeFont.addEventListener('change', function() {
        if (this.checked) {
            document.body.style.fontFamily = 'Verdana';
            document.head.style.fontFamily = 'Verdana';
    
        } else {
            document.body.style.fontFamily = 'Bitter';
            document.head.style.fontFamily = 'Bitter';
        }
    });
}

function init()
{
    detectChrome();
    setDarkTheme();
    changeFont();
    showMenu(firstMenu)
    initHTML();
}

function initHTML()
{
    document.getElementById("c_title").addEventListener("click", goHome);
    document.getElementById("logo").addEventListener("click", goHome);
    document.getElementById("btnLegaleNotice").addEventListener("click", openLegalNotice);
   
    // Show the first menu on page load
    document.addEventListener('DOMContentLoaded', function() {
        showMenu('LeProjet'); // Change to your default menu id
    });

    // Add event listeners to your header buttons
    document.getElementById('btnLeProjet').onclick = () => showMenu('LeProjet');
    document.getElementById('btnLesMaquettes').onclick = () => showMenu('LesMaquettes');
    document.getElementById('btnLesClients').onclick = () => showMenu('LesClients');
    document.getElementById('btnNovaFoxForge').onclick = () => showMenu('NovaFoxForge');
    document.getElementById('btnParametres').onclick = () => showMenu('Parametres');
}

// Show only the selected menu by id
function showMenu(menuId) {
  document.querySelectorAll('.menu').forEach(menu => {
    menu.classList.remove('active');
  });
  const menuToShow = document.getElementById(menuId);
  if (menuToShow) {
    menuToShow.classList.add('active');
  }
}

init();