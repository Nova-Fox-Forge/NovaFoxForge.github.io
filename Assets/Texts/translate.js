// Change language with  dropdown list
document.getElementById('languageSwitcher').addEventListener('change', function() {
    const language = this.value;
    fetch(`/Assets/Texts/${language}.json`)
        .then(response => response.json())
        .then(data => applyTranslations(data));
});


// Charger la langue par défaut (fr)
document.addEventListener('DOMContentLoaded', function() {
    let defaultLanguage = document.getElementById('languageSwitcher').value;
    fetch(`/Assets/Texts/${defaultLanguage}.json`)
        .then(response => response.json())
        .then(data => applyTranslations(data));
});


function applyTranslations(translations) {
    document.getElementById('main_h4').innerText = translations.main_h4;
    document.getElementById('main_h2').innerText = translations.main_h2;
    
    const listItems = document.querySelectorAll('#list_functionalities li');
    translations.list_functionalities.forEach((translation, index) => {
        listItems[index].textContent = translation;
    });
}