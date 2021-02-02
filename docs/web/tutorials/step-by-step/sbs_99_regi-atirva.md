# Statikus weboldal készítése step-by-step

Ebben a tutorialban az alapoktól kezdve fel fogunk építeni egy komplett statikus weboldalt.

## HTML

Egy weboldalnak a felépítése a HTML _(Hypertext Markup Language)_-el kezdődik. Ez nem egy programozási nyelv, hanem egy leíró nyelv. Leginkább az XML-hez lehetne hasonlítani.

!!! note "Megjegyzés"
    Más programozási nyelvekhez hasonlóan ebben is lehet kommentelni.

### Ahol minden elkezdődik: index.html

Kezdésképp hozzunk létre egy `index.html` nevű fájlt egy nekünk szimpatikus helyen a saját gépünkön. Ez lesz a weboldalunknak a főoldala, ez lesz az az oldal, ami akkor is betölt, ha a webcímünk után nem írjuk le, hogy melyik oldalt kérjük _(habár ezt majd később megváltoztathatjuk, de általában valamilyen "index.xyz" oldal szokott a főoldal lenni)_.

Nyissuk meg az imént létrehozott fájlt kedvenc szövegszerkesztőnkkel _(igen, akár a Windowsos Notepaddel is megnyithatjuk)_ és írjuk le életünk első HTML kódját:

