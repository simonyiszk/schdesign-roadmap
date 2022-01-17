---
title: JS
description: TODO
author: Radeczki Gergő István
---

# JS

Ahhoz, hogy el tudjunk rugaszkodni a statikus weboldalaktól és át tudjunk térni dinamikus weboldalakra, szükségünk van olyas valamire, ami képes kliens vagy szerver oldalon *HTML+CSS* kódot számunkra generálni. Erre az egyik legkézenfekvőbb megoldás a **JS** *(JavaScript)*, amit mára már egy programozási nyelvnek is hívhatunk.

Jellemzően `.js` kiterjesztést használnak a JavaScript fájlok.

## A nyelv építőelemei

A JavaScript egy gyengén típusos nyelv. Ez azt jelenti, hogy változó létrehozásakor nem kell megmondani a változónak a típusát, az a környezetből kiderül. Ezen felül a típusok dinamikusak, azaz bármikor lehet olyat csinálni, hogy az egyik pillanatban még egy számot tároltunk, a másikban már egy szöveget ugyan abban a változóban.

``` js
// egysoros komment
/* 
 többsoros komment
*/
var alma = 5; // globális változó létrehozása
var korte = 4;
var osszeg = alma + korte // műveletek
function csinaldEzt() {} // függvények
for(); while(); do {} while(); // ciklusok
/*
stb... 
*/

// újdonságok, régebbi böngéyzők nem biztos hogy támogatják
const a = 1; // konstans, értékét nem lehet megváltoztatni
let b = "egy string" // csak adott scope-on belül van értelme, nem globális
```

Típusok JavaScriptben:

- string
- number
- boolean
- undefined
- bigint
- symbol
- object

!!! note "Megjegyzés"
    Number az lehet egész, illetve tört szám is. Ezen felül ki van egészítve olyanokkal is, mint `Infinity`, `-Infinity`. Igen, a ±végtelen JavaScriptben egy szám.

Nagyon nagy valószínűséggel, ha valamit meg akarsz csinálni JavaScriptben, akkor azt meg fogod tudni csinálni. Még azt is, amire azt hiszed, hogy nem vagy képes.

!!! warning "Erre figyelj"
    Változó létrehozáskor nem kell típust megadni.

!!! warning "Erre figyelj"
    A változók típusai dinamikusan tudnak változni.

!!! warning "Erre figyelj"
    `var`-ral létrehozott változó scope-on `{...}` kívül is látható, `const` és `let` csak scope-on belül.

!!! warning "Erre figyelj"
    A `==` jel azonos típusra konvertál és azután ellenőriz értéket.

!!! warning "Erre figyelj"
    A `===` jel ellenőrzi a típust és az értéket.
    
!!! warning "Erre figyelj"
    És még sok egyéb *"érdekességet"* is tartogat a nyelv.

!!! note "Megjegyzés"
    C-től eltérően, JS-ben nincs kötelező `main()` függvény. A JavaScript kódok lefutását valamilyen eseményhez szoktuk kötni pl. betöltődik minden kért dokumentum.

Ha JavaScript kódot szeretnénk futtatni, akkor annak az egyik módszere, hogy valami külső dolog indítja el *(pl. a felhasználó kattint vmire; minden betöltődött a weboldalon stb.)*. Ezzel kivédhetjük azt, hogy **még** nem létező HTML elemen szeretnénk műveletet végrehajtani, ezzel elkerülünk egy hibaüzenetet.

### JS beillesztése HTML-be

CSS-sel ellentétben JS fájlokat a `<script src="..."></script>` HTML elemmel tudunk hozzáadni a kódunkhoz. Ezt bárhol megtehetjük, de általában közvetlen a `</body>` előtt szokás megtenni.

Ezt azért célszerű így csinálni, mert ekkor *(jelen projektben)* már minden HTML elem betöltődött, nem fogunk tudni olyan elemen műveletet végrehajtani, ami még nem létezik.

!!! note "Megjegyzés"
    Ha `<head>`-ben `<script src="..." defer></script>`-ként adjuk meg a fájlt, akkor azzal garantáljuk, hogy a HTML dokumentom teljes betöltődése után fussanak le a benne leírtak. Előnye, hogy előbb kimegy a kérés az `src="..."`-ben megadott fájlért, ezzel javulhat a megjelenítés sebessége. Hátránya, hogy meg kell várni a HTML dokumentom betöltődését ahhoz, hogy érvényesüljenek a fájlban leírtak.

!!! warning "Erre figyelj"
    Itt már szól a böngésző, ha valami baj van. Ezt a böngésző *Developer tools -> Console* részében tudjuk megtekinteni.

!!! warning "Erre figyelj"
    Ha valamit elgépelsz, akkor lehet lesz egy hibaüzeneted, de attól függetlenül **a kód tovább fog futni**.

## Ahol minden végződik: *script.js*

Felmerülhet a kérdés: *"a weboldal már kvázi készen van, minek ide JS?"*

