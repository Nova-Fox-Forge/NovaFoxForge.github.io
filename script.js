alert("Site web en construction");

/* Buttons */
function upOpacity(id) {
    var columnToDisplay = document.getElementById(id);
    var otherColumns = document.querySelectorAll('.menu:not(#' + id + ')');

    // Augmente l'opacité de la div avec l'id 'X' de 0 à 100%
    columnToDisplay.style.opacity = '1';

    // Réduit l'opacité des autres divs de 100 à 0% puis les cache
    otherColumns.forEach(function(div) {
        div.style.opacity = '0';
    });
}


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