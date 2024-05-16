
export function saveCurrentLanguage(lang) {
    localStorage.setItem('currentLanguage', lang);
}

export function saveCurrentMenuDisplayed(menu) {
    localStorage.setItem('currentMenuDisplayed', menu);
}

export let keywordsToLinks = new Map([
    ['Google Map', 'https://www.google.fr/maps/@43.5853546,1.3868439,3a,75y,191.44h,90t/data=!3m7!1e1!3m5!1swLKcXzZ75ZiVGI6hWELNWQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DwLKcXzZ75ZiVGI6hWELNWQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D188.33871%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu'],
    ['email', "mailto:contact@novafoxforge.com"],
    ['LinkedIn', "https://www.linkedin.com/in/charlylerenard/"],
    ['Twitter', "https://twitter.com/NovaFoxForge"],
    ['Amazon Web Services', "https://aws.amazon.com/fr/security/"],
    ['Notion', "https://www.notion.so/fr-fr/security"],
    ['Endless Money', "https://foxbandykoot.itch.io/endless-money"],
    ['Unreal Engine 5', "https://www.unrealengine.com/fr/unreal-engine-5"]
  ]);