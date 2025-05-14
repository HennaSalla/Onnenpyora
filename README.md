# Onnenpyora
React pohjainen onnenpyörä sovellus.

## Aloitus toimet

Ennen kuin alat tekemään sovellusta on hyvä tietää että sovelluksessa on käytetty Reactia, vitea, TypeScriptiä ja vscone-styled-componentsia sekä canvasta.

Varmista ensin että sinulla on asennettuna `node.js` koneellesi. Kirjoita komentokehotteeseen `node -v` ja `npm -v` jolla saat tietoosi onko sinulla kyseistä ohjelmaa asennettuna. Jos ei ole löydät node.js:än tästä linkistä: https://nodejs.org/en. Jos sinulla on jo näyttää komentokehoite tältä näyttäen viimeisimmän version molemista tarvittavista ohjelmista:


![Näyttökuva 2025-04-29 125013](https://github.com/user-attachments/assets/612a53dd-12fc-407a-a812-30e38b4f196e)

Sen jälkeen VisualStudio Codessa luodaan vite projekti kirjoittamalla terminaaliin `npm create vite@latest onnenpyora --template react` jonka jälkeen terminaalista valitaan frameworkiksi React ja variantiksi JavaSript. Tämän jälkeen kijoita viellä terminaaliin komennot `cd onnenpyora`, `npm install` `npm run dev`.

Projektissa käyttämäni teknologiat:
* **Vite** - Tarjoaa nopean kehitysympäristön, joka on optimoitu erityisesti verkkoprojekteihin
* **React** - Suosittu JavaScript-kirjasto käyttöliittymien rakentamiseen
* **TypeScript** - JavaSriptin lisä, joka parantaa koodin laatua ja ylläpitävyyttä
* **styled-components** - Kirjasto CSS-in-JS:n kirjoittamiseen. Se mahdollistaa tyylien rajaamisen komponentteihin ja tarjoaa dynaamisemman lähemstymistavan tyylien luomiseen.
* **canvas** - Tehokas HTML-elementti. Sitä käytetään piirtämään grafiikkaa, animaatioita ja muuta dynaamista sisältöä verkkosivulle. Omassa projektissa se on käytössä enimäkseen pyörän animaation luonissa.
* **canvas-confetti** - JavaScript-kirjasto jolla voit lisätä konfettianimaatioita. Tätä käytetäänkin voittajan julkaisemisessa.
* **react-icons** - tuo mahdollisuuden tuoda erinlaisa ikooneja projektiin

Yläpuolella onkin miten vite tuodaan luonti viaheessa jo projektiin. Muut on erikseen ladattu jälkikäteen komenoilla. TypeScriptin voit ladata komenolla: `npm install TypeScript`, styled-componentsin taas komenolla: `npm install styled-components`, canvasin komenolla: `npm install canvas`, canvas-confettin komenolla: `npm install canvas-confetti` ja react-icon komenolla: `npm install react-icons`.

Nyt kuin omistat kaikki tarvitatav komponentit ja pohjat voit aloittaa koodin kirjoittamisen. Itse päädyin laittamaan kaikki komponentit eri tiedostoihin pitäen näin ollen koodin lyhyenä ja siistinä. Tämä myös yksin kertaistaa itselleni koodin lukemista. Tässä on listattuna kaikkista tärkeimät koodi tiedosto ja mitä ne sisältää:

* **main.tsx**: Viten mukana tullut tiedosto joka on koko projekitn aloitus piste.
* **App.tsx**: Koko projektin pääkomponenti jossa yhdistetään muut komponentit ja lisätään mahdollisuus lisätä, poistaa, järjestellä ja sekoitella osallistujia listalla
* **Otsikko.tsx**: Sivun ylälaita ja näin ollen myös sovelluksen otsikko
* **Osallistujat.tsx**: Tuo osallistujen lisäsys listan näkyviin. sisältää myös function joka estää tyhjien nimien lisäämisen listaan
* **Kysymys.tsx**: Tuo esiin kysymys ruudun jossa voit laittaa mitä sinä kertana tahdotaan arpoa.
* **Pyora.tsx**: Tällä löytyy kaikki mitä itse onnenpyörään tekemiseen tarvitaan niin ulkonäöllisesti kuin toiminnolisesti.
* **utlis.ts**: Täältä löytyy pieniä apuohjelmia joita käytetään ympäri projektia
* **styles.ts**: Tällätä löytyy kaikille jaetut tyylit ympäri sovellusta

Alapuolella linkki tämän hetkiseen julkaistuun sovellukseen:
https://onnenpyora-one.vercel.app/
