var firstMenu = "LeProjet";

function detectChrome(){
    let userAgent = navigator.userAgent;
    var texts = document.querySelectorAll('.c_text');
    if (/Chrome/.test(userAgent) && !/Chromium/.test(userAgent)) {
        texts.forEach(function(element) {
            element.style.lineHeight = '2em'; 
        });
    } else {
        texts.forEach(function(element) {
            element.style.lineHeight = '1.4em'; 
        });
    }
}

// Dark theme
function setDarkTheme()
{
    var checkboxChangeTheme = document.getElementById('changeTheme');
    checkboxChangeTheme.addEventListener('change', function() {
        if (this.checked) {
            document.body.style.color = 'white';
            document.body.style.backgroundColor = 'black';
        } else {
            document.body.style.color = 'black';
            document.body.style.backgroundColor = 'white';
        }
    });
    
}

function changeFont(){
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
function upOpacity(id) {
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

function moveFooter(id)
{
    // Move footer
    var menuDisplayed = document.getElementById(id);
    var footer = document.getElementById('c_footer');
    var header = document.getElementsByClassName('c_header');

    footer.style.top = menuDisplayed.offsetHeight + header.item(0).offsetHeight + footer.offsetHeight + "px";
    footer.style.left = document.documentElement.scrollWidth / 2 - footer.offsetWidth / 2 + "px";    
}

function openLegalNotice()
{
    window.location.href = '/LegalNotice/LegalNotice.html';
}

function goHome()
{
    window.location.href = '/';
}

detectChrome();
setDarkTheme();
changeFont();
moveFooter(firstMenu);
