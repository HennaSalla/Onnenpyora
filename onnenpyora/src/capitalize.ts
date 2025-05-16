// Aputoimintoja joita käytetään muualla soveluksessa

// Mutetaan ensimmäinen kirjaisn isoksi
export const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);
