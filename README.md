# Onnenpyora
React pohjainen onnenpyörä sovellus.

## Aloitus toimet

Ennen kuin alat tekemään sovellusta on hyvä tietää että sovelluksessa on käytetty Reactia, vitea, TypeScriptiä ja vscone-styled-componentsia sekä canvasta.

Varmista ensin että sinulla on asennettuna `node.js` koneellesi. Kirjoita komentokehotteeseen `node -v` ja `npm -v` jolla saat tietoosi onko sinulla kyseistä ohjelmaa asennettuna. Jos ei ole löydät node.js:än tästä linkistä: https://nodejs.org/en. Jos sinulla on jo näyttää komentokehoite tältä näyttäen viimeisimmän version molemista tarvittavista ohjelmista:


![Näyttökuva 2025-04-29 125013](https://github.com/user-attachments/assets/612a53dd-12fc-407a-a812-30e38b4f196e)

Sen jälkeen VisualStudio Codessa luodaan vite projekti kirjoittamalla terminaaliin `npm create vite@latest onnenpyora --template react` jonka jälkeen terminaalista valitaan frameworkiksi React ja variantiksi JavaSript. Tämän jälkeen kijoita viellä terminaaliin komennot `cd onnenpyora`, `npm instaal` `npm run dev` jonak jälkeen voit avata projektin tästä linkistä: http://localhost:5173/ jonkä jälkeen sinulle pitäisi aueta seuraavan näköinen sivu:

![image](https://github.com/user-attachments/assets/401104c7-c30d-4a2f-a31b-fdf89e4150aa)

Nyt sinulla on jo projektissasi React, Vite ja TypeScript. Seuraava vaihe on asentaa vscode-styled-components. Lataa aluksi VisualSudio codeen lisä osa `vscode-styled-components` ja sen jälkeen kirjoita terminaaliin komento `npm install styled-components` jonka jälkeen nämä tyylit ovat myös käytössäsi. En ole ihan varma tarvitsetko lisäosaa tyylien toimimiseen vai riittääkö pelkkä install lointi mutta itse en ainakaan saanut niitä toimimaan vain toisen kanssa. Tyylien lataaminen tuo projektiin kansiot `package-lock.json` ja `package.json` projektin juureen.

Kun haluat käyttää canvasta apunasi lataa lisäosat `Canvas` ja `Canvas Best Practice`. Projektissa käytän canvasta eritoten konffeti efektiin arvonnan voittajan selvitessä.

Nyt kuin omistat kaikki tarvitatav komponentit ja pohjat voit aloittaa koodin kirjoittamisen. Itse päädyin laittamaan kaikki komponentit eri tiedostoihin pitäen näin ollen koodin lyhyenä ja siistinä. Tämä myös yksin kertaistaa itselleni koodin lukemista. Tässä on listattuna kaikkista tärkeimät koodi tiedosto ja mitä ne sisältää:

* **main.jsx**: Viten mukana tullut tiedosto joka on koko projekitn aloitus piste.
* **App.jsx**: Koko projektin pääkomponenti jossa yhdistetään muut komponentit ja lisätään mahdollisuus lisätä, poistaa, järjestellä ja sekoitella osallistujia listalla
* **Otsikko.jsx**: Sivun ylälaita ja näin ollen myös sovelluksen otsikko
* **Osallistujat.jsx**: Tuo osallistujen lisäsys listan näkyviin. sisältää myös function joka estää tyhjien nimien lisäämisen listaan
* **Kysymys.jsx**: Tuo esiin kysymys ruudun jossa voit laittaa mitä sinä kertana tahdotaan arpoa.
* **Pyora.jsx**: Tällä löytyy kaikki mitä itse onnenpyörään tekemiseen tarvitaan niin ulkonäöllisesti kuin toiminnolisesti.
* **utlis.ts**: Täältä löytyy pieniä apuohjelmia joita käytetään ympäri projektia
* **styles.ts**: Tällätä löytyy kaikille jaetut tyylit ympäri sovellusta
