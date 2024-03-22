// Detect Chrome
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

/* Buttons */
function upOpacity(id) {
    var menuToDisplay = document.getElementById(id);
    var otherMenus = document.querySelectorAll('.menu:not(#' + id + ')');

    menuToDisplay.style.opacity = '1';
    menuToDisplay.style.visibility = 'visible';

    otherMenus.forEach(function(otherMenu) {
        otherMenu.style.opacity = '0';
        otherMenu.style.visibility = 'collapse';
    });
}

// Dark theme
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


// Change font
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
