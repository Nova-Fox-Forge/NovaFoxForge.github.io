alert("Site web en construction");

/* Buttons */
function upOpacity(id) {
    var columnToDisplay = document.getElementById(id);
    var otherColumns = document.querySelectorAll('.main_column:not(#' + id + ')');

    // Augmente l'opacité de la div avec l'id 'X' de 0 à 100%
    columnToDisplay.style.opacity = '1';

    // Réduit l'opacité des autres divs de 100 à 0% puis les cache
    otherColumns.forEach(function(div) {
        div.style.opacity = '0';
        div.classList.add('collapsed');
    });
}
