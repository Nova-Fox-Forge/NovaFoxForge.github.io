
export function saveCurrentLanguage(lang) {
    localStorage.setItem('currentLanguage', lang);
}

export function saveCurrentMenuDisplayed(menu) {
    localStorage.setItem('currentMenuDisplayed', menu);
}

export let keywordsToLinks = new Map([
    ["email", "mailto:contact@novafoxforge.com"],
    ["LinkedIn", "https://www.linkedin.com/in/charlylerenard/"],
    ["Twitter", "https://twitter.com/NovaFoxForge"],
    ["Amazon Web Services", "https://aws.amazon.com/fr/security/"],
    ["Notion", "https://www.notion.so/fr-fr/security"]
  ]);