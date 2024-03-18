alert("Le site fonctionne mieux sur ordinateur")

/* Buttons */
function upOpacity(id) {
    var columnToDisplay = document.getElementById(id);
    var otherColumns = document.querySelectorAll('.menu:not(#' + id + ')');

    columnToDisplay.style.opacity = '1';
    otherColumns.forEach(function(div) {
        div.style.opacity = '0';
    });

    history.pushState(null, null, id); // Change URL
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
var c_text = document.getElementById('c_text');
checkboxChangeFont.addEventListener('change', function() {
    if (this.checked) {
        document.body.style.fontFamily = 'Verdana';
    } else {
        document.body.style.fontFamily = 'Bitter';
    }
});