!!! example ""
    === "index.html"
        ``` html
        <!DOCTYPE HTML>
        ```
    === "Eredmény"
        <div class="iframe-container">
            <iframe src="https://gergoradeczki.github.io/iframe/00_doctype.html"></iframe>
        </div>
    === "Eredmény (kép)"
        ![weboldal](https://i.imgur.com/oPAHeXq.png "Csak a DOCTYPE-os index.html")


Mentsük el a fájlt és nyissuk meg egy általunk választott böngészőben _(ne Internet Explorerben)_. Ha mindent jól csináltunk, akkor semmit se látunk. Azaz mégis, mert egy üres ablak nyílt meg a böngészőben, aminek az URL címe a fájlunk helyét mutatja a gépünkön, a tab címe meg a fájlunk neve. Ezzel az egy sorral megmondtuk a böngészőnek, hogy ez egy HTML fájl lesz. Most kezdjük el feltölteni a fájlunkat további kóddal.

!!! example ""
    === "index.html"
        ``` html
        <!DOCTYPE HTML>
        <html>
        </html>
        ```
    === "Eredmény"
        <div class="iframe-container">
            <iframe src="https://gergoradeczki.github.io/iframe/01_doctype_es_html.html"></iframe>
        </div>

Most újdonság az a `<html>` és a `</html>` _"tag"_-ek _(elemek)_ megjelenése. Ezekkel mondjuk meg a böngészőnek, hogy ezek a részek közt fogjuk a weboldalunknak a látható és nem látható részét megadni. Majdnem minden HTML elemet úgy adunk meg, hogy van egy `<kezdő>` és egy `</kezdő>` része. Látható, hogy a lényeges különbséget a **"/"** jel jelenti. Ezzel mondjuk meg a böngészőnek, hogy `<>`-től `</>`-ig tart az elemünk, minden ami ezen belül van, az az elem részét képezi. A kezdő, illetve végző elem neve meg kell, hogy egyezzen.

Egészítsük ki _(majdnem)_ teljessé a weboldalunkat:

!!! example ""
    === "index.html"
        ``` html
        <!DOCTYPE HTML>
        <html>
            <head>
                <title>Első weboldalam!</title>
            </head>
            <body>
                Heló világ!
            </body>
        </html>
        ```
    === "Eredmény"
        <div class="iframe-container">
            <iframe src="https://gergoradeczki.github.io/iframe/02_majdnem_teljes.html"></iframe>
        </div>
    === "Eredmény (kép)"
        ![weboldal](https://i.imgur.com/gsBC8RX.png "Weboldal címmel és szöveggel")

Ahogyan látható, sok minden egyébbel fel lett töltve a HTML fájl. Kezdjük mindjárt a legelejéről:

-  `<head>`: Ez képezi a weboldalunknak a _"fejét"_. Amit itt megadunk a `<title>` elemen kívül, nem lesz sehol sem látható a weboldalunkon _(oké, ez egy kicsi sarkítás, pontosítani majd később fogjuk)_. Ebben a részben lesz lehetőségünk különböző keresőrobotoknak _(pl. Google, Bing stb.)_ megadnunk a weboldalunk címét, illetve leírását. Emellett a weboldalunk ikonját is itt adhatjuk meg és ha külön fájlokkal dolgozunk, akkor azokat általában itt szoktuk importálni is.

-  `<title>`: A böngésző tabjának a tetején az ilyen elemek közt megadott rész fog megjelenni. Érdemes odafigyelni arra, hogy célravezető és rövid legyen, mert a böngészők tetején a címnek véges helye van, illetve keresőkben ez jelenik meg a találat címeként is.

-  `<body>`: Ez a weboldalunk _"teste"_. Ez az, amit az átlag felhasználó látni fog. Itt készíthetjük el a weboldalnak a tetejét _(header)_, az alját _(footer)_ a fő részét _(main)_, egyszóval: mindent.

### Ami feltűnhetett...

Beljebb van kezdve a _"Heló világ!"_ szöveg a kódban, de a böngészőben mégis teljesen bal oldalt van, elhagyva a tabulátorokat. Ez azért van, mert a böngészők nem teljesen azt csinálják, amit szeretnénk, hogy csináljanak. Ha elhagyjuk a HTML kódunk első sorát, illetve a `</body>` és a `</html>` záró elemeket, akkor még így is _"helyesen"_ fog megjelenni a weboldalunk. Ezt felfoghatjuk egyfajta kényelmi funkcióként is _(de nem ajánlott)_.

!!! warning "Érdemes megjegyezni"
    A böngészők fel vannak készülve arra, hogy hibásan megformázott kódot kaphatnak. Annak érdekében, hogy helyesen jelenjen meg a tartalom, a böngészők kitörlik a felesleges szóközöket, tabulátorokat és újsorokat, illetve lezárják a le nem zárt elemeket mielőtt megjelenítenék a kért tartalmat.

!!! note ""


### Formázási _"szabályok"_

!!! note "Megjegyzés"
    A kód olvashatóságának kedvéért _(meg mert kb. mindenki így csinálja)_, egy HTML oldalon minél több elemen belül vagyunk, annál több tabulátorral _(vagy szóközzel)_ toljuk beljebb a tartalmat. Azaz a `<html>` van legkívül, ezt követi a `<head>` és  `<body>` eggyel beljebb tolva, majd a `<body>`-n belül található _"Heló világ!"_ szöveg 2-vel beljebb identálva.

!!! warning "Erre figyelj"
    Itt van viszont egy fontos szabály: minden HTML elemet, aminek létezik záró tagja _(azaz `<>` és `</>` párban vannak)_ le kell zárni. Aminek meg nem létezik ilyen azt `<img />` hasonló formában _"kell"_ megadni.

!!! note "Megjegyzés"
    Viszont, ez is kvázi csak egy íratlan szabály, a modern böngészők bezárják neked a be nem zárt elemeket, habár nem biztos, hogy a neked megfelelő helyen fogják ezt megtenni. De az igazsághoz hozzá tartozik, hogy a záróelem nélküli tagek bezárásától általában el lehet tekinteni.

### Még több HTML

Ahogy az várható volt, még nagyon nem vagyunk készen a HTML elemek megismerésével. Rengeteg van, szóval most csak a leglényegesebbeket fogom felsorolni, amiket használni is fogunk majd:

-  `<p>`: paragrafus, bekezdés, mintha Wordben ENTER-t nyomnál
-  `<h1>`, `<h2>` ... _(egészen 6-ig)_: címsorok. Az első van a legjobban kiemelve, a 6. a legkevésbé.
-  `<div>`: ezzel oszthatjuk fel több egységre a weboldalunkat.
-  `<span>`: hasonló mint a `<div>`, csak ezzel szövegen belül osztunk fel részeket.
-  `<a href="http://valami.hu">`: linkek megadása
-  `<img src="logo.png" alt="logo" />`: képek megadása, nincs záró eleme
-  `<br />`: sortörés, mintha Wordben SHIFT+ENTER-t nyomnál, nincs záró eleme
-  `<pre>`: előre megformázott szöveget jelenít meg. Értsd: <pre>"H   a    ilyen   a     szöveg,
     akkor	így 
     
     jelenik meg"</pre> _(A `<pre>` elem ">" részétől kezdve, az általad megadott formában jeleníti meg a szöveget, a böngésző nem kezdi el kijavítani)_

És amikkel a tartalmi részt különítjük el, megkönnyítve a munkát azoknak, akik pl. PDF-et szeretnének csinálni a weboldalból, ki szeretnék nyomtatni azt stb.:

-  `<header>`: a weboldalunk teteje _"fejléce"_, általában itt taláhatóak meg a legfontosabb linkek
-  `<nav>`: a weboldalnak a navigációs része _(pl. tartalomjegyzék)_, a fejlécen belül is elhelyezkedhet
-  `<main>` a weboldal fő része, itt helyezkedik el a tartalmunk
-  `<article>`: pl. a jelen cikk, amit olvasol, ebben az elemben helyezkedik el
-  `<footer>`: a weboldal alja, ebben található meg, hogy ki készítette, ki üzemelteti az adott weboldalt, illetve a jogi cuccok.

Lehet egy kicsit sok volt ez elsőre, de ez egy tanulási folyamatnak a kezdete. 

!!! note "Megjegyzés"
    A `<p>`-től `<img />`-ig látható elemekket használjuk a leggyakrabban. A `<br />` és a `<pre>` elemeket jó, hogyha nem felejtük el, hogy léteznek. A többi elemet HTML dokumentumonként egyszer fogjuk használni _(már ha helyes kódot szeretnénk írni)_.

### Akkor egy kezdetleges weboldal struktúrája:

!!! example ""
    === "index.html"
        ``` html
        <!DOCTYPE HTML>
        <html>
            <head>
                <title>Első weboldalam!</title>
            </head>
            <body>
                <header>
                    <img src="#" alt="logo" />
                    <nav>
                        <a>Link #1</a>
                        <a>Link #2</a>
                    </nav>
                </header>
                <main>
                    <article>
                        <h1>Életem első weboldala</h1>
                        <a href="https://google.com">Link a google.com-ra</a>
                        <p>
                            Ide jönne valami "Lorem ipsum"-os szöveg, <span style="color: red;">hogy</span> jól nézzen ki.<br /> Ez új sorban kezdődik
                        </p>
        <pre>
        Ha nem itt lent kezdeném írni,
        hanem helyesen identálva lenne a kódban, akkor
        a tabulátorok miatt beljebb kezdődne a kód
                                    pl. valahogy így.
                            Új sorban kezdődik, pedig nem is használtam a sortörés elemet.
                        </pre>
                    </article>
                    <div>
                        <p>A cikkhez szóló hozzászólásoknak hely</p>
                    </div>
                </main>
                <footer>
                    <p>Valami jogi szövegnek hely</p>
                </footer>
            </body>
        </html>
        ```
    === "Eredmény"
        <div class="iframe-container">
            <iframe src="https://gergoradeczki.github.io/iframe/03_kezdetleges.html"></iframe>
        </div>
    === "Eredmény (Kép)"
        ![weboldal](https://i.imgur.com/O4ln1qC.png "Kész weboldal")

### Az elemekről bővebben: a jellemzők

Nem is kell olyan sokat nézni a fentebbi kódot, illetve az afelett levő HTML elemeknek a listáját, hogy feltűnjön: az `<img>`, az `<a>` _(és a `<span>`)_ kitűnik a többi közül. Ezeket úgy mutattam be, hogy tartalmaznak ilyeneket: `src="..."`, `alt="..."` és `href="..."`. Ezek nem mások mint a HTML elemeknek a jellemzői.

HTML jellemzőből rengeteg van, de szerencsére a nagyrészüket, amiket használni fogunk, szinte az összes elem megkaphatja. Például van egy olyan jellemző, amivel az elem hosszát tudom megadni. Ezt a jellemzőt megkaphatja a `<p>`, az `<a>`, a `<div>`, a `<span>`, a `<header>` stb.

Jellemzőt úgy adunk meg egy elemnek, hogy az elem nevétől egy szóközzel elválasztva leírjuk. Ha a jellemzőnek kell érték is, akkor egy `=""`-el adhatjuk meg ezt utána. Majd újabb szóközzel elválasztva a következő jellemzőt. Erre legyen itt ez a kép:

![html_attribute](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/HTML_elem_szerkezete.svg/1920px-HTML_elem_szerkezete.svg.png "egy HTML elem analízise")

De milyen jellemzők vannak pontosan:

| Jellemző    | Használat                                                                                |
| ----------- | ---------------------------------------------------------------------------------------- |
| `href=""`   | Az `<a>` elemnek ezzel adjuk meg, hova vigyen kattintás után                             |
| `target=""` | Az `<a>` elemre kattintva a jelenlegiben, új tabban, vagy új ablakban nyiljon meg a link |
| `src=""`    | Az `<img>` elem ezáltal tudja, hogy melyik képet kell megjelenítenie                     |
| `alt=""`    | Ha a kép nem elérhető , akkor helyette ez a szöveg fog megjelenni                        |
| `width=""`  | Az elem vízszintes hosszát lehet megadni _(pixelben mérve)_                              |
| `height=""` | Az elem függőleges hosszát lehet megadni _(pixelben mérve)_                              |
| `style=""`  | Ha még specifikusabban szeretnénk szerkeszteni az elemet _(pl. színt megadni)_           |
| `disabled`  | A `<button>`, `<input>` elemeket ezzel lehet letiltani. Ennek nincsen értéke             |

És még van egy csomó...

### Összefoglaló

Ebben a fejezetben megtanultuk, hogy mi is az a HTML, mik azok az elemek, és hogyan lehet őket jellemzőkkel ellátni. Megtanultuk, hogyan érdemes egy kezdetleges HTML weboldalt struktúrában felépíteni, és egy kicsit kitértünk arra, hogy a modern böngészők hogyan próbálják megkönnyíteni az életünket.

#### Egy kis kvíz

Az alábbi kvízben felmérheted, hogy mennyi minden maradt meg abból, amit fentebb olvashattál:

/* Valami iframe-es Google kérdőív fog ide kerülni */

#### Hasznos linkek a továbbtanuláshoz

## CSS

Ahogy az eddig látható volt, nem valami szép a kezdetleges weboldalunk. Ennek a problémának a megoldására fogjuk használni a webfejlesztés 2. szereplőjét, a CSS-t _(Cascading Style Sheets)_.

Először is, szögezzük le azt, hogy nem kötelező új fájlban dolgoznunk. HTML-ben alapból támogatva van, hogy már a fájlon belül CSS kódot írjunk. Ehhez használhatjuk a `<head>` részben megadható `<style>` és `</style>` elemek közötti részt is, illetve az elemeknek megadható `style="..."` jellemzőt is.

Másodszor, életünk első CSS kódját már megírtuk. Nézzünk vissza a kezdetleges weboldal `<span style="color: red;">` elemére.

### Ahol minden folytatódik: style.css

Ha most elkezdenénk bármit is írni a `style.css` fájlba, semmi se változna a weboldalunkon. Ez azért van, mert még nem lettek összekötve _(linkelve)_.

Egy link kialakításához menjünk el az `index.html`-nek a `<head>` részébe, és adjuk meg az alábbi elemet (pl. a `<title>` alatt):

``` HTML
<link rel="stylesheet" type="text/css" href="./style.css">
```

A `rel="stylesheet"`-tel mondjuk meg, hogy a linkelni kívánt fájl és a jelenlegi fájl közt milyen kapcsolat áll fent _(ami jelen esetben a "stíluslapunk")_, kötelező megadni. `type="text/css"`-sel mondjuk meg azt, hogy még véletlenül se sima szövegként kezelje. `href="./style.css"`-sel meg rámutatunk a fájlunk helyére.

#### Bővítsük ki a HTML-es tudásunkat

Mielőtt tovább mehetnénk, fontos megemlíteni két különlegesen hasznos HTML jellemzőt:

| Jellemző   | Használat                                                                                  |
| --------   | ------------------------------------------------------------------------------------------ |
| `id=""`    | Minden elem kaphat id-t, de a tartalma sosem egyezhet meg másik elem id-jának tartalmával. |
| `class=""` | Szóközökkel elválasztva felsorolhatjuk benne, hogy milyen osztályokhoz tartozik az elemünk |

Ezek a jellemzők nagyban megkönnyíthetik a dolgunkat, amikor majd meg kell találnunk bizonyos elemeket.

#### Hierarchia

Ha emlékeztek még, akkor a HTML-es részben volt szó a helyes identálásról. Nos, ezzel szeretném kapcsolatba hozni a hierarchiát. Legkívül helyezkedett el a `<html>` elemünk, azon belül a `<head>` és a `<body>`. Ezt más szóval úgy is mondhatnánk, hogy a `<head>` és a `<body>` a `<html>`-nek a közvetlen leszármazottjai. A `<body>` közvetlen leszármazottjai a `<header>`, `<main>` és `<footer>`. Ez a három elem viszont a `<html>`-nek a nemközvetlen leszármazottjai és így tovább.

!!! warning "Fontos megjegyezni"
    Bármi, ami a HTML dokumentumban az adott elemhez képest egyel beljebb van identálva, az az adott elem közvetlen leszármazottja. Ami 1-nél többel van beljebb, az az adott elem nem közvetlen leszármazottja. Ezért is fontos a helyes identálás.

### Kezdjünk el megtalálni dolgokat

Amikor CSS-sel elkezdünk valamit formázni, először meg kell adnunk, hogy mely elemeket szeretnénk. Ennek a legegyszerűbb formája a régebbről ismert `style=""` jellemző volt. Annyire egyszerű, hogy meg se kellett adni, melyik elemet akarjuk, az nyílvánvalóan kiderült. Ezt viszont minden egyes elemmel el kéne játszanunk, az meg egy komplexebb weboldallal inkább nem csinálnám meg, ahol több száz, ha nem ezer elem is lehet egyetlen egy oldalon.
Ennek a problémának az áthidalására fogjuk használni a CSS Selectors _(kijelölők)_.

Legfontosabbak:

| Selector         | Használat                                                                                                               |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------- |
| *                | Minden elemet kijelöl. Pl. `*`                                                                                          |
| elem             | Az itt megadott nevű minden elemre teljesülni fog a formázás. Pl. `p`                                                   |
| .class           | A `class` jellemzőben megadott szóval helyettesítve az összes ilyen elemre teljesülni fognak a megadottak Pl. `.linkek` |
| #id              | Az `id` jellemzőben megadott szóval helyettesítve fog teljesülni a megadott formázás. Pl. `#bejelentkezes_link`         |
| elem1 elem2      | Az elem1 össze elem2 leszármazottjára telesülni fognak a megadott formázások. Pl `article h1`                           |
| elem1, elem2     | Minden elem1 és elem2 elemekre teljesülni fognak a formázások _(nem számít a hierarchia)_. Pl. `h1, p`                  |
| elem1 > elem2    | Az elem1 közvetlen elem2 leszármazottjára telesülni fognak a megadott formázások. Pl `article > div`                    |
| elem:first-child | Az elem első közvetlen leszármazottjára fog csak teljesülni a formázás. Pl. `.linkek:first-child`                       |
| elem:nth-child() | Az elem n. közvetlen leszármazottjaira fog csak teljesülni a formázás. Pl. `.linkek:nth-child(even)`                    |
| elem:last-child  | Az elem utlsó közvetlen leszármazottjára fog csak teljesülni a formázás. Pl. `.linkek:last-child`                       |

Ne érjen senkit se újdonságként: ez a lista se teljes. Még vagy 3-szor ennyi selectort is lehetett volna írni. Az első 4-et kötelező ismerni, ezeknél nélkül nem lehet tovább haladni, ezek kvázi az építőelemeink. A következő 3-mat felfoghatjuk úgy is, mint az első 4-en végezhető műveletek. Az utolsó 3-mat nem annyira gyakran, de használni fogjuk.

### Margók és kitöltés

Legegyszerűbben úgy érthetjük meg a különbséget a margó _(margin)_ és a kitöltés _(padding)_ között, hogy elképzelünk sok kis gombot. Kezdetben a gombok szorosan egymáshoz közel helyezkednek el, hézag nélkül. El lehet képzelni, hogy kattintáskor egy pixelhiba is végzetes lehet ilyen kicsi gombok esetén. Jó lenne ha lenne egy kis űr köztük. Erre használhatjuk a margókat. Egy Full HD kijelzőn 50 pixel egész nagy távolságnak számít, szóval balra, jobbra, fentre és lentre beállítunk egy 50 pixeles margót minden egyes gombnak. Így összesen 100 pixelre helyezkedik el egy gomb a másiktól és még véletlenül se fogunk tudni mellákattintani.

Első probléma meg is lett oldva, de a gombok még mindig aprók, így nem pixelhiba miatt másikra kattintunk, hanem a gombok közti résre. Ennek a problémának a megoldását fogja képezni a kitöltés _(padding)_. Egy jól kattintható gomb egy Full HD kijelzőn olyan 100 pixel hosszú, 50 pixel magas. Szóval be is állítjuk a gomboknak 50 pixel jobbra és balra, illetve 25 pixelt föntre és lentre, így összesen 100x50 pixeles méretűek lettek és megszűnt a második problémánk is.

### Majd jött a szegély

Egy probléma maradt ki: ha a gomb fehér és a weboldal háttere is fehér, akkor nem lehet megkülönböztetni a kettőt egymástól. Erre a problémára megoldásként ~~átszínezzük a gombot~~ adunk neki egy szolid 5px vastag fekete szegélyt _(border)_ balra, jobbra, föntre és lentre, amivel már az átlag felhasználó is látni fogja a gombjainkat és meg fogja tudni különböztetni a weboldal hátterét tőlük.

![margin_padding_border](https://docs.microsoft.com/en-us/windows/uwp/design/layout/images/xaml-layout-margins-padding.svg "Különbség a margó, kitöltés és szegély közt")

### Akkor már írhatunk is valamit

Ahány böngészó motor van, annyian máshogy értelmezik, hogy minek mekkora margó kell és mennyire legyen kitöltve az elem. Ennek az egyik legszebb megoldása a következő CSS kód lesz, amivel érdemes kezdeni a CSS-es pályafutásunkat:

``` css
* {
    margin: 0;
    padding: 0;
}
```

A fentebb táblázatból kikeresve, a `*`-gal kijelöljük az összes elemet a HTML dokumentumunkban, majd a kapcsos zárójelek közt megmondjuk, hogy márpedig minket nem érdekel, hogy a margin és a padding a böngésző szerint mekkorának kéne alapból lennie, ezt felülírjuk egy 0-val, azaz ne legyen semmi ilyesmi. Majd mi később a nekünk szükséges elemeknek megadjuk mi mennyi legyen.

### Célunk a weboldal kinézetével

Egy végtelenül egyszerű, cikkek megjelenítésére alkalmas weboldalnak a kinézetét fogjuk megírni. Ha elég széles a képernyőnk, akkor a cikkünk a weboldal közepére megy, ha meg nem, akkor a teljes szélességet kitöltve fog megjelenni. Emellett a header és a footer mindig teljes szélességet fog kitölteni.

### Kezdetleges weboldal 0.0.1

!!! example ""
    === "style.css"
        ``` css
        * {
            margin: 0;
            padding: 0;
        }
        ```
    === "index.html"
        ``` html
        <!DOCTYPE HTML>
        <html>
            <head>
                <title>Első weboldalam!</title>
                <link rel="stylesheet" type="text/css" href="./style.css">
            </head>
            <body>
                <header>
                    <img src="#" alt="logo" />
                    <nav>
                        <a>Link #1</a>
                        <a>Link #2</a>
                    </nav>
                </header>
                <main>
                    <article>
                        <h1>Életem első weboldala</h1>
                        <a href="https://google.com">Link a google.com-ra</a>
                        <p>
                            Ide jönne valami "Lorem ipsum"-os szöveg, <span style="color: red;">hogy</span> jól nézzen ki.<br /> Ez új sorban kezdődik
                        </p>
        <pre>
        Ha nem itt lent kezdeném írni,
        hanem helyesen identálva lenne a kódban, akkor
        a tabulátorok miatt beljebb kezdődne a kód
                                    pl. valahogy így.
                            Új sorban kezdődik, pedig nem is használtam a sortörés elemet.
                        </pre>
                    </article>
                    <div>
                        <p>A cikkhez szóló hozzászólásoknak hely</p>
                    </div>
                </main>
                <footer>
                    <p>Valami jogi szövegnek hely</p>
                </footer>
            </body>
        </html>
        ```
    === "Eredmény"
        <div class="iframe-container">
        </div>

### Kezdetleges weboldal 0.0.2

Adjunk háttérszínt a különböző elemeinknek, hogy jobban lássuk mivel dolgozunk

``` css
body {
    background-color: #eeeeee;
}
header {
    background-color: lightblue;
}
main {
    background-color: white;
}
footer {
    background-color: darkblue;
}
```

### Kezdetleges weboldal 0.0.3

Az első lépesünkkel, miszerint 0-ra állítottuk a paddingot és a margint, állítsuk vissza a `<p>` és `<h1>` elemekre. Illetve, adjunk kitöltést az `<article>`-nek.

``` css
article {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 5px;
}
article h1 {
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 5px;
    margin-right: 5px;
}
article p {
    margin-top: 30px;
    margin-bottom: 10px;
    margin-left: 5px;
    margin-right: 5px;
}
```

És csináljunk egy _"profi játékos lépést"_, `flex`-szel oldjuk meg, hogy a logó bal oldalt legyen, a linkjeink meg jobb oldalt. Illetve, az unalmas jogi szöveget helyezzük középre a `<footer>`-ben. Ebben a tutorialban nem tervezem kifejteni, hogy mi az a flex és miért pont azt használjuk itt. Ezt majd egy másik tutorialban fogom kifejteni. Most érjük be annyival, hogy működik

``` css
header {
    display: flex;
    justify-content: space-between;
}
footer {
    text-align: center;
}
```

## JS

### Ahol minden lezárul: script.js