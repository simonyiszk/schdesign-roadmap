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