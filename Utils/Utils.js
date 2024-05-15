export function moveFooter(id)
{
    // Move footer
    var menuDisplayed = document.getElementById(id);
    var footer = document.getElementById('c_footer');
    var header = document.getElementsByClassName('c_header');

    console.log(menuDisplayed.offsetHeight)

    footer.style.top = menuDisplayed.offsetHeight + header.item(0).offsetHeight + footer.offsetHeight + "px";
    footer.style.left = document.documentElement.scrollWidth / 2 - footer.offsetWidth / 2 + "px";    
}