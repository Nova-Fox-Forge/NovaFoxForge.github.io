function goHome() 
{
    window.location.href = '/';
}

function init()
{
  var logo = document.getElementsByClassName("c_logo");
  logo.item(0).style.marginLeft = document.documentElement.scrollWidth / 2 + "px";
  console.log(window.currentLanguage);
}

init();