Nos, jelen pillanatban a `<header>` csak úgy van a weboldal tetején. Ha elég tartalommal feltöltjük a bekezdéseket *(Lorem ipsum)*, akkor nyilvánvalóvá válik, hogy a fejlécünk nem nagyon követi a nézőpontot görgetés közben. Ezt meg tudnánk oldani egy egyszerű CSS `position: static;` hozzáadásával *(vagy khm... `@media print` query-vel)*, de ezzel van egy kis gond:

Ha arra vetemednénk, hogy pl. PDF-et készítűnk a weboldalról, akkor a fenti megoldás következtében a PDF minden egyes oldalának a tetején ott lenne a `<header>`.

Ennek a megoldása egy egyszerű JavaScript kódnak az írásával fog megvalósulni.

!!! note "Megjegyzés"
    Mivel nincsen fő belépési pont a kódban, ezért a függvények csak úgy maguktól nem tudnak lefutni. Ezért kihasználjuk azt az eseményt, amikor a felhasználó görget.

``` js
// Amikor a felhasználó görget, akkor meghívjuk a changeHeader()-t
window.onscroll = function() { changeHeader() };

// Már minden be van töltve a HTML-ben, ezért itt nyugodtan létrehozhatjuk ezeket a változókat
// szelektorokon keresztül rámutatunk a keresett elemekre
var header = document.querySelector("header");
var main = document.querySelector("main");

// Megkérdezzük, hogy a <header> teteje függőlegesen hol helyezkedik el az oldalon
var sticky = header.offsetTop;

function changeHeader() {
    // Ha túlgörgetünk, akkor legyen a header sticky
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        main.style.marginTop = "70px";
    } else { // Különben vissza mindent
        header.classList.remove("sticky");
        main.style.marginTop = "20px";
    }
}
```

Nézzük végig a kódnak a lényegi részeit és próbáljuk meg megérteni.

``` js
window.onscroll = function() { changeHeader() };
```

Megmondjuk a böngészőnek, hogy ha a felhasználó elkezd görgetni, akkor szeretnénk, hogy a `changeHeader()` függvény lefusson.

``` js
var header = document.querySelector("header");
var main = document.querySelector("main");
```

Változóként elmnentjük a `<header>`-t és a `<main>`-t, mert így egyszerűbb lesz majd rájuk hivatkozni. A `document.querySelector("...")` CSS stílusú szelektort vár el tőlünk, amivel rá tudunk mutatni a keresett HTML elemekre.

``` js
var sticky = header.offsetTop;
```

Megjegyezzük az eredeti pozícióját a `<header>`-nek `sticky` néven.

``` js
if (window.pageYOffset > sticky) {
```
Megkérdezzük, hogy a felhasználó éppen mennyire görgetett le a weboldalon. Ha túlgörgetett a header-ön, akkor lefut az igaz ág.

``` js
header.classList.add("sticky");
main.style.marginTop = "70px";
```

Túlmegyünk, adjunk hozzá egy `sticky` class-t és növeljük meg a `<main>` felső margóját (a miért egy kicsit lejjebb)

``` js
header.classList.remove("sticky");
main.style.marginTop = "20px";
```

Különben elvesszük ezt a class-t és visszaállíttjuk a margót.

## *sticky* class

A fixed pozíciójú elemeknek van egy-két rossz tulajdonsága, amiket a `sticky` osztálynak a bevezetésével tudunk megoldani. Az alábbi kódot adjuk hozzá a pl. `layout.css` végéhez.

``` css
.sticky {
    position: fixed;
    top: 0;
    width: 100%;
}
```

Az egyik, hogy a *fixed* pozíciójú elemeknek explicit meg kell mondani, hogy mekkora legyen a mérete. A másik, hogy átkerülnek egy másik síkra, azzaz takarásba tud kerülni a többi elemünkkel.

Mivel kikerül a síkból, ezért a helye üres marad. Minden ami alatta volt feljebb tolódik. Ez nagyon rosszul néz ki, ha görgetünk. Erre az egyik bevett szokás, hogy akkor közvetlen utána következő elem megpróbálja ellensúlyozni a helyzetet. Ezért lesz a `<main>`-nek `70px` a felső margója.

Eddig `20px` volt, de mivel a a `<header>` `50px` magas, így `20+50=70px` lesz.

### Fejlécek megjavítása

Most ha a tartalomjegyzékben rákattintunk egy linkre, akkor jó helyre fog ugrani a nézőpont, de pont ki lesz takarva a header miatt a fejléc címe. Ezt orvosoljuk az alábbi CSS kóddal a `style.css`-ben:

``` css
h1, h2, h3, h4, h5, h6 {
    /* A header magassága 50px */
    scroll-margin-top: 50px; /* mennyivel kerüljön lejjebb a tartalom ugráskor */
}
```

## Összegzés

- Statikus (HTML+CSS) -> Dinamikus (HTML+CSS+JS) + (Szerver/kliens oldali kódgenerálás)
- A JavaScriptben van jó néhány érdekes dolog
- Elsőre nehéznek tűnő dolgokat JS-ben megoldani egyszerű lehet
- JS fájlt a HTML dokumentum utolsó soraiban érdemes betölteni

