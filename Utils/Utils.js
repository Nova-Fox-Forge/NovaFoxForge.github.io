import { saveCurrentMenuDisplayed } from '/Utils/Global.js';

export function moveFooter(id)
{

    // Move footer
    var menuDisplayed = document.getElementById(id);
    var footer = document.getElementById('c_footer');
    var header = document.getElementsByClassName('c_header');

    footer.style.top = (menuDisplayed.offsetHeight + header.item(0).offsetHeight + footer.offsetHeight) * 0.95 + "px";
    footer.style.left = document.documentElement.scrollWidth / 2 - footer.offsetWidth / 2 + "px";    
}

export function openLegalNotice()
{
    saveCurrentMenuDisplayed("menuLegalNotice");
    window.location.href = '/LegalNotice/LegalNotice.html';
}

export function goHome()
{
    window.location.href = '/';
}

export function detectChrome(){
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