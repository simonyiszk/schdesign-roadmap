# 4. Hova tovább

## Reszponzivitás

### Miért

Nem mindenkinek van ugyan olyan paraméterű kijelzője mint nekünk. Ami nálunk jól néz ki, még nem biztos, hogy másnál is jól fog kinézni. Ami nálunk olvasható, másnál lehet olvashatatlan. Stb.

### 1. Megoldás

Írjuk újra a HTML dokumentum megjelenését, de most figyeljünk arra, hogy egy másik eszközön jelenjen meg jól.

Ezt a megoldást választották egy páran, amikor elkezdett teret nyerni magának a mobilos böngészés. Például: asztalon a `facebook.com` jön be, míg mobilon az `m.facebook.com`.

Az egyik probléma ezzel a megoldással az, hogy ha mobilról akarunk linket megosztani, akkor `m.` kezdetű lesz, szóval PC-n a mobilos kinézetet fogjuk megkapni.

A másik, hogy kétszer dolgozunk, két külön projektet kell vezetni.

### 2. megoldás

Írjuk meg egyszer, de már előre teszteljük több kijelzőn, így csak egy kódbázissal kell foglalkozni.

Mi most a `2. megoldást` fogjuk választani.

### Hogyan kezdjük el

#### HTML

Ha most megnéznénk a készülő weboldalt mobilről, akkor látható hogy nagyon apró minden. Ez azért van, mert a metaadatok közt nem mondtuk meg a böngészőnek, hogy mit kezdjen kis kijelzőkkel.

Pótoljuk ezt a hiányosságot. Adjuk hozzá az alábbit a `<head>`-hez:

``` html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Ezel most több mindent a böngésző tudtára adunk. Beállítottuk, hogy a weboldalnak a

- szélessége kövesse az eszköznek a szélességét
- kezdeti nagyítása 1 legyen *(azaz ne legyen se kicsinyítve, se nagyítva)*.

Az első rész, ami miatt olvasható méretű lesz minden a weboldalon.

Most viszont feltűnhet, hogy nem csak függőlegesen, hanem vízszintesen is van tartalom. Felhasználói szempontból ez nem szerencsés, javítsuk is ezt a CSS fájlokban.

#### CSS

`layout.css`

Először javítsuk ki azt, hogy a `<footer>` mindig a weboldal alján legyen, akár van elég tartalom, akár nem. Ezt azzal fogjuk elérni, hogy a `<body>`-nak minimális magasságot fogunk beállítani, így abban szabadon fogunk tudni vertikálisan elemeket elhelyezni a `flex` megjelenítésnek köszönhetően.

``` css
body {
    min-height: 100vh; /* Minimum 100% vertikális hosszú legyen */
    margin: 0;
    display: flex;
    justify-content: space-between; /* Toljuk szét egyenlő távolságra a 3 elemet */
    flex-direction: column;
}
```

Most oldjuk meg, hogy a `<main>` ne fix 960px széles legyen. Ehhez azt használjuk fel, hogy áttérünk egy maximális szélességre, azaz a szélesség dinamikusan fog tudni változni.

``` css
main {
    margin: 20px;
    padding: 20px;
    /* width: 960px; */
    /* Magyarázat: "lehetsz akár mekkora, de csak 960px-ig nyúlhatsz" */
    max-width: 960px;
    align-self: center;
}
```

Az `<img>`-nek ezt adtuk meg: `max-width: 100%;`. Itt nem konkrétan megmondtunk egy pixel számot, hanem hogy a konténernek *(amiben benne van)* a 100%-os szélességéig nyúlhat. Azaz, ha változik a konténer szélessége *(pl. átméretezzük az ablakot)*, akkor ahhoz fog viszonyulni.



`responsive.css`

Hozzuk létre ezt a fájl a gyökérmappában és linkeljük a HTML dokumentumhoz utolsóként.

``` html
<link rel="stylesheet" href="responsive.css">
```

Majd töltsük fel ezzel:

``` css
/* Csak akkor fog az ebben leírtak alkalmazódni, ha 960px-nél keskenyebb a kijelző */
@media only screen and (max-width: 959px) {
    main {
        border-radius: 0;
        border: none;
        margin: 20px 0 20px 0;
    }
}
```

Szóval, mobilon megszűntetjük a `<main>`-nek a bal és jobb oldali margóját, illetve kitöröljük a szélét. Így jobban fog mobilon kinézni.

Ezt a `@media only screen and (max-width: 959px)` próbáljuk meg úgy felfogni, mint egy `if (...)`-et. Azért linkeltük utoljára, mert különben a `style.css` felülírná az itteni változtatásokat. És a legjobb, hogy ha megváltozik a kijelző szélessége, akkor a böngésző újra ellenőrzi, hogy a benne leírtaknak teljesülniük kéne-e még.

Egy probléma maradt még: ha nincs elég tartalom, akkor most minimális méretű lesz a `<main>`. Most tekintsünk ennek a megoldásától, feltételezzük, hogy lesz elég tartalom, ami miatt max. 960px szélességig szét tud nyúlni.

## Összegzés

### Végleges kód (most már tényleg)

!!! example ""
    === "index.html"
        ``` html
        <!DOCTYPE HTML>
        <html>
            <head>
                <meta charset="UTF-8">
                <link rel="icon" href="logo.svg">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="layout.css"> 
                <link rel="stylesheet" href="style.css"> 
                <link rel="stylesheet" href="responsive.css">
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
        }
        .sticky {
            position: fixed;
            top: 0;
            width: 100%;
        }
        ```
    === "responsive.css"
        ``` css
        @media only screen and (max-width: 959px) {
            main {
                border-radius: 0;
                border: none;
                margin: 20px 0 20px 0;
            }
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
        <iframe style="width: 100%; height: 500px;" src="https://gergoradeczki.github.io/tutorials/step-by-step/04_hova-tovabb/index.html"></iframe>

## Hostoljuk a weboldalt.

A GitHubnak van egy GitHub Pages nevű szolgáltatása. Ebben statikus, vagy kliens oldalon generálódó weboldalakat tudunk létrehozni.

### GitHub

1. Készítsünk egy üres GitHub repositoryt, aminek a neve legyen `{github-felhasznalo-nevunk}.github.io`.
2. Navigáljunk el az imént létrehozott repo beállításaihoz *(Options)*.
3. Görgessünk le addig, ameddig nem látjuk a *GitHub Pages* címt.
4. Állítsuk be, legyen a *master* (vagy *main*) branch-ként kiválasztva.
5. Mappának állítsuk be a `/ (root)`-ot.

Most ha a jelenlegi gyökérmappánk tartalmát feltöltjük ennek a reponak a gyökerébe, akkor a https://github-felhasznalo-nev.github.io/ oldalon be fog töltődni az általunk létrehozott `index.html` fájl és tartalma.

## TODO az írónak

- kódokhoz előnézet `<iframe>`-mel
- kódokhoz előnézet képpel
- kvíz a részek végén
- több ábra
- helyesírási hibák javítása
- github leírás kiegészítése
- teljes összegzés

## Kvíz a tanultakhoz

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf8EOASO07GUcbwNbhIqYmDN7FfAc7YPbGU3WGA-iIDeP2QZQ/viewform?embedded=true" width="640" height="610" frameborder="0" marginheight="0" marginwidth="0">Betöltés…</iframe>