import { saveCurrentLanguage, keywordsToLinks } from '/Utils/Global.js';
import { moveFooter } from '/Utils/Utils.js';

let currentLanguage;
// let languageSwitcher = document.getElementById('languageSwitcher');

export function init()
{
    currentLanguage = localStorage.getItem('currentLanguage')

    if(currentLanguage == undefined)
    {
        currentLanguage = navigator.language || navigator.userLanguage;
        currentLanguage = currentLanguage.substring(0, 2); // Chrome return more than 2 characters for language, and we just need first 2
        saveCurrentLanguage(currentLanguage);
    }
    loadLanguage();
    initLanguageSwitcher();
}

export function loadLanguage(){
    document.addEventListener('DOMContentLoaded', function() {
            currentLanguage = localStorage.getItem('currentLanguage');
            currentLanguage = currentLanguage.substring(0, 2);
            fetch(`/Assets/Texts/${currentLanguage}.json`)
            .then(response => response.json())
            .then(data => applyTranslations(data));

    });
}

function initLanguageSwitcher(){
    // Change language with dropdown list
    const languageSwitcher = document.getElementById('languageSwitcher');
    if(languageSwitcher)
    {
        // Set the select value to the saved language on load
        const savedLang = localStorage.getItem('currentLanguage');
        if (savedLang) {
            languageSwitcher.value = savedLang.substring(0, 2);
        }

        languageSwitcher.addEventListener('change', function() {
            saveCurrentLanguage(this.value);
            fetch(`/Assets/Texts/${this.value}.json`)
                .then(response => response.json())
                .then(data => applyTranslations(data));
        });    
    }
}

// p1 translations is json
export function applyTranslations(translations) {
    console.log(keywordsToLinks);
    // Iterate over each key in the translations object
    for (const key in translations) {
        if (translations.hasOwnProperty(key)) {
            const element = document.getElementById(key);

            // If the element exists, set its text content to the translated text
            if (element) {

                // Manage select tags
                if (element.tagName.toLowerCase() === 'select') {
                    element.innerHTML = '';

                    for (const lang in translations[key]) {
                        const option = document.createElement('option');
                        console.log(translations[key][lang])
                        option.textContent = translations[key][lang];
                        document.getElementById('languageSwitcher').appendChild(option);
                    }
                }
                // Manage ul tags
                else if (Array.isArray(translations[key])) {
                    // If the value is an array, join it into a single string with list items
                    element.innerHTML = translations[key].map(item => `<li>${item}</li>`).join('');
                
                // Manage other tags
                } else {               
                    element.textContent = translations[key];
                    // texts with a link
                    keywordsToLinks.forEach(function(value, keyword) {
                        if(element.textContent.includes(keyword))
                        {
                            const regex = new RegExp(`\\b${keyword}\\b`, 'g'); // Match whole word, globally
                            element.innerHTML = element.innerHTML.replace(regex, `<a href="${value}">${keyword}</a>`);
                        } 
                    })

                }
            }
        }
    }
    moveFooter(localStorage.getItem('currentMenuDisplayed'));
}

init();
