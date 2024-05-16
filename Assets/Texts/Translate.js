import { setCurrentLanguage } from '/Utils/Global.js';
// let currentLanguage = localStorage.getItem('currentLanguage');
let currentLanguage;
// let languageSwitcher = document.getElementById('languageSwitcher');

export function init()
{
    currentLanguage = localStorage.getItem('currentLanguage')
    if(currentLanguage == undefined)
    {
        setCurrentLanguage(navigator.language || navigator.userLanguage);
    }
    loadLanguage();
    initLanguageSwitcher();
}

export function loadLanguage(){
    document.addEventListener('DOMContentLoaded', function() {
            currentLanguage = localStorage.getItem('currentLanguage');
            fetch(`/Assets/Texts/${currentLanguage}.json`)
            .then(response => response.json())
            .then(data => applyTranslations(data));

    });
}

function initLanguageSwitcher(){
    // Change language with dropdown list
    if(document.getElementById('languageSwitcher'))
    {
        document.getElementById('languageSwitcher').addEventListener('change', function() {
            setCurrentLanguage(this.value);
            console.log(this.value)
            fetch(`/Assets/Texts/${this.value}.json`)
                .then(response => response.json())
                .then(data => applyTranslations(data));
        });    
    }
}

// p1 translations is json
export function applyTranslations(translations) {
    
    // return new Promise((resolve, reject) => {


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
                        // Otherwise, set the text content directly
                        element.textContent = translations[key];
                    }
                }
            }
        }

    // resolve();

    // });
}


init();
