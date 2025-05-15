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

/* Buttons */
export function changePage(id) {

    saveCurrentMenuDisplayed(id);

    var menuToDisplay = document.getElementById(id);
    var otherMenus = document.querySelectorAll('.menu:not(#' + id + ')');
    var buttonClicked = document.getElementById("btn"+id);
    var otherButtons = document.querySelectorAll('.header_button:not(#' + 'btn' + id + ')');
    
    buttonClicked.style.backgroundImage = 'radial-gradient(100% 100% at 100% 0, #5adaff 0, #c71d94 100%)';
    menuToDisplay.style.opacity = '1';
    menuToDisplay.style.visibility = 'visible';

    // Hide other texts
    otherMenus.forEach(function(otherMenu) {
        otherMenu.style.opacity = '0';
        otherMenu.style.visibility = 'collapse';
    });

    // Reset display other buttons
    otherButtons.forEach(function(otherButton)
    {
        otherButton.style.backgroundImage = 'radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%)';
    });

    moveFooter(id);
}

function init()
{
    detectChrome();
    setDarkTheme();
    changeFont();
    changePage(firstMenu)
    initHTML();
}

function initHTML()
{
    document.getElementById("c_title").addEventListener("click", goHome);
    document.getElementById("logo").addEventListener("click", goHome);
    document.getElementById("btnLegaleNotice").addEventListener("click", openLegalNotice);
    document.getElementById("btnLeProjet").addEventListener("click", function(){changePage('LeProjet')});
    document.getElementById("btnLesMaquettes").addEventListener("click", function(){changePage('LesMaquettes')});
    document.getElementById("btnLesClients").addEventListener("click", function(){changePage('LesClients')});
    document.getElementById("btnNovaFoxForge").addEventListener("click", function(){changePage('NovaFoxForge')});
    document.getElementById("btnParametres").addEventListener("click", function(){changePage('Parametres')});

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