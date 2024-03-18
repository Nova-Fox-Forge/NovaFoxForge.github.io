alert("Le site fonctionne mieux sur ordinateur")

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
    var columnToDisplay = document.getElementById(id);
    var otherColumns = document.querySelectorAll('.menu:not(#' + id + ')');

    columnToDisplay.style.opacity = '1';
    otherColumns.forEach(function(div) {
        div.style.opacity = '0';
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
    } else {
        document.body.style.fontFamily = 'Bitter';
    }
});
