# JS

Ahhoz, hogy el tudjunk rugaszkodni a statikus weboldalaktól és át tudjunk térni dinamikus weboldalakra, szükségünk van olyas valamire, ami képes kliens vagy szerver oldalon HTML+CSS kódot számunkra generálni. Erre az egyik legkézenfekvőbb megoldás a **JS** *(JavaScript)*, amit mára már egy programozási nyelvnek is hívhatunk.

Jellemzően `.js` kiterjesztést használnak a JavaScript fájlok.

## A nyelv építőelemei

``` js
// egysoros komment
/* 
   többsoros komment
*/
var alma = 5; // változó létrehozása
var korte = 4;
var osszeg = alma + korte // műveletek
function csinaldEzt() {} // függvények
for(); while(); do {} while(); // ciklusok
/*
stb... 
*/
```

Nagyon nagy valószínűséggel, ha valamit meg akarsz csinálni JavaScriptben, akkor azt meg fogod tudni csinálni. Még azt is, amire azt hiszed, hogy nem vagy képes.

!!! warning "Erre figyelj"
    Változó létrehozáskor nem kell típust megadni.
!!! warning "Erre figyelj"
    Egy utasítási blokkon `{...}` belül létrehozott változót kívülről is el lehet érni.
!!! warning "Erre figyelj"
    A `==` jel azonos típusra konvertál és azután ellenőriz értéket.
!!! warning "Erre figyelj"
    A `===` jel ellenőrzi a típust és az értéket.
!!! warning "Erre figyelj"
    A számhalmaz ki van egészítve ezekkel: `NaN`, `Infinity`.
!!! warning "Erre figyelj"
    És még sok egyéb *"érdekességet"* is tartogat a nyelv.

### JS beillesztése HTML-be

CSS-sel ellentétben JS fájlokat a `<script src="..."></script>` HTML elemmel tudunk hozzáadni a kódunkhoz. Ezt bárhol megtehetjük, de szélszerű közvetlen a `</body>` előtt megtenni.

Ennek az egyik oka, hogy amint betöltődik a JavaScript, egyből le is fut. A probléma ezzel az, hogy még nem töltődött be minden HTML elem, így lehet hogy olyan elemet probálnánk módosítani, ami jelenleg nem is létezik, ez pedig hibaüzenethez vezet a konzolban.

!!! warning "Erre figyelj"
    HTML-hez és CSS-hez hasonlóan, itt is van lehetőségünk súlyos következmény nélkül rossz kódot írni. De, ebben a környezetben már tudjuk hasznosítani a böngészők beépített JavaScript konzolját, amin keresztül tud üzenni nekünk a Chrome/Firefox stb. hogy valami gond van a kóddal. *(Persze attől még végig fut az egész.)*

## Ahol minden végződik: *script.js*

Felmerülhet a kérdés: *"a weboldal már kvázi készen van, minek ide JS?"*

Nos, jelen pillanatban a `<header>` csak úgy van a weboldal tetején. Ha elég tartalommal feltöltjük a bekezdésekes *(Lorem ipsum)*, akkor nyilvánvalóvá válik, hogy a fejlécünk nem nagyon követi a nézőpontot görgetés közben. Ezt meg tudnánk oldani egy egyszerű CSS `position: static;` hozzáadásával, de ezzel van egy kis gond:

Ha arra vetemednénk, hogy pl. PDF-et készítűnk a weboldalról, akkor a fenti megoldás következtében a PDF minden egyes oldalának a tetején ott lenne a `<header>`.

Ennek a megoldása egy egyszerű JavaScript kódnak az írásával fog megvalósulni.

``` js
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.querySelector("header");
var main = document.querySelector("main");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    main.style.marginTop = "70px";
  } else {
    header.classList.remove("sticky");
    main.style.marginTop = "20px";
  }
}
```

Nézzük végig a kódnak a lényegi részeit és próbáljuk meg megérteni.

``` js
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
```

Megmondjuk a böngészőnek, hogy ha a felhasználó elkezd görgetni, akkor szeretnénk, hogy a `myFunction()` függvény lefusson.

``` js
// Get the header
var header = document.querySelector("header");
var main = document.querySelector("main");
```

Változóként elmnentjük a `<header>`-t és a `<main>`-t, mert így egyszerűbb lesz majd rájuk hivatkozni. A `document.querySelector("...")` CSS stílusú szelektort vár el tőlünk, amivel rá tudunk mutatni a keresett HTML elemekre.

``` js
if (window.pageYOffset > sticky) {
```
Megnézzük, hogy a görgetéssel a `<header>`-ön túlmennénk-e.

``` js
header.classList.add("sticky");
main.style.marginTop = "70px";
```

Ha túlmegyünk, akkor hozzá adunk egy `sticky` class-t és megnöveljük a `<main>` fölső margóját (a miért egy kicsit lejjebb)

``` js
header.classList.remove("sticky");
main.style.marginTop = "20px";
```

Különben elvesszük ezt a class-t és visszaálíltjuk a margót.

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

Mivel kikerül a síkból, ezért a helye üres marad. Minden ami alatta volt feljebb tolódik. Ez nagyon rosszul néz ki felhasználói szempontból. Erre az egyik bevett szokás, hogy akkor közvetlen utána következő elem megpróbálja ellensúlyozni a helyzetet. Ezért lesz a `<main>`-nek `70px` a felső margója.

Eddig `20px` volt, de mivel a a `<header>` `50px` magas, így `20+50=70px` lesz.

## Összegzés

- Statikus (HTML+CSS) -> Dinamikus (HTML+CSS+JS) + (Szerver/kliens oldali kódgenerálás)
- A JavaScriptben van jó néhány érdekes dolog
- Elsőre nehéznek tűnő dolgokat JS-ben megoldani egyszerű lehet
- JS fájlt a HTML dokumentum utolsó soraiban érdemes betölteni

## Végleges kód

!!! example ""
    === "index.html"
        ``` html
        <!DOCTYPE HTML>
        <html>
            <head>
                <meta charset="UTF-8">
                <link rel="icon" href="logo.svg">
                <!-- Itt adjuk a böngésző tudtára, hogy létezik egy css fájlunk is, amit használni szeretnénk -->
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
            min-height: 100vh;
            margin: 0;
            display: flex;
            justify-content: space-between;
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
            max-width: 960px;
            align-self: center;
        }
        footer {
            padding: 20px;
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
        .sticky {
            position: fixed;
            top: 0;
            width: 100%;
        }
        ```
    === "script.js"
        ``` js
        // When the user scrolls the page, execute myFunction
        window.onscroll = function() {myFunction()};

        // Get the header
        var header = document.querySelector("header");
        var main = document.querySelector("main");

        // Get the offset position of the navbar
        var sticky = header.offsetTop;

        // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
        function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            main.style.marginTop = "70px";
        } else {
            header.classList.remove("sticky");
            main.style.marginTop = "20px";
        }
        }
        ```