### Végleges kód

!!! example ""
    === "index.html"
        ``` html
        <!DOCTYPE HTML>
        <html>
            <head>
                <meta charset="UTF-8">
                <link rel="icon" href="logo.svg">
                <link rel="stylesheet" href="layout.css"> 
                <link rel="stylesheet" href="style.css"> 
                <title>Ez a weboldalam címe</title>
            </head>
            <body>
                <header>
                    <div id="logo">
                        <img src="logo.svg" alt="A weboldalnak a logója">
                    </div>
                    <nav>
                        <a href="#">Link #1</a>
                        <a href="#">Link #2</a>
                        <a href="#">Link #2</a>
                    </nav>
                </header>
                <main>
                    <h1 id="title">Egy online jegyzet</h1>
                    <h2 id="tartalomjegyzek">Tartalomjegyzék</h2>
                    <nav>
                        <ol start="0">
                            <li>
                                <a href="#tartalomjegyzek">Tartalomjegyzék</a>
                            </li>
                            <li>
                                <a href="#elso-fejezet">Első fejezet</a>
                                <ol>
                                    <li>
                                        <a href="#elso-alfejezet">Első alfejezet</a>
                                    </li>
                                    <li>
                                        <a href="#masodik-alfejezet">Második alfejezet</a>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </nav>
                    <article>
                        <section>
                            <h1 id="elso-fejezet">Első fejezet</h1>
                            <p>Ezt majd később feltöltjük.</p>
                        </section>
                        <section>
                            <h2 id="elso-alfejezet">Első alfejezet</h2>
                            <p>Ezt majd később feltöltjük.</p>
                            <img src="cat.jpg">
                            <p class="img-caption">Ez egy magyarázat a képhez</p>
                            <p>Ezt majd később feltöltjük.</p>    
                        </section>
                        <section>
                            <h2 id="masodik-alfejezet">Második alfejezet</h2>
                            <p>Ezt majd később feltöltjük.</p>
                        </section>
                    </article>
                </main>
                <footer>valami jogi &copy; szöveg</footer>
                <script src="script.js"></script>
            </body>
        </html>
        ```
    === "style.css"
        ``` css
        @font-face {
            font-family: 'Roboto';
            src: url('Roboto-Regular.ttf')  format('truetype');
        }
        body {
            font-family: 'Roboto';
            background-color: rgb(240, 240, 240);
        }
        header {
            background-color: rgb(136, 99, 64);
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        }
        header > nav > a {
            color: white;
            padding: 5px 20px;
            text-decoration: none;
        }
        main {
            border-radius: 5px;
            background-color: white;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        }
        main > nav > ol li > a {
            text-decoration: none;
            color: black;
            font-style: italic;
        }
        main > nav > ol > li {
            margin: 10px;
        }
        main > nav {
            padding: 5px;
            background-color: rgb(220,220,220);
            border-radius: 5px;
        }
        #title {
            text-align: center;
            font-size: 40px;
        }
        h1, h2, h3, h4, h5, h6 {
            margin: 30px 0 10px 0;
            scroll-margin-top: 50px;
        }
        h1 {
            font-size: 35px;
        }
        h2 {
            font-size: 25px;
        }
        h3 {
            font-size: 15px;
        }
        p {
            text-align: justify;
            margin: 10px 0 20px 0;
        }
        footer {
            color: white;
            background-color: rgb(102, 73, 47);
            text-align: center;
        }
        article img {
            box-sizing: border-box;
            display: block;
            max-width: 100%;
            padding: 0 20px;
            margin-left: auto;
            margin-right: auto;
        }
        .img-caption {
            text-align: center;
            color: rgb(150,150,150);
            font-style: italic;
            margin: 5px 0 20px 0;
        }
        ```
    === "layout.css"
        ``` css
        body {
            margin: 0;
            display: flex;
            flex-direction: column;
        }
        header {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 50px;
        }
        #logo {
            flex: 1;
        }
        #logo > img {
            height: 40px;
        }
        main {
            margin: 20px;
            padding: 20px;
            width: 960px;
            align-self: center;
        }
        footer {
            padding: 20px;
        }
        .sticky {
            position: fixed;
            top: 0;
            width: 100%;
        }
        ```
    === "script.js"
        ``` js
        window.onscroll = function() { changeHeader() };

        var header = document.querySelector("header");
        var main = document.querySelector("main");

        var sticky = header.offsetTop;

        function changeHeader() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
                main.style.marginTop = "70px";
            } else {
                header.classList.remove("sticky");
                main.style.marginTop = "20px";
            }
        }
        ```
    === "Előnézet"
        <iframe style="width: 100%; height: 500px;" src="https://gergoradeczki.github.io/tutorials/step-by-step/03_js/index.html"></iframe>

## Kvíz a tanultakhoz

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScaX5Vnm7IY9OprdOVF7NpG8S18FT3zhzrTmtJMApSeKtKDDA/viewform?embedded=true" width="640" height="610" frameborder="0" marginheight="0" marginwidth="0">Betöltés…</iframe>
