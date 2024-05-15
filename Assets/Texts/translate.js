import { setCurrentLanguage } from '/Utils/Global.js';
// let currentLanguage = localStorage.getItem('currentLanguage');
let currentLanguage;
// let languageSwitcher = document.getElementById('languageSwitcher');
// console.log(currentLanguage)

export function init()
{
    if(currentLanguage == undefined)
    {
        setCurrentLanguage(navigator.language || navigator.userLanguage);
    }
    loadLanguage();
    initLanguageSwitcher();
}

export function loadLanguage(){
    document.addEventListener('DOMContentLoaded', function() {

        // if(document.getElementById('languageSwitcher'))
        // {
            currentLanguage = localStorage.getItem('currentLanguage');
            fetch(`/Assets/Texts/${currentLanguage}.json`)
            // fetch(`/Assets/Texts/.json`)
            .then(response => response.json())
            .then(data => applyTranslations(data));
        // } 
        // else
        // {   
        //     console.log(currentLanguage)
        //     // setCurrentLanguage(document.getElementById('languageSwitcher').value);
        //     fetch(`/Assets/Texts/${currentLanguage}.json`)
        //     .then(response => response.json())
        //     .then(data => applyTranslations(data));
        // }
    });
}

function initLanguageSwitcher(){
    // Change language with  dropdown list
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
function applyTranslations(translations) {
    // Iterate over each key in the translations object
    for (const key in translations) {
        if (translations.hasOwnProperty(key)) {
            const element = document.getElementById(key);
            // If the element exists, set its text content to the translated text
            if (element) {
                if (element.tagName.toLowerCase() === 'select') {
                    element.innerHTML = '';

                    for (const lang in translations[key]) {
                        const option = document.createElement('option');
                        console.log(translations[key][lang])
                        option.textContent = translations[key][lang];
                        document.getElementById('languageSwitcher').appendChild(option);
                    }

                    // languages.forEach((lang, index) => {
                    //     const option = document.createElement('option');
                    //     option.value = lang.toLowerCase();
                    //     option.textContent = lang;
                    //     languageSwitcher.appendChild(option);
                    // });

                    // const keys = Object.keys(translations[key]);
                    // let i = 0;
                    // for (const langKey in translations[key]) {
                    //     const langText = translations[key][langKey];
                    //     console.log(langText)
                    //     console.log(translations[key])
                    //     console.log(keys[i])
                        // console.log(translations[langKey][key])
                    //     const option = document.createElement('option');
                    //     option.value = keys[i]; // Utiliser la clé de langue comme valeur
                    //     option.textContent = langText;
                    //     element.appendChild(option);
                    //     i++;
                    // } 
                }
                else if (Array.isArray(translations[key])) {
                    // If the value is an array, join it into a single string with list items
                    element.innerHTML = translations[key].map(item => `<li>${item}</li>`).join('');
                } else {
                    // Otherwise, set the text content directly
                    element.textContent = translations[key];
                }
            }
        }
    }
}


init();


    // "languageSwitcher": [
    //     "French",
    //     "English"
    // ]

    // "languageSwitcher": {
    //     "en": "English",
    //     "fr": "French"
    //   }


        
  //   "languageSwitcher": {
  //     "en": "English",
  //     "fr": "Français"
  // }